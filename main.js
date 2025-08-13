// ===== Select Elements =====
const navLinks = document.querySelectorAll('.navbar ul li a');
const sections = document.querySelectorAll('section[id]');

// Run when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  // Set Home (first link) active by default
  navLinks[0].classList.add('active');
});

// ===== Highlight Active Section on Scroll =====
window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150; // adjust for navbar height
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});

// ===== Project Section Scroll Arrows =====
function scrollProjects(direction) {
  const track = document.getElementById('projects-track');
  const scrollAmount = 500;

  if (direction === 'left') {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// ===== Tab Filtering for Projects =====
const tabButtons = document.querySelectorAll(".tab-btn");
const projectCards = document.querySelectorAll(".project-card");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove 'active' from all tabs
    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.tab;

    // Show/Hide projects
    projectCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js">

  (function(){
    emailjs.init("EGpKOs5x0bTT3vjP3"); // Replace with your EmailJS Public Key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_l3auciu', 'template_uhut7ib', this)
  .then(function(response) {
    alert('Message sent successfully!');
    console.log('EmailJS response:', response);
  })
  .catch(function(error) {
    alert('Failed to send message: ' + JSON.stringify(error));
    console.error('EmailJS error:', error);
  });

  });

