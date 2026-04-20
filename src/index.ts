/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

// #region Version
const nhcarriganHeadersVersion = "{{ version }}";
console.log(`
========================================
Loading NHCarrigan library v${nhcarriganHeadersVersion}.
Copyright (c) ${new Date().getFullYear().
  toString()} NHCarrigan
Changelog: https://git.nhcarrigan.com/nhcarrigan/website-headers/releases
Licensed under our public license: https://docs.nhcarrigan.com/legal/license
Questions? Contact us at https://docs.nhcarrigan.com/about/contact
========================================
`);
// #endregion

// #region Query Selectors
const nhcarriganHeadersHead = document.querySelector("head");
const nhcarriganHeadersBody = document.querySelector("body");
const nhcarriganHeadersTitle = document.querySelector("title");
const nhcarriganHeadersDescription = document.querySelector(
  `meta[name="description"]`,
);

const {
  href: nhcarriganHeadersUrl,
  hostname: nhcarriganHeadersHostname,
  pathname: nhcarriganHeadersPathname,
} = window.location;

// #endregion

// #region Metadata and Open Graph

/**
 * The title and description are set by each website. This should
 * only load things like open graph data and favicons.
 */
const nhcarriganHeadersCharacterSet = document.createElement("meta");
nhcarriganHeadersCharacterSet.setAttribute("charset", "UTF-8");
const nhcarriganHeadersViewport = document.createElement("meta");
nhcarriganHeadersViewport.setAttribute("name", "viewport");
nhcarriganHeadersViewport.setAttribute(
  "content",
  "width=device-width, initial-scale=1.0",
);
const nhcarriganHeadersThemeColor = document.createElement("meta");
nhcarriganHeadersThemeColor.setAttribute("name", "theme-color");
nhcarriganHeadersThemeColor.setAttribute("content", "#4A0E0E");
const nhcarriganHeadersReferrer = document.createElement("meta");
nhcarriganHeadersReferrer.setAttribute("name", "referrer");
nhcarriganHeadersReferrer.setAttribute(
  "content",
  "strict-origin-when-cross-origin",
);
const nhcarriganHeadersOpenGraphTitle = document.createElement("meta");
nhcarriganHeadersOpenGraphTitle.setAttribute("property", "og:title");
nhcarriganHeadersOpenGraphTitle.setAttribute(
  "content",
  nhcarriganHeadersTitle?.innerText ?? "NHCarrigan",
);
const nhcarriganHeadersOpenGraphDescription = document.createElement("meta");
nhcarriganHeadersOpenGraphDescription.setAttribute(
  "property",
  "og:description",
);
nhcarriganHeadersOpenGraphDescription.setAttribute(
  "content",
  nhcarriganHeadersDescription?.getAttribute("content")
  ?? "We are a software engineering and community management consulting firm.",
);
const nhcarriganHeadersOpenGraphImage = document.createElement("meta");
nhcarriganHeadersOpenGraphImage.setAttribute("property", "og:image");
nhcarriganHeadersOpenGraphImage.setAttribute(
  "content",
  "https://cdn.nhcarrigan.com/og-image.png",
);
const nhcarriganHeadersOpenGraphUrl = document.createElement("meta");
nhcarriganHeadersOpenGraphUrl.setAttribute("property", "og:url");
nhcarriganHeadersOpenGraphUrl.setAttribute("content", nhcarriganHeadersUrl);
const nhcarriganHeadersOpenGraphType = document.createElement("meta");
nhcarriganHeadersOpenGraphType.setAttribute("property", "og:type");
nhcarriganHeadersOpenGraphType.setAttribute("content", "website");
const nhcarriganHeadersOpenGraphSiteName = document.createElement("meta");
nhcarriganHeadersOpenGraphSiteName.setAttribute("property", "og:site_name");
nhcarriganHeadersOpenGraphSiteName.setAttribute("content", "NHCarrigan");
const nhcarriganHeadersOpenGraphLocale = document.createElement("meta");
nhcarriganHeadersOpenGraphLocale.setAttribute("property", "og:locale");
nhcarriganHeadersOpenGraphLocale.setAttribute("content", "en_US");
const nhcarriganHeadersOpenGraphImageAlt = document.createElement("meta");
nhcarriganHeadersOpenGraphImageAlt.setAttribute("property", "og:image:alt");
nhcarriganHeadersOpenGraphImageAlt.
  setAttribute("content", "NHCarrigan logo and branding");
const nhcarriganHeadersOpenGraphImageWidth = document.createElement("meta");
nhcarriganHeadersOpenGraphImageWidth.setAttribute("property", "og:image:width");
nhcarriganHeadersOpenGraphImageWidth.setAttribute("content", "1920");
const nhcarriganHeadersOpenGraphImageHeight = document.createElement("meta");
nhcarriganHeadersOpenGraphImageHeight.
  setAttribute("property", "og:image:height");
nhcarriganHeadersOpenGraphImageHeight.setAttribute("content", "1080");

