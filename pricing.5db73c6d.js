let e;const t=document.querySelector(".overlay"),c=document.querySelector(".button-hamburger"),n=document.querySelector(".mobile-menu-container"),s=n.querySelector(".mobile-menu-back-btn"),r=n.querySelector(".mobile-nav-menu"),a=n.querySelector(".mobile-nav-menu-list"),o=document.querySelector("body");function i(e,t){e.classList.toggle(t)}function l(e){e.currentTarget===e.target&&v()}function d(e){"Escape"===e.code&&v()}function u(t){(e=t.target.closest(".mobile-nav-menu-item"))&&(e.classList.add("active"),s.classList.add("active"))}function m(){e&&(e.classList.remove("active"),s.classList.remove("active"))}function v(){t.classList.remove("active"),n.classList.remove("active"),o.classList.remove("no-scroll"),i(c,"active"),c.setAttribute("data-state","closed"),c.setAttribute("aria-expanded","false"),t.removeEventListener("click",l),document.removeEventListener("keydown",d),m(),a.removeEventListener("click",u),s.removeEventListener("click",m)}c.addEventListener("click",()=>{!function(e){let L=e.getAttribute("data-state");L&&"closed"!==L?v():(t.classList.add("active"),n.classList.add("active"),o.classList.add("no-scroll"),i(c,"active"),c.setAttribute("data-state","opened"),c.setAttribute("aria-expanded","true"),t.addEventListener("click",l),document.addEventListener("keydown",d),a.addEventListener("click",u),s.addEventListener("click",m),r.style.height=r.scrollHeight+"px")}(c)});const L=document.querySelectorAll(".footer-menu");L.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})});const y=document.querySelector(".overlay"),h=document.querySelector(".header-nav-menu-item-services"),b=h.querySelector(".header-menu-container-services"),q=document.querySelector(".header-nav-menu-item-about-us"),S=q.querySelector(".header-menu-container-about-us");function E(e){y.classList.add("active"),e.classList.add("active")}function f(e){y.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),h.addEventListener("mouseenter",()=>{h.addEventListener("mouseleave",()=>{f(b)}),E(b)}),q.addEventListener("mouseenter",()=>{q.addEventListener("mouseleave",()=>{f(S)}),E(S)}),window.addEventListener("scroll",function(){let e=this.scrollY;e>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")}//# sourceMappingURL=pricing.5db73c6d.js.map
);
//# sourceMappingURL=pricing.5db73c6d.js.map
