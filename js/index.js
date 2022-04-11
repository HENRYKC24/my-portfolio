class Project {
  constructor(
    projectName,
    canopy,
    role,
    year,
    image,
    description,
    technologies,
    liveLink,
    githubLink,
  ) {
    this.projectName = projectName;
    this.canopy = canopy;
    this.role = role;
    this.year = year;
    this.image = image;
    this.description = description;
    this.technologies = technologies;
    this.liveLink = liveLink;
    this.githubLink = githubLink;
  }
}

const capstoneRails = new Project(
  'Lease',
  'Lease',
  'Full Stack Dev',
  '2022',
  {
    URL: './assets/images/capstone_rails.png',
    alt: 'Full stack rails-react project',
  },
  'This is an apartment webapp that allows a user to sign up, log in, and make leases on particular apartments. The user, apartments, and leases are stored in this API.',
  ['ruby', 'rails', 'react', 'github', 'heroku', 'Rspec', 'Jest'],
  'https://lease-a-home.herokuapp.com/',
  'https://github.com/HENRYKC24/lease-a-home-frontend',
);

const project1 = new Project(
  'Clock',
  'CLOCK',
  'Front End Dev',
  '2019',
  {
    URL: './assets/images/analog_clock2.png',
    alt: 'Simulation of analog clock',
  },
  'This project is a simulation of an analog clock. The project was motivated by a quest to understand JavaScript/HTML5 canvas. I read the concept in w3schools.com and tried to develop an analog clock that will be better than the one I saw there. My code is there on GitHub to compare to check for plagiarism. I developed this app in two weeks, but I continued adding changes since then when ever I have time.',
  ['html5', 'css', 'javascipt', 'github'],
  'https://henrykc24.github.io/analogue-clock/',
  'https://github.com/HENRYKC24/analogue-clock',
);

