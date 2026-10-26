import React, { useEffect, useRef } from 'react';

/** Autonomous rightward loop with a bounded, reversible wheel-controlled pass. */
export default function PartnerStrip({ items, renderItem, label }) {
  const root = useRef(null);
  useEffect(() => {
    const host = root.current;
    const track = host.querySelector('.channel-track');
    const group = host.querySelector('.channel-group');
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame, last = null, offset = 0, groupWidth = 0, maximum = 0;
    let manual = false, position = 0, wheelUntil = 0, visible = true;
    let touchId = null, touchX = 0;
    const draw = () => { track.style.transform = `translate3d(${offset}px,0,0)`; };
    const resize = () => {
      groupWidth = group.getBoundingClientRect().width;
      maximum = Math.max(0, groupWidth - host.clientWidth);
      position = Math.min(position, maximum);
      offset = manual ? -position : -groupWidth;
      draw();
    };
    const tick = time => {
      const delta = last === null ? 0 : Math.min((time - last) / 1000, 0.1);
      last = time;
      if (!document.hidden && visible && !motion.matches && time >= wheelUntil) {
        offset += 22 * delta;
        if (offset >= 0) offset -= groupWidth;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const wheel = event => {
      if (event.ctrlKey || !maximum) return;
      const raw = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!raw) return;
      if (!manual) {
        // A single finite pass, independent of the autonomous loop's current phase.
        manual = true; position = 0;
      }
      const delta = raw * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? host.clientHeight : 1);
      const next = Math.min(maximum, Math.max(0, position + delta));
      wheelUntil = performance.now() + 900;
      // At either boundary, leave the wheel event to the page: no scroll trap.
      if (Math.abs(next - position) < 0.01) return;
      event.preventDefault();
      position = next; offset = -position;
      host.dataset.wheelPosition = String(position);
      host.dataset.wheelMaximum = String(maximum);
      draw();
    };
    const leave = () => { manual = false; };
    const key = event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault(); manual = true;
      position = Math.min(maximum, Math.max(0, position + (event.key === 'ArrowRight' ? 120 : -120)));
      offset = -position; wheelUntil = performance.now() + 900; draw();
    };
    const touchStart = event => {
      if (event.pointerType !== 'touch' || !event.isPrimary) return;
      touchId = event.pointerId; touchX = event.clientX;
      manual = true; position = Math.min(maximum, Math.max(0, -offset));
      host.setPointerCapture(touchId);
    };
    const touchMove = event => {
      if (event.pointerId !== touchId) return;
      position = Math.min(maximum, Math.max(0, position + touchX - event.clientX));
      touchX = event.clientX; offset = -position; wheelUntil = performance.now() + 900; draw();
    };
    const touchEnd = () => { touchId = null; };
    const reset = () => { last = null; };
    const touchEvents = { pointerdown: touchStart, pointermove: touchMove, pointerup: touchEnd, pointercancel: touchEnd };
    for (const [type, handler] of Object.entries(touchEvents)) host.addEventListener(type, handler);
    host.addEventListener('wheel', wheel, { passive: false });
    host.addEventListener('pointerleave', leave); host.addEventListener('keydown', key);
    document.addEventListener('visibilitychange', reset);
    const observer = new ResizeObserver(resize); observer.observe(host); observer.observe(group);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; last = null; }); intersection.observe(host);
    resize(); frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect();
      for (const [type, handler] of Object.entries(touchEvents)) host.removeEventListener(type, handler);
      host.removeEventListener('wheel', wheel); host.removeEventListener('pointerleave', leave);
      host.removeEventListener('keydown', key); document.removeEventListener('visibilitychange', reset);
    };
  }, [items.length]);
  return <div className="channel-strip" ref={root} tabIndex={0} role="region" aria-label={label}>
    <div className="channel-track">{[0, 1].map(group => <div className={`channel-group${group ? ' channel-group--duplicate' : ''}`} key={group} aria-hidden={group ? true : undefined}>
      {items.map((name, index) => <div className="channel" key={name}><span className="channel-number">{String(index + 1).padStart(2, '0')}</span>{renderItem(name)}</div>)}
    </div>)}</div>
  </div>;
}
