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
nhcarriganHeadersThemeColor.setAttribute("content", "#E1F6F9");
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
@font-face {
  font-family: 'Vampyr';
  src: url('https://cdn.nhcarrigan.com/fonts/vampyr.ttf') format('truetype');
}

:root {
  --foreground: #8F2447;
  --background: #E1F6F9DC;
  font-size: 12pt;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Vampyr', monospace;
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
  margin-bottom: 85px;
  padding: 10px;
}
footer {
  width: 100%;
  color: var(--foreground);
  background-color: var(--background);
  position: fixed;
  bottom: 0;
  height: 75px;
  padding: 0 10px;
}
#footer-inner-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
}
#footer-badge-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  justify-content: space-around;
}
#show-socials-button, #theme-select-button {
  background: none;
  border: none;
  cursor: url('https://cdn.nhcarrigan.com/cursors/pointer.cur'), pointer;
  color: var(--foreground);
  font-size: 1rem;
  font-family: 'Vampyr', monospace;
}
#show-socials-button > i, #theme-select-button > i {
  font-size: 1.5rem;
}
a {
  color: unset;
  cursor: url('https://cdn.nhcarrigan.com/cursors/pointer.cur'), pointer;
}
#tree-nation-offset-website {
  display: flex;
  align-items: center;
}
#social-list {
  position: absolute;
  bottom: 75px;
  left: 0;
  right: 0;
  width: 100vw;
  max-width: 400px;
  padding: 10px;
  background-color: var(--background);
  color: var(--foreground);
  border-radius: 10px;
  border: 1px solid var(--foreground);
  display: none;
  z-index: 1000;
}
.social-list-item {
  padding: 10px;
}
.social-list-item > a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
}
.social-list-divider {
  border: 0.5px solid var(--foreground);
}
.social-list-item:hover {
  background-color: var(--foreground);
  color: var(--background);
}
.is-dark {
  --foreground: #E1F6F9;
  --background: #8F2447bb;
}
@media screen and (max-width: 625px) {
  #tree-nation-offset-website {
    display: none;
  }
  footer, #footer-inner-container {
    height: 50px;
    justify-content: space-around;
  }
  main {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 425px) {
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
<p id="footer-copyright">&copy; <a href="https://nhcarrigan.com" target="_blank">Naomi Carrigan</a></p>
<button id="show-socials-button" type="button">
  <i class="fa-solid fa-share-nodes"></i> Connect with Us
</button>
<button id="theme-select-button" type="button">
  <i id="theme-select-icon" class="fa-solid fa-moon"></i> Toggle Theme
</button>
<a id="donate-badge" href="https://buy.stripe.com/cN24iTfqu1j6b3afZ2" target="_blank" rel="noreferrer">
  <img src="https://cdn.nhcarrigan.com/donate.png" alt="Donate" style="width: 70px; height: 70px;">
</a>
<div id="tree-nation-offset-website"></div>
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
  = "https://widgets.tree-nation.com/js/widgets/v1/widgets.min.js?v=1.0";
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
nhcarriganHeadersFontAwesome.src = "https://kit.fontawesome.com/f949111719.js";
const nhcarriganHeadersAnalytics = document.createElement("script");
nhcarriganHeadersAnalytics.defer = true;
nhcarriganHeadersAnalytics.setAttribute("domain", "nhcarrigan.com");
nhcarriganHeadersAnalytics.src
  // eslint-disable-next-line stylistic/max-len
  = "https://analytics.nhcarrigan.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js";
nhcarriganHeadersAnalytics.setAttribute(
  "event-domain",
  nhcarriganHeadersHostname,
);
nhcarriganHeadersAnalytics.setAttribute("data-domain", "nhcarrigan.com");
nhcarriganHeadersAnalytics.setAttribute(
  "event-page",
  nhcarriganHeadersTitle?.innerText ?? "Unknown Page",
);
nhcarriganHeadersAnalytics.setAttribute(
  "event-path",
  nhcarriganHeadersPathname,
);
const nhcarriganHeadersAnalytics2 = document.createElement("script");
nhcarriganHeadersAnalytics2.innerHTML = `
window.plausible = window.plausible ??
function() { 
  (window.plausible.q = window.plausible.q ?? []).push(arguments) 
}
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
nhcarriganHeadersCta.style.padding = "10px";
nhcarriganHeadersCta.style.borderRadius = "10px";
nhcarriganHeadersCta.style.backgroundColor = "var(--background)";
nhcarriganHeadersCta.style.color = "var(--foreground)";
nhcarriganHeadersCta.style.textAlign = "center";
nhcarriganHeadersCta.style.width = "95%";
nhcarriganHeadersCta.style.maxWidth = "400px";
nhcarriganHeadersCta.id = "community-cta";
nhcarriganHeadersCta.innerHTML = `
  <h1 autofocus>Hello~!</h1>
  <div style="display: flex; justify-content: space-around; margin-bottom: 10px;">
    <img src="https://cdn.nhcarrigan.com/logo.png" alt="NHCarrigan Logo" style="width: 100px; height: 100px;">
    <p>
      Consider joining our community so you can keep up to date on all of our latest activities!
    </p>
  </div>
  <a href="https://chat.nhcarrigan.com" target="_blank" rel="noreferrer" style="padding: 10px; background: var(--foreground); color: var(--background); outline: none">Okay, take me there~!</a>
`;

const nhcarriganHeadersModalBg = document.createElement("div");
nhcarriganHeadersModalBg.style.zIndex = "4999";
nhcarriganHeadersModalBg.style.position = "fixed";
nhcarriganHeadersModalBg.style.top = "0";
nhcarriganHeadersModalBg.style.left = "0";
nhcarriganHeadersModalBg.style.width = "100vw";
nhcarriganHeadersModalBg.style.height = "100vh";
nhcarriganHeadersModalBg.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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
nhcarriganHeadersShowModal();