const project2 = new Project(
  'Game',
  'GAME',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/greedy_hunter_game.png',
    alt: 'A game to train the memory',
  },

  'I was given this project by a recruiter to develop. From the Figma files I developed this game from scratch using React.js. The game functions very well, but I will adapt it to mobile viewport in the nearest future. It is presently optimized for desktop computers, though it runs on mobile too.',
  ['html', 'css', 'javascipt', 'react.js', 'github'],
  'https://henrykc24.github.io/greedy-hunter-game/',
  'https://github.com/HENRYKC24/greedy-hunter-game',
);
const project4 = new Project(
  'Game',
  'GAME',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/memory_game.png',
    alt: 'A game for testing and improving the memory',
  },

  'At the end of my software development program at Udemy online, I was given this game as a project. The game test how a user can be able to remember clicking patterns thereby improving the users memory/retention. The UI is very interactive and engaging.',
  ['html', 'css', 'javascipt', 'github', 'jQuery'],
  'https://henrykc24.github.io/simon-game',
  'https://github.com/HENRYKC24/simon-game',
);
const project5 = new Project(
  'Restful API',
  'API',
  'Back End Dev',
  '2021',
  {
    URL: './assets/images/ifit_api.png',
    alt: 'A backend API development',
  },

  'I developed this API for a React Native application for a friend. The API is motivated by IFIT app. It was developed using MVC approach and also makes use of REST api calls',
  ['node.js', 'express', 'mySQL', 'github', 'dotenv', 'bcrypt', 'cors'],
  'https://ifit-api.herokuapp.com/',
  'https://github.com/HENRYKC24/IFIT-API',
);
const project7 = new Project(
  'My Portfolio',
  'WEBSITE',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/portfolio_screenshot.png',
    alt: 'My portfolio website',
  },

  'This website was motivated by Microverse Inc. I joined Microver on July 5, 2021 and It was a standard to first work on your portfolio website. This website has everything about me in the world of software development. I am so happy to have developed this website to help me get a better job.',
  ['html', 'css', 'javascript', 'github', 'fontawesome'],
  'https://henrykc24.github.io/my-portfolio/',
  'https://github.com/HENRYKC24/my-portfolio',
);
const project8 = new Project(
  'Mobile App',
  'MOBILE',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/s_app1.png',
    alt: 'Seedstages mobile application',
  },
  'This mobile app is developed by my team at Seedstages. When I joined Seedstage as a React Native Front End Engineer, I was being given series of tasks to carry out, one of which is to develope a screen that can send message to any talent discovered by companies. I did the coding and it was latered reviewed and merged to the main branch on bitbucket. The screen seeds an email to such talents/developer, who is looking for internship/full time opportunity.',
  [
    'html',
    'css',
    'javascript',
    'bitbucket',
    'react',
    'react-native',
    'firebase',
  ],
  'https://play.google.com/store/apps/details?id=com.seedstages.seedstages',
  'https://bitbucket.org/seedstages-admin/seedstages-mobile/src/master/',
);
const project9 = new Project(
  'Mobile App',
  'MOBILE',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/s_app2.png',
    alt: 'Seedstages mobile application',
  },
  'This mobile app is developed by my team at Seedstages. When I joined Seedstage as a React Native Front End Engineer, I was being given series of tasks to carry out, one of which is to develope a screen that can send message to any talent discovered by companies. I did the coding and it was latered reviewed and merged to the main branch on bitbucket. The screen seeds an email to such talents/developer, who is looking for internship/full time opportunity.',
  [
    'html',
    'css',
    'javascript',
    'bitbucket',
    'react',
    'react-native',
    'firebase',
  ],
  'https://play.google.com/store/apps/details?id=com.seedstages.seedstages',
  'https://bitbucket.org/seedstages-admin/seedstages-mobile/src/master/',
);
const project10 = new Project(
  'Calculator',
  'WEB APP',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/math_magicians.png',
    alt: 'Mathematics app screenshot',
  },
  'This is a calculator app with other features built in it. It has some quotes on mathematics on a different page.',
  [
    'html',
    'css',
    'javascript',
    'github',
  ],
  'https://henrykc24.github.io/Math-Magicians-React-Redux/',
  'https://github.com/HENRYKC24/Math-Magicians-React-Redux',
);
const project11 = new Project(
  'Covid-19 App',
  'WEB APP',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/covid19_app_screenshot.png',
    alt: 'Covid19 app screenshot',
  },
  'The application shows information about the coronavirus situations in the world. It is built around an API to fetch the needed data. It can show information on the country level as well as region and sub-region levels. You can actually find covid19 information using a date filter. This is a capstone project for my React/Redux course at Microverse Inc.',
  [
    'html',
    'css',
    'javascript',
    'react',
    'redux',
    'api',
    'github',
  ],
  'https://henrykc24.github.io/covid19-info-finder/',
  'https://github.com/HENRYKC24/covid19-info-finder/',
);
const project12 = new Project(
  'Restaurant Meal Show',
  'WEB APP',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/restaurant_app_screenshot.png',
    alt: 'Restaurant app screenshot',
  },
  'This is a restaurant application for my JavaScript capstone project. It showcases different foods that can be liked and commented on. It uses an API to store likes and comments. It was developed with HTML, CSS, and JavaScript.',
  [
    'Javascript',
    'Html',
    'Bootstrap',
    'Css',
    'Jest',
    'Fontawesome CDN',
    'api',
    'github',
  ],
  'https://henrykc24.github.io/javascript-capstone-project/dist/',
  'https://github.com/HENRYKC24/javascript-capstone-project/',
);
const project13 = new Project(
  'To-Do-List',
  'WEB APP',
  'Front End Dev',
  '2021',
  {
    URL: './assets/images/to-do-list.png',
    alt: 'To Do List app screenshot',
  },
  'A smart draggable to-do list project built with HTML, CSS, JavaScript, Webpack, and ES6. The list can be edited, deleted, rearranged, and marked as completed.',
  [
    'Javascript',
    'Html',
    'Bootstrap',
    'Css',
    'Jest',
    'Webpack',
    'github',
  ],
  'https://henrykc24.github.io/to-do-list-draggable/dist/',
  'https://github.com/HENRYKC24/to-do-list-draggable',
);
const eCommerceApp = new Project(
  'E-Commerce',
  'WEB APP',
  'Front End Dev',
  '2022',
  {
    URL: './assets/images/e_commerce.png',
    alt: 'E-commerce app screenshot',
  },
  'This is an e-commerce website where users can buy different categories of food. You can add items to cart and know the total amount of money for all the items in the cart before checking out. It fetches data from a graphQL API.',
  [
    'React',
    'Redux',
    'GraphQL API',
    'Jest',
    'Heroku',
    'GitHub',
  ],
  'https://kc-ecommerce-app.herokuapp.com/',
  'https://github.com/HENRYKC24/E-commerce-Website-React-GraphQL',
);

const projects = [
  eCommerceApp,
  capstoneRails,
  project11,
  project13,
  project12,
  project10,
  project1,
  project2,
  project4,
  project5,
  project7,
  project8,
  project9,
];

const projectsContainer = document.createElement('section');
projectsContainer.setAttribute('class', 'projects');
projectsContainer.setAttribute('id', 'projects');

const h1 = document.createElement('h1');
h1.setAttribute('class', 'see-projects');
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
  p.textContent = project.description.length > 100
    ? `${project.description.slice(0, 100)}...`
    : project.description;
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
const LangFrameSkillChevrons = Array.from(
  document.querySelectorAll('.lang-and-icon .fa-chevron-down'),
);
LangFrameSkillChevrons.map((element) => {
  element.addEventListener('click', () => {
    element.parentElement.parentElement.nextElementSibling.classList.toggle(
      'toggle-lang-list',
    );
    element.classList.toggle('rotate-chevron');
  });
  return true;
});
