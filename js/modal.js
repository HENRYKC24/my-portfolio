import { projects } from './projectsData.js';

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