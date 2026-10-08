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
Changelog: https://github.com/nhcarrigan/website-headers/releases
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
} = window.location;

// #endregion

// #region Exclusions

/**
 * Bespoke pages can opt out of parts of this library by listing features in
 * a space-separated data-nhcarrigan-exclude attribute on the html element,
 * for example: <html data-nhcarrigan-exclude="layout footer cta ads">.
 * The supported features are "layout" (the shared page chrome and element
 * styles, while design tokens still load), "footer" (the shared footer),
 * "cta" (the community popup) and "ads" (the advertising script).
 */
const nhcarriganHeadersExclusions = new Set(
  (document.documentElement.dataset.nhcarriganExclude ?? "").
    split(" ").
    filter((feature) => {
      return feature.length > 0;
    }),
);
const nhcarriganHeadersIsExcluded = (feature: string): boolean => {
  return nhcarriganHeadersExclusions.has(feature);
};

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
nhcarriganHeadersThemeColor.setAttribute("content", "#2B1B3D");
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

/**
 * Design tokens. These load on every page, including pages that opt out of
 * the shared layout, so bespoke pages can build on the same palette.
 */
const nhcarriganHeadersTokens = document.createElement("style");
nhcarriganHeadersTokens.id = "nhcarrigan-global-tokens";
nhcarriganHeadersTokens.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Griffy&display=swap');

