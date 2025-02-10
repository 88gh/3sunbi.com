window.addEventListener("load", function() {
  setTimeout(function() {
    const header = document.getElementById("site-header");
    // 1) remove splash-active
    header.classList.remove("splash-active");
    // 2) add scrolled
    header.classList.add("scrolled");
  }, 2000); // after 2 seconds
});

// REMOVE or COMMENT OUT anything like this:
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('site-header');
//   if (window.scrollY > 50) header.classList.add('scrolled');
//   else header.classList.remove('scrolled');
// });
