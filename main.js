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
var faqs = document.querySelectorAll('.section__four__faqs__faq');
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
var show = function (elem) {
    elem.style.display = 'block';
};
var hide = function (elem) {
    elem.style.display = 'none';
};
var handleDisplayFaqOne = function (e) {
    e.preventDefault();
    if (window.getComputedStyle(faqOneDetails).display === 'block') {
        hide(faqOneDetails);
        return;
    }
    show(faqOneDetails);
};
var handleDisplayFaqTwo = function (e) {
    e.preventDefault();
    if (window.getComputedStyle(faqTwoDetails).display === 'block') {
        hide(faqTwoDetails);
        return;
    }
    show(faqTwoDetails);
};
var handleDisplayFaqThree = function (e) {
    e.preventDefault();
    if (window.getComputedStyle(faqThreeDetails).display === 'block') {
        hide(faqThreeDetails);
        return;
    }
    show(faqThreeDetails);
};
var handleDisplayFaqFour = function (e) {
    e.preventDefault();
    if (window.getComputedStyle(faqFourDetails).display === 'block') {
        hide(faqFourDetails);
        return;
    }
    show(faqFourDetails);
};
var faqOne = document.querySelector('#faq-one');
var faqTwo = document.querySelector('#faq-two');
var faqThree = document.querySelector('#faq-three');
var faqFour = document.querySelector('#faq-four');
var faqOneDetails = document.querySelector('#faq-one .section__four__faqs__faq__details');
var faqTwoDetails = document.querySelector('#faq-two .section__four__faqs__faq__details');
var faqThreeDetails = document.querySelector('#faq-three .section__four__faqs__faq__details');
var faqFourDetails = document.querySelector('#faq-four .section__four__faqs__faq__details');
faqOne.addEventListener('click', handleDisplayFaqOne);
faqTwo.addEventListener('click', handleDisplayFaqTwo);
faqThree.addEventListener('click', handleDisplayFaqThree);
faqFour.addEventListener('click', handleDisplayFaqFour);
