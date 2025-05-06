// Smooth Scroll for the Navbar links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Sticky Header on Scroll
const header = document.getElementById('header');
window.onscroll = () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = '#333';
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  }
};
