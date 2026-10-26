import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Globe from './components/Globe.jsx';
import './style.css';

const onFrame = sample => {
  window.__globeFrame = sample;
  window.__globeSamples?.push(sample);
};
const globeOnly = new URLSearchParams(window.location.search).get('view') === 'globe';
createRoot(document.getElementById('root')).render(globeOnly
  ? <main className="standalone-preview" aria-label="Globe integration preview"><Globe dataUrl={`${import.meta.env.BASE_URL}data/countries.geojson`} onFrame={onFrame}/></main>
  : <App/>);
