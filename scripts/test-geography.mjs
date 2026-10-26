import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { geoArea, geoContains, geoMercator, geoPath } from 'd3-geo';
const data = JSON.parse(readFileSync('public/data/countries.geojson', 'utf8'));
assert(data.features.every(f => !['RUS', 'BLR'].includes(f.properties.iso_a3)));
const ukraine = data.features.find(f => f.properties.iso_a3 === 'UKR');
const polygons = ukraine.geometry.type === 'Polygon' ? [ukraine.geometry.coordinates] : ukraine.geometry.coordinates;
for (const polygon of polygons) polygon.forEach((ring, index) => {
  const area = geoArea({ type: 'Polygon', coordinates: [ring] });
  if ((index === 0 && area > 2 * Math.PI) || (index > 0 && area < 2 * Math.PI)) ring.reverse();
});
for (const [name, point] of Object.entries({ Kyiv: [30.523, 50.45], Simferopol: [34.10, 44.95], Sevastopol: [33.52, 44.60], Kerch: [36.47, 45.36], Donetsk: [37.80, 48.00], Luhansk: [39.30, 48.57] })) {
  assert(geoContains(ukraine, point), `${name} belongs to the rendered Ukraine feature`);
}
assert(!geoContains(ukraine, [37.62, 55.75]));
assert(!geoContains(ukraine, [27.56, 53.90]));
assert(geoArea(ukraine) < 0.03, 'Ukraine must not be an inverted spherical polygon');
const projection = geoMercator().fitExtent([[20, 20], [780, 510]], ukraine);
const path = geoPath(projection)(ukraine);
writeFileSync('previews/ukraine-boundary.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 530" role="img" aria-label="Ukraine boundary including Crimea"><rect width="800" height="530" fill="#212121"/><path d="${path}" fill="#03FA7F"/></svg>\n`);
console.log('PASS: Ukraine includes Crimea, Sevastopol, Kerch, Donetsk and Luhansk; RUS/BLR are absent; no inverted geometry.');
