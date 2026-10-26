// Offline browser recording: 300 independently rendered frames with exact 30 Hz rAF timestamps.
// This avoids low-rate software-screen-capture artifacts. Real-time FPS is measured by test:smoke.
const { launch, baseURL } = require('./browser.cjs');
const { mkdtempSync, mkdirSync, writeFileSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const { createHash } = require('node:crypto');
const { spawnSync } = require('node:child_process');

(async () => {
  const browser = await launch();
  const directory = mkdtempSync(join(tmpdir(), 'expla-frames-'));
  try {
    const page = await browser.newPage({ viewport: { width: 640, height: 640 }, deviceScaleFactor: 1, reducedMotion: 'no-preference' });
    await page.addInitScript(() => {
      let id = 0;
      const pending = new Map();
      window.requestAnimationFrame = callback => { pending.set(++id, callback); return id; };
      window.cancelAnimationFrame = id => pending.delete(id);
      window.__advanceFrame = timestamp => {
        const callbacks = [...pending.values()]; pending.clear();
        for (const callback of callbacks) callback(timestamp);
      };
    });
    await page.goto(`${baseURL}/?view=globe`);
    await page.waitForSelector('canvas');
    await page.waitForTimeout(500); // Let the resize and intersection observers settle first.
    const hashes = new Set();
    let first, last;
    for (let frame = 0; frame < 300; frame++) {
      const sample = await page.evaluate(timestamp => {
        window.__advanceFrame(timestamp);
        return window.__globeFrame;
      }, frame * 1000 / 30);
      first ??= sample; last = sample;
      const buffer = await page.screenshot({ path: join(directory, `${String(frame).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 95 });
      hashes.add(createHash('sha256').update(buffer).digest('hex'));
      if ((frame + 1) % 60 === 0) console.log(`Rendered ${frame + 1}/300 browser frames`);
    }
    if (hashes.size !== 300) throw new Error(`Only ${hashes.size}/300 frames are distinct`);
    const period = 2 * Math.PI * ((last.timestamp - first.timestamp) / 1000) / (last.rotation - first.rotation);
    if (Math.abs(period - 20) > 0.001) throw new Error(`Unexpected recording period: ${period}`);
    mkdirSync('previews', { recursive: true });
    const result = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-framerate', '30', '-i', join(directory, '%04d.jpg'), '-frames:v', '300', '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', 'previews/expla-globe-30fps.mp4'], { stdio: 'inherit' });
    if (result.status !== 0) throw new Error('ffmpeg encoding failed; ffmpeg must be installed');
    writeFileSync('previews/recording.json', JSON.stringify({
      file: 'expla-globe-30fps.mp4', durationSeconds: 10, fps: 30, frames: 300,
      uniqueBrowserFrames: hashes.size, width: 640, height: 640,
      rotationPeriodSeconds: period,
      method: 'Actual Chromium WebGL frames rendered offline with exact 30 Hz requestAnimationFrame timestamps. No interpolation or duplicated frames. This is not a real-time FPS benchmark.',
    }, null, 2) + '\n');
    console.log('Saved previews/expla-globe-30fps.mp4 (10 seconds, 300 distinct browser frames).');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
