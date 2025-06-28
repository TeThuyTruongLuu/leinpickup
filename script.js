const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach(content => {
      if (content.id === target) {
        content.classList.add('active');
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        content.classList.remove('active');
      }
    });
  });
});