const nhcarriganHeadersTwitterCard = document.createElement("meta");
nhcarriganHeadersTwitterCard.setAttribute("name", "twitter:card");
nhcarriganHeadersTwitterCard.setAttribute("content", "summary_large_image");
const nhcarriganHeadersTwitterDomain = document.createElement("meta");
nhcarriganHeadersTwitterDomain.setAttribute("name", "twitter:domain");
nhcarriganHeadersTwitterDomain.setAttribute(
  "content",
  nhcarriganHeadersHostname,
);
const nhcarriganHeadersTwitterUrl = document.createElement("meta");
nhcarriganHeadersTwitterUrl.setAttribute("name", "twitter:url");
nhcarriganHeadersTwitterUrl.setAttribute("content", nhcarriganHeadersUrl);
const nhcarriganHeadersTwitterTitle = document.createElement("meta");
nhcarriganHeadersTwitterTitle.setAttribute("name", "twitter:title");
nhcarriganHeadersTwitterTitle.setAttribute(
  "content",
  nhcarriganHeadersTitle?.innerText ?? "NHCarrigan",
);
const nhcarriganHeadersTwitterDescription = document.createElement("meta");
nhcarriganHeadersTwitterDescription.setAttribute("name", "twitter:description");
nhcarriganHeadersTwitterDescription.setAttribute(
  "content",
  nhcarriganHeadersDescription?.getAttribute("content")
  ?? "We are a software engineering and community management consulting firm.",
);
const nhcarriganHeadersTwitterImage = document.createElement("meta");
nhcarriganHeadersTwitterImage.setAttribute("name", "twitter:image");
nhcarriganHeadersTwitterImage.setAttribute(
  "content",
  "https://cdn.nhcarrigan.com/og-image.png",
);
const nhcarriganHeadersTwitterSite = document.createElement("meta");
nhcarriganHeadersTwitterSite.setAttribute("name", "twitter:site");
nhcarriganHeadersTwitterSite.setAttribute("content", "@nhcarrigan1");
const nhcarriganHeadersTwitterCreator = document.createElement("meta");
nhcarriganHeadersTwitterCreator.setAttribute("name", "twitter:creator");
nhcarriganHeadersTwitterCreator.setAttribute("content", "@nhcarrigan1");

const nhcarriganHeadersFormatDetection = document.createElement("meta");
nhcarriganHeadersFormatDetection.setAttribute("name", "format-detection");
nhcarriganHeadersFormatDetection.setAttribute("content", "telephone=no");
const nhcarriganHeadersRobots = document.createElement("meta");
nhcarriganHeadersRobots.setAttribute("name", "robots");
nhcarriganHeadersRobots.setAttribute("content", "index, follow");
const nhcarriganHeadersAuthor = document.createElement("meta");
nhcarriganHeadersAuthor.setAttribute("name", "author");
nhcarriganHeadersAuthor.setAttribute("content", "Naomi Carrigan");

// #endregion

// #region Favicon

const nhcarriganHeadersFavicon = document.createElement("link");
nhcarriganHeadersFavicon.rel = "icon";
nhcarriganHeadersFavicon.type = "image/x-icon";
nhcarriganHeadersFavicon.href
  = "https://cdn.nhcarrigan.com/favicon/favicon.ico";
const nhcarriganHeadersAppleTouchIcon = document.createElement("link");
nhcarriganHeadersAppleTouchIcon.rel = "apple-touch-icon";
nhcarriganHeadersAppleTouchIcon.href
  = "https://cdn.nhcarrigan.com/favicon/apple-touch-icon.png";
const nhcarriganHeadersSmallIcon = document.createElement("link");
nhcarriganHeadersSmallIcon.rel = "icon";
nhcarriganHeadersSmallIcon.href
  = "https://cdn.nhcarrigan.com/favicon/favicon-16x16.png";
const nhcarriganHeadersLargeIcon = document.createElement("link");
nhcarriganHeadersLargeIcon.rel = "icon";
nhcarriganHeadersLargeIcon.href
  = "https://cdn.nhcarrigan.com/favicon/favicon-32x32.png";

// #endregion

// #region Styles

