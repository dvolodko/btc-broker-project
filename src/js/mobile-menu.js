import { Modal } from './modal';

function newMobileMenuModal() {
  const mobileMenuModal = new Modal(
    '.button-hamburger',
    '.button-hamburger',
    '.mobile-menu-overlay',
    '.mobile-menu-container'
  );

  mobileMenuModal.openBtn.addEventListener(
    'click',
    mobileMenuModal.openModal.bind(mobileMenuModal)
  );
}

export default newMobileMenuModal;
