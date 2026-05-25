"use strict";
(() => {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    toggle?.addEventListener("click", () => {
        links?.classList.toggle("open");
    });
    links?.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            links.classList.remove("open");
        });
    });
})();
