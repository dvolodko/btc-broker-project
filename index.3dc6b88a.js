// import hamburgerButton from './js/button-hamburger';
let e;const t=document.querySelector(".mobile-menu-overlay"),c=document.querySelector(".button-hamburger"),i=document.querySelector(".mobile-menu-container"),n=i.querySelector(".mobile-menu-back-btn"),r=i.querySelector(".mobile-nav-menu"),a=i.querySelector(".mobile-nav-menu-list"),o=document.querySelector("body");function s(e,t){e.classList.toggle(t)}function l(e){e.currentTarget===e.target&&v()}function d(e){"Escape"===e.code&&v()}function u(t){(e=t.target.closest(".mobile-nav-menu-item"))&&(e.classList.add("active"),n.classList.add("active"))}function m(){e&&(e.classList.remove("active"),n.classList.remove("active"))}function v(){t.classList.remove("active"),i.classList.remove("active"),o.classList.remove("no-scroll"),s(c,"active"),c.setAttribute("data-state","closed"),c.setAttribute("aria-expanded","false"),t.removeEventListener("click",l),document.removeEventListener("keydown",d),m(),a.removeEventListener("click",u),n.removeEventListener("click",m)}c.addEventListener("click",()=>{!function(e){let b=e.getAttribute("data-state");b&&"closed"!==b?v():(t.classList.add("active"),i.classList.add("active"),o.classList.add("no-scroll"),s(c,"active"),c.setAttribute("data-state","opened"),c.setAttribute("aria-expanded","true"),t.addEventListener("click",l),document.addEventListener("keydown",d),a.addEventListener("click",u),n.addEventListener("click",m),r.style.height=r.scrollHeight+"px")}(c)});const b=document.querySelectorAll(".accordion");b.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".accordion-panel");t&&function(e){let t=e.querySelector("button"),c=e.querySelector(".accordion-content"),i=t.getAttribute("aria-expanded");"true"===i?(t.setAttribute("aria-expanded",!1),c.setAttribute("aria-hidden",!0)):(t.setAttribute("aria-expanded",!0),c.setAttribute("aria-hidden",!1))}(t)})});const L=document.querySelectorAll(".footer-menu");L.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}//# sourceMappingURL=index.3dc6b88a.js.map
(t)})});
//# sourceMappingURL=index.3dc6b88a.js.map