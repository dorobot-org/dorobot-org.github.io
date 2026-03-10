const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a, .site-nav button');
const contactTriggers = document.querySelectorAll('.contact-trigger');
const contactModal = document.querySelector('#contact-modal');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (contactModal && contactTriggers.length) {
  const openModal = () => {
    contactModal.classList.add('is-open');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    contactModal.classList.remove('is-open');
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  contactTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (siteNav) {
        siteNav.classList.remove('is-open');
      }
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
      }
      openModal();
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && contactModal.classList.contains('is-open')) {
      closeModal();
    }
  });
}
