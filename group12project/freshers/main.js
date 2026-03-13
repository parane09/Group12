function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Highlight active nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
