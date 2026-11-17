// The menu on small screens, and this year in the footer.
const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

if (button && nav) {
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
