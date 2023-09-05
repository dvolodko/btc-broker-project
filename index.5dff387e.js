// import hamburgerButton from './js/button-hamburger';
const e=document.querySelector(".mobile-menu-overlay"),t=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),a=document.querySelector("body");function n(e,t){e.classList.toggle(t)}function o(){e.classList.remove("active"),c.classList.remove("active"),a.classList.remove("no-scroll"),n(t,"active"),e.removeEventListener("click",s),document.removeEventListener("keydown",i),t.setAttribute("data-state","closed"),t.setAttribute("aria-expanded","false")}function s(e){e.currentTarget===e.target&&o()}function i(e){"Escape"===e.code&&o()}t.addEventListener("click",()=>{!// function toggleMobileMenu(element) {
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
function(r){let d=r.getAttribute("data-state");d&&"closed"!==d?o():(e.classList.add("active"),c.classList.add("active"),a.classList.add("no-scroll"),n(t,"active"),e.addEventListener("click",s),document.addEventListener("keydown",i),t.setAttribute("data-state","opened"),t.setAttribute("aria-expanded","true"))}(t)});const r=document.querySelectorAll(".accordion-container");r.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});//# sourceMappingURL=index.5dff387e.js.map

//# sourceMappingURL=index.5dff387e.js.map