:root {
  /* Official palette (https://style.nhcarrigan.com) */
  --witch-purple: #2B1B3D;
  --witch-plum: #44275A;
  --witch-rose: #A8577E;
  --witch-rose-deep: #8E4268;
  --witch-mauve: #D4A5C7;
  --witch-lavender: #E8D5E8;
  --witch-black: #0A0009;
  --witch-silver: #C0C0C0;
  --witch-moon: #F5F5F5;
  --witch-shadow: rgba(10, 0, 9, 0.7);

  /* Typography. Griffy is reserved for the wordmark. */
  --font-brand: 'Griffy', Georgia, 'Times New Roman', serif;
  --font-body: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-heading: var(--font-body);
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;

  /* Shape */
  --radius: 16px;
  --radius-small: 10px;

  /* Theme variables (light) */
  --foreground: var(--witch-purple);
  --foreground-muted: var(--witch-plum);
  --heading: var(--witch-purple);
  --background: var(--witch-moon);
  --page-background: linear-gradient(180deg, var(--witch-moon) 0%, #EBDFEB 100%);
  --page-overlay: rgba(245, 245, 245, 0.86);
  --surface: #FFFFFF;
  --accent: var(--witch-rose-deep);
  --border: var(--witch-plum);
  --border-subtle: rgba(68, 39, 90, 0.16);
  --highlight: var(--witch-mauve);
  --link: var(--witch-plum);
  --link-hover: var(--witch-rose-deep);
  --input-background: #FFFFFF;
  --input-border: rgba(68, 39, 90, 0.45);
  --code-background: rgba(43, 27, 61, 0.07);
  --row-alternate: rgba(212, 165, 199, 0.12);
  --row-hover: rgba(168, 87, 126, 0.1);
  --card-shadow: 0 10px 30px rgba(43, 27, 61, 0.08);
}

.is-dark {
  --foreground: var(--witch-lavender);
  --foreground-muted: var(--witch-mauve);
  --heading: var(--witch-moon);
  --background: var(--witch-black);
  --page-background: var(--witch-black);
  --page-overlay: rgba(10, 0, 9, 0.86);
  --surface: var(--witch-purple);
  --accent: var(--witch-mauve);
  --border: var(--witch-rose);
  --border-subtle: rgba(212, 165, 199, 0.22);
  --highlight: var(--witch-plum);
  --link: var(--witch-mauve);
  --link-hover: var(--witch-moon);
  --input-background: rgba(10, 0, 9, 0.45);
  --input-border: rgba(212, 165, 199, 0.45);
  --code-background: rgba(212, 165, 199, 0.12);
  --row-alternate: rgba(212, 165, 199, 0.06);
  --row-hover: rgba(212, 165, 199, 0.12);
  --card-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}
`;

/**
 * Page chrome and element defaults. Pages opt out with
 * data-nhcarrigan-exclude="layout".
 */
const nhcarriganHeadersStyles = document.createElement("style");
nhcarriganHeadersStyles.id = "nhcarrigan-global-styles";
nhcarriganHeadersStyles.innerHTML = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-body);
  font-size: 100%;
  line-height: 1.65;
  -webkit-text-size-adjust: 100%;
  scrollbar-color: var(--witch-plum) var(--witch-lavender);
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--foreground);
  background: var(--page-background);
}

/* Background artwork, softened by a translucent wash in the page colour */
body::before,
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

body::before {
  background: url(https://cdn.nhcarrigan.com/background.png);
  background-size: cover;
  background-position: center;
  z-index: -2;
}

body::after {
  background: var(--page-overlay);
  z-index: -1;
}

main {
  flex: 0 0 auto;
  width: 95%;
  max-width: 1080px;
  margin: 24px auto 48px auto;
  padding: 40px;
  color: var(--foreground);
  background: var(--surface);
  text-align: center;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius);
  box-shadow: var(--card-shadow);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: var(--heading);
  margin-bottom: 0.5em;
}

h1 { font-size: 2.6rem; letter-spacing: -0.025em; }
h2 { font-size: 2.1rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.2rem; }
h5, h6 { font-size: 1rem; }

p {
  line-height: 1.7;
  margin-bottom: 1.1em;
}

a {
  color: var(--link);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--link-hover);
}

a:focus-visible,
button:focus-visible,
summary:focus-visible {
  outline: 3px solid var(--witch-rose);
  outline-offset: 3px;
  border-radius: 4px;
}

img {
  max-width: 100%;
}

hr {
  border: 0;
  border-top: 1px solid var(--border-subtle);
  margin: 2rem 0;
}

/* Form elements */
input, textarea, select {
  font: inherit;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--input-border);
  border-radius: var(--radius-small);
  background: var(--input-background);
  color: var(--foreground);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
}

input[type="checkbox"], input[type="radio"] {
  padding: 0;
  accent-color: var(--witch-rose-deep);
}

input:focus, textarea:focus, select:focus {
  border-color: var(--witch-rose);
  box-shadow: 0 0 0 3px rgba(168, 87, 126, 0.28);
}

button, input[type="submit"], input[type="button"] {
  font: inherit;
  font-weight: 600;
  line-height: 1.2;
  padding: 0.75rem 1.5rem;
  background: var(--witch-rose);
  color: #FFFFFF;
  border: 2px solid transparent;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

button:hover, input[type="submit"]:hover, input[type="button"]:hover {
  background: var(--witch-rose-deep);
  transform: translateY(-1px);
}

button:disabled, input[type="submit"]:disabled, input[type="button"]:disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
}

/* Lists */
ul, ol {
  margin-left: 1.5em;
  margin-bottom: 1em;
  text-align: left;
}

ul li::marker {
  color: var(--accent);
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  overflow: hidden;
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-subtle);
}

th {
  background: var(--witch-plum);
  color: var(--witch-moon);
  font-weight: 600;
}

tr:nth-child(even) {
  background: var(--row-alternate);
}

tr:hover {
  background: var(--row-hover);
}

/* Blockquotes */
blockquote {
  margin: 1.25em 0;
  padding: 0.75rem 0 0.75rem 1.25rem;
  border-left: 4px solid var(--witch-rose);
  color: var(--foreground-muted);
  text-align: left;
  background: linear-gradient(90deg, rgba(168, 87, 126, 0.07) 0%, transparent 60%);
}

/* Code */
code, pre {
  font-family: var(--font-mono);
  font-size: 0.92em;
  background: var(--code-background);
  color: var(--foreground);
  padding: 0.15em 0.45em;
  border-radius: 4px;
}

pre {
  margin: 1em 0;
  padding: 1rem;
  overflow-x: auto;
  text-align: left;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
}

pre code {
  padding: 0;
  background: none;
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
  color: #FFFFFF;
}

::-moz-selection {
  background: var(--witch-rose);
  color: #FFFFFF;
}

/* Brand typography. Legacy decorative classes now share the wordmark face. */
.witchy-accent,
.mystical-text,
.spooky-title {
  font-family: var(--font-brand);
  font-weight: 400;
}

/* Footer */
footer {
  order: 1;
  flex-shrink: 0;
  width: 100%;
  margin-top: auto;
  padding: 28px 24px;
  color: var(--witch-lavender);
  background: linear-gradient(to bottom, var(--witch-purple) 0%, var(--witch-black) 100%);
  border-top: 1px solid rgba(212, 165, 199, 0.28);
}

#footer-inner-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 1080px;
  margin: 0 auto;
}

#footer-inner-container a {
  color: var(--witch-lavender);
  text-decoration: none;
}

#footer-inner-container a:hover {
  color: #FFFFFF;
  text-decoration: underline;
}

#footer-legal {
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: left;
}

#footer-legal p,
#footer-legal address {
  margin: 0;
  font-style: normal;
}

#footer-legal address {
  color: var(--witch-silver);
}

#footer-legal a[href^="tel:"] {
  white-space: nowrap;
}

#theme-select-button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  background: transparent;
  color: var(--witch-lavender);
  border: 1px solid rgba(212, 165, 199, 0.5);
}

#theme-select-button:hover {
  background: rgba(212, 165, 199, 0.15);
  color: #FFFFFF;
  transform: none;
}

#theme-select-button > i {
  margin-right: 0.4rem;
}

#tree-nation-offset-website {
  display: flex;
  align-items: center;
}

/* Dark mode adjustments that tokens cannot express */
.is-dark th {
  background: var(--witch-rose-deep);
}

@media screen and (max-width: 1000px) {
  #tree-nation-offset-website {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  main {
    padding: 24px 20px;
  }

  #footer-inner-container {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  #footer-legal {
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}

@media print {
  footer,
  #community-cta,
  #modal-bg,
  body::before,
  body::after {
    display: none;
  }

  body {
    background: #FFFFFF;
  }

  main {
    border: 0;
    box-shadow: none;
  }
}
`;

// #endregion

// #region Components

const nhcarriganHeadersCurrentYear = new Date().getFullYear().
  toString();
const nhcarriganHeadersFooter = document.createElement("footer");
nhcarriganHeadersFooter.innerHTML = `
<div id="footer-inner-container">
<div id="footer-legal">
  <p>
    <a href="https://docs.nhcarrigan.com/#/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
    &middot;
    <a href="https://docs.nhcarrigan.com/#/terms" target="_blank" rel="noreferrer">Terms of Service</a>
    &middot;
    &copy; NHCarrigan ${nhcarriganHeadersCurrentYear}. All rights reserved.
  </p>
  <address>
    15640 NE Fourth Plain Blvd, Ste 106 #923<br />
    Vancouver, Washington 98682, United States
    &middot;
    <a href="tel:+19713038662">(971) 303-8662</a>
  </address>
</div>
<button id="theme-select-button" type="button">
  <i id="theme-select-icon" class="fa-solid fa-moon"></i> Toggle Theme
</button>
<div id="tree-nation-offset-website" data-widget-type="offset-website" data-tree-nation-code="a17464e0cd351220" data-lang="en" data-theme="dark"></div>
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
let attempts = 0;
const interval = setInterval(() => {
  attempts += 1;
  const tree = document.querySelector("#tree-nation-offset-website");
  if (!tree) {
    console.log("DOM has not hydrated yet, cannot load TreeNation badge.");
    if (attempts >= 15) {
      clearInterval(interval);
    }
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
nhcarriganHeadersFontAwesome.src
  = "https://cdn.nhcarrigan.com/font-awesome/all.min.js";

const nhcarriganHeadersConsentBanner = document.createElement("script");
nhcarriganHeadersConsentBanner.src
  = "https://app.secureprivacy.ai/script/6ac55f2e4c3ac856868750c3.js";

const nhcarriganHeadersGoogleTag = document.createElement("script");
nhcarriganHeadersGoogleTag.async = true;
nhcarriganHeadersGoogleTag.src
  = "https://www.googletagmanager.com/gtag/js?id=G-86HKPXSJCX";

const nhcarriganHeadersGoogleTagConfig = document.createElement("script");
nhcarriganHeadersGoogleTagConfig.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-86HKPXSJCX');
`;
const nhcarriganHeadersHubspot = document.createElement("script");
nhcarriganHeadersHubspot.id = "hs-script-loader";
nhcarriganHeadersHubspot.async = true;
nhcarriganHeadersHubspot.defer = true;
nhcarriganHeadersHubspot.src = "https://js-na2.hs-scripts.com/247600308.js";
const nhcarriganHeadersGoogleAdsense = document.createElement("script");
nhcarriganHeadersGoogleAdsense.async = true;
nhcarriganHeadersGoogleAdsense.src
  // eslint-disable-next-line stylistic/max-len -- big boi string
  = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3569924701890974";
nhcarriganHeadersGoogleAdsense.setAttribute("crossorigin", "anonymous");

// #endregion

// #region Inject Elements

/**
 * Pages may declare their own metadata and icons (for example, so that
 * crawlers that do not run scripts can read them). Anything a page has
 * already declared is left alone.
 * @param meta - The meta element to add when the page has not declared it.
 */
const nhcarriganHeadersAppendMeta = (meta: HTMLMetaElement): void => {
  const property = meta.getAttribute("property");
  const name = meta.getAttribute("name");
  let selector = "meta[charset]";
  if (property !== null) {
    selector = `meta[property="${property}"]`;
  } else if (name !== null) {
    selector = `meta[name="${name}"]`;
  }
  if (document.querySelector(selector) === null) {
    nhcarriganHeadersHead?.appendChild(meta);
  }
};

/**
 * Adds an icon link unless the page already links the same file.
 * @param icon - The icon link element to add.
 */
const nhcarriganHeadersAppendIcon = (icon: HTMLLinkElement): void => {
  const href = icon.getAttribute("href");
  if (document.querySelector(`link[href="${href ?? ""}"]`) === null) {
    nhcarriganHeadersHead?.appendChild(icon);
  }
};

const nhcarriganHeadersMetaTags = [
  nhcarriganHeadersCharacterSet,
  nhcarriganHeadersViewport,
  nhcarriganHeadersThemeColor,
  nhcarriganHeadersReferrer,
  nhcarriganHeadersOpenGraphTitle,
  nhcarriganHeadersOpenGraphDescription,
  nhcarriganHeadersOpenGraphImage,
  nhcarriganHeadersOpenGraphUrl,
  nhcarriganHeadersOpenGraphType,
  nhcarriganHeadersOpenGraphSiteName,
  nhcarriganHeadersOpenGraphLocale,
  nhcarriganHeadersOpenGraphImageAlt,
  nhcarriganHeadersOpenGraphImageWidth,
  nhcarriganHeadersOpenGraphImageHeight,
  nhcarriganHeadersTwitterCard,
  nhcarriganHeadersTwitterDomain,
  nhcarriganHeadersTwitterUrl,
  nhcarriganHeadersTwitterTitle,
  nhcarriganHeadersTwitterDescription,
  nhcarriganHeadersTwitterImage,
  nhcarriganHeadersTwitterSite,
  nhcarriganHeadersTwitterCreator,
  nhcarriganHeadersFormatDetection,
  nhcarriganHeadersRobots,
  nhcarriganHeadersAuthor,
];
for (const meta of nhcarriganHeadersMetaTags) {
  nhcarriganHeadersAppendMeta(meta);
}

const nhcarriganHeadersIcons = [
  nhcarriganHeadersFavicon,
  nhcarriganHeadersAppleTouchIcon,
  nhcarriganHeadersSmallIcon,
  nhcarriganHeadersLargeIcon,
];
for (const icon of nhcarriganHeadersIcons) {
  nhcarriganHeadersAppendIcon(icon);
}

nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTokens);
if (!nhcarriganHeadersIsExcluded("layout")) {
  nhcarriganHeadersHead?.appendChild(nhcarriganHeadersStyles);
}

nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTreeNation);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersFontAwesome);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersConsentBanner);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersGoogleTag);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersGoogleTagConfig);
if (!nhcarriganHeadersIsExcluded("ads")) {
  nhcarriganHeadersHead?.appendChild(nhcarriganHeadersGoogleAdsense);
}
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersHubspot);

if (!nhcarriganHeadersIsExcluded("footer")) {
  nhcarriganHeadersBody?.appendChild(nhcarriganHeadersFooter);

  /*
   * This script is often loaded with async, so it can run before the page's
   * own content has been parsed. Re-append the footer once parsing finishes so
   * it always ends up after the content rather than before it.
   */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      nhcarriganHeadersBody?.appendChild(nhcarriganHeadersFooter);
    });
  }
}
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

// #region CTA

const nhcarriganNoModalUrls = new Set([
  "https://forms.nhcarrigan.com/o/docs/forms/7LNb8jFoN4SPBvP7vRxDi2/4",
]);

/**
 * Builds the community popup dialog.
 * @returns The dialog, not yet attached to the page.
 */
const nhcarriganHeadersCreateCta = (): HTMLDialogElement => {
  const dialog = document.createElement("dialog");
  Object.assign(dialog.style, {
    backgroundColor: "var(--surface)",
    border:          "1px solid var(--border-subtle)",
    borderRadius:    "var(--radius)",
    boxShadow:       "0 24px 60px rgba(0, 0, 0, 0.45)",
    color:           "var(--foreground)",
    fontFamily:      "var(--font-body)",
    left:            "50%",
    maxWidth:        "420px",
    padding:         "32px",
    position:        "fixed",
    textAlign:       "center",
    top:             "50%",
    transform:       "translate(-50%, -50%)",
    width:           "95%",
  });
  dialog.id = "community-cta";
  dialog.setAttribute("aria-labelledby", "community-cta-title");
  dialog.innerHTML = `
  <button type="button" aria-label="Close" style="position: absolute; top: 12px; right: 12px; padding: 0; width: 36px; height: 36px; font-size: 1.4rem; line-height: 1; background: transparent; color: var(--foreground); border: 1px solid var(--border-subtle);">&times;</button>
  <h2 id="community-cta-title" style="font-size: 1.6rem; margin: 8px 0 20px 0;">Join the NHCarrigan community</h2>
  <div style="display: flex; justify-content: center; margin-bottom: 24px; align-items: center; gap: 20px; text-align: left;">
    <img src="https://cdn.nhcarrigan.com/logo.png" alt="NHCarrigan logo" style="width: 80px; height: 80px; border-radius: 12px;">
    <p style="flex: 1; margin: 0; line-height: 1.6;">
      Stay connected with our latest projects, get help with our products and meet the people behind them.
    </p>
  </div>
  <a href="https://chat.nhcarrigan.com" target="_blank" rel="noreferrer" style="display: inline-block; padding: 0.75rem 1.75rem; background: var(--witch-rose); color: #FFFFFF; font-weight: 600; text-decoration: none; border-radius: 999px;">
    Join us on Discord
  </a>
`;
  return dialog;
};

