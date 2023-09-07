// import hamburgerButton from './js/button-hamburger';
const e=document.querySelector(".mobile-menu-overlay"),t=document.querySelector(".button-hamburger"),a=document.querySelector(".mobile-menu-container"),c=document.querySelector("body");function n(e,t){e.classList.toggle(t)}function r(){e.classList.remove("active"),a.classList.remove("active"),c.classList.remove("no-scroll"),n(t,"active"),e.removeEventListener("click",i),document.removeEventListener("keydown",o),t.setAttribute("data-state","closed"),t.setAttribute("aria-expanded","false")}function i(e){e.currentTarget===e.target&&r()}function o(e){"Escape"===e.code&&r()}t.addEventListener("click",()=>{!// function toggleMobileMenu(element) {
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
function(d){let s=d.getAttribute("data-state");s&&"closed"!==s?r():(e.classList.add("active"),a.classList.add("active"),c.classList.add("no-scroll"),n(t,"active"),e.addEventListener("click",i),document.addEventListener("keydown",o),t.setAttribute("data-state","opened"),t.setAttribute("aria-expanded","true"))}(t)});const d=document.querySelector(".accordion");d.addEventListener("click",e=>{let t=e.target.closest(".accordion-panel");t&&function(e){let t=e.querySelector("button"),a=e.querySelector(".accordion-content"),c=t.getAttribute("aria-expanded");"true"===c?(t.setAttribute("aria-expanded",!1),a.setAttribute("aria-hidden",!0)):(t.setAttribute("aria-expanded",!0),a.setAttribute("aria-hidden",!1))}//# sourceMappingURL=index.041b4c88.js.map
(t)});
//# sourceMappingURL=index.041b4c88.js.map
