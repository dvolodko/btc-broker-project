// import hamburgerButton from './js/button-hamburger';
const e=document.querySelector(".mobile-menu-overlay"),t=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),a=document.querySelector("body");function r(e,t){e.classList.toggle(t)}function i(){e.classList.remove("active"),c.classList.remove("active"),a.classList.remove("no-scroll"),r(t,"active"),e.removeEventListener("click",o),document.removeEventListener("keydown",n),t.setAttribute("data-state","closed"),t.setAttribute("aria-expanded","false")}function o(e){e.currentTarget===e.target&&i()}function n(e){"Escape"===e.code&&i()}t.addEventListener("click",()=>{!// function toggleMobileMenu(element) {
//   if (element.classList.contains('active')) {
//     closeModal();
//     hamburgerBtn.setAttribute('data-state', 'closed');
//     hamburgerBtn.setAttribute('aria-expanded', 'false');
//   } else {
//     openModal();
//     hamburgerBtn.setAttribute('data-state', 'opened');
//     hamburgerBtn.setAttribute('aria-expanded', 'true');
//   }
// }
function(s){let d=s.getAttribute("data-state");d&&"closed"!==d?i():(e.classList.add("active"),c.classList.add("active"),a.classList.add("no-scroll"),r(t,"active"),e.addEventListener("click",o),document.addEventListener("keydown",n),t.setAttribute("data-state","opened"),t.setAttribute("aria-expanded","true"))}(t)});const s=document.querySelector(".accordion");s.addEventListener("click",e=>{let t=e.target.closest(".accordion-panel");t&&function(e){let t=e.querySelector("button"),c=e.querySelector(".accordion-content"),a=e.querySelector(".accordion-icon-wrapper"),r=e.querySelector(".accordion-icon"),i=t.getAttribute("aria-expanded");"true"===i?(t.setAttribute("aria-expanded",!1),a.classList.remove("active"),r.classList.remove("active"),c.setAttribute("aria-hidden",!0)):(t.setAttribute("aria-expanded",!0),a.classList.add("active"),r.classList.add("active"),c.setAttribute("aria-hidden",!1))}//# sourceMappingURL=index.e978afd8.js.map
(t)});
//# sourceMappingURL=index.e978afd8.js.map
