"use strict";
const burgerButton = document.querySelector(".burger-btn");
const header = document.querySelector(".header");
burgerButton?.addEventListener("click", () => {
    header?.classList.toggle("opened-menu");
})
header?.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu__link") &&  header.classList.contains("opened-menu") ) {
        header.classList.remove("opened-menu");
    }
})