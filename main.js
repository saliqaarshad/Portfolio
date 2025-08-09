const toggleBtn = document.getElementById('toggle-mode');
const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

// Theme toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

  // Set Home (first link) active by default
  navLinks[0].classList.add('active');
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
  let currentSectionId = 'hero'; // fallback

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130; // adjust if navbar overlaps
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});

// Project section scroll arrows
function scrollProjects(direction) {
  const track = document.getElementById('projects-track');
  const scrollAmount = 500;

  if (direction === 'left') {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
