function changeClass(e,t){if(window.innerWidth>=1280)return;const o=e.querySelector(".year__title");o.classList.toggle("year__title--hide"),o.classList.toggle("year__title--show")}function toggleMenu(e){const t=document.querySelector(".page-header__menu-toggler"),o=document.querySelector(".page-header__nav");t.classList.toggle("page-header__menu-toggler--line"),o.classList.toggle("page-header__nav--closed"),t.classList.toggle("page-header__menu-toggler--cross"),o.classList.toggle("page-header__nav--opened")}function toggleClass(e,t,o){e.classList.toggle(t),/(^Скрыть$|^Подробнее$)/.test(o.srcElement.innerText)&&(o.srcElement.innerText="Подробнее"===o.srcElement.innerText?"Скрыть":"Подробнее")}function ready(){const e=document.querySelectorAll(".works__item, .equipment__item"),t=document.querySelector(".page-header__menu-toggler"),o=document.querySelectorAll(".services__item-wrapper"),r=document.querySelectorAll(".product__item-wrapper"),l=document.querySelectorAll(".product__catalog");window.innerWidth>=1280&&e.forEach((e=>{const t=e.querySelector(".year__title");t.classList.remove("year__title--hide"),t.classList.add("year__title--show")})),e.forEach((e=>e.addEventListener("click",changeClass.bind(this,e)))),t.addEventListener("click",toggleMenu),o.forEach((e=>e.querySelector(".services__item-link").addEventListener("click",toggleClass.bind(this,e,"services__item-wrapper--undetailed")))),r.forEach((e=>e.querySelector("h3").addEventListener("click",toggleClass.bind(this,e,"product__item-wrapper--closed")))),l.forEach((e=>e.querySelector(".catalog__link").addEventListener("click",toggleClass.bind(this,e,"product__catalog--opened"))));const n=document.querySelector("#backToTopButton"),c=document.querySelector("html");window.addEventListener("scroll",(function(){c.scrollTop>300?n.classList.add("show"):n.classList.remove("show")})),n.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))}document.addEventListener("DOMContentLoaded",ready);