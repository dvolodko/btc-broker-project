!function(){let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired9f0;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequired9f0=o);let c=document.querySelector(".overlay"),s=document.querySelector(".button-hamburger"),a=document.querySelector(".mobile-menu-container"),i=a.querySelector(".mobile-menu-back-btn"),l=a.querySelector(".mobile-nav-menu"),d=a.querySelector(".mobile-nav-menu-list"),u=document.querySelector("body");function m(e,t){e.classList.toggle(t)}function v(e){e.currentTarget===e.target&&b()}function f(e){"Escape"===e.code&&b()}function L(t){(e=t.target.closest(".mobile-nav-menu-item"))&&(e.classList.add("active"),i.classList.add("active"))}function y(){e&&(e.classList.remove("active"),i.classList.remove("active"))}function b(){c.classList.remove("active"),a.classList.remove("active"),u.classList.remove("no-scroll"),m(s,"active"),s.setAttribute("data-state","closed"),s.setAttribute("aria-expanded","false"),c.removeEventListener("click",v),document.removeEventListener("keydown",f),y(),d.removeEventListener("click",L),i.removeEventListener("click",y)}s.addEventListener("click",()=>{!function(e){let t=e.getAttribute("data-state");t&&"closed"!==t?b():(c.classList.add("active"),a.classList.add("active"),u.classList.add("no-scroll"),m(s,"active"),s.setAttribute("data-state","opened"),s.setAttribute("aria-expanded","true"),c.addEventListener("click",v),document.addEventListener("keydown",f),d.addEventListener("click",L),i.addEventListener("click",y),l.style.height=l.scrollHeight+"px")}(s)});let h=document.querySelectorAll(".footer-menu");h.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})});let g=document.querySelector(".overlay"),E=document.querySelector(".header-nav-menu-item-services"),q=E.querySelector(".header-menu-container-services"),p=document.querySelector(".header-nav-menu-item-about-us"),S=p.querySelector(".header-menu-container-about-us");function w(e){g.classList.add("active"),e.classList.add("active")}function x(e){g.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),E.addEventListener("mouseenter",()=>{E.addEventListener("mouseleave",()=>{x(q)}),w(q)}),p.addEventListener("mouseenter",()=>{p.addEventListener("mouseleave",()=>{x(S)}),w(S)}),window.addEventListener("scroll",function(){let e=this.scrollY;e>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")}),o("EKbOE")}();//# sourceMappingURL=contact-us.01dc60ad.js.map

//# sourceMappingURL=contact-us.01dc60ad.js.map
