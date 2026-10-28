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
  assert(result.early.yellow > 0, 'yellow centre and ring are visible');
  assert(result.expanded.width > result.early.width + 5, 'ring visibly expands in screen pixels');
  assert(result.expanded.width >= 20 && result.expanded.width <= 32, 'desktop ring has the requested diameter');
  assert(Math.abs(result.expanded.width-result.expanded.height) <= 1, 'ring is circular, not flattened by sphere rotation');
  assert.equal(result.back.yellow, 0, 'the same marker is invisible on the back');
  assert.equal(result.faded.yellow, 0, 'ring fades to full transparency');
  assert(result.limb.yellow > 0 && result.limb.outside === 0, 'limb pulse remains clipped inside the sphere silhouette');
  assert.deepEqual(result.staticA, result.staticB, 'reduced motion keeps static yellow dots');
  for (const sample of result.budget) {
    assert.equal(sample.visited, 22, 'every country eventually pulses while the globe rotates');
    assert(sample.maximum <= (sample.mobile ? 2 : 4), 'pulse scheduler stays within the mobile/desktop budget');
    assert.equal(sample.diameter, sample.mobile ? 22 : 28);
  }
  console.log('PASS: all 22 geographic locations, yellow expanding circular radar rings, full fade, backside/silhouette clipping, staggered budgets and reduced motion.', result);

} finally { await browser.close(); }
