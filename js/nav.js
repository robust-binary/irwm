const hamburger = document.querySelector("[data-hamburger]");
const mobileNav = document.querySelector("[data-mobile-nav]");
// const nav = document.querySelector("[data-navbar]");
// let navTop = nav.offsetTop;
const minWidth = 768;
let menuOpen = false;

// HAMBURGER TRANSITION + DRAWER OPENING
hamburger.addEventListener("click", () => {
  console.log("hamburger clicked");

  if (!menuOpen) {
    hamburger.classList.add("hamburger-open");
    mobileNav.classList.add("mobile-drawer-open");
    menuOpen = true;
  } else {
    hamburger.classList.remove("hamburger-open");
    mobileNav.classList.remove("mobile-drawer-open");
    menuOpen = false;
  }
});

// CHECKING TO SEE IF DRAW REMAINS OPEN
function checkScreenSize() {
  if (menuOpen || window.innerWidth > minWidth) {
    hamburger.classList.remove("hamburger-open");
    mobileNav.classList.remove("mobile-drawer-open");
    menuOpen = false;
  }
}
window.addEventListener("resize", checkScreenSize);

// FIXED NAVBAR AFTER LITTLE SCROLL

// function fixedNav() {
//   if (window.scrollY >= navTop) {
//     nav.classList.add("fixed");
//   } else {
//     nav.classList.remove("fixed");
//   }
// }
// window.addEventListener("scroll", fixedNav);
