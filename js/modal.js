const populateModal = (index) => {
  document.querySelector('body').classList.add('stop-scrolling');
  document.querySelector('.project-modal-background').style.display = 'block';

  const projects = [
    {
      projectName: 'Tonic',
      canopy: 'CHAIR',
      role: 'Back End Dev',
      year: '2014',
      image: {
        URL: './assets/images/project1.png',
        alt: 'My first project snapshot',
      },
      description:
        'This app is so good, you can try anything and you will see what I mean. This app is so good, you can try anything and you will see what I mean. This app is so good, you can try anything and you will see what I mean. This app is so good, you can try anything and you will see what I mean. This app is so good, you can try anything and you will see what I mean. This app is so good, you can try anything and you will see what I mean. ',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://henrykc24.github.io/my-portfolio/',
      githubLink: 'https://github.com/HENRYKC24/my-portfolio',
    },
    {
      projectName: 'Multi-Post Stories',
      canopy: 'CANOPY',
      role: 'Front End Dev',
      year: '2015',
      image: {
        URL: './assets/images/project2.png',
        alt: 'My second project snapshot',
      },
      description:
        'In 2015, I developed this app and it earned me a noble price. Check it out! In 2015, I developed this app and it earned me a noble price. Check it out! In 2015, I developed this app and it earned me a noble price. Check it out! In 2015, I developed this app and it earned me a noble price. Check it out! In 2015, I developed this app and it earned me a noble price. Check it out! In 2015, I developed this app and it earned me a noble price. Check it out! In 2015, I developed this app and it earned me a noble price. Check it out! ',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://henrykc24.github.io/my-portfolio/',
      githubLink: 'https://github.com/HENRYKC24/my-portfolio',
    },
    {
      projectName: 'Titanic',
      canopy: 'TORONTO',
      role: 'Full Stack Dev',
      year: '2000',
      image: {
        URL: './assets/images/project3.png',
        alt: 'My third project snapshot',
      },
      description:
        'I hit the pick of my software development momentum by the time i was developing this app. I hit the pick of my software development momentum by the time i was developing this app. I hit the pick of my software development momentum by the time i was developing this app. I hit the pick of my software development momentum by the time i was developing this app. I hit the pick of my software development momentum by the time i was developing this app. I hit the pick of my software development momentum by the time i was developing this app. I hit the pick of my software development momentum by the time i was developing this app. ',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://henrykc24.github.io/my-portfolio/',
      githubLink: 'https://github.com/HENRYKC24/my-portfolio',
    },
    {
      projectName: 'Multi-Post Stories',
      canopy: 'CANOPY',
      role: 'System analist',
      year: '2021',
      image: {
        URL: './assets/images/project4.png',
        alt: 'My fourth project snapshot',
      },
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur.',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://henrykc24.github.io/my-portfolio/',
      githubLink: 'https://github.com/HENRYKC24/my-portfolio',
    },
  ];

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