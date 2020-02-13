const hamburger = document.querySelector('.nav__hamburger');
const cancel = document.querySelector('.cancel-icon');
const mobile_nav: HTMLElement = document.querySelector('.nav__links');

const handleShowMobileNavbar = () => {
    mobile_nav.style.transform = 'translateX(0px)';
}

const handleHideMobileNavbar = () => {
    mobile_nav.style.transform = 'translateX(100vw)';
}

hamburger.addEventListener('click', handleShowMobileNavbar)
cancel.addEventListener('click', handleHideMobileNavbar)