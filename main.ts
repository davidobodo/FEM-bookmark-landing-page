const hamburger = document.querySelector('.nav__hamburger');
const cancel = document.querySelector('.cancel-icon');
const mobile_nav: HTMLElement = document.querySelector('.nav__links');

const tab1title = document.querySelector('.tab-1-title');
const tab2title = document.querySelector('.tab-2-title');
const tab3title = document.querySelector('.tab-3-title');

const tab1: HTMLElement = document.querySelector('#tab-1');
const tab2: HTMLElement = document.querySelector('#tab-2');
const tab3: HTMLElement = document.querySelector('#tab-3');

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
}

const handleDisplayTabTwo = () => {
    tab1.style.display = 'none';
    tab3.style.display = 'none';

    if (window.screen.width <= 765) {
        tab2.style.display = 'block';

    } else {
        tab2.style.display = 'flex';
    }
}

const handleDisplayTabThree = () => {
    tab1.style.display = 'none';
    tab2.style.display = 'none';

    if (window.screen.width <= 765) {
        tab3.style.display = 'block';

    } else {
        tab3.style.display = 'flex';
    }
}

handleDisplayTabOne();

tab1title.addEventListener('click', handleDisplayTabOne);
tab2title.addEventListener('click', handleDisplayTabTwo);
tab3title.addEventListener('click', handleDisplayTabThree);