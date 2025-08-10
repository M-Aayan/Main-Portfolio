const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// dark and light mode 

const toggleBtn = document.getElementById('mode-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = 'Dark Mode';
    toggleBtn.style.color = '#000';
    toggleBtn.style.background = 'rgba(255 255 255 / 0.8)';
  } else {
    toggleBtn.textContent = 'Light Mode';
    toggleBtn.style.color = '#fff';
    toggleBtn.style.background = 'rgba(255 255 255 / 0.2)';
  }
});
