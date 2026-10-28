import React, { useEffect, useRef } from 'react';

/** A continuous leftward loop. Wheel events remain ordinary page scrolling. */
export default function PartnerStrip({ items, renderItem, label, heading, language = 'uk' }) {
  const root = useRef(null);
  const navigate = useRef(() => {});
  useEffect(() => {
    const host = root.current, track = host.querySelector('.channel-track');
    const group = host.querySelector('.channel-group');
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = null, last = null, offset = 0, groupWidth = 0, pending = 0, visible = true;
    let touchId = null, touchX = 0;
    const draw = () => {
      if (groupWidth > 0) offset = -(((-offset % groupWidth) + groupWidth) % groupWidth);
      track.style.transform = `translate3d(${offset}px,0,0)`;
    };
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(tick); };
    const tick = time => {
      frame = null;
      const delta = last === null ? 0 : Math.min((time - last) / 1000, .1);
      last = time;
      if (visible && !document.hidden) {
        const step = motion.matches ? pending : pending * (1 - Math.exp(-delta * 9));
        pending -= step; offset += step;
        if (!motion.matches && touchId === null) offset -= 42 * delta;
        draw();
      }
      if (!motion.matches || Math.abs(pending) > .1) schedule();
      else last = null;
    };
    navigate.current = direction => { pending += direction * (group.children[0]?.getBoundingClientRect().width || 200); schedule(); };
    const resize = () => { groupWidth = group.getBoundingClientRect().width; draw(); last = null; schedule(); };
    const reset = () => { last = null; schedule(); };
    const key = event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault(); navigate.current(event.key === 'ArrowRight' ? -1 : 1);
    };
    const down = event => {
      if (event.pointerType !== 'touch' || !event.isPrimary) return;
      touchId = event.pointerId; touchX = event.clientX; pending = 0; host.setPointerCapture(touchId);
    };
    const move = event => { if (event.pointerId !== touchId) return; offset += event.clientX - touchX; touchX = event.clientX; draw(); };
    const up = () => { touchId = null; reset(); };
    const events = { keydown: key, pointerdown: down, pointermove: move, pointerup: up, pointercancel: up };
    for (const [name, handler] of Object.entries(events)) host.addEventListener(name, handler);
    document.addEventListener('visibilitychange', reset); motion.addEventListener('change', reset);
    const observer = new ResizeObserver(resize); observer.observe(host); observer.observe(group);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; reset(); }); intersection.observe(host);
    resize();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect(); navigate.current = () => {};
      for (const [name, handler] of Object.entries(events)) host.removeEventListener(name, handler);
      document.removeEventListener('visibilitychange', reset); motion.removeEventListener('change', reset);
    };
  }, [items.length]);
  return <>
    <div className="container channels-heading"><div>{heading}</div><div className="channel-controls">
      <button type="button" aria-label={language === 'uk' ? 'Попередні платформи' : 'Previous platforms'} onClick={() => navigate.current(1)}>‹</button>
      <button type="button" aria-label={language === 'uk' ? 'Наступні платформи' : 'Next platforms'} onClick={() => navigate.current(-1)}>›</button>
    </div></div>
    <div className="channel-strip" ref={root} tabIndex={0} role="region" aria-label={label}>
      <div className="channel-track">{[0, 1].map(group => <div className={`channel-group${group ? ' channel-group--duplicate' : ''}`} key={group} aria-hidden={group ? true : undefined}>
        {items.map((name, index) => <div className="channel" key={name}><span className="channel-number">{String(index + 1).padStart(2, '0')}</span>{renderItem(name)}</div>)}
      </div>)}</div>
    </div>
  </>;
}