const nhcarriganHeadersStyles = document.createElement("style");
nhcarriganHeadersStyles.id = "nhcarrigan-global-styles";
nhcarriganHeadersStyles.innerHTML = `
/* Import fun and whimsical fonts! */
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Creepster&family=Griffy&family=Henny+Penny&display=swap');


:root {
  /* Witchy Purple Rose Palette */
  --witch-purple: #2B1B3D;
  --witch-plum: #44275A;
  --witch-rose: #A8577E;
  --witch-mauve: #D4A5C7;
  --witch-lavender: #E8D5E8;
  --witch-black: #0A0009;
  --witch-silver: #C0C0C0;
  --witch-moon: #F5F5F5;
  --witch-shadow: rgba(10, 0, 9, 0.7);

  /* Theme variables */
  --foreground: var(--witch-purple);
  --background: var(--witch-moon);
  --accent: var(--witch-rose);
  --border: var(--witch-plum);
  --highlight: var(--witch-mauve);

  font-size: 14pt;
  line-height: 1.6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Kalam', cursive, sans-serif;
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g transform="translate(12 12) rotate(-45 12 12)"><circle cx="12" cy="6" r="5" fill="%232B1B3D"/><circle cx="6" cy="12" r="5" fill="%232B1B3D"/><circle cx="18" cy="12" r="5" fill="%232B1B3D"/><circle cx="12" cy="18" r="5" fill="%232B1B3D"/><circle cx="12" cy="12" r="3.5" fill="%23A8577E"/><path d="M12 18 L12 36" stroke="%232B1B3D" stroke-width="2.5"/><path d="M10 34 L8 38" stroke="%232B1B3D" stroke-width="2"/><path d="M14 34 L16 38" stroke="%232B1B3D" stroke-width="2"/></g><circle cx="3" cy="3" r="1.5" fill="%23D4A5C7" opacity="0.8"/></svg>') 0 0, url('https://cdn.nhcarrigan.com/cursors/cursor.cur'), auto;
  min-height: 100vh;
  min-width: 100vw;
}

body {
  min-height: 100vh;
  position: relative;
}

/* Witchy mystical background */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(https://cdn.nhcarrigan.com/background.png);
  background-size: cover;
  background-position: center;
  z-index: -2;
  pointer-events: none;
}

/* Purple overlay for witchy effect */
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(168, 87, 126, 0.35) 0%, transparent 60%),
    radial-gradient(circle at 80% 80%, rgba(68, 39, 90, 0.35) 0%, transparent 60%),
    linear-gradient(180deg,
      rgba(10, 0, 9, 0.5) 0%,
      rgba(43, 27, 61, 0.25) 50%,
      rgba(43, 27, 61, 0.4) 100%
    );
  z-index: -1;
  pointer-events: none;
}

main {
  color: var(--foreground);
  background: linear-gradient(135deg,
    rgba(245, 245, 245, 0.95) 0%,
    rgba(232, 213, 232, 0.9) 100%
  );
  text-align: center;
  border-radius: 15px;
  width: 95%;
  max-width: 1080px;
  margin: 20px auto 85px auto;
  padding: 40px;
  position: relative;

  /* Simple elegant border */
  border: 2px solid var(--witch-plum);
  box-shadow:
    /* Magical purple glow */
    0 0 60px rgba(168, 87, 126, 0.4),
    0 0 100px rgba(68, 39, 90, 0.3),
    /* Standard shadow */
    0 10px 40px var(--witch-shadow),
    /* Inner glow */
    inset 0 0 60px rgba(168, 87, 126, 0.05);
}

footer {
  width: 100%;
  color: var(--witch-lavender);
  background: linear-gradient(to bottom,
    rgba(43, 27, 61, 0.95) 0%,
    var(--witch-black) 100%
  );
  position: fixed;
  bottom: 0;
  height: 75px;
  padding: 0 10px;
  border-top: 2px solid var(--witch-mauve);
  box-shadow:
    /* Purple glow from top border */
    0 -10px 40px rgba(212, 165, 199, 0.3),
    0 -5px 20px rgba(168, 87, 126, 0.4),
    /* Standard shadow */
    0 -5px 20px var(--witch-shadow);
}

#footer-inner-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
}

#footer-inner-container a {
  color: var(--witch-lavender);
  transition: all 0.3s ease;
}

#footer-inner-container a:hover {
  color: var(--witch-mauve);
  text-shadow: 0 0 10px rgba(212, 165, 199, 0.5);
}

#footer-badge-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  justify-content: space-around;
}

#show-socials-button, #theme-select-button {
  background: none;
  border: 1px solid var(--witch-plum);
  border-radius: 20px;
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g transform="translate(12 12) rotate(-45 12 12)" filter="url(%23glow)"><circle cx="12" cy="6" r="5.5" fill="%23A8577E"/><circle cx="6" cy="12" r="5.5" fill="%23A8577E"/><circle cx="18" cy="12" r="5.5" fill="%23A8577E"/><circle cx="12" cy="18" r="5.5" fill="%23A8577E"/><circle cx="12" cy="12" r="4" fill="%23D4A5C7"/><path d="M12 18 L12 36" stroke="%232B1B3D" stroke-width="2.5"/><path d="M10 34 L8 38" stroke="%232B1B3D" stroke-width="2"/><path d="M14 34 L16 38" stroke="%232B1B3D" stroke-width="2"/></g><circle cx="3" cy="3" r="2" fill="%23D4A5C7" opacity="0.9"/></svg>') 0 0, url('https://cdn.nhcarrigan.com/cursors/pointer.cur'), pointer;
  color: var(--witch-lavender);
  font-size: 1rem;
  font-family: 'Kalam', cursive;
  font-weight: 700;
  padding: 8px 15px;
  transition: all 0.3s ease;
}

#show-socials-button:hover, #theme-select-button:hover {
  background: rgba(168, 87, 126, 0.2);
  border-color: var(--witch-mauve);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(168, 87, 126, 0.3);
}

#show-socials-button > i, #theme-select-button > i {
  font-size: 1.2rem;
  margin-right: 5px;
}

a {
  color: var(--accent);
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g transform="translate(12 12) rotate(-45 12 12)" filter="url(%23glow)"><circle cx="12" cy="6" r="5.5" fill="%23A8577E"/><circle cx="6" cy="12" r="5.5" fill="%23A8577E"/><circle cx="18" cy="12" r="5.5" fill="%23A8577E"/><circle cx="12" cy="18" r="5.5" fill="%23A8577E"/><circle cx="12" cy="12" r="4" fill="%23D4A5C7"/><path d="M12 18 L12 36" stroke="%232B1B3D" stroke-width="2.5"/><path d="M10 34 L8 38" stroke="%232B1B3D" stroke-width="2"/><path d="M14 34 L16 38" stroke="%232B1B3D" stroke-width="2"/></g><circle cx="3" cy="3" r="2" fill="%23D4A5C7" opacity="0.9"/></svg>') 0 0, url('https://cdn.nhcarrigan.com/cursors/pointer.cur'), pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

a:hover {
  color: var(--witch-plum);
  text-decoration: underline;
  text-decoration-color: var(--witch-mauve);
  text-underline-offset: 3px;
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><filter id="sparkle"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g transform="translate(12 12) rotate(-45 12 12)" filter="url(%23sparkle)"><circle cx="12" cy="6" r="6" fill="%23A8577E"/><circle cx="6" cy="12" r="6" fill="%23A8577E"/><circle cx="18" cy="12" r="6" fill="%23A8577E"/><circle cx="12" cy="18" r="6" fill="%23A8577E"/><circle cx="12" cy="12" r="4.5" fill="%23D4A5C7"/><path d="M12 18 L12 36" stroke="%232B1B3D" stroke-width="3"/><path d="M10 34 L8 38" stroke="%232B1B3D" stroke-width="2.5"/><path d="M14 34 L16 38" stroke="%232B1B3D" stroke-width="2.5"/></g><circle cx="3" cy="3" r="2.5" fill="%23E8D5E8"/><circle cx="8" cy="1" r="1" fill="%23D4A5C7"/><circle cx="1" cy="8" r="1" fill="%23D4A5C7"/></svg>') 0 0, pointer;
}

#tree-nation-offset-website {
  display: flex;
  align-items: center;
}

#social-list {
  position: absolute;
  bottom: 75px;
  left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  max-width: 400px;
  padding: 20px;
  background: linear-gradient(135deg,
    rgba(43, 27, 61, 0.98) 0%,
    rgba(10, 0, 9, 0.95) 100%
  );
  color: var(--witch-lavender);
  border-radius: 15px;
  border: 1px solid var(--witch-mauve);
  display: none;
  z-index: 1000;
  box-shadow:
    0 10px 30px var(--witch-shadow),
    inset 0 0 20px rgba(168, 87, 126, 0.1);
}

.social-list-item {
  padding: 12px;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.social-list-item > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: var(--witch-lavender);
}

.social-list-item > a i {
  font-size: 1.2rem;
  margin-right: 12px;
  color: var(--witch-mauve);
}

.social-list-divider {
  border: none;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 20%,
    var(--witch-mauve) 50%,
    transparent 80%
  );
  margin: 8px 0;
  opacity: 0.5;
}

.social-list-item:hover {
  background: rgba(168, 87, 126, 0.2);
  transform: translateX(3px);
}

.social-list-item:hover > a {
  color: var(--witch-rose);
}

.is-dark {
  --foreground: var(--witch-lavender);
  --background: var(--witch-black);
  --accent: var(--witch-mauve);
  --border: var(--witch-rose);
  --highlight: var(--witch-plum);
}

/* Dark mode specific adjustments */
.is-dark main {
  background: linear-gradient(135deg,
    rgba(10, 0, 9, 0.95) 0%,
    rgba(43, 27, 61, 0.9) 100%
  );
  color: var(--witch-lavender);
  border-color: var(--witch-rose);
  box-shadow:
    /* Mystical rose glow for dark mode */
    0 0 80px rgba(168, 87, 126, 0.5),
    0 0 120px rgba(212, 165, 199, 0.3),
    /* Standard shadow */
    0 10px 40px rgba(0, 0, 0, 0.8),
    /* Inner glow */
    inset 0 0 60px rgba(168, 87, 126, 0.1);
}

.is-dark h1 { color: var(--witch-mauve); }
.is-dark h2, .is-dark h3 { color: var(--witch-lavender); }

.is-dark a {
  color: var(--witch-mauve);
}

.is-dark a:hover {
  color: var(--witch-rose);
}
/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Griffy', cursive;
  font-weight: 400;
  letter-spacing: 1px;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-2deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(-1deg); }
  75% { transform: rotate(1deg); }
}

h1 {
  color: var(--witch-plum);
  font-size: 2.8rem;
  text-shadow: 3px 3px 0px var(--witch-rose),
               4px 4px 8px rgba(168, 87, 126, 0.4);
  transform: rotate(-2deg);
  display: inline-block;
  animation: wiggle 4s ease-in-out infinite;
}

h2 {
  color: var(--witch-purple);
  font-size: 2.2rem;
  text-shadow: 2px 2px 4px rgba(68, 39, 90, 0.3);
}

h3 {
  color: var(--witch-purple);
  font-size: 1.6rem;
  font-family: 'Kalam', cursive;
  font-weight: 700;
}

p {
  line-height: 1.8;
  margin-bottom: 1.2em;
}

/* Form elements */
input, textarea, select {
  font-family: 'Kalam', cursive;
  font-weight: 400;
  font-size: 1rem;
  padding: 12px 16px;
  border: 2px solid var(--witch-plum);
  border-radius: 15px;
  background: rgba(245, 245, 245, 0.95);
  color: var(--witch-purple);
  transition: all 0.3s ease;
  outline: none;
}

input[type="text"], input[type="email"], input[type="password"], textarea {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><line x1="12" y1="6" x2="12" y2="42" stroke="%232B1B3D" stroke-width="2"/><line x1="8" y1="6" x2="16" y2="6" stroke="%232B1B3D" stroke-width="2"/><line x1="8" y1="42" x2="16" y2="42" stroke="%232B1B3D" stroke-width="2"/><circle cx="12" cy="24" r="3" fill="%23A8577E" opacity="0.5"/></svg>') 12 24, text;
}

input:focus, textarea:focus, select:focus {
  border-color: var(--witch-rose);
  box-shadow: 0 0 0 3px rgba(168, 87, 126, 0.15);
}

button, input[type="submit"], input[type="button"] {
  font-family: 'Griffy', cursive;
  font-weight: 400;
  padding: 14px 28px;
  background: linear-gradient(135deg,
    var(--witch-plum) 0%,
    var(--witch-purple) 100%
  );
  color: var(--witch-moon);
  border: 3px solid transparent;
  border-radius: 30px;
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g transform="translate(12 12) rotate(-45 12 12)" filter="url(%23glow)"><circle cx="12" cy="6" r="5.5" fill="%23A8577E"/><circle cx="6" cy="12" r="5.5" fill="%23A8577E"/><circle cx="18" cy="12" r="5.5" fill="%23A8577E"/><circle cx="12" cy="18" r="5.5" fill="%23A8577E"/><circle cx="12" cy="12" r="4" fill="%23D4A5C7"/><path d="M12 18 L12 36" stroke="%232B1B3D" stroke-width="2.5"/><path d="M10 34 L8 38" stroke="%232B1B3D" stroke-width="2"/><path d="M14 34 L16 38" stroke="%232B1B3D" stroke-width="2"/></g><circle cx="3" cy="3" r="2" fill="%23D4A5C7" opacity="0.9"/></svg>') 0 0, url('https://cdn.nhcarrigan.com/cursors/pointer.cur'), pointer;
  transition: all 0.3s ease;
  text-transform: none;
  font-size: 1.1rem;
  letter-spacing: 1px;
  transform: rotate(-1deg);
}

button:hover, input[type="submit"]:hover, input[type="button"]:hover {
  transform: translateY(-3px) rotate(1deg) scale(1.05);
  box-shadow: 0 8px 25px rgba(68, 39, 90, 0.4),
              0 0 30px rgba(168, 87, 126, 0.3);
  border-color: var(--witch-rose);
}

/* Lists */
ul, ol {
  margin-left: 1.5em;
  margin-bottom: 1em;
}

ul li::marker {
  content: "✦ ";
  color: var(--witch-rose);
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 12px;
  text-align: left;
}

th {
  background: var(--witch-plum);
  color: var(--witch-moon);
}

tr:nth-child(even) {
  background: rgba(212, 165, 199, 0.05);
}

tr:hover {
  background: rgba(168, 87, 126, 0.1);
}

/* Blockquotes */
blockquote {
  border-left: 5px wavy var(--witch-rose);
  padding-left: 20px;
  margin: 1em 0;
  font-family: 'Griffy', cursive;
  font-style: normal;
  color: var(--witch-plum);
  font-size: 1.2rem;
  line-height: 1.8;
  background: linear-gradient(90deg,
    rgba(168, 87, 126, 0.05) 0%,
    transparent 50%);
  position: relative;
}

/* Code blocks */
code, pre {
  font-family: 'Courier New', monospace;
  background: rgba(43, 27, 61, 0.05);
  color: var(--witch-purple);
  padding: 2px 6px;
  border-radius: 4px;
}

pre {
  padding: 15px;
  overflow-x: auto;
  border: 1px solid var(--witch-plum);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--witch-lavender);
}

::-webkit-scrollbar-thumb {
  background: var(--witch-plum);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--witch-purple);
}

/* Selection */
::selection {
  background: var(--witch-rose);
  color: var(--witch-moon);
}

::-moz-selection {
  background: var(--witch-rose);
  color: var(--witch-moon);
}

/* Draggable elements */
[draggable="true"] {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g transform="translate(12 12)"><path d="M12 2 L2 12 L12 22 L22 12 Z" fill="%232B1B3D"/><circle cx="12" cy="12" r="6" fill="%23A8577E"/><circle cx="12" cy="12" r="4" fill="%23D4A5C7"/><path d="M12 4 L12 0 M12 24 L12 20 M4 12 L0 12 M24 12 L20 12" stroke="%232B1B3D" stroke-width="2"/></g></svg>') 12 12, move;
}

/* Special decorative text classes */
.witchy-accent {
  font-family: 'Creepster', cursive;
  letter-spacing: 3px;
  text-shadow: 3px 3px 0px var(--witch-rose),
               4px 4px 8px rgba(168, 87, 126, 0.5);
  color: var(--witch-purple);
  transform: skew(-5deg);
  display: inline-block;
}

.mystical-text {
  font-family: 'Henny Penny', cursive;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(68, 39, 90, 0.4);
}

.spooky-title {
  font-family: 'Creepster', cursive;
  background: linear-gradient(45deg,
    var(--witch-purple) 0%,
    var(--witch-rose) 50%,
    var(--witch-mauve) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
}

@media screen and (max-width: 1000px) {
  #tree-nation-tree-counter {
    display: none;
  }
}

@media screen and (max-width: 835px) {
  #theme-select-button {
    font-size: 10pt;
    padding: 8px 16px;
  }
  #show-socials-button {
    font-size: 10pt;
    padding: 8px 16px;
  }
}

@media screen and (max-width: 768px) {
  #tree-nation-offset-website {
    display: none;
  }
}

@media screen and (max-width: 625px) {
  footer, #footer-inner-container {
    height: 75px;
    justify-content: space-around;
  }
  main {
    margin-bottom: 85px;
  }
  #footer-copyright {
    font-size: 10pt;
  }
}

@media screen and (max-width: 560px) {
  #donate-badge {
    display: none;
  }
}

@media screen and (max-width: 350px) {
  footer, #show-socials-button, #theme-select-button, #show-socials-button > i, #theme-select-button > i {
    font-size: 10pt;
  }
}
`;

