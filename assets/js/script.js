// MOBILE FIRST

// HAVE KNOWLEDGE OF JAVASCRIPT: Thus implemented JS to add mobile nav btn toggle function

// Toggle function Mobile Navigation Button

const navEl = document.querySelector('nav');
const navBtnEl = document.querySelector('.nav__mobile-btn');

navBtnEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
});