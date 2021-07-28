const populateModal = (index) => {
  document.querySelector('body').classList.add('stop-scrolling');
  document.querySelector('.project-modal-background').style.display = 'block';
  const projects = [
    {
      projectName: 'Tonic',
      canopy: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      image: {
        URL: './assets/images/project1.png',
        alt: 'My first project snapshot',
      },
      description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur.',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://henrykc24.github.io/my-portfolio/',
      githubLink: 'https://github.com/HENRYKC24/my-portfolio',
    },
    {
      projectName: 'Multi-Post Stories',
      canopy: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      image: {
        URL: './assets/images/project2.png',
        alt: 'My second project snapshot',
      },
      description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur.',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://henrykc24.github.io/my-portfolio/',
      githubLink: 'https://github.com/HENRYKC24/my-portfolio',
    },
    {
      projectName: 'Tonic',
      canopy: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      image: {
        URL: './assets/images/project3.png',
        alt: 'My third project snapshot',
      },
      description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, odit debitis minus vero excepturi facilis tenetur hic eos, mollitia quidem quia esse quaerat architecto pariatur odio? Iste non commodi consequatur.',
      technologies: ['html', 'css', 'javascipt', 'bootstrap', 'github', 'ruby'],
      liveLink: 'https://henrykc24.github.io/my-portfolio/',
      githubLink: 'https://github.com/HENRYKC24/my-portfolio',
    },
    {
      projectName: 'Multi-Post Stories',
      canopy: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
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
};