/**
 * Builds the blurred backdrop shown behind the popup.
 * @returns The backdrop, not yet attached to the page.
 */
const nhcarriganHeadersCreateModalBackground = (): HTMLDivElement => {
  const background = document.createElement("div");
  Object.assign(background.style, {
    backdropFilter: "blur(5px)",
    background:     "rgba(10, 0, 9, 0.7)",
    display:        "none",
    height:         "100vh",
    left:           "0",
    position:       "fixed",
    top:            "0",
    width:          "100vw",
    zIndex:         "4999",
  });
  background.id = "modal-bg";
  return background;
};

/**
 * Whether the popup was shown within the last week.
 * @returns True when the popup should stay hidden.
 */
const nhcarriganHeadersWasShownRecently = (): boolean => {
  const lastShown = Number.parseInt(
    localStorage.getItem("naomi-community-cta") ?? "0",
    10,
  );
  const diff = Date.now() - new Date(lastShown).getTime();
  // We only want to show this once a week.
  return diff < 1000 * 60 * 60 * 24 * 7;
};

/**
 * Attaches the popup to the page and shows it, at most once a week.
 */
const nhcarriganHeadersInitialiseCta = (): void => {
  const dialog = nhcarriganHeadersCreateCta();
  const background = nhcarriganHeadersCreateModalBackground();
  const closeModal = (): void => {
    dialog.close();
    background.style.display = "none";
  };

  nhcarriganHeadersBody?.appendChild(dialog);
  nhcarriganHeadersBody?.appendChild(background);

  if (
    nhcarriganNoModalUrls.has(nhcarriganHeadersUrl)
    || nhcarriganHeadersWasShownRecently()
  ) {
    return;
  }

  dialog.showModal();
  background.style.display = "block";
  background.addEventListener("click", closeModal);
  dialog.querySelector("button")?.addEventListener("click", closeModal);
  dialog.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target === dialog) {
      closeModal();
    }
  });
  localStorage.setItem("naomi-community-cta", Date.now().toString());
};

if (!nhcarriganHeadersIsExcluded("cta")) {
  nhcarriganHeadersInitialiseCta();
}

// #endregion
