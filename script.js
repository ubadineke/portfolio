// DOM Elements
document.addEventListener('DOMContentLoaded', function () {
  // Project Cards Event Listener
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards) {
    projectCards.forEach((card) => {
      card.addEventListener('click', function () {
        const url = this.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  }

  // Add fade-in effect to the page on load
  const activePage = document.querySelector('.page.active');
  if (activePage) {
    // Reset transition to ensure animation plays on page load
    activePage.style.transition = 'none';
    activePage.offsetHeight; // Force reflow
    activePage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  }
});
