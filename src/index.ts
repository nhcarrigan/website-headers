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
Copyright (c) ${new Date().getFullYear().
  toString()} NHCarrigan
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

const { href: url, hostname, pathname } = window.location;

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
  --foreground: #2a0a18;
  --background: #ffb6c1bb;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
  margin-bottom: 105px;
  padding: 10px;
}
footer {
  width: 100%;
  color: var(--foreground);
  background-color: var(--background);
  position: fixed;
  bottom: 0;
  height: 95px;
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
#audio-theme-button, #theme-select-button {
  background: none;
  border: none;
  cursor: url('https://cdn.nhcarrigan.com/cursors/pointer.cur'), pointer;
  color: var(--foreground);
}
a {
  color: unset;
  cursor: url('https://cdn.nhcarrigan.com/cursors/pointer.cur'), pointer;
}
#tree-nation-offset-website {
  display: flex;
  align-items: center;
}
.is-dark {
  --foreground: #ffb6c1;
  --background: #2a0a18bb;
}
@media screen and (prefers-reduced-motion) {
  #footer-badge-container {
    display: none;
  }
  footer, #footer-inner-container {
    height: 75px;
    justify-content: space-around;
  }
  main {
    margin-bottom: 85px;
  }
}
@media screen and (max-width: 1225px) {
  #footer-badge-container {
    grid-template-columns: repeat(4, 1fr);
  }
  footer {
    height: 120px;
  }
  main {
    margin-bottom: 130px;
  }
}
@media screen and (max-width: 625px) {
  #tree-nation-offset-website {
    display: none;
  }
  #footer-badge-container {
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
`;

// #endregion

// #region Components

const footer = document.createElement("footer");
footer.innerHTML = `
<div id="footer-badge-container">
  <img src="https://cdn.nhcarrigan.com/blinkies/bigots.gif" alt="no bigots allowed"/>
  <img src="https://cdn.nhcarrigan.com/blinkies/blm.gif" alt="black lives matter"/>
  <img src="https://cdn.nhcarrigan.com/blinkies/miku.gif" alt="miku fan!!!"/>
  <img src="https://cdn.nhcarrigan.com/blinkies/neuro.gif" alt="neurodivergent pride"/>
  <img src="https://cdn.nhcarrigan.com/blinkies/palestine.gif" alt="free palestine"/>
  <img src="https://cdn.nhcarrigan.com/blinkies/technomancer.gif" alt="technomancer"/>
  <img src="https://cdn.nhcarrigan.com/blinkies/trans.gif" alt="trans rights!!!"/>
  <img src="https://cdn.nhcarrigan.com/blinkies/ukraine.gif" alt="glory to ukraine"/>
</div>
<div id="footer-inner-container">
<p>&copy; Naomi Carrigan</p>
<a href="https://chat.nhcarrigan.com" target="_blank" rel="noreferrer">
  <i class="fa-solid fa-comments"></i>
</a>
<button id="theme-select-button" type="button">
  <i id="theme-select-icon" class="fa-solid fa-moon"></i>
</button>
<button id="audio-theme-button" type="button">
  <i class="fa-solid fa-play"></i>
</button>
<div id="tree-nation-offset-website"></div>
</div>
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
videoOverlay.style.width = "100vw";
videoOverlay.style.height = "100vh";
videoOverlay.style.objectFit = "cover";
videoOverlay.style.zIndex = "10000";

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
const analytics = document.createElement("script");
analytics.defer = true;
analytics.setAttribute("domain", "nhcarrigan.com");
analytics.src
  // eslint-disable-next-line stylistic/max-len
  = "https://analytics.nhcarrigan.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js";
analytics.setAttribute("event-domain", hostname);
analytics.setAttribute("data-domain", "nhcarrigan.com");
analytics.setAttribute("event-page", title?.innerText ?? "Unknown Page");
analytics.setAttribute("event-path", pathname);
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
head?.appendChild(analytics);
head?.appendChild(analytics2);

body?.appendChild(footer);
body?.appendChild(videoOverlay);
body?.appendChild(treeNationBottom);
// #endregion

// #region Audio

