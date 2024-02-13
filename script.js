const words = "blast galaxy";

const ANIMATION_DUATION = 4000;

const characters = words.split("").forEach((char, i) => {
    function createElement(offset){
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DUATION  / 16) - offset}ms`;
        return div
    }

    document.getElementById("spiral").append(createElement(0));
    document
    .getElementById("spiral2")
    .append(createElement(-1 * (ANIMATION_DUATION / 2)));
})

var slideIndex = 1;
showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].src = "images/circle.png"
    }
    x[slideIndex - 1].style.display = "inline";
    dots[slideIndex - 1].src = "images/circle_filled.png"
}