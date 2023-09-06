const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', e => {
  const activePanel = e.target.closest('.accordion-panel');
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector('button');
  const activePanel = panelToActivate.querySelector('.accordion-content');
  const activePanelIconWrapper = panelToActivate.querySelector(
    '.accordion-icon-wrapper'
  );
  const activePanelIcon = panelToActivate.querySelector('.accordion-icon');
  const activePanelIsOpened = activeButton.getAttribute('aria-expanded');

  if (activePanelIsOpened === 'true') {
    activeButton.setAttribute('aria-expanded', false);
    activePanelIconWrapper.classList.remove('active');
    activePanelIcon.classList.remove('active');
    activePanel.setAttribute('aria-hidden', true);
  } else {
    activeButton.setAttribute('aria-expanded', true);
    activePanelIconWrapper.classList.add('active');
    activePanelIcon.classList.add('active');
    activePanel.setAttribute('aria-hidden', false);
  }
}