const playButton = document.querySelector("#audio-theme-button");
const audio = new Audio("https://cdn.nhcarrigan.com/theme.mp3");
let playing = false;
playButton?.addEventListener("click", () => {
  if (playing) {
    audio.pause();
    playing = false;
    playButton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
  } else {
    void audio.play();
    playing = true;
    playButton.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
  }
});

// #endregion

// #region Theme

const themeButton = document.querySelector("#theme-select-button");
const themeIcon = document.querySelector("#theme-select-icon");
if (localStorage.getItem("theme") === "dark") {
  themeIcon?.classList.remove("fa-moon");
  themeIcon?.classList.add("fa-sun");
  document.querySelector("html")?.classList.add("is-dark");
}
const toggleTheme = (): void => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    localStorage.setItem("theme", "light");
    themeIcon?.classList.remove("fa-sun");
    themeIcon?.classList.add("fa-moon");
    document.querySelector("html")?.classList.remove("is-dark");
    return;
  }
  localStorage.setItem("theme", "dark");
  themeIcon?.classList.remove("fa-moon");
  themeIcon?.classList.add("fa-sun");
  document.querySelector("html")?.classList.add("is-dark");
};
themeButton?.addEventListener("click", toggleTheme);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDark.matches && localStorage.getItem("theme") !== null) {
  localStorage.setItem("theme", "dark");
  themeIcon?.classList.remove("fa-moon");
  themeIcon?.classList.add("fa-sun");
  document.querySelector("html")?.classList.add("is-dark");
}

// #endregion

// #region CTA

const cta = document.createElement("dialog");
cta.style.position = "fixed";
cta.style.top = "50%";
cta.style.left = "50%";
cta.style.transform = "translate(-50%, -50%)";
cta.style.padding = "10px";
cta.style.borderRadius = "10px";
cta.style.backgroundColor = "var(--background)";
cta.style.color = "var(--foreground)";
cta.style.textAlign = "center";
cta.style.width = "95%";
cta.style.maxWidth = "400px";
cta.id = "community-cta";
cta.innerHTML = `
  <h1 autofocus>Hello~!</h1>
  <div style="display: flex; justify-content: space-around; margin-bottom: 10px;">
    <img src="https://cdn.nhcarrigan.com/logo.png" alt="NHCarrigan Logo" style="width: 100px; height: 100px; border-radius: 50%;">
    <p>
      Consider joining our community so you can keep up to date on all of our latest activities!
    </p>
  </div>
  <a href="https://chat.nhcarrigan.com" target="_blank" rel="noreferrer" style="padding: 10px; background: var(--foreground); color: var(--background); outline: none">Okay, take me there~!</a>
`;

const modalBg = document.createElement("div");
modalBg.style.zIndex = "4999";
modalBg.style.position = "fixed";
modalBg.style.top = "0";
modalBg.style.left = "0";
modalBg.style.width = "100vw";
modalBg.style.height = "100vh";
modalBg.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
modalBg.style.display = "none";
modalBg.id = "modal-bg";
const closeModal = (): void => {
  cta.close();
  modalBg.style.display = "none";
};
const handleModalClick = (event: MouseEvent): void => {
  event.stopPropagation();
  if (event.target === cta) {
    closeModal();
  }
};
const showModal = (): void => {
  const lastShown = Number.parseInt(
    localStorage.getItem("naomi-community-cta") ?? "0",
    10,
  );
  const lastShownDate = new Date(lastShown);
  const diff = Date.now() - lastShownDate.getTime();
  console.table({ diff, lastShown, lastShownDate });
  // We only want to show this once a week.
  if (diff < 1000 * 60 * 60 * 24 * 7) {
    return;
  }
  cta.showModal();
  modalBg.style.display = "block";
  modalBg.addEventListener("click", closeModal);
  const closeButton = cta.querySelector("button");
  closeButton?.addEventListener("click", closeModal);
  cta.addEventListener("click", handleModalClick);
  localStorage.setItem("naomi-community-cta", Date.now().toString());
};

body?.appendChild(cta);
body?.appendChild(modalBg);
showModal();
