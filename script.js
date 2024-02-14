const words = "blast galaxy";

const ANIMATION_DUATION = 4000;

const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DUATION / 16) - offset}ms`;
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
    var textContainer = document.getElementsByClassName("slideText");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        textContainer[i].style.display = "none";

    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].src = "images/circle.png"
    }

    x[slideIndex - 1].style.display = "inline";
    textContainer[slideIndex - 1].style.display = "inline";
    textContainer[slideIndex - 1].style.color = "white";

    dots[slideIndex - 1].src = "images/circle_filled.png"
}

document.addEventListener("DOMContentLoaded", function () {
    const numberOfStars = 50;

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;

        document.body.appendChild(star);
    }
});

let downArrow = document.getElementsByClassName("fa-solid fa-chevron-down")[0]
downArrow.addEventListener("click", (e) => {
    if (downArrow.classList.contains("up")) {
        window.location.href = "#top"
        downArrow.classList.remove("up")
    }
    else{
        window.location.href = "#text"
        downArrow.classList.add("up")
    }
})

const container = document.querySelector(".container")
const rocket = document.querySelector(".rocket")

container.addEventListener("mousemove", e =>{
    mouseX = e.pageX
    mouseY = e.pageY
    rocket.style.left = mouseX + "px"
    rocket.style.top = mouseY + "px"
})

function makeMeteor(){
    meteorCount = 50

    i = 0
    while(i<meteorCount){
        meteor = document.createElement("i")
        windowX = Math.floor(Math.random()* window.innerWidth)

        duration = Math.random() * 1 

        meteorwidth = Math.random() * 3
        meteorHeight = Math.random() * 150

        meteor.style.left = windowX + "px"
        meteor.style.width = meteorwidth + "px"
        meteor.style.height = meteorHeight+ "px"
        meteor.style.animationDuration = duration + "S"

        container.appendChild(meteor)
        i++
    
    }
}

makeMeteor()