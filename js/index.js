const projects = [
  {
    projectName: 'Clock',
    canopy: 'CLOCK',
    role: 'Front End Dev',
    year: '2019',
    image: {
      URL: './assets/images/analog_clock2.png',
      alt: 'Simulation of analog clock',
    },
    description:
      'This project is a simulation of an analog clock. The project was motivated by a quest to understand JavaScript/HTML5 canvas. I read the concept in w3schools.com and tried to develop an analog clock that will be better than the one I saw there. My code is there on GitHub to compare to check for plagiarism. I developed this app in two weeks, but I continued adding changes since then when ever I have time.',
    technologies: ['html5', 'css', 'javascipt', 'github'],
    liveLink: 'https://henrykc24.github.io/analogue-clock/',
    githubLink: 'https://github.com/HENRYKC24/analogue-clock',
  },
  {
    projectName: 'Game',
    canopy: 'GAME',
    role: 'Front End Dev',
    year: '2021',
    image: {
      URL: './assets/images/greedy_hunter_game.png',
      alt: 'A game to train the memory',
    },
    description:
      'I was given this project as by a recruiter to develop. From the Figma files I developed this game from scratch using React.js. The game functions very well, but I will adapt it to mobile viewport in the nearest future. It is presently optimized for desktop computers, though it runs on mobile too.',
    technologies: ['html', 'css', 'javascipt', 'react.js', 'github'],
    liveLink: 'https://henrykc24.github.io/greedy-hunter-game/',
    githubLink: 'https://github.com/HENRYKC24/greedy-hunter-game',
  },
  {
    projectName: 'Website',
    canopy: 'WEBSITE',
    role: 'Full Stack Dev',
    year: '2021',
    image: {
      URL: './assets/images/gbt_structurals.png',
      alt: 'GBT structurals ltd website',
    },
    description:
      'A friend, who owns a contruction company approached me to develop this website for him. The website is a full stack project and is still undergoing development. Due to some bottleneck the website has not been fully implemented, but we have a plan to complete it soon.',
    technologies: [
      'html',
      'css',
      'javascipt',
      'react.js',
      'github',
      'node.js',
      'express',
      'mySQL',
    ],
    liveLink: 'https://gbtstructurals.herokuapp.com/',
    githubLink: '#This_is_a_private_repository_please',
  },
  {
    projectName: 'Game',
    canopy: 'GAME',
    role: 'Front End Dev',
    year: '2021',
    image: {
      URL: './assets/images/memory_game.png',
      alt: 'A game for testing and improving the memory',
    },
    description:
      'At the end of my software development program at Udemy online, I was given this game as a project. The game test how a user can be able to remember clicking patterns thereby improving the users memory/retention. The UI is very interactive and engaging.',
    technologies: ['html', 'css', 'javascipt', 'github', 'jQuery'],
    liveLink: 'https://henrykc24.github.io/simon-game',
    githubLink: 'https://github.com/HENRYKC24/simon-game',
  },
  {
    projectName: 'Restful API',
    canopy: 'API',
    role: 'Back End Dev',
    year: '2021',
    image: {
      URL: './assets/images/ifit_api.png',
      alt: 'A backend API development',
    },
    description:
      'I developed this API for a React Native application for a friend. The API is motivated by IFIT app. It was developed using MVC approach and also makes use of REST api calls',
    technologies: [
      'node.js',
      'express',
      'mySQL',
      'github',
      'dotenv',
      'bcrypt',
      'cors',
    ],
    liveLink: 'https://ifit-api.herokuapp.com/',
    githubLink: 'https://github.com/HENRYKC24/IFIT-API',
  },
  {
    projectName: 'React Site',
    canopy: 'WEBSITE',
    role: 'Full Stack Dev',
    year: '2020',
    image: {
      URL: './assets/images/my_website_react.png',
      alt: 'Previous website still under development',
    },
    description:
      'This project is motivated by the progress I made in using the MERN stack. It is a full stack project which I intend to use as my website before I started the develpment of this very website at Microverse. The project is not yet done and I am hoping to continue the development soon. I implemented blog feature in the website.',
    technologies: [
      'node.js',
      'express',
      'mySQL',
      'github',
      'dotenv',
      'bcrypt',
      'cors',
    ],
    liveLink: 'https://henrykc.herokuapp.com/',
    githubLink: 'https://github.com/HENRYKC24/henrykc_website_backend',
  },
  {
    projectName: 'My Portfolio',
    canopy: 'WEBSITE',
    role: 'Front End Dev',
    year: '2021',
    image: {
      URL: './assets/images/portfolio.png',
      alt: 'My portfolio website',
    },
    description:
      'This website was motivated by Microverse Inc. I joined Microver on July 5, 2021 and It was a standard to first work on your portfolio website. This website has everything about me in the world of software development. I am so happy to have developed this website to help me get a better job',
    technologies: ['html', 'css', 'javascript', 'github', 'fontawesome'],
    liveLink: 'https://henrykc24.github.io/my-portfolio/',
    githubLink: 'https://github.com/HENRYKC24/my-portfolio',
  },
  {
    projectName: 'Mobile App',
    canopy: 'MOBILE',
    role: 'Front End Dev',
    year: '2021',
    image: {
      URL: './assets/images/s_app1.png',
      alt: 'Seedstages mobile application',
    },
    description:
      'This mobile app is developed by my team at Seedstages. When I joined Seedstage as a React Native Front End Engineer, I was being given series of tasks to carry out, one of which is to develope a screen that can send message to any talent discovered by companies. I did the coding and it was latered reviewed and merged to the main branch on bitbucket. The screen seeds an email to such talents/developer, who is looking for internship/full time opportunity.',
    technologies: [
      'html',
      'css',
      'javascript',
      'bitbucket',
      'react',
      'react-native',
      'firebase',
    ],
    liveLink:
      'https://play.google.com/store/apps/details?id=com.seedstages.seedstages',
    githubLink:
      'https://bitbucket.org/seedstages-admin/seedstages-mobile/src/master/',
  },
  {
    projectName: 'Mobile App',
    canopy: 'MOBILE',
    role: 'Front End Dev',
    year: '2021',
    image: {
      URL: './assets/images/s_app2.png',
      alt: 'Seedstages mobile application',
    },
    description:
      'This mobile app is developed by my team at Seedstages. When I joined Seedstage as a React Native Front End Engineer, I was being given series of tasks to carry out, one of which is to develope a screen that can send message to any talent discovered by companies. I did the coding and it was latered reviewed and merged to the main branch on bitbucket. The screen seeds an email to such talents/developer, who is looking for internship/full time opportunity.',
    technologies: [
      'html',
      'css',
      'javascript',
      'bitbucket',
      'react',
      'react-native',
      'firebase',
    ],
    liveLink:
      'https://play.google.com/store/apps/details?id=com.seedstages.seedstages',
    githubLink:
      'https://bitbucket.org/seedstages-admin/seedstages-mobile/src/master/',
  },
];

