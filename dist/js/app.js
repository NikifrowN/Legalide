(() => {
    "use strict";
    const header = document.querySelector(".header");
    const headerContainer = document.querySelector(".header__container");
    const burger = document.querySelector("#burger");
    const hedaerMenu = document.querySelector(".menu__body");
    const anchors = document.querySelectorAll('a[href*="#"]');
    window.addEventListener("scroll", (() => {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            headerContainer.style.height = "3.75rem";
            header.style.background = "#F6F6F6";
        } else {
            headerContainer.style.height = "";
            header.style.background = "";
        }
    }));
    burger.addEventListener("click", (() => {
        burger.classList.toggle("active");
        hedaerMenu.classList.toggle("active");
    }));
    for (let anchor of anchors) anchor.addEventListener("click", (function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        if (burger.classList.contains("active")) {
            burger.classList.toggle("active");
            hedaerMenu.classList.toggle("active");
        }
    }));
})();