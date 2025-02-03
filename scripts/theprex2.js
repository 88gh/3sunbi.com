// After 2 seconds remove splash state to reveal the small header with tabs
window.addEventListener('load', function() {
  setTimeout(function() {
    const header = document.getElementById('site-header');
    header.classList.remove('splash-active');
    header.classList.add('scrolled');
  }, 2000);
});
// Optionally, ensure the scrolled header remains when the user scrolls down
window.addEventListener('scroll', function() {
  const header = document.getElementById('site-header');
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});