const projectsContainer = document.createElement('section');
projectsContainer.setAttribute('class', 'projects');
projectsContainer.setAttribute('id', 'projects');

const h1 = document.createElement('h1');
h1.setAttribute('class', 'see-projects')
h1.textContent = 'My Works 👇';
const rule = document.createElement('hr');
rule.setAttribute('class', 'rule');
projectsContainer.appendChild(h1);
projectsContainer.appendChild(rule);

projects.forEach((project, index) => {
  const projectSection = document.createElement('section');
  projectSection.setAttribute('class', 'project');

  if (index === 0) {
    projectSection.classList.add('first-project');
  }

  const imageSection = document.createElement('section');
  imageSection.setAttribute('class', 'project-image');

  if ((index + 1) % 2 === 0) {
    imageSection.classList.add('exchange');
  }

  const image = document.createElement('img');
  image.setAttribute('class', 'image');
  image.setAttribute('src', project.image.URL);
  image.setAttribute('alt', project.image.alt);

  imageSection.appendChild(image);

  projectSection.appendChild(imageSection);

  const section = document.createElement('section');

  const projectNameH2 = document.createElement('h2');
  projectNameH2.setAttribute('class', 'project-name');
  projectNameH2.textContent = project.projectName;
  section.appendChild(projectNameH2);

  const projectYearUl = document.createElement('ul');
  projectYearUl.setAttribute('class', 'project-year');

  const li1 = document.createElement('li');
  li1.setAttribute('class', 'canopy');
  li1.textContent = project.canopy;
  projectYearUl.appendChild(li1);

  const li2 = document.createElement('li');
  li2.setAttribute('class', 'dot');
  projectYearUl.appendChild(li2);

  const li3 = document.createElement('li');
  li3.setAttribute('class', 'role');
  li3.textContent = project.role;
  projectYearUl.appendChild(li3);

  const li4 = document.createElement('li');
  li4.setAttribute('class', 'dot');
  projectYearUl.appendChild(li4);

  const li5 = document.createElement('li');
  li5.setAttribute('class', 'role');
  li5.textContent = project.year;
  projectYearUl.appendChild(li5);

  section.appendChild(projectYearUl);

  const descriptionSection = document.createElement('section');
  descriptionSection.setAttribute('class', 'project-description');

  const p = document.createElement('p');
  p.textContent = project.description.length > 100 ? `${project.description.slice(0, 100)}...` : project.description;
  descriptionSection.appendChild(p);

  section.appendChild(descriptionSection);

  const techUl = document.createElement('ul');
  techUl.setAttribute('class', 'project-technologies');
  project.technologies.forEach((tech) => {
    const li = document.createElement('li');
    li.textContent = tech;
    techUl.appendChild(li);
  });

  section.appendChild(techUl);

  const projectButton = document.createElement('button');
  projectButton.setAttribute('type', 'button');
  projectButton.setAttribute('class', 'project-button');

  projectButton.classList.add('pr-btn');
  projectButton.textContent = 'See Project';

  section.appendChild(projectButton);
  projectSection.appendChild(section);
  projectsContainer.appendChild(projectSection);
});

