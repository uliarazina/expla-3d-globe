# Full expla website preview

The default route renders the full Ukrainian website from the provided screenshot: header/navigation, hero, four expertise cards, an animated globe with an 80% ring and user statistic, channel strip, and footer. Mobile cards stack, the header switches to a menu, and the channels form a slow rightward marquee. Under reduced motion, the logos stop and can be browsed horizontally. UA/EN updates the page copy and document language.

The source screenshot supplies the headline, statistics, descriptions, and channel names. Direction descriptions use the user-provided copy and mobile example. The expla logo is the original uploaded SVG; channel marks are still typographic/SVG approximations. The screenshot-based globe remains a reconstruction; no original GLB model was provided.

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

The globe ring is a static, closed green gradient outline without gray inner or backing rings, following the supplied screenshot; it is decorative rather than an 80% progress arc. Only the eight-of-ten cubes animate on the reach section's first viewport entry, with staggered bottom-to-top fills. Reduced-motion users see the final cube state immediately.

Holding the primary pointer pauses globe auto-rotation. Horizontal manual turning still works; release, cancellation, or loss of window focus resumes rotation with a fresh timestamp baseline, avoiding catch-up jumps. Vertical gestures do not tilt the globe.

The nine-channel strip now includes X, SEO, and Affiliate Network from the supplied design text. It moves right continuously, including on hover. A non-passive wheel handler takes over for forward/backward browsing. At the first or last item it leaves further wheel events to the page, allowing scroll to the footer without a trap. Arrow keys and horizontal touch dragging also browse the strip. Automatic motion is disabled under reduced motion.

The hero uses an emerald ribbon background across the full masthead, including navigation and the TOP-100 title, reconstructed from the supplied screenshot. Its one-pass WebGL shader drifts slowly and reacts more strongly to pointer motion. It stops offscreen/in hidden tabs and becomes static under reduced motion. If WebGL is unavailable, the normal dark background remains. It does not block text selection or navigation.

Each expertise card has one stretched native button covering its whole area; keyboard interaction remains native and no nested interactive controls are introduced. Hover/focus scales the card slightly and immediately highlights its details label. Popups include the lead, explanatory paragraphs, and benefits from the Ukrainian text and mobile screenshot supplied by the user; English is a translation. `src/directionDetails.js` owns this copy.

`npm run test:interactions` checks the hero's actual rendered frames, hover response, full-card click, popup benefits, continuous hover autoplay, reversible wheel browsing, footer handoff, and reduced motion. Animation, site, globe, and geographic tests remain separate.

## Original logo and supplied mobile popup

`public/brand/logo.svg` is the original file uploaded by the user, unchanged. It is used by `src/components/Logo.jsx` in the header, footer, and direction popup toolbar. The viewBox is 202×44; CSS scales the image without distortion. Its SHA-256 is `556bc9208eef24fee3571c7c5589bf81f6bfca6a97277eb6ddcb3f15882cfa4e`. No font rendering or reconstructed paths are used for the logo.

`DirectionDialogContent.jsx` follows the attached mobile screenshot: dark toolbar with logo/close control, white direction selector, title and green tags, green article body, and white benefit cards. Social Media Advertising has the four benefits and copy shown in that screenshot. The other directions retain their corresponding supplied copy in the same layout. Mobile uses a full-viewport scrolling dialog; desktop uses a centered dialog with a two-column benefit grid. The selector changes direction in place, preserves focus, and resets the dialog scroll position. Escape/close restore the original opener's focus and page scrolling.

`npm run test:design` verifies the served SVG bytes, logo dimensions, screenshot colors, dropdown switching/focus, long-popup scrolling, close behavior, and 320–1440px responsiveness. It saves `previews/expla-popup-mobile.png` and `previews/expla-popup-desktop.png`.

The current Figma background (`6176:31760`), direction-popup (`6176:31485`), and mobile (`6179:34540`) links still return a proxy HTTP 403 in this cloud environment. The attached screenshot is the verified visual source for the mobile popup. Other inaccessible Figma frames, the updated top-100 background asset, cannot be claimed as verified. The first-screen background is a procedural reconstruction of the green screenshot, not an exported Figma image.

## Supplied e-Ukraine fonts

The six original OTF files from the user-uploaded `e-Ukraine-20261026T185604Z-1-001.zip` are self-hosted under `src/assets/fonts`: Thin (100), UltraLight (200), Light (300), Regular (400), Medium (500), and Bold (700). They are loaded through `@font-face` with `font-display: swap`, without external font services. Vite fingerprints the files and rewrites their URLs for subdirectory hosting. The original outlined SVG logo remains independent of the website font.

The popup close control has a vector cross; hover/focus uses the existing green brand accent. This state is implemented and tested, but its exact Figma hover frame remains unavailable through the connected tools. The mobile header stacking order keeps the open menu above the hero text and background.

## Full angled shader surface and reference website

The shader canvas includes the masthead's full lower angled region. Responsive padding and an equal negative overlap keep the page sections in place while ensuring the clipped green section cannot expose an unshaded black triangle. Background motion includes slow autonomous drift/rotation as well as damped pointer interaction; reduced motion stays static. Responsive tests check coverage at 320, 390, 768, and 1440px.

