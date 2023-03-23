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
document.addEventListener("click", (e) => {
  const dropDownButton = e.target.matches("[data-dropdown-button]");
  if (!dropDownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (dropDownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("view");
  }
  document.querySelectorAll("[data-dropdown].view").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("view");
  });
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const mobileContainer = document.querySelector(".mobile-container");

hamburger.addEventListener("click", mobileMenu);

navLink.forEach((n) => n.addEventListener("click", menuClose));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  mobileContainer.classList.toggle("active");
}
function menuClose() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  mobileContainer.classList.remove("active");
}
