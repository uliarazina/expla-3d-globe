# Full expla website preview

The default route renders the full Ukrainian website from the provided screenshot: header/navigation, hero, four expertise cards, an animated globe with an 80% ring and user statistic, channel strip, and footer. Mobile cards stack, the header switches to a menu, and the channels form a slow rightward marquee. Under reduced motion, the logos stop and can be browsed horizontally. UA/EN updates the page copy and document language.

The source screenshot supplies the headline, statistics, descriptions, and channel names. Additional direction descriptions are editorial preview copy. The logo and channel marks are typographic/SVG approximations; replace these with original brand assets before a production launch. The screenshot-based globe remains a reconstruction; no original GLB model was provided.

## Navigation and contacts

Direction cards open native accessible dialogs. Escape/backdrop/close dismiss them and restore focus. Career and blog entries open local informational dialogs rather than linking to invented pages. Social items open local information windows because account URLs were not supplied. The contact form validates its fields and **copies the inquiry locally**; it does not send email, submit personal data, or claim successful delivery. Replace these destinations with verified company URLs and a real contact endpoint for production.

## Run and validate

```sh
npm ci --cache /tmp/expla-npm-cache
npm run dev -- --port 5173
npm run test:site
npm run test:smoke
npm run build
```

`?view=globe` opens the isolated component preview used by animation measurements and video recording. The reusable component remains under `src/components`; `src/App.jsx` and `src/style.css` are the website layer. The website passes its relative GeoJSON path explicitly, allowing deployment to a subdirectory.

`test:site` exercises dialogs and keyboard/focus behavior, contact validation/copy, localization, mobile navigation, and 320/390/768/1440px layouts. It also captures `previews/expla-website-desktop.png` and `previews/expla-website-mobile.png`. This test can run against a production server through `BASE_URL`.

## Publish to GitHub Pages

```sh
npm run deploy:pages
```

This builds the project and publishes only `dist/` to the **gh-pages** branch, preserving the source branch and its index. Repeated deployments extend that branch's history and use a normal push. No credentials are embedded in files. The Vite base is relative, with no hardcoded deployment domain in the application.

For the first publication, a repository administrator must enable **Settings → Pages → Build and deployment → Deploy from a branch → gh-pages → / (root) → Save**:

https://github.com/uliarazina/expla-3d-globe/settings/pages

Expected public URL once Pages is enabled and GitHub finishes deployment:

https://uliarazina.github.io/expla-3d-globe/

A pushed branch does not prove Pages is enabled or the URL is live. This cloud environment returned HTTP 403 for GitHub's API and public Pages domain, so activation and public availability cannot be verified here. The production build is separately tested under the `/expla-3d-globe/` prefix before publication.

## Motion refinements

The reach section is observed once per page visit. On entry, the ring fills from 0% to 80% over 2.8 seconds, while eight of ten cubes fill from bottom to top with staggered delays; the final two remain gray. Re-entering the viewport does not restart the sequence. Reduced-motion users see the final 80%/8-of-10 state immediately.

The logo strip consists of two identical groups moving right over 42 seconds, so the loop boundary has no content jump. Hovering/focusing pauses it. Reduced motion removes the animation and duplicate visual group. Cards lift 4px and scale 1.012 on hover/focus with a soft shadow; reduced motion removes the transform.

`npm run test:animations` checks the stagger, final ring value, marquee direction/loop groups, hover, and reduced motion. `npm run test:geography` checks Ukraine's inclusion of Crimea and regenerates the country-outline preview. The globe's horizontal-only input is tested by `npm run test:smoke`.

The new Figma links and stape.io could not be opened from this environment (HTTP 403). The pasted text contains page copy but no original logo, font name/file, or design tokens. The existing typographic logo and fallback font are retained until the actual SVG logo and font are supplied; they are not claimed to match Figma.
