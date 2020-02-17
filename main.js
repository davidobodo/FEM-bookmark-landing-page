//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//Navbar Logic(start)
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
//Navbar Logic(end)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//Tabs Logic(start)
var tab1title = document.querySelector('.tab-1-title');
var tab2title = document.querySelector('.tab-2-title');
var tab3title = document.querySelector('.tab-3-title');
var tab1titleUnderline = document.querySelector('.tab-1-title span');
var tab2titleUnderline = document.querySelector('.tab-2-title span');
var tab3titleUnderline = document.querySelector('.tab-3-title span');
var tab1details = document.querySelector('#tab-1');
var tab2details = document.querySelector('#tab-2');
var tab3details = document.querySelector('#tab-3');
// const handleDisplayTab = (
//         showTab,
//         showTabLine, 
//         hideFirstTab,
//         hideFirstTabLine,
//         hidesecondTab,
//         hideSecondTabLine,
//     ) => {
//     if (window.screen.width <= 765) {
//         showTab.style.display = 'block';
//     } else {
//         showTab.style.display = 'flex';
//     }
//     showTabLine.style.display = 'inline';
//     hideFirstTab.style.display = 'none';
//     hideFirstTabLine.style.display = 'none';
//     hidesecondTab.style.display = 'none';
//     hideSecondTabLine.style.display = 'none';
// }
var handleDisplayTabOne = function () {
    if (window.screen.width <= 765) {
        tab1details.style.display = 'block';
    }
    else {
        tab1details.style.display = 'flex';
    }
    tab1titleUnderline.style.display = 'inline';
    tab2details.style.display = 'none';
    tab2titleUnderline.style.display = 'none';
    tab3details.style.display = 'none';
    tab3titleUnderline.style.display = 'none';
};
var handleDisplayTabTwo = function () {
    tab1details.style.display = 'none';
    tab1titleUnderline.style.display = 'none';
    if (window.screen.width <= 765) {
        tab2details.style.display = 'block';
    }
    else {
        tab2details.style.display = 'flex';
    }
    tab2titleUnderline.style.display = 'inline';
    tab3details.style.display = 'none';
    tab3titleUnderline.style.display = 'none';
};
var handleDisplayTabThree = function () {
    tab1details.style.display = 'none';
    tab1titleUnderline.style.display = 'none';
    tab2details.style.display = 'none';
    tab2titleUnderline.style.display = 'none';
    if (window.screen.width <= 765) {
        tab3details.style.display = 'block';
    }
    else {
        tab3details.style.display = 'flex';
    }
    tab3titleUnderline.style.display = 'inline';
};
handleDisplayTabOne();
tab1title.addEventListener('click', handleDisplayTabOne);
tab2title.addEventListener('click', handleDisplayTabTwo);
tab3title.addEventListener('click', handleDisplayTabThree);
// Tabs Logic(End)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// FAQ Logic (start)
var faqOne = document.querySelector('#faq-one');
var faqTwo = document.querySelector('#faq-two');
var faqThree = document.querySelector('#faq-three');
var faqFour = document.querySelector('#faq-four');
var faqOneDetails = document.querySelector('#faq-one .section__four__faqs__faq__details');
var faqTwoDetails = document.querySelector('#faq-two .section__four__faqs__faq__details');
var faqThreeDetails = document.querySelector('#faq-three .section__four__faqs__faq__details');
var faqFourDetails = document.querySelector('#faq-four .section__four__faqs__faq__details');
var faqOneDirection = document.querySelector('#faq-one .dropdown-direction');
var faqTwoDirection = document.querySelector('#faq-two .dropdown-direction');
var faqThreeDirection = document.querySelector('#faq-three .dropdown-direction');
var faqFourDirection = document.querySelector('#faq-four .dropdown-direction');
var show = function (elem) {
    elem.style.display = 'block';
};
var hide = function (elem) {
    elem.style.display = 'none';
};
var moveArrowUp = function (elem) {
    elem.classList.add('arrow-up');
};
var moveArrowDown = function (elem) {
    elem.classList.remove('arrow-up');
};
var handleDisplayFaq = function (e, details, direction) {
    e.preventDefault();
    if (window.getComputedStyle(details).display === 'block') {
        hide(details);
        moveArrowDown(direction);
        return;
    }
    show(details);
    moveArrowUp(direction);
};
faqOne.addEventListener('click', function (e) { return handleDisplayFaq(e, faqOneDetails, faqOneDirection); });
faqTwo.addEventListener('click', function (e) { return handleDisplayFaq(e, faqTwoDetails, faqTwoDirection); });
faqThree.addEventListener('click', function (e) { return handleDisplayFaq(e, faqThreeDetails, faqThreeDirection); });
faqFour.addEventListener('click', function (e) { return handleDisplayFaq(e, faqFourDetails, faqFourDirection); });
// FAQ Logic (end)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// Form Logic (start)
var errorContainer = document.querySelector('.input-container');
var input = document.querySelector('.input-container input');
var form = document.forms[0];
var handleSubmitForm = function (e) {
    e.preventDefault();
    console.log(form.input.value);
    var value = form.input.value;
    //email validator
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        console.log('valid');
        return alert('Thank you for successfully contacting us.');
    }
    else {
        console.log('invalid');
        errorContainer.classList.add('error');
    }
};
form.addEventListener('submit', handleSubmitForm);
// Form Logic (end)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
