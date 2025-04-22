// ----------------------------
// Smooth Scroll Navigation
// ----------------------------
document.querySelectorAll('#navbar .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Remove active class from all links
    document.querySelectorAll('#navbar .nav-link ').forEach(item => {
      item.classList.remove('active');
    });



    // Add active class to clicked link
    this.classList.add('active');


    // Scroll to section
    if(targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Handle section visibility animations
    const header = document.querySelector('#header');
    const allSections = document.querySelectorAll('section');
    
    allSections.forEach(section => {
      section.classList.remove('section-show');
    });
    
    if(targetId !== '#header') {
      header.classList.add('header-top');
      setTimeout(() => {
        targetSection.classList.add('section-show');
      }, 350);
    }
  });
});

// ----------------------------
// Skills Animation
// ----------------------------
const skillsSection = document.querySelector('.skills-content');
if(skillsSection) {
  // Animate progress bars when section is visible
  new Waypoint({
    element: skillsSection,
    offset: '80%',
    handler: function() {
      document.querySelectorAll('.progress .progress-bar').forEach(bar => {
        const width = bar.getAttribute('aria-valuenow') + '%';
        bar.style.width = width;
      });
    }
  });
}

// ----------------------------
// Initialize Counter
// ----------------------------
new PureCounter();