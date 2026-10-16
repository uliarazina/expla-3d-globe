import React from 'react';
import { createRoot } from 'react-dom/client';
import Globe from './components/Globe.jsx';
import './style.css';

// Preview-only instrumentation; no globals or demo controls inside the component.
const onFrame = sample => {
  window.__globeFrame = sample;
  window.__globeSamples?.push(sample);
};
createRoot(document.getElementById('root')).render(
  <main className="preview" aria-label="Globe integration preview">
    <Globe onFrame={onFrame}/>
  </main>,
);
