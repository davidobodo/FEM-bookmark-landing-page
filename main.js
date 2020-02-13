var hamburger = document.querySelector('.nav__hamburger');
var cancel = document.querySelector('.cancel-icon');
var mobile_nav = document.querySelector('.nav__links');
var handleShowMobileNavbar = function () {
    mobile_nav.style.transform = 'translateX(0px)';
};
var handleHideMobileNavbar = function () {
    mobile_nav.style.transform = 'translateX(100vw)';
};
hamburger.addEventListener('click', handleShowMobileNavbar);
cancel.addEventListener('click', handleHideMobileNavbar);
