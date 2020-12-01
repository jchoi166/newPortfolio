
const myNav = document.querySelector('.nav-container');
const home = document.querySelector('#section-home')
const about = document.querySelector('#section-about')
const portfolio = document.querySelector('#section-portfolio')
const contact = document.querySelector('#section-contact')

var homeView = home.getBoundingClientRect();
var aboutView = about.getBoundingClientRect();
var portView = portfolio.getBoundingClientRect();
var contactView = contact.getBoundingClientRect();
console.log(aboutView)

window.onscroll = function () { 
    // "use strict";
    console.log(window.scrollY)
    if (window.scrollY >= 200 ) {
        // console.log("its past 200")
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    if (window.scrollY >= 730) {
        const aboutLink = document.querySelector('#link-about')
        aboutLink.classList.add("link-active")
    }
    else {
        // console.log("its back")
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }


};