// #endregion

// #region Components

const nhcarriganHeadersFooter = document.createElement("footer");
nhcarriganHeadersFooter.innerHTML = `
<div id="footer-inner-container">
<div id="tree-nation-tree-counter" data-widget-type="tree-counter" data-tree-nation-code="52a9395caa57df28" data-lang="en" data-theme="dark"></div>
<p id="footer-copyright" style="margin: 0; display: flex; align-items: center;">&copy; <a href="https://nhcarrigan.com" target="_blank" style="margin-left: 5px;">Naomi Carrigan</a></p>
<button id="show-socials-button" type="button">
  <i class="fa-solid fa-share-nodes"></i> Connect with Us
</button>
<button id="theme-select-button" type="button">
  <i id="theme-select-icon" class="fa-solid fa-moon"></i> Toggle Theme
</button>
<a id="donate-badge" href="https://buy.stripe.com/cN24iTfqu1j6b3afZ2" target="_blank" rel="noreferrer">
  <img src="https://cdn.nhcarrigan.com/donate.png" alt="Donate" style="width: 70px; height: 70px;">
</a>
<div id="tree-nation-offset-website" data-widget-type="offset-website" data-tree-nation-code="a17464e0cd351220" data-lang="en" data-theme="dark"></div>
</div>
<div id="social-list">
  <div class="social-list-item">
    <a href="https://chat.nhcarrigan.com" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-discord"></i><span>Join our Discord~!</span>
    </a>
  </div>
  <hr class="social-list-divider" />
  <div class="social-list-item">
    <a href="https://forum.nhcarrigan.com" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-discourse"></i><span>Sign up for our forum~!</span>
    </a>
  </div>
  <hr class="social-list-divider" />
  <div class="social-list-item">
    <a href="https://git.nhcarrigan.com" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-git-alt"></i><span>Check out our source code~!</span>
    </a>
  </div>
  <hr class="social-list-divider" />
  <div class="social-list-item">
    <a href="https://bsky.app/profile/nhcarrigan.com" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-bluesky"></i><span>Follow us on Bluesky~!</span>
    </a>
  </div>
  <hr class="social-list-divider" />
  <div class="social-list-item">
    <a href="https://www.linkedin.com/company/nhcarrigan" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-linkedin"></i><span>Connect with us on LinkedIn~!</span>
    </a>
  </div>
  <hr class="social-list-divider" />
  <div class="social-list-item">
    <a href="https://www.reddit.com/r/nhcarrigan/" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-reddit"></i><span>Join our subreddit~!</span>
    </a>
  </div>
  <hr class="social-list-divider" />
  <div class="social-list-item">
    <a href="https://www.youtube.com/@naomilgbt" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-youtube"></i><span>Subscribe to our YouTube~!</span>
    </a>
  </div>
    <hr class="social-list-divider" />
  <div class="social-list-item">
    <a href="https://twitch.tv/naomilgbt" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-twitch"></i><span>Subscribe to our Twitch~!</span>
    </a>
  </div>
    <hr class="social-list-divider" />
  <div class="social-list-item">
    <a href="https://x.com/nhcarrigan1" target="_blank" rel="noreferrer">
      <i class="fa-brands fa-twitter"></i><span>We are even on Twitter~!</span>
    </a>
  </div>
</div>
`;
// #region Scripts

