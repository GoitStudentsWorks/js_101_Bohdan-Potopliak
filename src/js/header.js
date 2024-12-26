const menuOpenBtn = document.querySelector('.burger-menu-button');
const menuCloseBtn = document.querySelector('.menu-close-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mainMenu = document.querySelector('.menu-link');
const menuNav = document.querySelector('.menu-nav');
const menuOrder = document.querySelector('.menu-order-button');

menuOpenBtn.addEventListener('click', handleOpenBtnClick);
menuCloseBtn.addEventListener('click', handleCloseBtnClick);
mobileMenu.addEventListener('click', handleRedirectClick);
mainMenu.addEventListener('click', handleMainMenuOpen);
menuOrder.addEventListener('click', handleCloseBtnClick);

export function handleOpenBtnClick() {
    mobileMenu.classList.add('is-open');
}

export function handleCloseBtnClick() {
    mobileMenu.classList.remove('is-open');
}

export function handleRedirectClick(e) {
    if (!e.target.classList.contains('mobile-menu-link')) {
        return;
    }

    mobileMenu.classList.remove('is-open');
}

export function handleMainMenuOpen(e) {
    e.preventDefault();
    menuNav.classList.toggle('is-open')

}