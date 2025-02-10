// After 2 seconds, remove .splash-active so the normal header appears
//window.addEventListener('load', function() {
//  setTimeout(function() {
//    const header = document.getElementById('site-header');
//    header.classList.remove('splash-active');
//  }, 2000);
//});

window.addEventListener('load', function() {
  const header = document.getElementById('site-header');
  const logo   = document.getElementById('logo');

  //
  // A) Show the big splash image with animation (scale(0.5) → scale(1))
  //
  // 1) Use big splash image, set bigger size, start from scale(0.5)
  logo.src             = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3.png?raw=true";
  logo.style.height    = "120px";       // bigger
  logo.style.transform = "scale(0.5)";
  logo.style.opacity   = "0";
  logo.style.animation = "none";

  // 2) Force reflow
  void logo.offsetWidth;

  // 3) Animate to scale(1), opacity(1) over 2s
  logo.style.animation = "splashLogoFadeIn 2s forwards";


  //
  // B) After 2s, remove splash & swap to smaller final logo instantly
  //
  setTimeout(function() {
    header.classList.remove('splash-active');

    // Switch to second (normal) logo, no animation
    logo.src          = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3_2.png?raw=true";
    logo.style.height = "60px";   // normal
    logo.style.animation = "none";
    logo.style.transform = "none";
    logo.style.opacity   = "1";

  }, 2000);
});



// REMOVE or COMMENT OUT anything like this:
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('site-header');
//   if (window.scrollY > 50) header.classList.add('scrolled');
//   else header.classList.remove('scrolled');
// });
