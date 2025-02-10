// After 2 seconds, remove .splash-active so the normal header appears
//window.addEventListener('load', function() {
//  setTimeout(function() {
//    const header = document.getElementById('site-header');
//    header.classList.remove('splash-active');
//  }, 2000);
//});
window.addEventListener('load', function() {
  setTimeout(function() {
    const header = document.getElementById('site-header');
    header.classList.remove('splash-active');
  }, 2000);
});




// REMOVE or COMMENT OUT anything like this:
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('site-header');
//   if (window.scrollY > 50) header.classList.add('scrolled');
//   else header.classList.remove('scrolled');
// });
