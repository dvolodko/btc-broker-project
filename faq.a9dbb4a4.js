!function(){let e;let t=document.querySelector(".overlay"),n=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),r=c.querySelector(".mobile-menu-back-btn"),a=c.querySelector(".mobile-nav-menu"),i=c.querySelector(".mobile-nav-menu-list"),o=document.querySelector("body");function s(e,t){e.classList.toggle(t)}function l(e){e.currentTarget===e.target&&v()}function u(e){"Escape"===e.code&&v()}function d(t){(e=t.target.closest(".mobile-nav-menu-item"))&&(e.classList.add("active"),r.classList.add("active"))}function m(){e&&(e.classList.remove("active"),r.classList.remove("active"))}function v(){t.classList.remove("active"),c.classList.remove("active"),o.classList.remove("no-scroll"),s(n,"active"),n.setAttribute("data-state","closed"),n.setAttribute("aria-expanded","false"),t.removeEventListener("click",l),document.removeEventListener("keydown",u),m(),i.removeEventListener("click",d),r.removeEventListener("click",m)}n.addEventListener("click",()=>{!function(e){let L=e.getAttribute("data-state");L&&"closed"!==L?v():(t.classList.add("active"),c.classList.add("active"),o.classList.add("no-scroll"),s(n,"active"),n.setAttribute("data-state","opened"),n.setAttribute("aria-expanded","true"),t.addEventListener("click",l),document.addEventListener("keydown",u),i.addEventListener("click",d),r.addEventListener("click",m),a.style.height=a.scrollHeight+"px")}(n)});let L=document.querySelectorAll(".accordion");L.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".accordion-panel");t&&function(e){let t=e.querySelector("button"),n=e.querySelector(".accordion-content"),c=t.getAttribute("aria-expanded");"true"===c?(t.setAttribute("aria-expanded",!1),n.setAttribute("aria-hidden",!0)):(t.setAttribute("aria-expanded",!0),n.setAttribute("aria-hidden",!1))}(t)})});let y=document.querySelectorAll(".footer-menu");y.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})});let b=document.querySelector(".overlay"),q=document.querySelector(".header-nav-menu-item-services"),S=q.querySelector(".header-menu-container-services"),f=document.querySelector(".header-nav-menu-item-about-us"),g=f.querySelector(".header-menu-container-about-us");function h(e){b.classList.add("active"),e.classList.add("active")}function E(e){b.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),q.addEventListener("mouseenter",()=>{q.addEventListener("mouseleave",()=>{E(S)}),h(S)}),f.addEventListener("mouseenter",()=>{f.addEventListener("mouseleave",()=>{E(g)}),h(g)})}();//# sourceMappingURL=faq.a9dbb4a4.js.map

//# sourceMappingURL=faq.a9dbb4a4.js.map
