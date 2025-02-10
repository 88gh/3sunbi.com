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
    // 1) Hide splash
    header.classList.remove('splash-active');
    
    // 2) Swap to the new logo
    document.getElementById('logo').src = 'https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3_2.png?raw=true';
  }, 2000);
});


// REMOVE or COMMENT OUT anything like this:
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('site-header');
//   if (window.scrollY > 50) header.classList.add('scrolled');
//   else header.classList.remove('scrolled');
// });
