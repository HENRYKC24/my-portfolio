const body = document.querySelector('body');
const mobileMenu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-icon');
const firstLMenuItem = document.querySelector('.menu-item');
const div = document.createElement('div');
const i = document.createElement('i');
const removeMobileMenu = () => {
  body.classList.remove('stop-scrolling');
  mobileMenu.classList.add('menu');
  mobileMenu.classList.remove('mobile-menu-format');
};
