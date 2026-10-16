import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Globe from './Globe.jsx';
import './style.css';

function Arrow() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>; }
function App() {
  const [paused, setPaused] = useState(false);
  return <main>
    <header className="header"><a className="wordmark" href="#" aria-label="expla home">expla<span><Arrow/></span></a><a className="contact" href="mailto:hello@expla.com">Let’s talk <span><Arrow/></span></a></header>
    <section className="hero" aria-labelledby="hero-title">
      <div className="intro"><div className="eyebrow"><i/> INDEPENDENT THINKING. GLOBAL IMPACT.</div><h1 id="hero-title">A world of<br/><span>possibilities.</span></h1><p>Different perspectives. Shared ambition.<br/>We connect ideas, people, and opportunities<br className="desktop-break"/> to move the world forward.</p><a className="cta" href="mailto:hello@expla.com">Make your next move <span><Arrow/></span></a><div className="intro-note"><span>01 /</span> A NEW PERSPECTIVE STARTS HERE</div></div>
      <div className="globe-stage"><div className="orbit-label"><i/> CONNECTED BY POSSIBILITY</div><Globe paused={paused}/><div className="globe-tools"><span><b>↔</b> DRAG TO EXPLORE</span><button onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused ? 'Resume rotation' : 'Pause rotation'}</button></div></div>
    </section>
    <footer><span>BIG IDEAS DON’T HAVE BORDERS.</span><span className="footer-end"><i/> ALWAYS LOOKING AHEAD <span className="arrow"><Arrow/></span></span></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<App/>);
