const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const hamburgerBtn = document.querySelector('.button-hamburger');
const mobileMenu = document.querySelector('.mobile-menu-container');
const body = document.querySelector('body');

function classListToggler(element, className) {
  element.classList.toggle(className);
}

// function toggleMobileMenu(element) {
//   if (element.classList.contains('active')) {
//     closeModal();
//     hamburgerBtn.setAttribute('data-state', 'closed');
//     hamburgerBtn.setAttribute('aria-expanded', 'false');
//   } else {
//     openModal();
//     hamburgerBtn.setAttribute('data-state', 'opened');
//     hamburgerBtn.setAttribute('aria-expanded', 'true');
//   }
// }

function toggleMobileMenu(element) {
  const currentState = element.getAttribute('data-state');

  if (!currentState || currentState === 'closed') {
    openModal();
  } else {
    closeModal();
  }
}

function openModal() {
  addClassAndListener();
  hamburgerBtn.setAttribute('data-state', 'opened');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
}

function closeModal() {
  removeClassAndListener();
  hamburgerBtn.setAttribute('data-state', 'closed');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}

function onOverlayClick(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

hamburgerBtn.addEventListener('click', () => {
  toggleMobileMenu(hamburgerBtn);
});

function addClassAndListener() {
  mobileMenuOverlay.classList.add('active');
  mobileMenu.classList.add('active');
  body.classList.add('no-scroll');
  classListToggler(hamburgerBtn, 'active');
  mobileMenuOverlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEscPress);
}

function removeClassAndListener() {
  mobileMenuOverlay.classList.remove('active');
  mobileMenu.classList.remove('active');
  body.classList.remove('no-scroll');
  classListToggler(hamburgerBtn, 'active');
  mobileMenuOverlay.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onEscPress);
}
