// Sticky Header Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Button Click Interactions
  document.getElementById('register-now').addEventListener('click', function () {
    alert('Register Now functionality coming soon!');
  });
  
  document.getElementById('university-finder').addEventListener('click', function () {
    alert('University Finder
  