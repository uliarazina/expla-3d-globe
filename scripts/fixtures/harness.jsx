import React from 'react';
import { createRoot } from 'react-dom/client';
import Globe from '../../src/components/Globe.jsx';
const root = createRoot(document.getElementById('root'));
let props = {};
window.__samples = [];
const onFrame = sample => { window.__samples.push(sample); };
window.renderGlobe = changes => {
  props = { ...props, ...changes };
  root.render(<Globe {...props} onFrame={onFrame}/>);
};
window.unmountGlobe = () => root.render(null);
window.renderGlobe({});
