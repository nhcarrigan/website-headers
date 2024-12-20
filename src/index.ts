/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

// #region Version
const version = "{{ version }}";
console.log(`
========================================
Loading NHCarrigan library v${version}.
Copyright (c) ${new Date().getFullYear()} NHCarrigan
Changelog: https://codeberg.org/nhcarrigan/website-headers/releases
Licensed under our public license: https://docs.nhcarrigan.com/legal/license
Questions? Contact us at https://docs.nhcarrigan.com/about/contact
========================================
`);
// #endregion

// #region Query Selectors
const head = document.querySelector("head");
const body = document.querySelector("body");
const title = document.querySelector("title");
const description = document.querySelector(`meta[name="description"]`);

const { href: url, hostname } = window.location;

// #endregion

// #region Metadata and Open Graph

/**
 * The title and description are set by each website. This should
 * only load things like open graph data and favicons.
 */
const openGraphTitle = document.createElement("meta");
openGraphTitle.setAttribute("property", "og:title");
openGraphTitle.setAttribute("content", title?.innerText ?? "NHCarrigan");
const openGraphDescription = document.createElement("meta");
openGraphDescription.setAttribute("property", "og:description");
openGraphDescription.setAttribute(
  "content",
  description?.getAttribute("content")
    // eslint-disable-next-line stylistic/max-len
    ?? "We are a software engineering and community management consulting firm.",
);
const openGraphImage = document.createElement("meta");
openGraphImage.setAttribute("property", "og:image");
openGraphImage.setAttribute(
  "content",
  "https://cdn.nhcarrigan.com/og-image.png",
);
const openGraphUrl = document.createElement("meta");
openGraphUrl.setAttribute("property", "og:url");
openGraphUrl.setAttribute("content", url);
const openGraphType = document.createElement("meta");
openGraphType.setAttribute("property", "og:type");
openGraphType.setAttribute("content", "website");

const twitterCard = document.createElement("meta");
twitterCard.setAttribute("name", "twitter:card");
twitterCard.setAttribute("content", "summary_large_image");
const twitterDomain = document.createElement("meta");
twitterDomain.setAttribute("name", "twitter:domain");
twitterDomain.setAttribute("content", hostname);
const twitterUrl = document.createElement("meta");
twitterUrl.setAttribute("name", "twitter:url");
twitterUrl.setAttribute("content", url);
const twitterTitle = document.createElement("meta");
twitterTitle.setAttribute("name", "twitter:title");
twitterTitle.setAttribute("content", title?.innerText ?? "NHCarrigan");
const twitterDescription = document.createElement("meta");
twitterDescription.setAttribute("name", "twitter:description");
twitterDescription.setAttribute(
  "content",
  description?.getAttribute("content")
    // eslint-disable-next-line stylistic/max-len
    ?? "We are a software engineering and community management consulting firm.",
);
const twitterImage = document.createElement("meta");
twitterImage.setAttribute("name", "twitter:image");
twitterImage.setAttribute("content", "https://cdn.nhcarrigan.com/og-image.png");

// #endregion

// #region Favicon

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/x-icon";
favicon.href = "https://cdn.nhcarrigan.com/favicon/favicon.ico";
const appleTouchIcon = document.createElement("link");
appleTouchIcon.rel = "apple-touch-icon";
appleTouchIcon.href = "https://cdn.nhcarrigan.com/favicon/apple-touch-icon.png";
const smallIcon = document.createElement("link");
smallIcon.rel = "icon";
smallIcon.href = "https://cdn.nhcarrigan.com/favicon/favicon-16x16.png";
const largeIcon = document.createElement("link");
largeIcon.rel = "icon";
largeIcon.href = "https://cdn.nhcarrigan.com/favicon/favicon-32x32.png";

// #endregion

// #region Styles

