//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//Navbar Logic(start)

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

//Navbar Logic(end)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//Tabs Logic(start)

const tab1title = document.querySelector('.tab-1-title');
const tab2title = document.querySelector('.tab-2-title');
const tab3title = document.querySelector('.tab-3-title');

const tab1titleUnderline: HTMLElement = document.querySelector('.tab-1-title span');
const tab2titleUnderline: HTMLElement = document.querySelector('.tab-2-title span');
const tab3titleUnderline: HTMLElement = document.querySelector('.tab-3-title span');

const tab1details: HTMLElement = document.querySelector('#tab-1');
const tab2details: HTMLElement = document.querySelector('#tab-2');
const tab3details: HTMLElement = document.querySelector('#tab-3');

const handleDisplayTab = (
    showTab,
    showTabLine,
    hideFirstTab,
    hideFirstTabLine,
    hidesecondTab,
    hideSecondTabLine,
) => {
    if (window.screen.width <= 765) {
        showTab.style.display = 'block';
    } else {
        showTab.style.display = 'flex';
    }
    showTabLine.style.display = 'inline';


    hideFirstTab.style.display = 'none';
    hideFirstTabLine.style.display = 'none';


    hidesecondTab.style.display = 'none';
    hideSecondTabLine.style.display = 'none';
}

tab1title.addEventListener('click', (e) => handleDisplayTab(
    tab1details,
    tab1titleUnderline,
    tab2details,
    tab2titleUnderline,
    tab3details,
    tab3titleUnderline
));
tab2title.addEventListener('click', (e) => handleDisplayTab(
    tab2details,
    tab2titleUnderline,
    tab1details,
    tab1titleUnderline,
    tab3details,
    tab3titleUnderline
));
tab3title.addEventListener('click', (e) => handleDisplayTab(
    tab3details,
    tab3titleUnderline,
    tab2details,
    tab2titleUnderline,
    tab1details,
    tab1titleUnderline
));

handleDisplayTab(
    tab1details,
    tab1titleUnderline,
    tab2details,
    tab2titleUnderline,
    tab3details,
    tab3titleUnderline
);

// Tabs Logic(End)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// FAQ Logic (start)

const faqOne = document.querySelector('#faq-one');
const faqTwo = document.querySelector('#faq-two');
const faqThree = document.querySelector('#faq-three');
const faqFour = document.querySelector('#faq-four');

const faqOneDetails: HTMLElement = document.querySelector('#faq-one .section__four__faqs__faq__details');
const faqTwoDetails: HTMLElement = document.querySelector('#faq-two .section__four__faqs__faq__details');
const faqThreeDetails: HTMLElement = document.querySelector('#faq-three .section__four__faqs__faq__details');
const faqFourDetails: HTMLElement = document.querySelector('#faq-four .section__four__faqs__faq__details');

const faqOneDirection: HTMLElement = document.querySelector('#faq-one .dropdown-direction');
const faqTwoDirection: HTMLElement = document.querySelector('#faq-two .dropdown-direction');
const faqThreeDirection: HTMLElement = document.querySelector('#faq-three .dropdown-direction');
const faqFourDirection: HTMLElement = document.querySelector('#faq-four .dropdown-direction');


const show = (elem) => {
    elem.style.display = 'block';
}

const hide = (elem) => {
    elem.style.display = 'none';
}

const moveArrowUp = (elem) => {
    elem.classList.add('arrow-up')
}

const moveArrowDown = (elem) => {
    elem.classList.remove('arrow-up')
}

const handleDisplayFaq = (e: any, details: any, direction: any) => {
    e.preventDefault();
    if (window.getComputedStyle(details).display === 'block') {
        hide(details);
        moveArrowDown(direction);
        return;
    }
    show(details)
    moveArrowUp(direction);
}

faqOne.addEventListener('click', (e) => handleDisplayFaq(e, faqOneDetails, faqOneDirection))
faqTwo.addEventListener('click', (e) => handleDisplayFaq(e, faqTwoDetails, faqTwoDirection))
faqThree.addEventListener('click', (e) => handleDisplayFaq(e, faqThreeDetails, faqThreeDirection))
faqFour.addEventListener('click', (e) => handleDisplayFaq(e, faqFourDetails, faqFourDirection))

// FAQ Logic (end)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// Form Logic (start)

const errorContainer = document.querySelector('.input-container');
const input: any = document.querySelector('.input-container input');
const form = document.forms[0];
let showError = false;


const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(form.input.value)
    const value = form.input.value;
    //email validator
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        console.log('valid')
        return alert('Thank you for successfully contacting us.')
    } else {
        console.log('invalid')
        showError = true;
        errorContainer.classList.add('error');
    }
}

function handleKeyDown(e: KeyboardEvent) {
    const key = e.key;
    if (!showError || key === "Enter") return;

    console.log('CALLING')
    errorContainer.classList.remove('error');
    showError = false;
}

form.input.addEventListener('keydown', handleKeyDown);
form.addEventListener('submit', handleSubmitForm);

// Form Logic (end)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------