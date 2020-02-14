const hamburger = document.querySelector('.nav__hamburger');
const cancel = document.querySelector('.cancel-icon');
const mobile_nav: HTMLElement = document.querySelector('.nav__links');

const tab1title = document.querySelector('.tab-1-title');
const tab2title = document.querySelector('.tab-2-title');
const tab3title = document.querySelector('.tab-3-title');

const tab1titleUnderline: HTMLElement = document.querySelector('.tab-1-title span');
const tab2titleUnderline: HTMLElement = document.querySelector('.tab-2-title span');
const tab3titleUnderline: HTMLElement = document.querySelector('.tab-3-title span');


const tab1: HTMLElement = document.querySelector('#tab-1');
const tab2: HTMLElement = document.querySelector('#tab-2');
const tab3: HTMLElement = document.querySelector('#tab-3');

const faqs = document.querySelectorAll('.section__four__faqs__faq');

const handleShowMobileNavbar = () => {
    mobile_nav.style.transform = 'translateX(0px)';
}

const handleHideMobileNavbar = () => {
    mobile_nav.style.transform = 'translateX(100vw)';
}

hamburger.addEventListener('click', handleShowMobileNavbar)
cancel.addEventListener('click', handleHideMobileNavbar)


const handleDisplayTabOne = () => {
    tab2.style.display = 'none';
    tab3.style.display = 'none';



    if (window.screen.width <= 765) {
        tab1.style.display = 'block';

    } else {
        tab1.style.display = 'flex';
    }

    tab1titleUnderline.style.display = 'inline';
    tab2titleUnderline.style.display = 'none';
    tab3titleUnderline.style.display = 'none';
}

const handleDisplayTabTwo = () => {
    tab1.style.display = 'none';
    tab3.style.display = 'none';

    if (window.screen.width <= 765) {
        tab2.style.display = 'block';

    } else {
        tab2.style.display = 'flex';
    }

    tab1titleUnderline.style.display = 'none';
    tab2titleUnderline.style.display = 'inline';
    tab3titleUnderline.style.display = 'none';
}

const handleDisplayTabThree = () => {
    tab1.style.display = 'none';
    tab2.style.display = 'none';

    if (window.screen.width <= 765) {
        tab3.style.display = 'block';

    } else {
        tab3.style.display = 'flex';
    }

    tab1titleUnderline.style.display = 'none';
    tab2titleUnderline.style.display = 'none';
    tab3titleUnderline.style.display = 'inline';
}

handleDisplayTabOne();

tab1title.addEventListener('click', handleDisplayTabOne);
tab2title.addEventListener('click', handleDisplayTabTwo);
tab3title.addEventListener('click', handleDisplayTabThree);

const show = (elem) => {
    elem.style.display = 'block';
}

const hide = (elem) => {
    elem.style.display = 'none';
}


const handleDisplayFaqOne = (e) => {
    e.preventDefault();
    if (window.getComputedStyle(faqOneDetails).display === 'block') {
        hide(faqOneDetails);
        return;
    }
    show(faqOneDetails)
}
const handleDisplayFaqTwo = (e) => {
    e.preventDefault();
    if (window.getComputedStyle(faqTwoDetails).display === 'block') {
        hide(faqTwoDetails);
        return;
    }
    show(faqTwoDetails)

}
const handleDisplayFaqThree = (e) => {
    e.preventDefault();
    if (window.getComputedStyle(faqThreeDetails).display === 'block') {
        hide(faqThreeDetails);
        return;
    }
    show(faqThreeDetails)

}
const handleDisplayFaqFour = (e) => {
    e.preventDefault();
    if (window.getComputedStyle(faqFourDetails).display === 'block') {
        hide(faqFourDetails);
        return;
    }
    show(faqFourDetails)

}

const faqOne = document.querySelector('#faq-one');
const faqTwo = document.querySelector('#faq-two');
const faqThree = document.querySelector('#faq-three');
const faqFour = document.querySelector('#faq-four');


const faqOneDetails: HTMLElement = document.querySelector('#faq-one .section__four__faqs__faq__details');
const faqTwoDetails: HTMLElement = document.querySelector('#faq-two .section__four__faqs__faq__details');
const faqThreeDetails: HTMLElement = document.querySelector('#faq-three .section__four__faqs__faq__details');
const faqFourDetails: HTMLElement = document.querySelector('#faq-four .section__four__faqs__faq__details');

faqOne.addEventListener('click', handleDisplayFaqOne)
faqTwo.addEventListener('click', handleDisplayFaqTwo)
faqThree.addEventListener('click', handleDisplayFaqThree)
faqFour.addEventListener('click', handleDisplayFaqFour)