const styles = document.createElement("style");
styles.innerHTML = `
@font-face {
  font-family: 'OpenDyslexic';
  src: url('https://cdn.nhcarrigan.com/fonts/OpenDyslexicMono-Regular.otf') format('opentype');
}

:root {
  --foreground: #04624f;
  --background: #abfcecdd;
}

html {
  font-family: 'OpenDyslexic', monospace;
  cursor: url('https://cdn.nhcarrigan.com/cursors/cursor.cur'), auto;
  min-height: 100vh;
  min-width: 100vw;
}
body::before {
  background: url(https://cdn.nhcarrigan.com/background.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  pointer-events: none;
}
main {
  color: var(--foreground);
  background-color: var(--background);
  text-align: center;
  border-radius: 10px;
  width: 95%;
  max-width: 1080px;
  margin: auto;
}
footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--foreground);
  background-color: var(--background);
  position: fixed;
  bottom: 0;
}
a {
  color: unset;
  cursor: url('https://cdn.nhcarrigan.com/cursors/pointer.cur'), pointer;
}
span[style*="background-image"][style*="crisp.chat/avatar/website"] {
  bottom: 100px !important;
}
`;

// #endregion

// #region Components

const footer = document.createElement("footer");
footer.innerHTML = `
<p>&copy; Naomi Carrigan</p>
<a href="https://chat.nhcarrigan.com" target="_blank" rel="noreferrer">
  <i class="fa-solid fa-comments"></i>
</a>
<div className="h-4/5" id="tree-nation-offset-website"></div>
`;

const videoOverlay = document.createElement("video");
videoOverlay.autoplay = true;
videoOverlay.loop = true;
videoOverlay.muted = true;
videoOverlay.playsInline = true;
videoOverlay.src = "https://cdn.nhcarrigan.com/overlay.webm";
videoOverlay.style.pointerEvents = "none";
videoOverlay.style.position = "fixed";
videoOverlay.style.top = "0";
videoOverlay.style.left = "0";
videoOverlay.style.opacity = "0.25";

// #endregion

// #region Scripts

const treeNation = document.createElement("script");
treeNation.src
  = "https://widgets.tree-nation.com/js/widgets/v1/widgets.min.js?v=1.0";
const treeNationBottom = document.createElement("script");
treeNationBottom.defer = true;
treeNationBottom.async = true;
treeNationBottom.innerHTML = `
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
const fontAwesome = document.createElement("script");
fontAwesome.src = "https://kit.fontawesome.com/f949111719.js";
const hubspot = document.createElement("script");
hubspot.src = "https://js.hs-scripts.com/47086586.js";
hubspot.async = true;
hubspot.defer = true;
hubspot.id = "hs-script-loader";
const crisp = document.createElement("script");
crisp.innerHTML = `
window.$crisp=[];window.CRISP_WEBSITE_ID="5398ce41-4ceb-4e31-9049-4c784a70179a";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
`;
const analytics = document.createElement("script");
analytics.defer = true;
analytics.setAttribute("domain", "nhcarrigan.com");
analytics.src
  // eslint-disable-next-line stylistic/max-len
  = "https://analytics.nhcarrigan.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js";
const analytics2 = document.createElement("script");
analytics2.innerHTML = `
window.plausible = window.plausible ??
function() { 
  (window.plausible.q = window.plausible.q ?? []).push(arguments) 
}
`;

// #endregion

// #region Inject Elements

head?.appendChild(openGraphTitle);
head?.appendChild(openGraphDescription);
head?.appendChild(openGraphImage);
head?.appendChild(openGraphUrl);
head?.appendChild(openGraphType);
head?.appendChild(twitterCard);
head?.appendChild(twitterDomain);
head?.appendChild(twitterUrl);
head?.appendChild(twitterTitle);
head?.appendChild(twitterDescription);
head?.appendChild(twitterImage);

head?.appendChild(favicon);
head?.appendChild(appleTouchIcon);
head?.appendChild(smallIcon);
head?.appendChild(largeIcon);

head?.appendChild(styles);

head?.appendChild(treeNation);
head?.appendChild(fontAwesome);
head?.appendChild(hubspot);
head?.appendChild(crisp);
head?.appendChild(analytics);
head?.appendChild(analytics2);

body?.appendChild(footer);
body?.appendChild(videoOverlay);
body?.appendChild(treeNationBottom);
// #endregion
