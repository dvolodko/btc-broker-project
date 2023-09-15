!function(){// import hamburgerButton from './js/button-hamburger';
let e=document.querySelector(".mobile-menu-overlay"),t=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),r=document.querySelector("body");function a(e,t){e.classList.toggle(t)}function n(){e.classList.remove("active"),c.classList.remove("active"),r.classList.remove("no-scroll"),a(t,"active"),e.removeEventListener("click",o),document.removeEventListener("keydown",i),t.setAttribute("data-state","closed"),t.setAttribute("aria-expanded","false")}function o(e){e.currentTarget===e.target&&n()}function i(e){"Escape"===e.code&&n()}t.addEventListener("click",()=>{!// function toggleMobileMenu(element) {
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
function(s){let l=s.getAttribute("data-state");l&&"closed"!==l?n():(e.classList.add("active"),c.classList.add("active"),r.classList.add("no-scroll"),a(t,"active"),e.addEventListener("click",o),document.addEventListener("keydown",i),t.setAttribute("data-state","opened"),t.setAttribute("aria-expanded","true"))}(t)});let s=document.querySelectorAll(".accordion");s.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".accordion-panel");t&&function(e){let t=e.querySelector("button"),c=e.querySelector(".accordion-content"),r=t.getAttribute("aria-expanded");"true"===r?(t.setAttribute("aria-expanded",!1),c.setAttribute("aria-hidden",!0)):(t.setAttribute("aria-expanded",!0),c.setAttribute("aria-hidden",!1))}(t)})});let l=document.querySelectorAll(".footer-menu");l.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-list");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})})}();//# sourceMappingURL=index.71f66ad7.js.map

//# sourceMappingURL=index.71f66ad7.js.map
