!function(){let e;var t,r,n,i,o,s,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function u(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var l={},f={},c=a.parcelRequired9f0;null==c&&((c=function(e){if(e in l)return l[e].exports;if(e in f){var t=f[e];delete f[e];var r={id:e,exports:{}};return l[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){f[e]=t},a.parcelRequired9f0=c);let h=document.querySelector(".overlay"),p=document.querySelector(".button-hamburger"),d=document.querySelector(".mobile-menu-container"),y=d.querySelector(".mobile-menu-back-btn"),g=d.querySelector(".mobile-nav-menu"),m=d.querySelector(".mobile-nav-menu-list"),b=document.querySelector("body");function E(e,t){e.classList.toggle(t)}function w(e){e.currentTarget===e.target&&O()}function v(e){"Escape"===e.code&&O()}function A(t){(e=t.target.closest(".mobile-nav-menu-item"))&&(e.classList.add("active"),y.classList.add("active"))}function S(){e&&(e.classList.remove("active"),y.classList.remove("active"))}function O(){h.classList.remove("active"),d.classList.remove("active"),b.classList.remove("no-scroll"),E(p,"active"),p.setAttribute("data-state","closed"),p.setAttribute("aria-expanded","false"),h.removeEventListener("click",w),document.removeEventListener("keydown",v),S(),m.removeEventListener("click",A),y.removeEventListener("click",S)}p.addEventListener("click",()=>{!function(e){let t=e.getAttribute("data-state");t&&"closed"!==t?O():(h.classList.add("active"),d.classList.add("active"),b.classList.add("no-scroll"),E(p,"active"),p.setAttribute("data-state","opened"),p.setAttribute("aria-expanded","true"),h.addEventListener("click",w),document.addEventListener("keydown",v),m.addEventListener("click",A),y.addEventListener("click",S),g.style.height=g.scrollHeight+"px")}(p)});let B=document.querySelectorAll(".footer-menu");B.forEach(e=>{e.addEventListener("click",e=>{let t=e.target.closest(".footer-menu-item");t&&function(e){let t=e.querySelector(".footer-menu-submenu-wrapper");e.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}(t)})});let R=document.querySelector(".overlay"),L=document.querySelector(".header-nav-menu-item-services"),T=L.querySelector(".header-menu-container-services"),U=document.querySelector(".header-nav-menu-item-about-us"),x=U.querySelector(".header-menu-container-about-us");function I(e){R.classList.add("active"),e.classList.add("active")}function C(e){R.classList.remove("active"),e.classList.remove("active")}document.querySelectorAll(".header-nav-menu-btn"),document.querySelectorAll(".header-nav-menu-icon"),L.addEventListener("mouseenter",()=>{L.addEventListener("mouseleave",()=>{C(T)}),I(T)}),U.addEventListener("mouseenter",()=>{U.addEventListener("mouseleave",()=>{C(x)}),I(x)}),window.addEventListener("scroll",function(){let e=this.scrollY;e>10?document.querySelector(".header").classList.add("shadow"):document.querySelector(".header").classList.remove("shadow")});// const form = document.querySelector(".form-survey");
// const inputs = form.querySelectorAll("[name]");
// const namesArray = [];
// inputs.forEach(node => {
// 	namesArray.push(node.name);
// });
// const filteredArrayNames = namesArray.filter(
// 	(element, index, array) => array.indexOf(element) === index,
// );
// console.log(filteredArrayNames);
// Прихований інпут про Політично значущу особу
let N=document.querySelector('[aria-labelledby="isPEP"]'),P=document.getElementById("isPEPtrue"),j=N.querySelector(".hidden-inputs-wrapper"),_=j.querySelector("label"),k=j.querySelector("input");N.addEventListener("click",()=>{P.checked?(j.style.maxHeight=j.scrollHeight+"px",_.classList.add("required"),k.setAttribute("required",!0)):(j.style.maxHeight=null,_.classList.remove("required"),k.removeAttribute("required"))});// Дізейбл полів про ІПН у разі позначки про відмову від ІПН
let q=document.querySelector(".taxID-disable"),F=q.querySelector(".taxID-label"),D=q.querySelector(".taxID-input"),M=q.querySelector(".IPN-file-label"),H=q.querySelector(".IPN-file-input"),$=document.getElementById("nonIPN");$.addEventListener("click",()=>{$.checked?(F.classList.remove("required"),M.classList.remove("required"),D.removeAttribute("required"),H.removeAttribute("required"),D.setAttribute("disabled",!0),H.setAttribute("disabled",!0)):(F.classList.add("required"),M.classList.add("required"),D.setAttribute("required",!0),H.setAttribute("required",!0),D.removeAttribute("disabled"),H.removeAttribute("disabled"))});// Приховані інпути про податкове резиденство Сполучених Штатів
let z=document.querySelector('[aria-labelledby="tax-residence"]'),J=z.querySelector(".hidden-inputs-wrapper"),V=document.getElementById("is-US-tax-residence"),W=document.getElementById("is-nonUkraine-tax-residence"),K=z.querySelector('[value="UA"]'),G=z.querySelector('[value="US"]'),Y=z.querySelector('[value="00"]');V.addEventListener("click",()=>{W.checked||(V.checked?(J.style.maxHeight=J.scrollHeight+"px",K.removeAttribute("selected"),G.setAttribute("selected",!0)):(J.style.maxHeight=null,K.setAttribute("selected",!0),G.removeAttribute("selected")))}),W.addEventListener("click",()=>{V.checked||(W.checked?(J.style.maxHeight=J.scrollHeight+"px",K.removeAttribute("selected"),Y.setAttribute("selected",!0)):(J.style.maxHeight=null,K.setAttribute("selected",!0),Y.removeAttribute("selected")))});// Динамічні інпути в залежності від документу, що посвідчує особу
let X=document.querySelector('[aria-labelledby="citizenship"]'),Q=X.querySelector(".form-group-radio"),Z=X.querySelector(".hidden-inputs-wrapper"),ee=X.querySelector(".passport-name-wrapper"),et=X.querySelector(".passport-code-wrapper"),er=X.querySelector(".passport-date-expired-wrapper"),en=document.getElementById("passport-issued"),ei=document.getElementById("passport-number"),eo=document.getElementById("passport-code");// Утилітки
function es(e){e.classList.remove("hidden"),e.style.maxHeight=e.scrollHeight+"px"}function ea(e){e.classList.add("hidden"),e.children[1].removeAttribute("required"),e.style.maxHeight=null}function eu(e,t,r,n,i){e.setAttribute("minlength",t),e.setAttribute("maxlength",r),n?e.setAttribute("pattern",n):e.removeAttribute("pattern"),e.setAttribute("placeholder",i)}function el(e,t){return function(){return e.apply(t,arguments)}}Q.addEventListener("click",e=>{let t=e.target.closest(".form-input-radio:checked");if(t){switch(t.value){case"ID card":es(er),ea(ee),ea(et),eu(ei,"9","9","[0-9]{9}","012345678"),eu(en,"4","4","[0-9]{4}","0123");break;case"passport":es(et),ea(ee),ea(er),eu(eo,"2","2","","АА"),eu(ei,"6","6","[0-9]{6}","012345"),eu(en,"2","50","","Голосіївським РУ ГМВС України в місті Києві");break;case"foreign passport":es(et),es(er),ea(ee),eu(eo,"2","2","","АА"),eu(ei,"6","6","[0-9]{6}","012345"),eu(en,"4","4","[0-9]{4}","0123");break;case"other":es(et),es(er),es(ee),eu(eo,"2","16","","AA"),eu(ei,"2","16","[0-9]{2,16}","012345"),eu(en,"2","50","","0123");break;default:return}Z.style.maxHeight=Z.scrollHeight+"px"}}),c("EKbOE");// utils is a library of generic helper functions non-specific to axios
let{toString:ef}=Object.prototype,{getPrototypeOf:ec}=Object,eh=(t=Object.create(null),e=>{let r=ef.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}),ep=e=>(e=e.toLowerCase(),t=>eh(t)===e),ed=e=>t=>typeof t===e,{isArray:ey}=Array,eg=ed("undefined"),em=ep("ArrayBuffer"),eb=ed("string"),eE=ed("function"),ew=ed("number"),ev=e=>null!==e&&"object"==typeof e,eA=e=>{if("object"!==eh(e))return!1;let t=ec(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},eS=ep("Date"),eO=ep("File"),eB=ep("Blob"),eR=ep("FileList"),eL=ep("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function eT(e,t,{allOwnKeys:r=!1}={}){let n,i;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),ey(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{let i;// Iterate over object keys
let o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;for(n=0;n<s;n++)i=o[n],t.call(null,e[i],i,e)}}}function eU(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),i=n.length;for(;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}let ex=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:a,eI=e=>!eg(e)&&e!==ex,eC=(r="undefined"!=typeof Uint8Array&&ec(Uint8Array),e=>r&&e instanceof r),eN=ep("HTMLFormElement"),eP=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ej=ep("RegExp"),e_=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};eT(r,(r,i)=>{let o;!1!==(o=t(r,i,e))&&(n[i]=o||r)}),Object.defineProperties(e,n)},ek="abcdefghijklmnopqrstuvwxyz",eq="0123456789",eF={DIGIT:eq,ALPHA:ek,ALPHA_DIGIT:ek+ek.toUpperCase()+eq},eD=ep("AsyncFunction");var eM={isArray:ey,isArrayBuffer:em,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!eg(e)&&null!==e.constructor&&!eg(e.constructor)&&eE(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||eE(e.append)&&("formdata"===(t=eh(e))||// detect form-data instance
"object"===t&&eE(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&em(e.buffer)},isString:eb,isNumber:ew,isBoolean:e=>!0===e||!1===e,isObject:ev,isPlainObject:eA,isUndefined:eg,isDate:eS,isFile:eO,isBlob:eB,isRegExp:ej,isFunction:eE,isStream:e=>ev(e)&&eE(e.pipe),isURLSearchParams:eL,isTypedArray:eC,isFileList:eR,forEach:eT,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function e(){let{caseless:t}=eI(this)&&this||{},r={},n=(n,i)=>{let o=t&&eU(r,i)||i;eA(r[o])&&eA(n)?r[o]=e(r[o],n):eA(n)?r[o]=e({},n):ey(n)?r[o]=n.slice():r[o]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&eT(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(eT(t,(t,n)=>{r&&eE(t)?e[n]=el(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,o,s;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(o=(i=Object.getOwnPropertyNames(e)).length;o-- >0;)s=i[o],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=!1!==r&&ec(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:eh,kindOfTest:ep,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(ey(e))return e;let t=e.length;if(!ew(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=e&&e[Symbol.iterator],i=n.call(e);for(;(r=i.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:eN,hasOwnProperty:eP,hasOwnProp:eP,reduceDescriptors:e_,freezeMethods:e=>{e_(e,(t,r)=>{// skip restricted props in strict mode
if(eE(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=e[r];if(eE(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(ey(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:eU,global:ex,isContextDefined:eI,ALPHABET:eF,generateString:(e=16,t=eF.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&eE(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(ev(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let i=ey(e)?[]:{};return eT(e,(e,t)=>{let o=r(e,n+1);eg(o)||(i[t]=o)}),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:eD,isThenable:e=>e&&(ev(e)||eE(e))&&eE(e.then)&&eE(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function eH(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}eM.inherits(eH,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:eM.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});let e$=eH.prototype,ez={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ez[e]={value:e}}),Object.defineProperties(eH,ez),Object.defineProperty(e$,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
eH.from=(e,t,r,n,i,o)=>{let s=Object.create(e$);return eM.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),eH.call(s,e.message,t,r,n,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s},i=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,i=[],o=0,s=r-n;o<s;o+=16383// must be multiple of 3
)i.push(function(e,t,r){for(var n,i=[],o=t;o<r;o+=3)i.push(eJ[(n=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+eJ[n>>12&63]+eJ[n>>6&63]+eJ[63&n]);return i.join("")}(e,o,o+16383>s?s:o+16383));return 1===n?i.push(eJ[(t=e[r-1])>>2]+eJ[t<<4&63]+"=="):2===n&&i.push(eJ[(t=(e[r-2]<<8)+e[r-1])>>10]+eJ[t>>4&63]+eJ[t<<2&63]+"="),i.join("")};for(var eJ=[],eV=[],eW="undefined"!=typeof Uint8Array?Uint8Array:Array,eK="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",eG=0,eY=eK.length;eG<eY;++eG)eJ[eG]=eK[eG],eV[eK.charCodeAt(eG)]=eG;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
eV["-".charCodeAt(0)]=62,eV["_".charCodeAt(0)]=63,o=function(e,t,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,l=u>>1,f=-7,c=r?i-1:0,h=r?-1:1,p=e[t+c];for(c+=h,o=p&(1<<-f)-1,p>>=-f,f+=a;f>0;o=256*o+e[t+c],c+=h,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=n;f>0;s=256*s+e[t+c],c+=h,f-=8);if(0===o)o=1-l;else{if(o===u)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),o-=l}return(p?-1:1)*s*Math.pow(2,o-n)},s=function(e,t,r,n,i,o){var s,a,u,l=8*o-i-1,f=(1<<l)-1,c=f>>1,h=23===i?5960464477539062e-23:0,p=n?0:o-1,d=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,s=f):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+c>=1?t+=h/u:t+=h*Math.pow(2,1-c),t*u>=2&&(s++,u/=2),s+c>=f?(a=0,s=f):s+c>=1?(a=(t*u-1)*Math.pow(2,i),s+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;e[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,l+=i;l>0;e[r+p]=255&s,p+=d,s/=256,l-=8);e[r+p-d]|=128*y};let eX="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function eQ(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,eZ.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function eZ(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return e2(e)}return e0(e,t,r)}function e0(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!eZ.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|e8(e,t),n=eQ(r),i=n.write(e,t);return i!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(tE(e,Uint8Array)){let t=new Uint8Array(e);return e5(t.buffer,t.byteOffset,t.byteLength)}return e6(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(tE(e,ArrayBuffer)||e&&tE(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tE(e,SharedArrayBuffer)||e&&tE(e.buffer,SharedArrayBuffer)))return e5(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return eZ.from(n,t,r);let i=function(e){var t;if(eZ.isBuffer(e)){let t=0|e4(e.length),r=eQ(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?eQ(0):e6(e):"Buffer"===e.type&&Array.isArray(e.data)?e6(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return eZ.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function e1(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function e2(e){return e1(e),eQ(e<0?0:0|e4(e))}function e6(e){let t=e.length<0?0:0|e4(e.length),r=eQ(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function e5(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),eZ.prototype),n)}function e4(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function e8(e,t){if(eZ.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||tE(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tg(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tm(e).length;default:if(i)return n?-1:tg(e).length// assume utf8
;t=(""+t).toLowerCase(),i=!0}}function e3(e,t,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=tw[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return tt(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var o,s;return o=t,s=r,0===o&&s===this.length?i(this):i(this.slice(o,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function e7(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function e9(e,t,r,n,i){var o;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r// Coerce to Number.
)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=eZ.from(t,n)),eZ.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:te(e,t,r,n,i));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):te(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function te(e,t,r,n,i){let o,s=1,a=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let n=-1;for(o=r;o<a;o++)if(l(e,o)===l(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*s}else -1!==n&&(o-=o-n),n=-1}else for(r+u>a&&(r=a-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(l(e,o+n)!==l(t,n)){r=!1;break}if(r)return o}return -1}function tt(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=r){let r,n,a,u;switch(s){case 1:t<128&&(o=t);break;case 2:(192&(r=e[i+1]))==128&&(u=(31&t)<<6|63&r)>127&&(o=u);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(u=(15&t)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(o=u);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(o=u)}}null===o?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
o=65533,s=1):o>65535&&(// encode to utf16 (surrogate pair dance)
o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tr(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function tn(e,t,r,n,i,o){if(!eZ.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function ti(e,t,r,n,i){th(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function to(e,t,r,n,i){th(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function ts(e,t,r,n,i,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function ta(e,t,r,n,i){return t=+t,r>>>=0,i||ts(e,t,r,4,34028234663852886e22,-34028234663852886e22),s(e,t,r,n,23,4),r+4}function tu(e,t,r,n,i){return t=+t,r>>>=0,i||ts(e,t,r,8,17976931348623157e292,-17976931348623157e292),s(e,t,r,n,52,8),r+8}/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */eZ.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),eZ.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(eZ.prototype,"parent",{enumerable:!0,get:function(){if(eZ.isBuffer(this))return this.buffer}}),Object.defineProperty(eZ.prototype,"offset",{enumerable:!0,get:function(){if(eZ.isBuffer(this))return this.byteOffset}}),eZ.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/eZ.from=function(e,t,r){return e0(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(eZ.prototype,Uint8Array.prototype),Object.setPrototypeOf(eZ,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/eZ.alloc=function(e,t,r){return(e1(e),e<=0)?eQ(e):void 0!==t?"string"==typeof r?eQ(e).fill(t,r):eQ(e).fill(t):eQ(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */eZ.allocUnsafe=function(e){return e2(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */eZ.allocUnsafeSlow=function(e){return e2(e)},eZ.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==eZ.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},eZ.compare=function(e,t){if(tE(e,Uint8Array)&&(e=eZ.from(e,e.offset,e.byteLength)),tE(t,Uint8Array)&&(t=eZ.from(t,t.offset,t.byteLength)),!eZ.isBuffer(e)||!eZ.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},eZ.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},eZ.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return eZ.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=eZ.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(tE(t,Uint8Array))i+t.length>n.length?(eZ.isBuffer(t)||(t=eZ.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(eZ.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},eZ.byteLength=e8,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
eZ.prototype._isBuffer=!0,eZ.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)e7(this,t,t+1);return this},eZ.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)e7(this,t,t+3),e7(this,t+1,t+2);return this},eZ.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)e7(this,t,t+7),e7(this,t+1,t+6),e7(this,t+2,t+5),e7(this,t+3,t+4);return this},eZ.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?tt(this,0,e):e3.apply(this,arguments)},eZ.prototype.toLocaleString=eZ.prototype.toString,eZ.prototype.equals=function(e){if(!eZ.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===eZ.compare(this,e)},eZ.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},eX&&(eZ.prototype[eX]=eZ.prototype.inspect),eZ.prototype.compare=function(e,t,r,n,i){if(tE(e,Uint8Array)&&(e=eZ.from(e,e.offset,e.byteLength)),!eZ.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let o=i-n,s=r-t,a=Math.min(o,s),u=this.slice(n,i),l=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==l[e]){o=u[e],s=l[e];break}return o<s?-1:s<o?1:0},eZ.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},eZ.prototype.indexOf=function(e,t,r){return e9(this,e,t,r,!0)},eZ.prototype.lastIndexOf=function(e,t,r){return e9(this,e,t,r,!1)},eZ.prototype.write=function(e,t,r,n){var i,o,s,a,u,l,f,c;// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-t;if((void 0===r||r>h)&&(r=h),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;let s=t.length;for(n>s/2&&(n=s/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,o=r,tb(tg(e,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return s=t,a=r,tb(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=t,l=r,tb(tm(e),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f=t,c=r,tb(function(e,t){let r,n;let i=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,this.length-f),this,f,c);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},eZ.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},eZ.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,eZ.prototype),n)},eZ.prototype.readUintLE=eZ.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||tr(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},eZ.prototype.readUintBE=eZ.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||tr(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},eZ.prototype.readUint8=eZ.prototype.readUInt8=function(e,t){return e>>>=0,t||tr(e,1,this.length),this[e]},eZ.prototype.readUint16LE=eZ.prototype.readUInt16LE=function(e,t){return e>>>=0,t||tr(e,2,this.length),this[e]|this[e+1]<<8},eZ.prototype.readUint16BE=eZ.prototype.readUInt16BE=function(e,t){return e>>>=0,t||tr(e,2,this.length),this[e]<<8|this[e+1]},eZ.prototype.readUint32LE=eZ.prototype.readUInt32LE=function(e,t){return e>>>=0,t||tr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},eZ.prototype.readUint32BE=eZ.prototype.readUInt32BE=function(e,t){return e>>>=0,t||tr(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},eZ.prototype.readBigUInt64LE=tv(function(e){tp(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&td(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),eZ.prototype.readBigUInt64BE=tv(function(e){tp(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&td(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),eZ.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||tr(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},eZ.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||tr(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},eZ.prototype.readInt8=function(e,t){return(e>>>=0,t||tr(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},eZ.prototype.readInt16LE=function(e,t){e>>>=0,t||tr(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},eZ.prototype.readInt16BE=function(e,t){e>>>=0,t||tr(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},eZ.prototype.readInt32LE=function(e,t){return e>>>=0,t||tr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},eZ.prototype.readInt32BE=function(e,t){return e>>>=0,t||tr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},eZ.prototype.readBigInt64LE=tv(function(e){tp(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&td(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),eZ.prototype.readBigInt64BE=tv(function(e){tp(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&td(e,this.length-8);let n=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),eZ.prototype.readFloatLE=function(e,t){return e>>>=0,t||tr(e,4,this.length),o(this,e,!0,23,4)},eZ.prototype.readFloatBE=function(e,t){return e>>>=0,t||tr(e,4,this.length),o(this,e,!1,23,4)},eZ.prototype.readDoubleLE=function(e,t){return e>>>=0,t||tr(e,8,this.length),o(this,e,!0,52,8)},eZ.prototype.readDoubleBE=function(e,t){return e>>>=0,t||tr(e,8,this.length),o(this,e,!1,52,8)},eZ.prototype.writeUintLE=eZ.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tn(this,e,t,r,n,0)}let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},eZ.prototype.writeUintBE=eZ.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;tn(this,e,t,r,n,0)}let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},eZ.prototype.writeUint8=eZ.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,1,255,0),this[t]=255&e,t+1},eZ.prototype.writeUint16LE=eZ.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},eZ.prototype.writeUint16BE=eZ.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},eZ.prototype.writeUint32LE=eZ.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},eZ.prototype.writeUint32BE=eZ.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},eZ.prototype.writeBigUInt64LE=tv(function(e,t=0){return ti(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),eZ.prototype.writeBigUInt64BE=tv(function(e,t=0){return to(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),eZ.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);tn(this,e,t,r,n-1,-n)}let i=0,o=1,s=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},eZ.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);tn(this,e,t,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},eZ.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},eZ.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},eZ.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},eZ.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},eZ.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||tn(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},eZ.prototype.writeBigInt64LE=tv(function(e,t=0){return ti(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),eZ.prototype.writeBigInt64BE=tv(function(e,t=0){return to(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),eZ.prototype.writeFloatLE=function(e,t,r){return ta(this,e,t,!0,r)},eZ.prototype.writeFloatBE=function(e,t,r){return ta(this,e,t,!1,r)},eZ.prototype.writeDoubleLE=function(e,t,r){return tu(this,e,t,!0,r)},eZ.prototype.writeDoubleBE=function(e,t,r){return tu(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
eZ.prototype.copy=function(e,t,r,n){if(!eZ.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
eZ.prototype.fill=function(e,t,r,n){let i;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!eZ.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let o=eZ.isBuffer(e)?e:eZ.from(e,n),s=o.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let tl={};function tf(e,t,r){tl[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function tc(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function th(e,t,r,n,i,o){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new tl.ERR_OUT_OF_RANGE("value",n,e)}tp(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&td(i,n.length-(o+1))}function tp(e,t){if("number"!=typeof e)throw new tl.ERR_INVALID_ARG_TYPE(t,"number",e)}function td(e,t,r){if(Math.floor(e)!==e)throw tp(e,r),new tl.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new tl.ERR_BUFFER_OUT_OF_BOUNDS;throw new tl.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}tf("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),tf("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),tf("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=tc(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=tc(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);// HELPER FUNCTIONS
// ================
let ty=/[^+/0-9A-Za-z-_]/g;function tg(e,t){let r;t=t||1/0;let n=e.length,i=null,o=[];for(let s=0;s<n;++s){// is surrogate component
if((r=e.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!i){// no lead yet
if(r>56319||s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}// valid surrogate pair
r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function tm(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],o=n[1],s=new eW((i+o)*3/4-o),a=0,u=o>0?i-4:i;for(r=0;r<u;r+=4)t=eV[e.charCodeAt(r)]<<18|eV[e.charCodeAt(r+1)]<<12|eV[e.charCodeAt(r+2)]<<6|eV[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;return 2===o&&(t=eV[e.charCodeAt(r)]<<2|eV[e.charCodeAt(r+1)]>>4,s[a++]=255&t),1===o&&(t=eV[e.charCodeAt(r)]<<10|eV[e.charCodeAt(r+1)]<<4|eV[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t),s}(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(ty,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function tb(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tE(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let tw=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();// Return not function with Error if BigInt not supported
function tv(e){return"undefined"==typeof BigInt?tA:e}function tA(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tS(e){return eM.isPlainObject(e)||eM.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tO(e){return eM.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tB(e,t,r){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=tO(e),!r&&t?"["+e+"]":e)}).join(r?".":""):t}let tR=eM.toFlatObject(eM,{},null,function(e){return/^is[A-Z]/.test(e)});var tL=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(e,t,r){if(!eM.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
r=eM.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!eM.isUndefined(t[e])});let n=r.metaTokens,i=r.visitor||f,o=r.dots,s=r.indexes,a=r.Blob||"undefined"!=typeof Blob&&Blob,u=a&&eM.isSpecCompliantForm(t);if(!eM.isFunction(i))throw TypeError("visitor must be a function");function l(e){if(null===e)return"";if(eM.isDate(e))return e.toISOString();if(!u&&eM.isBlob(e))throw new eH("Blob is not supported. Use a Buffer instead.");return eM.isArrayBuffer(e)||eM.isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):eZ.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function f(e,r,i){let a=e;if(e&&!i&&"object"==typeof e){if(eM.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var u;if(eM.isArray(e)&&(u=e,eM.isArray(u)&&!u.some(tS))||(eM.isFileList(e)||eM.endsWith(r,"[]"))&&(a=eM.toArray(e)))return(// eslint-disable-next-line no-param-reassign
r=tO(r),a.forEach(function(e,n){eM.isUndefined(e)||null===e||t.append(!0===s?tB([r],n,o):null===s?r:r+"[]",l(e))}),!1)}}return!!tS(e)||(t.append(tB(i,r,o),l(e)),!1)}let c=[],h=Object.assign(tR,{defaultVisitor:f,convertValue:l,isVisitable:tS});if(!eM.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!eM.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),eM.forEach(r,function(r,o){let s=!(eM.isUndefined(r)||null===r)&&i.call(t,r,eM.isString(o)?o.trim():o,n,h);!0===s&&e(r,n?n.concat(o):[o])}),c.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tT(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tU(e,t){this._pairs=[],e&&tL(e,this,t)}let tx=tU.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function tI(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tC(e,t,r){let n;/*eslint no-param-reassign:0*/if(!t)return e;let i=r&&r.encode||tI,o=r&&r.serialize;if(n=o?o(t,r):eM.isURLSearchParams(t)?t.toString():new tU(t,r).toString(i)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}tx.append=function(e,t){this._pairs.push([e,t])},tx.toString=function(e){let t=e?function(t){return e.call(this,t,tT)}:tT;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var tN=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(e){eM.forEach(this.handlers,function(t){null!==t&&e(t)})}},tP={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tj="undefined"!=typeof URLSearchParams?URLSearchParams:tU,t_="undefined"!=typeof FormData?FormData:null,tk="undefined"!=typeof Blob?Blob:null,tq={};u(tq,"hasBrowserEnv",function(){return tF}),u(tq,"hasStandardBrowserEnv",function(){return tD}),u(tq,"hasStandardBrowserWebWorkerEnv",function(){return tM});let tF="undefined"!=typeof window&&"undefined"!=typeof document,tD=(n="undefined"!=typeof navigator&&navigator.product,tF&&0>["ReactNative","NativeScript","NS"].indexOf(n)),tM="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var tH={...tq,isBrowser:!0,classes:{URLSearchParams:tj,FormData:t_,Blob:tk},protocols:["http","https","file","blob","url","data"]},t$=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(eM.isFormData(e)&&eM.isFunction(e.entries)){let t={};return eM.forEachEntry(e,(e,r)=>{!function e(t,r,n,i){let o=t[i++],s=Number.isFinite(+o),a=i>=t.length;if(o=!o&&eM.isArray(n)?n.length:o,a)return eM.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!s;n[o]&&eM.isObject(n[o])||(n[o]=[]);let u=e(t,r,n[o],i);return u&&eM.isArray(n[o])&&(n[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,r;let n={},i=Object.keys(e),o=i.length;for(t=0;t<o;t++)n[r=i[t]]=e[r];return n}(n[o])),!s}(eM.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};let tz={transitional:tP,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=eM.isObject(e);o&&eM.isHTMLForm(e)&&(e=new FormData(e));let s=eM.isFormData(e);if(s)return i&&i?JSON.stringify(t$(e)):e;if(eM.isArrayBuffer(e)||eM.isBuffer(e)||eM.isStream(e)||eM.isFile(e)||eM.isBlob(e))return e;if(eM.isArrayBufferView(e))return e.buffer;if(eM.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1){var a,u;return(a=e,u=this.formSerializer,tL(a,new tH.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return tH.isNode&&eM.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},u))).toString()}if((r=eM.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return tL(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,r){if(eM.isString(e))try{return(0,JSON.parse)(e),eM.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||tz.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&eM.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw eH.from(e,eH.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tH.classes.FormData,Blob:tH.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};eM.forEach(["delete","get","head","post","put","patch"],e=>{tz.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
let tJ=eM.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */tV=e=>{let t,r,n;let i={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||i[t]&&tJ[t]||("set-cookie"===t?i[t]?i[t].push(r):i[t]=[r]:i[t]=i[t]?i[t]+", "+r:r)}),i};let tW=Symbol("internals");function tK(e){return e&&String(e).trim().toLowerCase()}function tG(e){return!1===e||null==e?e:eM.isArray(e)?e.map(tG):String(e)}let tY=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tX(e,t,r,n,i){if(eM.isFunction(n))return n.call(this,t,r);if(i&&(t=r),eM.isString(t)){if(eM.isString(n))return -1!==t.indexOf(n);if(eM.isRegExp(n))return n.test(t)}}class tQ{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function i(e,t,r){let i=tK(t);if(!i)throw Error("header name must be a non-empty string");let o=eM.findKey(n,i);o&&void 0!==n[o]&&!0!==r&&(void 0!==r||!1===n[o])||(n[o||t]=tG(e))}let o=(e,t)=>eM.forEach(e,(e,r)=>i(e,r,t));return eM.isPlainObject(e)||e instanceof this.constructor?o(e,t):eM.isString(e)&&(e=e.trim())&&!tY(e)?o(tV(e),t):null!=e&&i(t,e,r),this}get(e,t){if(e=tK(e)){let r=eM.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(eM.isFunction(t))return t.call(this,e,r);if(eM.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=tK(e)){let r=eM.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||tX(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function i(e){if(e=tK(e)){let i=eM.findKey(r,e);i&&(!t||tX(r,r[i],i,t))&&(delete r[i],n=!0)}}return eM.isArray(e)?e.forEach(i):i(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let i=t[r];(!e||tX(this,this[i],i,e,!0))&&(delete this[i],n=!0)}return n}normalize(e){let t=this,r={};return eM.forEach(this,(n,i)=>{let o=eM.findKey(r,i);if(o){t[o]=tG(n),delete t[i];return}let s=e?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(i).trim();s!==i&&delete t[i],t[s]=tG(n),r[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return eM.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&eM.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=this[tW]=this[tW]={accessors:{}},r=t.accessors,n=this.prototype;function i(e){let t=tK(e);r[t]||(!function(e,t){let r=eM.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})})}(n,e),r[t]=!0)}return eM.isArray(e)?e.forEach(i):i(e),this}}function tZ(e,t){let r=this||tz,n=t||r,i=tQ.from(n.headers),o=n.data;return eM.forEach(e,function(e){o=e.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function t0(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function t1(e,t,r){eH.call(this,null==e?"canceled":e,eH.ERR_CANCELED,t,r),this.name="CanceledError"}tQ.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),eM.reduceDescriptors(tQ.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[r]=e}}}),eM.freezeMethods(tQ),eM.inherits(t1,eH,{__CANCEL__:!0});var t2=tH.hasStandardBrowserEnv?{write:function(e,t,r,n,i,o){let s=[];s.push(e+"="+encodeURIComponent(t)),eM.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),eM.isString(n)&&s.push("path="+n),eM.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function t6(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var t5=tH.hasStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(e){let n=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=n(window.location.href),function(t){let r=eM.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},t4=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let r;e=e||10;let n=Array(e),i=Array(e),o=0,s=0;return t=void 0!==t?t:1e3,function(a){let u=Date.now(),l=i[s];r||(r=u),n[o]=a,i[o]=u;let f=s,c=0;for(;f!==o;)c+=n[f++],f%=e;if((o=(o+1)%e)===s&&(s=(s+1)%e),u-r<t)return;let h=l&&u-l;return h?Math.round(1e3*c/h):void 0}};function t8(e,t){let r=0,n=t4(50,250);return i=>{let o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-r,u=n(a),l=o<=s;r=o;let f={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&l?(s-o)/u:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}let t3="undefined"!=typeof XMLHttpRequest;var t7=t3&&function(e){return new Promise(function(t,r){let n,i,o=e.data,s=tQ.from(e.headers).normalize(),a=e.responseType;function u(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}if(eM.isFormData(o)){if(tH.hasStandardBrowserEnv||tH.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);// Let the browser set it
else if(!1!==(i=s.getContentType())){// fix semicolon duplication issue for ReactNative FormData implementation
let[e,...t]=i?i.split(";").map(e=>e.trim()).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}}let l=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+r))}let f=t6(e.baseURL,e.url);function c(){if(!l)return;// Prepare the response
let n=tQ.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),i=a&&"text"!==a&&"json"!==a?l.response:l.responseText,o={data:i,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new eH("Request failed with status code "+r.status,[eH.ERR_BAD_REQUEST,eH.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),u()},function(e){r(e),u()},o),// Clean up request
l=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(l.open(e.method.toUpperCase(),tC(f,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
l.timeout=e.timeout,"onloadend"in l?l.onloadend=c:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(c)},// Handle browser request cancellation (as opposed to a manual cancellation)
l.onabort=function(){l&&(r(new eH("Request aborted",eH.ECONNABORTED,e,l)),// Clean up request
l=null)},// Handle low level network errors
l.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new eH("Network Error",eH.ERR_NETWORK,e,l)),// Clean up request
l=null},// Handle timeout
l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||tP;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new eH(t,n.clarifyTimeoutError?eH.ETIMEDOUT:eH.ECONNABORTED,e,l)),// Clean up request
l=null},tH.hasStandardBrowserEnv){// Add xsrf header
// regarding CVE-2023-45857 config.withCredentials condition was removed temporarily
let t=t5(f)&&e.xsrfCookieName&&t2.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===o&&s.setContentType(null),"setRequestHeader"in l&&eM.forEach(s.toJSON(),function(e,t){l.setRequestHeader(t,e)}),eM.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",t8(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t8(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=t=>{l&&(r(!t||t.type?new t1(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let h=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);if(h&&-1===tH.protocols.indexOf(h)){r(new eH("Unsupported protocol "+h+":",eH.ERR_BAD_REQUEST,e));return}// Send the request
l.send(o||null)})};let t9={http:null,xhr:t7};eM.forEach(t9,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});let re=e=>`- ${e}`,rt=e=>eM.isFunction(e)||null===e||!1===e;var rr={getAdapter:e=>{let t,r;e=eM.isArray(e)?e:[e];let{length:n}=e,i={};for(let o=0;o<n;o++){let n;if(r=t=e[o],!rt(t)&&void 0===(r=t9[(n=String(t)).toLowerCase()]))throw new eH(`Unknown adapter '${n}'`);if(r)break;i[n||"#"+o]=r}if(!r){let e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")),t=n?e.length>1?"since :\n"+e.map(re).join("\n"):" "+re(e[0]):"as no adapter specified";throw new eH("There is no suitable adapter to dispatch the request "+t,"ERR_NOT_SUPPORT")}return r},adapters:t9};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function rn(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new t1(null,e)}function ri(e){rn(e),e.headers=tQ.from(e.headers),// Transform request data
e.data=tZ.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=rr.getAdapter(e.adapter||tz.adapter);return t(e).then(function(t){return rn(e),// Transform response data
t.data=tZ.call(e,e.transformResponse,t),t.headers=tQ.from(t.headers),t},function(t){return!t0(t)&&(rn(e),t&&t.response&&(t.response.data=tZ.call(e,e.transformResponse,t.response),t.response.headers=tQ.from(t.response.headers))),Promise.reject(t)})}let ro=e=>e instanceof tQ?e.toJSON():e;function rs(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let r={};function n(e,t,r){return eM.isPlainObject(e)&&eM.isPlainObject(t)?eM.merge.call({caseless:r},e,t):eM.isPlainObject(t)?eM.merge({},t):eM.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function i(e,t,r){return eM.isUndefined(t)?eM.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}// eslint-disable-next-line consistent-return
function o(e,t){if(!eM.isUndefined(t))return n(void 0,t)}// eslint-disable-next-line consistent-return
function s(e,t){return eM.isUndefined(t)?eM.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}// eslint-disable-next-line consistent-return
function a(r,i,o){return o in t?n(r,i):o in e?n(void 0,r):void 0}let u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>i(ro(e),ro(t),!0)};return eM.forEach(Object.keys(Object.assign({},e,t)),function(n){let o=u[n]||i,s=o(e[n],t[n],n);eM.isUndefined(s)&&o!==a||(r[n]=s)}),r}let ra="1.6.1",ru={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ru[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});let rl={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ru.transitional=function(e,t,r){function n(e,t){return"[Axios v"+ra+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,i,o)=>{if(!1===e)throw new eH(n(i," has been removed"+(t?" in "+t:"")),eH.ERR_DEPRECATED);return t&&!rl[i]&&(rl[i]=!0,// eslint-disable-next-line no-console
console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}};var rf={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,r){if("object"!=typeof e)throw new eH("options must be an object",eH.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),i=n.length;for(;i-- >0;){let o=n[i],s=t[o];if(s){let t=e[o],r=void 0===t||s(t,o,e);if(!0!==r)throw new eH("option "+o+" must be "+r,eH.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new eH("Unknown option "+o,eH.ERR_BAD_OPTION)}},validators:ru};let rc=rf.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class rh{constructor(e){this.defaults=e,this.interceptors={request:new tN,response:new tN}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=rs(this.defaults,t);let{transitional:i,paramsSerializer:o,headers:s}=t;void 0!==i&&rf.assertOptions(i,{silentJSONParsing:rc.transitional(rc.boolean),forcedJSONParsing:rc.transitional(rc.boolean),clarifyTimeoutError:rc.transitional(rc.boolean)},!1),null!=o&&(eM.isFunction(o)?t.paramsSerializer={serialize:o}:rf.assertOptions(o,{encode:rc.function,serialize:rc.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=s&&eM.merge(s.common,s[t.method]);s&&eM.forEach(["delete","get","head","post","put","patch","common"],e=>{delete s[e]}),t.headers=tQ.concat(a,s);// filter out skipped interceptors
let u=[],l=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(l=l&&e.synchronous,u.unshift(e.fulfilled,e.rejected))});let f=[];this.interceptors.response.forEach(function(e){f.push(e.fulfilled,e.rejected)});let c=0;if(!l){let e=[ri.bind(this),void 0];for(e.unshift.apply(e,u),e.push.apply(e,f),n=e.length,r=Promise.resolve(t);c<n;)r=r.then(e[c++],e[c++]);return r}n=u.length;let h=t;for(c=0;c<n;){let e=u[c++],t=u[c++];try{h=e(h)}catch(e){t.call(this,e);break}}try{r=ri.call(this,h)}catch(e){return Promise.reject(e)}for(c=0,n=f.length;c<n;)r=r.then(f[c++],f[c++]);return r}getUri(e){e=rs(this.defaults,e);let t=t6(e.baseURL,e.url);return tC(t,e.params,e.paramsSerializer)}}eM.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/rh.prototype[e]=function(t,r){return this.request(rs(r||{},{method:e,url:t,data:(r||{}).data}))}}),eM.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(r,n,i){return this.request(rs(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}rh.prototype[e]=t(),rh.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class rp{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,i){r.reason||(r.reason=new t1(e,n,i),t(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new rp(function(t){e=t});return{token:t,cancel:e}}}let rd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rd).forEach(([e,t])=>{rd[t]=e});// Create the default instance to be exported
let ry=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let r=new rh(t),n=el(rh.prototype.request,r);return eM.extend(n,rh.prototype,r,{allOwnKeys:!0}),eM.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return e(rs(t,r))},n}(tz);// Expose Axios class to allow class inheritance
ry.Axios=rh,// Expose Cancel & CancelToken
ry.CanceledError=t1,ry.CancelToken=rp,ry.isCancel=t0,ry.VERSION=ra,ry.toFormData=tL,// Expose AxiosError class
ry.AxiosError=eH,// alias for CanceledError for backward compatibility
ry.Cancel=ry.CanceledError,// Expose all/spread
ry.all=function(e){return Promise.all(e)},ry.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
ry.isAxiosError=function(e){return eM.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
ry.mergeConfig=rs,ry.AxiosHeaders=tQ,ry.formToJSON=e=>t$(eM.isHTMLForm(e)?new FormData(e):e),ry.getAdapter=rr.getAdapter,ry.HttpStatusCode=rd,ry.default=ry;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
let{Axios:rg,AxiosError:rm,CanceledError:rb,isCancel:rE,CancelToken:rw,VERSION:rv,all:rA,Cancel:rS,isAxiosError:rO,spread:rB,toFormData:rR,AxiosHeaders:rL,HttpStatusCode:rT,formToJSON:rU,getAdapter:rx,mergeConfig:rI}=ry;ry.defaults.baseURL="https://2btc.7buh.online/kw_api/custom",ry.defaults.headers.common.Authorization="";let rC=async e=>rN(e),rN=async e=>{try{let{data:t}=await ry.post("/btc.mobile_datas",e,{headers:{"Content-Type":"application/json"}});return console.log(t),t}catch(e){console.log("Request to server threw an error"),console.log("Error: ",e)}};rC({name:"Denys",test:"123"})}();//# sourceMappingURL=form.47955ac9.js.map

//# sourceMappingURL=form.47955ac9.js.map
