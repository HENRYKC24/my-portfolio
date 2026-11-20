// Shared by every page: the light/dark switch (remembered), the menu on
// small screens, the section you're reading lit in the side menu, and this
// year in the footer. (Each page sets the saved theme in <head> first, so
// it never flashes the wrong one.)

const root = document.documentElement;

document.querySelectorAll('.theme-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const light = root.getAttribute('data-theme') !== 'light';
    if (light) {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark');
    } catch (e) {
      // Private browsing: the choice lasts for this visit.
    }
  });
});

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const links = [...document.querySelectorAll('.toc a')];
if (links.length && 'IntersectionObserver' in window) {
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((a) => a.classList.remove('active'));
          const link = byId.get(entry.target.id);
          if (link) {
            link.classList.add('active');
          }
        }
      });
    },
    { rootMargin: '-35% 0px -60% 0px' },
  );
  byId.forEach((a, id) => {
    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }
  });
}

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

// Copy buttons (DateObserver bank details): copy the number, say so.
document.querySelectorAll('[data-copy]').forEach((button) => {
  const label = button.textContent;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Copied';
    } catch (e) {
      button.textContent = 'Select and copy';
    }
    setTimeout(() => {
      button.textContent = label;
    }, 1800);
  });
});
