const mobileBurger = document.querySelector('.mobile-burger');
const mobileMenu = document.querySelector('.mobile__menu');

mobileBurger.addEventListener('click', () => {
    mobileBurger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})  

