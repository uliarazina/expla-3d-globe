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

## Current motion and interactions

The globe ring is a static 80% illustration. Only the eight-of-ten cubes animate on the reach section's first viewport entry, with staggered bottom-to-top fills. Reduced-motion users see the final cube state immediately.

Holding the primary pointer pauses globe auto-rotation. Horizontal manual turning still works; release, cancellation, or loss of window focus resumes rotation with a fresh timestamp baseline, avoiding catch-up jumps. Vertical gestures do not tilt the globe.

The nine-channel strip now includes X, SEO, and Affiliate Network from the supplied design text. It moves right continuously, including on hover. A non-passive wheel handler takes over for forward/backward browsing. At the first or last item it leaves further wheel events to the page, allowing scroll to the footer without a trap. Arrow keys and horizontal touch dragging also browse the strip. Automatic motion is disabled under reduced motion.

The hero uses a separate one-pass WebGL background: very slow ambient mist, with a damped pointer-driven swirl and stronger local glow on hover. It stops offscreen/in hidden tabs and becomes static under reduced motion. If WebGL is unavailable, the normal dark background remains. It does not block text selection or navigation.

Each expertise card has one stretched native button covering its whole area; keyboard interaction remains native and no nested interactive controls are introduced. Hover/focus scales the card slightly and immediately highlights its details label. Popups include the lead, explanatory paragraphs, and three benefits for each direction from the Ukrainian text pasted by the user; English is a translation. `src/directionDetails.js` owns this copy.

`npm run test:interactions` checks the hero's actual rendered frames, hover response, full-card click, popup benefits, continuous hover autoplay, reversible wheel browsing, footer handoff, and reduced motion. Animation, site, globe, and geographic tests remain separate.

## Original logo and Figma assets

The latest Figma frame `6107:20102` still returns a proxy HTTP 403 in this cloud environment. The pasted file has page copy but no SVG logo, font name/file, or layer settings. The current typographic logo and font remain approximations, explicitly not original Figma assets. An exported SVG logo and the original font are still required; the blocked frame's exact visual popup specification cannot be claimed as verified.
