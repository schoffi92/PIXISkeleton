require("../scss/style.scss");

window.addEventListener("DOMContentLoaded", () => {
    // Cloak
    var elements = document.getElementsByClassName("cloak");
    for (let e=0;e<elements.length;e++) {
        elements[e].classList.remove("cloak");
    }
});