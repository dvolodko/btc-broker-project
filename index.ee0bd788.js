!function(){// import hamburgerButton from './js/button-hamburger';
let e=document.querySelector(".mobile-menu-overlay"),t=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),a=document.querySelector("body");function n(e,t){e.classList.toggle(t)}function s(){e.classList.remove("active"),c.classList.remove("active"),a.classList.remove("no-scroll"),n(t,"active"),e.removeEventListener("click",o),document.removeEventListener("keydown",i),t.setAttribute("data-state","closed"),t.setAttribute("aria-expanded","false")}function o(e){e.currentTarget===e.target&&s()}function i(e){"Escape"===e.code&&s()}t.addEventListener("click",()=>{!// function toggleMobileMenu(element) {
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
function(r){let d=r.getAttribute("data-state");d&&"closed"!==d?s():(e.classList.add("active"),c.classList.add("active"),a.classList.add("no-scroll"),n(t,"active"),e.addEventListener("click",o),document.addEventListener("keydown",i),t.setAttribute("data-state","opened"),t.setAttribute("aria-expanded","true"))}(t)})}();//# sourceMappingURL=index.ee0bd788.js.map

//# sourceMappingURL=index.ee0bd788.js.map
