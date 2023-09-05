!function(){// import hamburgerButton from './js/button-hamburger';
let e=document.querySelector(".mobile-menu-overlay"),t=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),a=document.querySelector("body");function n(e,t){e.classList.toggle(t)}function o(){e.classList.remove("active"),c.classList.remove("active"),a.classList.remove("no-scroll"),n(t,"active"),e.removeEventListener("click",i),document.removeEventListener("keydown",s),t.setAttribute("data-state","closed"),t.setAttribute("aria-expanded","false")}function i(e){e.currentTarget===e.target&&o()}function s(e){"Escape"===e.code&&o()}t.addEventListener("click",()=>{!// function toggleMobileMenu(element) {
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
function(r){let d=r.getAttribute("data-state");d&&"closed"!==d?o():(e.classList.add("active"),c.classList.add("active"),a.classList.add("no-scroll"),n(t,"active"),e.addEventListener("click",i),document.addEventListener("keydown",s),t.setAttribute("data-state","opened"),t.setAttribute("aria-expanded","true"))}(t)});let r=document.querySelectorAll(".accordion-container");r.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})})}();//# sourceMappingURL=index.f4bdeaaa.js.map

//# sourceMappingURL=index.f4bdeaaa.js.map