const aboutContainer = document.querySelector('.about-container');
const wrapper = document.querySelector('.wrapper');
wrapper.insertBefore(projectsContainer, aboutContainer);

// document.querySelector('.wrapper').appendChild(projectsContainer);

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

const showMobileMenu = () => {
  body.classList.add('stop-scrolling');
  div.classList.add('close-container');
  i.classList.add('fal', 'fa-times');
  div.appendChild(i);
  mobileMenu.insertBefore(div, firstLMenuItem);
  mobileMenu.classList.remove('menu');
  mobileMenu.classList.add('mobile-menu-format');
};

window.addEventListener('resize', () => {
  if (window.innerWidth > 1020) {
    removeMobileMenu();
  }
});

menuButton.addEventListener('click', showMobileMenu);
mobileMenu.addEventListener('click', removeMobileMenu);

// Modal
const populateModal = (index) => {
  document.querySelector('body').classList.add('stop-scrolling');
  document.querySelector('.project-modal-background').style.display = 'block';

  const modalName = document.querySelector('.modal-project-name');
  const modalCanopy = document.querySelector('.project-modal-main .canopy');
  const modalRole = document.querySelector('.project-modal-main .role');
  const modalYear = document.querySelector('.project-modal-main .year');
  const modalImage = document.querySelector('.modal-image');
  const modalDescription = document.querySelector('.modal-project-description');
  const modalTechs = document.querySelector('.modal-techs');
  const modalLiveButtonAnchor = document.querySelector('.live-link a');
  const modalGithubButtonAnchor = document.querySelector('.github-link a');
  const activeProject = projects[index];

  modalName.textContent = activeProject.projectName;
  modalCanopy.textContent = activeProject.canopy;
  modalRole.textContent = activeProject.role;
  modalYear.textContent = activeProject.year;
  modalImage.setAttribute('src', activeProject.image.URL);
  modalImage.setAttribute('alt', activeProject.image.alt);
  modalDescription.textContent = activeProject.description;
  modalTechs.innerHTML = '';

  activeProject.technologies.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    modalTechs.appendChild(li);
    return true;
  });

  modalLiveButtonAnchor.setAttribute('href', activeProject.liveLink);
  modalGithubButtonAnchor.setAttribute('href', activeProject.githubLink);
};

const closeModal = () => {
  document.querySelector('body').classList.remove('stop-scrolling');
  document.querySelector('.project-modal-background').style.display = 'none';
};

document.querySelector('.project-modal-main').addEventListener('click', (e) => {
  e.stopPropagation();
});

document.querySelector('.close').addEventListener('click', closeModal);
document
  .querySelector('.project-modal-background')
  .addEventListener('click', closeModal);

const allProjectButtons = Array.from(document.querySelectorAll('.pr-btn'));

allProjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => populateModal(index));
  return true;
});

// Drop down menu for skills and languages
const LangFrameSkillChevrons = Array.from(document.querySelectorAll('.lang-and-icon .fa-chevron-down'));
LangFrameSkillChevrons.map((element) => {
  element.addEventListener('click', () => {
    element.parentElement.parentElement.nextElementSibling.classList.toggle('toggle-lang-list');
    element.classList.toggle('rotate-chevron');
  });
  return true;
});