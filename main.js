var hamburger = document.querySelector('.nav__hamburger');
var cancel = document.querySelector('.cancel-icon');
var mobile_nav = document.querySelector('.nav__links');
var tab1title = document.querySelector('.tab-1-title');
var tab2title = document.querySelector('.tab-2-title');
var tab3title = document.querySelector('.tab-3-title');
var tab1titleUnderline = document.querySelector('.tab-1-title span');
var tab2titleUnderline = document.querySelector('.tab-2-title span');
var tab3titleUnderline = document.querySelector('.tab-3-title span');
var tab1 = document.querySelector('#tab-1');
var tab2 = document.querySelector('#tab-2');
var tab3 = document.querySelector('#tab-3');
var handleShowMobileNavbar = function () {
    mobile_nav.style.transform = 'translateX(0px)';
};
var handleHideMobileNavbar = function () {
    mobile_nav.style.transform = 'translateX(100vw)';
};
hamburger.addEventListener('click', handleShowMobileNavbar);
cancel.addEventListener('click', handleHideMobileNavbar);
var handleDisplayTabOne = function () {
    tab2.style.display = 'none';
    tab3.style.display = 'none';
    if (window.screen.width <= 765) {
        tab1.style.display = 'block';
    }
    else {
        tab1.style.display = 'flex';
    }
    tab1titleUnderline.style.display = 'inline';
    tab2titleUnderline.style.display = 'none';
    tab3titleUnderline.style.display = 'none';
};
var handleDisplayTabTwo = function () {
    tab1.style.display = 'none';
    tab3.style.display = 'none';
    if (window.screen.width <= 765) {
        tab2.style.display = 'block';
    }
    else {
        tab2.style.display = 'flex';
    }
    tab1titleUnderline.style.display = 'none';
    tab2titleUnderline.style.display = 'inline';
    tab3titleUnderline.style.display = 'none';
};
var handleDisplayTabThree = function () {
    tab1.style.display = 'none';
    tab2.style.display = 'none';
    if (window.screen.width <= 765) {
        tab3.style.display = 'block';
    }
    else {
        tab3.style.display = 'flex';
    }
    tab1titleUnderline.style.display = 'none';
    tab2titleUnderline.style.display = 'none';
    tab3titleUnderline.style.display = 'inline';
};
handleDisplayTabOne();
tab1title.addEventListener('click', handleDisplayTabOne);
tab2title.addEventListener('click', handleDisplayTabTwo);
tab3title.addEventListener('click', handleDisplayTabThree);
