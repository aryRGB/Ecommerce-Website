'use strict'

//navbar controls
const overlay = document.querySelector("#overlay");
const navbaropen = document.querySelector("#nav-open-button");
const navbar=document.querySelector("#navbar");
const navbarclose=document.querySelector("#nav-close-button");

function OpenClose() {
    navbar.classList.toggle("active");      //toggles class "active" on and off
    overlay.classList.toggle("active");     //toggles class "active" on and off
}
navbaropen.addEventListener('click', OpenClose);
navbarclose.addEventListener('click', OpenClose);


//go home button controls
const header=document.querySelector("#header");
const GoHome=document.querySelector("#back-to-top");

window.addEventListener("scroll", function () {
    if(this.scrollY> 80){
        header.classList.add("active");
        GoHome.classList.add("active");
    }
    else{
        header.classList.remove("active");
        GoHome.classList.remove("active");
    }
})