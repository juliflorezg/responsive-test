!function(){"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var r;e.g.importScripts&&(r=e.g.location+"");var t=e.g.document;if(!r&&t&&(t.currentScript&&(r=t.currentScript.src),!r)){var n=t.getElementsByTagName("script");n.length&&(r=n[n.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r}(),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p;var r=document.querySelector(".header").clientHeight+10;document.documentElement.style.setProperty("--scroll-padding","".concat(r-1,"px")),document.addEventListener("click",(function(e){e.target.className.includes("hamburger")&&window.innerWidth<768&&(document.querySelector(".hamburger--squeeze").classList.toggle("is-active"),document.querySelector(".header").classList.toggle("slide-in")),e.target.matches(".header__list li a")&&window.innerWidth<768&&(document.querySelector(".header").classList.remove("slide-in"),document.querySelector(".hamburger").classList.remove("is-active"))}));var t=document.querySelector("#newsletterForm"),n=document.querySelector("#name"),o=document.querySelector("#email"),i=document.querySelector("#identification"),s=document.querySelector("#identificationNumber"),a=document.querySelector("#phone"),l=document.querySelector("#conditions"),c=document.querySelector("#nameError"),d=document.querySelector("#emailError"),u=document.querySelector("#identificationError"),m=document.querySelector("#identificationNumberError"),v=document.querySelector("#phoneError"),g=document.querySelector("#conditionsError");function f(e){return""===e.value?{isValid:!1,error:"Por favor ingresa tu nombre."}:e.value.length<3?{isValid:!1,error:"El nombre debe tener al menos 3 letras."}:/[0-9]/g.test(e.value)?{isValid:!1,error:"El nombre debe contener solo letras y espacios."}:{isValid:!0,error:null}}function p(e){console.log(e);var r=f(e),t=r.isValid,o=r.error;t?(c.textContent="",c.classList.remove("show-error"),n.classList.remove("newsletter__input-error")):(c.textContent=o,c.classList.add("show-error"),n.classList.add("newsletter__input-error"))}function L(e){console.log(e);var r,t=""===(r=e).value?{isValid:!1,error:"Por favor ingresa tu email."}:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(r.value)?{isValid:!0,error:null}:{isValid:!1,error:"Debe ser un email valido."},n=t.error;t.isValid?(d.textContent="",d.classList.remove("show-error"),o.classList.remove("newsletter__input-error")):(d.textContent=n,d.classList.add("show-error"),o.classList.add("newsletter__input-error"))}function h(e){return""===e.value?{isValid:!1,error:"Por favor selecciona un tipo de identificación."}:{isValid:!0,error:null}}function w(e){console.log(e);var r=h(e),t=r.isValid,n=r.error;t?(u.textContent="",u.classList.remove("show-error"),i.classList.remove("newsletter__input-error"),s.removeAttribute("disabled"),s.classList.remove("disabled")):(u.textContent=n,u.classList.add("show-error"),i.classList.add("newsletter__input-error"))}function b(e){console.log(e);var r,t=""===(r=e).value?{isValid:!1,error:"Por favor introduce tu número de identificación."}:r.value.length>10?{isValid:!1,error:"Debe contener máximo 10 dígitos."}:{isValid:!0,error:null},n=t.error;t.isValid?(m.textContent="",m.classList.remove("show-error"),s.classList.remove("newsletter__input-error")):(m.textContent=n,m.classList.add("show-error"),s.classList.add("newsletter__input-error"))}function y(e){console.log(e);var r,t=""===(r=e).value?{isValid:!1,error:"Por favor introduce tu número de teléfono."}:r.value.length>10?{isValid:!1,error:"Debe contener máximo 10 dígitos."}:{isValid:!0,error:null},n=t.error;t.isValid?(v.textContent="",v.classList.remove("show-error"),a.classList.remove("newsletter__input-error")):(v.textContent=n,v.classList.add("show-error"),a.classList.add("newsletter__input-error"))}function E(e){e.checked?(g.textContent="",g.classList.remove("show-error"),l.classList.remove("newsletter__input-error")):(g.textContent="Por favor acepta los términos y condiciones",g.classList.add("show-error"),l.classList.add("newsletter__input-error"))}n.addEventListener("input",(function(e){return p(e.target)})),n.addEventListener("blur",(function(e){return p(e.target)})),o.addEventListener("input",(function(e){return L(e.target)})),o.addEventListener("blur",(function(e){return L(e.target)})),i.addEventListener("blur",(function(e){return w(e.target)})),document.addEventListener("DOMContentLoaded",(function(){h(i).isValid||(s.setAttribute("disabled",""),s.classList.add("disabled"))})),s.addEventListener("keypress",(function(e){console.log(e),"."!==e.key&&"e"!==e.key||e.preventDefault()})),s.addEventListener("blur",(function(e){return b(e.target)})),s.addEventListener("input",(function(e){return b(e.target)})),a.addEventListener("blur",(function(e){return y(e.target)})),a.addEventListener("input",(function(e){return y(e.target)})),console.log(l.value),l.addEventListener("input",(function(e){console.log(e.target.value),console.log(e.target.checked)})),l.addEventListener("blur",(function(e){return E(e.target)})),l.addEventListener("change",(function(e){return E(e.target)})),t.addEventListener("submit",(function(e){e.preventDefault(),p(n),L(o),w(i),b(s),y(a),E(l);for(var r,c=0,d=[f(n).isValid,f(o).isValid,h(i).isValid,h(s).isValid,h(a).isValid,l.checked];c<d.length;c++)if(!d[c])return;(r=document.createElement("P")).classList.add("newsletter__thank-you"),r.textContent="Gracias por suscribirte a nuestro newsletter.",t.insertAdjacentElement("afterend",r),t.reset()}))}();
//# sourceMappingURL=bundlefile-9d867584e456e141ca23.js.map