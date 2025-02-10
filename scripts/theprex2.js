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
  
  // --- (A) First 2s: Big splash image (grow animation) ---

  // 1) Set the splash image + big size + initial transform
  logo.src             = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3.png?raw=true";
  logo.style.height    = "120px";         // bigger than normal
  logo.style.transform = "scale(0.5)";
  logo.style.opacity   = "0";
  logo.style.animation = "none";

  // 2) Force the browser to apply these styles now
  void logo.offsetWidth;  // triggers reflow

  // 3) Now assign the “grow” animation
  logo.style.animation = "splashLogoFadeIn 2s forwards";


  // --- (B) After 2s: Remove splash, show second image with another grow ---

  setTimeout(function() {
    // 1) Remove the splash overlay
    header.classList.remove('splash-active');

    // 2) Swap to the smaller second logo
    logo.src          = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3_2.png?raw=true";
    logo.style.height = "60px";      // normal final size

    // 3) Reset transform & animation so we can re-animate from scale(0.5)
    logo.style.animation = "none";
    logo.style.transform = "scale(0.5)";
    logo.style.opacity   = "0";

    // 4) Force reflow again
    void logo.offsetWidth;

    // 5) Assign the same “fade+grow” keyframe
    logo.style.animation = "splashLogoFadeIn 2s forwards";

  }, 2000);
});


// REMOVE or COMMENT OUT anything like this:
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('site-header');
//   if (window.scrollY > 50) header.classList.add('scrolled');
//   else header.classList.remove('scrolled');
// });
