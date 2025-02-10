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
  
  // (A) First: Show the big splash image, animate from scale(0.5) → scale(1)
  logo.src             = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3.png?raw=true";
  logo.style.height    = "120px";    // bigger than normal
  logo.style.transform = "scale(0.5)";
  logo.style.opacity   = "0";
  logo.style.animation = "none";     // clear any old animation
  
  // Force reflow, then add the animation
  requestAnimationFrame(() => {
    logo.style.animation = "splashLogoFadeIn 2s forwards";
  });

  // (B) After 2s, remove splash & animate the second image
  setTimeout(function() {
    // Remove splash (so the rest of the header appears)
    header.classList.remove('splash-active');

    // Swap the source to the second (smaller) logo
    logo.src          = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3_2.png?raw=true";
    logo.style.height = "60px";    // normal final size

    // Immediately reset transform/opacity so we can re-animate
    logo.style.animation = "none";
    logo.style.transform = "scale(0.5)";
    logo.style.opacity   = "0";

    // Re-trigger that same fade+grow animation
    requestAnimationFrame(() => {
      logo.style.animation = "splashLogoFadeIn 2s forwards";
    });

  }, 2000);
});


// REMOVE or COMMENT OUT anything like this:
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('site-header');
//   if (window.scrollY > 50) header.classList.add('scrolled');
//   else header.classList.remove('scrolled');
// });
