// Stopping animations initially
// let resizeTimer;
// window.addEventListener("resize", () => {
//   document.body.classList.add("resize-animation-stopper");
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     document.body.classList.remove("resize-animation-stopper");
//   }, 400);
// });

// Dropdown Menu
// document.addEventListener("click", (e) => {
//   const dropDownButton = e.target.matches("[data-dropdown-button]");
//   if (!dropDownButton && e.target.closest("[data-dropdown]") != null) return;

//   let currentDropdown;
//   if (dropDownButton) {
//     currentDropdown = e.target.closest("[data-dropdown]");
//     currentDropdown.classList.toggle("view");
//     // currentDropdown.style.visbility = "visible";
//   }
//   document.querySelectorAll("[data-dropdown].view").forEach((dropdown) => {
//     if (dropdown === currentDropdown) return;
//     dropdown.classList.remove("view");
//     // dropdown.style.visibility = "none";
//   });
// });

// Hamburger Menu
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const navLink = document.querySelectorAll(".nav-link");
// const mobileContainer = document.querySelector(".mobile-container");

// hamburger.addEventListener("click", mobileMenu);

// navLink.forEach((n) => n.addEventListener("click", menuClose));

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
//   mobileContainer.classList.toggle("active");
// }
// function menuClose() {
//   hamburger.classList.remove("active");
//   navMenu.classList.remove("active");
//   mobileContainer.classList.remove("active");
// }

// ***************************************************
// RE DONE NAVBAR / NAVDRAWER
// ***************************************************

const hamburger = document.querySelector("[data-hamburger]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const mobileNavDrawer = document.querySelector("[data-mobileNav-close-drawer]");
const bar1 = document.querySelector("[data-bar1]");
const bar2 = document.querySelector("[data-bar2]");
const bar3 = document.querySelector("[data-bar3]");

hamburger.addEventListener("click", () => {
  bar1.classList.add("animateBar1");
  bar2.classList.add("animateBar2");
  bar3.classList.add("animateBar3");
  mobileNav.classList.add("mobileNavDrawerOpen");
  hamburger.style.opacity = 0;
});

mobileNavDrawer.addEventListener("click", () => {
  mobileNav.classList.remove("mobileNavDrawerOpen");
  bar1.classList.remove("animateBar1");
  bar2.classList.remove("animateBar2");
  bar3.classList.remove("animateBar3");
  hamburger.style.opacity = 1;
});