const nhcarriganHeadersTreeNation = document.createElement("script");
nhcarriganHeadersTreeNation.src
  = "https://widgets.tree-nation.com/js/widgets/v3/widgets.min.js";
const nhcarriganHeadersTreeNationBottom = document.createElement("script");
nhcarriganHeadersTreeNationBottom.defer = true;
nhcarriganHeadersTreeNationBottom.async = true;
nhcarriganHeadersTreeNationBottom.innerHTML = `
const interval = setInterval(() => {
  const tree = document.querySelector("#tree-nation-offset-website");
  if (!tree) {
    console.log("DOM has not hydrated yet, cannot load TreeNation badge.");
    return;
  }
  TreeNationOffsetWebsite({
    code: "a17464e0cd351220",
    lang: "en",
    theme: "dark",
  }).render("#tree-nation-offset-website");
  clearInterval(interval);
}, 1000);
`;
const nhcarriganHeadersFontAwesome = document.createElement("script");
nhcarriganHeadersFontAwesome.src = "https://cdn.nhcarrigan.com/font-awesome/all.min.js";
const nhcarriganHeadersAnalytics = document.createElement("script");
nhcarriganHeadersAnalytics.defer = true;
nhcarriganHeadersAnalytics.src

  = "https://analytics.nhcarrigan.com/js/pa-YUXAn1vhhRttySUAw_LMN.js";
