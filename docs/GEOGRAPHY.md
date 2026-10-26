# Ukraine geometry correction

The shipped country dataset derives from Natural Earth 1:10m Admin-0 via `datasets/geo-countries`, under the public-domain/PDDL terms described in the README. That source uses a de facto assignment of the Crimean peninsula within its RUS MultiPolygon. Filtering the entire RUS feature previously removed Crimea along with Russia.

The Ukraine feature is now the geometric union of the source's UKR feature and the source's Crimean peninsula polygon, preserving the full Ukraine outline including Crimea and Sevastopol, as requested. The union removes their shared internal boundary and is simplified by 0.008 degrees with topology preservation. Islands remain separate polygon parts. No Russia or Belarus feature is restored. The color and relief atlases both use this same corrected feature; the sphere beneath is still continuous.

Source downloaded 2026-10-26:
https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson

SHA-256 of the complete source download:
`392a03db8aa3ba82c105852655620129b11182b95dfc34ef046827ea7d0e5b8c`

In that snapshot, the peninsula is the sole RUS polygon with bounds approximately `(32.481619, 44.381049, 36.638357, 46.218106)`. It was merged with UKR using Shapely's `unary_union` and topology-preserving simplification. Shapely is a one-time data-preparation tool, not an application dependency. The resulting GeoJSON is committed and requires no data processing at installation or runtime. Other country features are unchanged.

`npm run test:geography` tests geographic containment of Kyiv, Simferopol, Sevastopol, Kerch, Donetsk, and Luhansk; exclusion of Moscow and Minsk from Ukraine; absence of RUS/BLR features; and valid spherical winding. It also generates `previews/ukraine-boundary.svg` using the same feature, allowing a direct shape review independent of globe lighting.
