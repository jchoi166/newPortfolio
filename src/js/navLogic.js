
const myNav = document.querySelector('.nav-container');
window.onscroll = function () { 
    // "use strict";
    // console.log(window.scrollY)
    if (window.scrollY >= 200 ) {
        // console.log("its past 200")
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        // console.log("its back")
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};