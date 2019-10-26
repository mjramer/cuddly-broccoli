'use strict'

window.onscroll = () => {
    makeSticky();
};

const navbar = document.getElementById('navBar');

const sticky = navbar.offsetTop;

const makeSticky = function makeNavbarSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}