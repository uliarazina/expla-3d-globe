import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { geoArea, geoContains } from 'd3-geo';
import { markerLocations, markerPosition } from '../src/components/globeMarkers.js';
import browserTools from './browser.cjs';
const expected = 'AUS GBR CAN USA NZL AUT BEL DEU DNK IRL ITA ISL ISR NLD NOR SVN FIN FRA CZE SWE CHE ESP'.split(' ').sort();
assert.deepEqual(markerLocations.map(x => x[0]).sort(), expected);
const data = JSON.parse(readFileSync('public/data/countries.geojson'));
for (const [iso, lat, lon] of markerLocations) {
  const feature = data.features.find(f => f.properties.iso_a3 === iso);
  assert(feature, iso);
  for (const polygon of feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates) {
    polygon.forEach((ring, i) => { const area = geoArea({ type: 'Polygon', coordinates: [ring] }); if ((i === 0 && area > 2*Math.PI) || (i > 0 && area < 2*Math.PI)) ring.reverse(); });
  }
  assert(geoContains(feature, [lon, lat]), `${iso}: real coordinates lie inside its geographic feature`);
  assert(Math.abs(Math.hypot(...markerPosition(lat, lon)) - 1.001) < 1e-10);
}
const browser = await browserTools.launch();
try {
  const page = await browser.newPage(); await page.goto(browserTools.baseURL);
  const result = await page.evaluate(async () => (await import('/scripts/fixtures/marker-scene.js')).checkMarkerRendering());
  assert(result.parented && result.count === 22);
  assert(result.front > 0, 'front-facing marker produces white pixels');
  assert.equal(result.back, 0, 'the same marker disappears after a half-turn behind the sphere');
  assert.equal(result.faded, 0, 'the marker gently fades completely at its own pulse trough');
  console.log('PASS: all 22 countries, geographic containment, surface attachment, real WebGL front/back occlusion and fade.', result);
} finally { await browser.close(); }
