var e,t,n,r,o;e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},null==(r=e.parcelRequired9f0)&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired9f0=r),(o=r.register)("cs7FV",function(e,t){let n;let r=document.querySelector(".overlay"),o=document.querySelector(".button-hamburger"),i=document.querySelector(".mobile-menu-container"),c=i.querySelector(".mobile-menu-back-btn"),a=i.querySelector(".mobile-nav-menu"),s=i.querySelector(".mobile-nav-menu-list"),l=document.querySelector("body");function d(e,t){e.classList.toggle(t)}function u(e){e.currentTarget===e.target&&L()}function v(e){"Escape"===e.code&&L()}function m(e){(n=e.target.closest(".mobile-nav-menu-item"))&&(n.classList.add("active"),c.classList.add("active"))}function f(){n&&(n.classList.remove("active"),c.classList.remove("active"))}function L(){r.classList.remove("active"),i.classList.remove("active"),l.classList.remove("no-scroll"),d(o,"active"),o.setAttribute("data-state","closed"),o.setAttribute("aria-expanded","false"),r.removeEventListener("click",u),document.removeEventListener("keydown",v),f(),s.removeEventListener("click",m),c.removeEventListener("click",f)}o.addEventListener("click",()=>{!function(e){let t=e.getAttribute("data-state");t&&"closed"!==t?L():(r.classList.add("active"),i.classList.add("active"),l.classList.add("no-scroll"),d(o,"active"),o.setAttribute("data-state","opened"),o.setAttribute("aria-expanded","true"),r.addEventListener("click",u),document.addEventListener("keydown",v),s.addEventListener("click",m),c.addEventListener("click",f),a.style.height=a.scrollHeight+"px")}(o)})}),o("iv6et",function(e,t){document.querySelectorAll(".accordion").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".accordion-panel");t&&function(e){let t=e.querySelector("button"),n=e.querySelector(".accordion-content");"true"===t.getAttribute("aria-expanded")?(t.setAttribute("aria-expanded",!1),n.setAttribute("aria-hidden",!0)):(t.setAttribute("aria-expanded",!0),n.setAttribute("aria-hidden",!1))}(t)})})}),o("1tHxY",function(e,t){document.querySelectorAll(".footer-menu").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})})}),o("eVdBp",function(e,t){let n=document.querySelector(".overlay"),r=document.querySelector(".header-nav-menu-item-services"),o=r.querySelector(".header-menu-container-services"),i=document.querySelector(".header-nav-menu-item-about-us"),c=i.querySelector(".header-menu-container-about-us");function a(e){n.classList.add("active"),e.classList.add("active")}function s(e){n.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),r.addEventListener("mouseenter",()=>{r.addEventListener("mouseleave",()=>{s(o)}),a(o)}),i.addEventListener("mouseenter",()=>{i.addEventListener("mouseleave",()=>{s(c)}),a(c)})}),o("8u5tz",function(e,t){window.addEventListener("scroll",function(){this.scrollY>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")})}),r("cs7FV"),r("iv6et"),r("1tHxY"),r("eVdBp"),r("8u5tz");
//# sourceMappingURL=faq.d92b9b37.js.map