`https://expla.com/ua/` is the company reference website, not this repository's deployment target. The user clarified that the official website must not be modified. This repository continues to publish its preview through GitHub Pages. Reading the official reference returned a proxy HTTP 403, so header/footer contact details and destination URLs beyond those already supplied cannot be verified or copied here. They should be supplied directly rather than invented.

## Background motion and globe clarity

The newest wide background image supplied in chat is used as a visual reference for feathered elliptical emerald sweeps: a lower-left glow and an upper-right crescent, with a dark center for readable text. The shader animates continuously without pointer events. Mouse movement adds local rotational distortion and brightness; that extra energy decays after the mouse stops. Reduced motion freezes both. The chat-rendered reference is not available as a downloadable original asset in this workspace, so this remains a procedural recreation rather than the original image texture. A PNG/JPG file attachment (or ZIP containing it) is needed for a pixel-identical background asset.

The globe now renders at up to Retina 2× with a 4K map. Coarse per-vertex elevation was removed; a regular sphere plus shader coast bevels preserves the illustrated relief while removing the battered outline. `test:quality` checks actual browser resolution and the circular silhouette at 360 angles. `test:interactions` compares pixel changes and checks that pointer response exceeds autonomous drift, as well as honoring reduced motion.

The latest TOP-100 shader uses a broad lower emerald arc, thin inner filaments, and a dark center following the new supplied reference. Idle drift and cursor deformation remain independent. Globe rotation now defaults to 60 seconds per turn; denser smooth geometry, more accurate projected paths, softer coast relief, and up to 8× anisotropic filtering improve clarity.

The globe now uses a soft glossy studio highlight and restrained directional rim, with a stronger shaded coastline bevel, matching the earlier supplied glossy reference. The hero arcs have asymmetric flowing curvature and six fine animated filaments; idle motion and cursor interaction remain enabled.

The current TOP-100 background replaces fine filament lines with broad diffused waves in the exact sRGB brand color `#27C77C` (converted to linear color for the shader). It animates on page load without pointer input; pointer movement adds stronger local distortion and brightness, then settles back to ambient drift. Reduced-motion preferences retain a static background.

TOP-100 now uses the original `Vector.png` from the supplied ZIP, stored unchanged at `src/assets/top-100-background.png`. The shader samples this image without recoloring or procedural replacement. Distortion starts at zero and drifts slowly; pointer motion adds a local swirl. Edges stay anchored. Reduced motion displays the original undistorted image, and the same asset is the CSS loading/WebGL fallback.

Direction popups now follow the newly supplied desktop/mobile screenshots with e-Ukraine typography, original uploaded SVG benefit icons in `src/assets/benefits`, desktop direction tabs, a mobile inline direction menu, and updated copy. Affiliate Network includes three metrics and six benefits; mobile initially shows four benefits and expands/collapses the last two. On mobile the reach statistics precede the globe, and the footer follows the supplied social-links layout. The globe and hero animation code are unchanged by this popup update.

Final refinements (2026-10-28): the TOP-100 section now has a straight horizontal bottom edge; its original animated PNG and shader are unchanged. Cards stay still on hover; only the CTA color/arrow and green-to-white category labels transition. Popup descriptions use the final supplied copy in a single column on desktop and mobile. The exact shared UI green is `#27C77C`; globe land/ocean colors remain `#03FA7F` / `#212121`.

The platform carousel now loops right-to-left at 42 CSS px/s without intercepting wheel scrolling. Its two identical groups join seamlessly; previous/next buttons and touch dragging operate on the same wrapped offset. Arrow impulses ease into position while automatic motion continues. Buttons turn dark with white arrows on hover. Reduced motion stops autoplay but keeps manual navigation.

The footer includes the requested powered-by and business names. Original Cpamatica, Traffic Kitchen and adoly logo files were not supplied, so these are explicitly text placeholders pending SVG/PNG assets, rather than reconstructed brand artwork.

Additional mobile/radar refinement: carousel arrow controls are hidden at widths up to 760px, with the same item sizes, spacing, touch handling and uninterrupted leftward autoplay. Desktop controls and hover behaviour are unchanged. White fading globe dots are replaced by staggered yellow `#F8F000` radar rings; see the integration guide for sizes, timings, silhouette clipping and reduced-motion behaviour. No globe surface, lighting or rotation settings were modified.

Latest marker appearance: radar centres and rings are white (`#FFFFFF`). Desktop ring/centre sizes are 32/5 CSS pixels; mobile sizes are 26/4 pixels. Thin outlines are 1.4px and 1.2px respectively. Timing, geographic positions, concurrency limits, silhouette clipping and all globe surface/rotation settings remain unchanged.

Mobile direction popups pin the original logo, close control and inline direction selector to the top of the dialog scroll container. Only the title and content scroll beneath the solid dark controls. The expanded direction list has its own bounded scrolling on short screens; desktop controls retain their original static position. Switching direction from a scrolled popup returns the content to the top.

Popup category tags on desktop and mobile now also stick below the logo/close/direction controls. ResizeObserver measures that controls block so tags track its real height during menu expansion, language changes and screen resizing. The title remains scrollable; the initial content order and desktop spacing are preserved. Short landscape screens use a bounded direction list and compact tag padding.
