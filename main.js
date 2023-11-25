AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
const nav = document.querySelector("nav");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.style.display = "flex";
  nav.style.top = "0";
});

closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.style.top = "-200%";
});

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeLink = document.getElementById("theme-style");

  // Function to toggle between light and dark themes
  function toggleTheme() {
    // Check if the current theme is light
    const isLightTheme = themeLink.href.includes("/styles/style.css");

    // Toggle between light and dark themes
    themeLink.href = isLightTheme ? "/styles/dark.css" : "/styles/style.css";
    console.log(themeLink.href);
  }

  // Attach the toggleTheme function to the button click event
  themeToggle.addEventListener("click", toggleTheme);
});