const nhcarriganHeadersAnalytics2 = document.createElement("script");
nhcarriganHeadersAnalytics2.innerHTML = `
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init({
    customProperties: {
      domain: "${nhcarriganHeadersHostname}",
      page: "${nhcarriganHeadersTitle?.innerText ?? "Unknown Page"}",
      path: "${nhcarriganHeadersPathname}",
    },
  })
`;
const nhcarriganHeadersGoogleAdsense = document.createElement("script");
nhcarriganHeadersGoogleAdsense.async = true;
nhcarriganHeadersGoogleAdsense.src
  // eslint-disable-next-line stylistic/max-len -- big boi string
  = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3569924701890974";
nhcarriganHeadersGoogleAdsense.setAttribute("crossorigin", "anonymous");

// #endregion

// #region Inject Elements

nhcarriganHeadersHead?.appendChild(nhcarriganHeadersCharacterSet);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersViewport);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersThemeColor);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersReferrer);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphTitle);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphDescription);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphImage);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphUrl);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphType);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphSiteName);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphLocale);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphImageAlt);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphImageWidth);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersOpenGraphImageHeight);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTwitterCard);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTwitterDomain);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTwitterUrl);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTwitterTitle);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTwitterDescription);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTwitterImage);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTwitterSite);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTwitterCreator);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersFavicon);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersAppleTouchIcon);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersSmallIcon);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersLargeIcon);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersFormatDetection);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersRobots);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersAuthor);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersStyles);

nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTreeNation);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersFontAwesome);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersAnalytics);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersAnalytics2);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersGoogleAdsense);

nhcarriganHeadersBody?.appendChild(nhcarriganHeadersFooter);
nhcarriganHeadersBody?.appendChild(nhcarriganHeadersTreeNationBottom);
// #endregion

// #region Theme

const nhcarriganHeadersThemeButton = document.querySelector(
  "#theme-select-button",
);
const nhcarriganHeadersThemeIcon = document.querySelector("#theme-select-icon");
if (localStorage.getItem("theme") === "dark") {
  nhcarriganHeadersThemeIcon?.classList.remove("fa-moon");
  nhcarriganHeadersThemeIcon?.classList.add("fa-sun");
  document.querySelector("html")?.classList.add("is-dark");
}
const nhcarriganHeadersToggleTheme = (): void => {
  const nhcarriganHeadersCurrentTheme = localStorage.getItem("theme");
  if (nhcarriganHeadersCurrentTheme === "dark") {
    localStorage.setItem("theme", "light");
    nhcarriganHeadersThemeIcon?.classList.remove("fa-sun");
    nhcarriganHeadersThemeIcon?.classList.add("fa-moon");
    document.querySelector("html")?.classList.remove("is-dark");
    return;
  }
  localStorage.setItem("theme", "dark");
  nhcarriganHeadersThemeIcon?.classList.remove("fa-moon");
  nhcarriganHeadersThemeIcon?.classList.add("fa-sun");
  document.querySelector("html")?.classList.add("is-dark");
};
nhcarriganHeadersThemeButton?.addEventListener(
  "click",
  nhcarriganHeadersToggleTheme,
);
const nhcarriganHeadersPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
);
if (
  nhcarriganHeadersPrefersDark.matches
  && localStorage.getItem("theme") !== null
) {
  localStorage.setItem("theme", "dark");
  nhcarriganHeadersThemeIcon?.classList.remove("fa-moon");
  nhcarriganHeadersThemeIcon?.classList.add("fa-sun");
  document.querySelector("html")?.classList.add("is-dark");
}

// #endregion

// #region Social Toggle
const nhcarriganHeadersShowSocialsButton
  = document.querySelector<HTMLButtonElement>("#show-socials-button");
const nhcarriganHeadersSocialList
  = document.querySelector<HTMLDivElement>("#social-list");
const nhcarriganHeadersToggleSocials = (): void => {
  if (!nhcarriganHeadersSocialList) {
    throw new Error("Social list element not found.");
  }
  if (nhcarriganHeadersSocialList.style.display === "block") {
    nhcarriganHeadersSocialList.style.display = "none";
    nhcarriganHeadersShowSocialsButton?.setAttribute("aria-expanded", "false");
    nhcarriganHeadersShowSocialsButton?.setAttribute(
      "aria-label",
      "Show Socials",
    );
    return;
  }
  nhcarriganHeadersSocialList.style.display = "block";
  nhcarriganHeadersShowSocialsButton?.setAttribute("aria-expanded", "true");
  nhcarriganHeadersShowSocialsButton?.setAttribute(
    "aria-label",
    "Hide Socials",
  );
};
nhcarriganHeadersShowSocialsButton?.addEventListener(
  "click",
  nhcarriganHeadersToggleSocials,
);

