// import hamburgerButton from './js/button-hamburger';
let e;const t=document.querySelector(".overlay"),r=document.querySelector(".button-hamburger"),c=document.querySelector(".mobile-menu-container"),i=c.querySelector(".mobile-menu-back-btn"),s=c.querySelector(".mobile-nav-menu"),l=c.querySelector(".mobile-nav-menu-list"),n=document.querySelector("body");function a(e,t){e.classList.toggle(t)}function d(e){e.currentTarget===e.target&&v()}function o(e){"Escape"===e.code&&v()}function u(t){(e=t.target.closest(".mobile-nav-menu-item"))&&(e.classList.add("active"),i.classList.add("active"))}function m(){e&&(e.classList.remove("active"),i.classList.remove("active"))}function v(){t.classList.remove("active"),c.classList.remove("active"),n.classList.remove("no-scroll"),a(r,"active"),r.setAttribute("data-state","closed"),r.setAttribute("aria-expanded","false"),t.removeEventListener("click",d),document.removeEventListener("keydown",o),m(),l.removeEventListener("click",u),i.removeEventListener("click",m)}r.addEventListener("click",()=>{!function(e){let b=e.getAttribute("data-state");b&&"closed"!==b?v():(t.classList.add("active"),c.classList.add("active"),n.classList.add("no-scroll"),a(r,"active"),r.setAttribute("data-state","opened"),r.setAttribute("aria-expanded","true"),t.addEventListener("click",d),document.addEventListener("keydown",o),l.addEventListener("click",u),i.addEventListener("click",m),s.style.height=s.scrollHeight+"px")}(r)});const b=document.querySelectorAll(".accordion");b.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".accordion-panel");t&&function(e){let t=e.querySelector("button"),r=e.querySelector(".accordion-content"),c=t.getAttribute("aria-expanded");"true"===c?(t.setAttribute("aria-expanded",!1),r.setAttribute("aria-hidden",!0)):(t.setAttribute("aria-expanded",!0),r.setAttribute("aria-hidden",!1))}(t)})});const y=document.querySelectorAll(".footer-menu");y.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})});const q=document.querySelector(".overlay"),L=document.querySelector(".header-nav-menu-item-services"),h=L.querySelector(".header-menu-container-services"),S=document.querySelector(".header-nav-menu-item-about-us"),A=S.querySelector(".header-menu-container-about-us");function g(e){q.classList.add("active"),e.classList.add("active")}function E(e){q.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),L.addEventListener("mouseenter",()=>{L.addEventListener("mouseleave",()=>{E(h)}),g(h)}),S.addEventListener("mouseenter",()=>{S.addEventListener("mouseleave",()=>{E(A)}),g(A)});// Прихований інпут про Політично значущу особу
const x=document.querySelector('[aria-labelledby="isPEP"]'),p=document.getElementById("isPEPtrue"),k=x.querySelector(".hidden-inputs-wrapper"),f=k.querySelector("label"),H=k.querySelector("input");x.addEventListener("click",()=>{p.checked?(k.style.maxHeight=k.scrollHeight+"px",f.classList.add("required"),H.setAttribute("required",!0)):(k.style.maxHeight=null,f.classList.remove("required"),H.removeAttribute("required"))});// Дізейбл полів про ІПН у разі позначки про відмову від ІПН
const I=document.querySelector(".taxID-disable"),P=I.querySelector(".taxID-label"),w=I.querySelector(".taxID-input"),B=I.querySelector(".IPN-file-label"),U=I.querySelector(".IPN-file-input"),D=document.getElementById("nonIPN");D.addEventListener("click",()=>{D.checked?(P.classList.remove("required"),B.classList.remove("required"),w.removeAttribute("required"),U.removeAttribute("required"),w.setAttribute("disabled",!0),U.setAttribute("disabled",!0)):(P.classList.add("required"),B.classList.add("required"),w.setAttribute("required",!0),U.setAttribute("required",!0),w.removeAttribute("disabled"),U.removeAttribute("disabled"))});// Приховані інпути про податкове резиденство Сполучених Штатів
const N=document.querySelector('[aria-labelledby="tax-residence"]'),T=N.querySelector(".hidden-inputs-wrapper"),j=document.getElementById("is-US-tax-residence"),z=document.getElementById("is-nonUkraine-tax-residence"),C=N.querySelector('[value="UA"]'),F=N.querySelector('[value="US"]'),G=N.querySelector('[value="00"]');j.addEventListener("click",()=>{z.checked||(j.checked?(T.style.maxHeight=T.scrollHeight+"px",C.removeAttribute("selected"),F.setAttribute("selected",!0)):(T.style.maxHeight=null,C.setAttribute("selected",!0),F.removeAttribute("selected")))}),z.addEventListener("click",()=>{j.checked||(z.checked?(T.style.maxHeight=T.scrollHeight+"px",C.removeAttribute("selected"),G.setAttribute("selected",!0)):(T.style.maxHeight=null,C.setAttribute("selected",!0),G.removeAttribute("selected")))});//# sourceMappingURL=form.713fe1e2.js.map

//# sourceMappingURL=form.713fe1e2.js.map