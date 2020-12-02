
const myNav = document.querySelector('.nav-container');

const home = document.querySelector('#section-home')
const about = document.querySelector('#section-about')
const portfolio = document.querySelector('#section-portfolio')
const contact = document.querySelector('#section-contact')

const homeLink = document.querySelector('#link-home')
const aboutLink = document.querySelector('#link-about')
const portLink = document.querySelector('#link-portfolio')
const contactLink = document.querySelector('#link-contact')

var homeView = home.getBoundingClientRect();
var aboutView = about.getBoundingClientRect();
var portView = portfolio.getBoundingClientRect();
var contactView = contact.getBoundingClientRect();
console.log(aboutView)
console.log(portView)
console.log(contactView)

window.onscroll = function () { 
    // "use strict";
    console.log(window.scrollY)
    if (window.scrollY >= 200 ) {
        // console.log("its past 200")
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        // console.log("its back")
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
    
    if (window.scrollY < 700) {
        homeLink.classList.add("link-active")
    } else {
        homeLink.classList.remove("link-active")
    }

    if (window.scrollY > 700 && window.scrollY < 1300) {
        aboutLink.classList.add("link-active")
    } else {
        aboutLink.classList.remove("link-active")
    }

    if (window.scrollY > 1300 && window.scrollY < 2100) {
        portLink.classList.add("link-active")
    } else {
        portLink.classList.remove("link-active")
    }

    if (window.scrollY > 2100) {
        contactLink.classList.add("link-active")
    } else {
        contactLink.classList.remove("link-active")
    }

};


