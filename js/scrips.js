// SIDE NAVIGATION JS CODE

let menuBtn = document.querySelector('.menu-btn');
let cancelBtn = document.querySelector('.cancel-btn');
let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');


menuBtn.onclick = function () {
    menuBtn.style.opacity = "0"
    menuBtn.style.pointerEvents = "none";
    navbar.classList.add("active");
    body.style.overflow = "hidden";
}

cancelBtn.onclick = function () {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navbar.classList.remove("active");
    body.style.overflow = "auto";
}


// STICKY NAVIGATION MENU JS CODE

let val;
let nav = document.querySelector("nav");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}


// TEXT SPEED

$(document).ready(function () {
    var typed = new Typed(".typing", {
        strings: ["Freelancer <span>and</span> Web Developer"],
        typeSpeed: 100,
        backSpeed: 20,
        loop: true
    });
});