// #region CTA

const nhcarriganHeadersCta = document.createElement("dialog");
nhcarriganHeadersCta.style.position = "fixed";
nhcarriganHeadersCta.style.top = "50%";
nhcarriganHeadersCta.style.left = "50%";
nhcarriganHeadersCta.style.transform = "translate(-50%, -50%)";
nhcarriganHeadersCta.style.padding = "40px";
nhcarriganHeadersCta.style.borderRadius = "20px";
nhcarriganHeadersCta.style.backgroundColor = "var(--witch-moon)";
nhcarriganHeadersCta.style.color = "var(--witch-purple)";
nhcarriganHeadersCta.style.textAlign = "center";
nhcarriganHeadersCta.style.width = "95%";
nhcarriganHeadersCta.style.maxWidth = "400px";
nhcarriganHeadersCta.style.border = "2px solid var(--witch-plum)";
nhcarriganHeadersCta.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
nhcarriganHeadersCta.id = "community-cta";
nhcarriganHeadersCta.innerHTML = `
  <h1 autofocus style="font-size: 2rem; margin-bottom: 20px; color: var(--witch-plum);">Welcome~!</h1>
  <div style="display: flex; justify-content: space-around; margin-bottom: 25px; align-items: center;">
    <img src="https://cdn.nhcarrigan.com/profile_personal.jpg" alt="Naomi's Avatar" style="width: 80px; height: 80px; border-radius: 50%;">
    <p style="flex: 1; margin-left: 20px; line-height: 1.8;">
      Join Naomi's personal Discord community to stay connected with her latest projects and activities!
    </p>
  </div>
  <a href="https://chat.nhcarrigan.com" target="_blank" rel="noreferrer" style="display: inline-block; padding: 15px 35px; background: linear-gradient(135deg, var(--witch-plum), var(--witch-purple)); color: var(--witch-moon); text-decoration: none; border-radius: 30px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(68, 39, 90, 0.3);">
    Join Naomi's Discord~!
  </a>
`;

const nhcarriganHeadersModalBg = document.createElement("div");
nhcarriganHeadersModalBg.style.zIndex = "4999";
nhcarriganHeadersModalBg.style.position = "fixed";
nhcarriganHeadersModalBg.style.top = "0";
nhcarriganHeadersModalBg.style.left = "0";
nhcarriganHeadersModalBg.style.width = "100vw";
nhcarriganHeadersModalBg.style.height = "100vh";
nhcarriganHeadersModalBg.style.background = "rgba(10, 0, 9, 0.7)";
nhcarriganHeadersModalBg.style.backdropFilter = "blur(5px)";
nhcarriganHeadersModalBg.style.display = "none";
nhcarriganHeadersModalBg.id = "modal-bg";
const nhcarriganHeadersCloseModal = (): void => {
  nhcarriganHeadersCta.close();
  nhcarriganHeadersModalBg.style.display = "none";
};
const nhcarriganHeadersHandleModalClick = (event: MouseEvent): void => {
  event.stopPropagation();
  if (event.target === nhcarriganHeadersCta) {
    nhcarriganHeadersCloseModal();
  }
};
const nhcarriganHeadersShowModal = (): void => {
  const nhcarriganHeadersLastShown = Number.parseInt(
    localStorage.getItem("naomi-community-cta") ?? "0",
    10,
  );
  const nhcarriganHeadersLastShownDate = new Date(nhcarriganHeadersLastShown);
  const nhcarriganHeadersDiff
    = Date.now() - nhcarriganHeadersLastShownDate.getTime();
  console.table({
    diff:          nhcarriganHeadersDiff,
    lastShown:     nhcarriganHeadersLastShown,
    lastShownDate: nhcarriganHeadersLastShownDate,
  });
  // We only want to show this once a week.
  if (nhcarriganHeadersDiff < 1000 * 60 * 60 * 24 * 7) {
    return;
  }
  nhcarriganHeadersCta.showModal();
  nhcarriganHeadersModalBg.style.display = "block";
  nhcarriganHeadersModalBg.addEventListener(
    "click",
    nhcarriganHeadersCloseModal,
  );
  const nhcarriganHeadersCloseButton
    = nhcarriganHeadersCta.querySelector("button");
  nhcarriganHeadersCloseButton?.addEventListener(
    "click",
    nhcarriganHeadersCloseModal,
  );
  nhcarriganHeadersCta.addEventListener(
    "click",
    nhcarriganHeadersHandleModalClick,
  );
  localStorage.setItem("naomi-community-cta", Date.now().toString());
};

nhcarriganHeadersBody?.appendChild(nhcarriganHeadersCta);
nhcarriganHeadersBody?.appendChild(nhcarriganHeadersModalBg);

const nhcarriganNoModalUrls = [
  "https://forms.nhcarrigan.com/o/docs/forms/7LNb8jFoN4SPBvP7vRxDi2/4",
];
if (!nhcarriganNoModalUrls.includes(nhcarriganHeadersUrl)) {
  nhcarriganHeadersShowModal();
}
