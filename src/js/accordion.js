const accordion = document.querySelectorAll('.accordion-container');

accordion.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.toggle('active');
  });
});
