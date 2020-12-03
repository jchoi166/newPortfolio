
const myNav = document.querySelector('.nav-container');

const home = document.querySelector('#section-home')
const about = document.querySelector('#section-about')
const portfolio = document.querySelector('#section-portfolio')
const contact = document.querySelector('#section-contact')

const homeLink = document.querySelector('#link-home')
const aboutLink = document.querySelector('#link-about')
const portLink = document.querySelector('#link-portfolio')
const contactLink = document.querySelector('#link-contact')


window.onscroll = function () { 
    // console.log(window.scrollY)

    // Switching Nav Bars
    if (window.scrollY >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
    
    // Underline for Home Tab
    if (window.scrollY < 700) {
        homeLink.classList.add("link-active")
    } else {
        homeLink.classList.remove("link-active")
    }

    // Underline for About Tab
    if (window.scrollY >= 700 && window.scrollY < 1300) {
        aboutLink.classList.add("link-active")
    } else {
        aboutLink.classList.remove("link-active")
    }

    // Underline for Portfolio Tab
    if (window.scrollY >= 1300 && window.scrollY < 2100) {
        portLink.classList.add("link-active")
    } else {
        portLink.classList.remove("link-active")
    }

    // Underline for Contact Tab
    if (window.scrollY >= 2100) {
        contactLink.classList.add("link-active")
    } else {
        contactLink.classList.remove("link-active")
    }

};


