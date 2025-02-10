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
  // (A) Show the big splash image with animation (scale(0.5) → scale(1))
  //
  logo.src             = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3.png?raw=true";
  logo.style.height    = "120px";          // bigger size for splash
  logo.style.transform = "scale(0.5)";
  logo.style.opacity   = "0";
  logo.style.animation = "none";           // clear any old animation

  // Force reflow so the browser sees the initial transform
  void logo.offsetWidth;

  // Now animate from scale(0.5)->1, opacity(0)->1
  logo.style.animation = "splashLogoFadeIn 2s forwards";

  //
  // (B) After 2s, remove splash, swap to second logo *without* animation
  //
  setTimeout(function() {
    // 1) Remove splash (so normal header is revealed)
    header.classList.remove('splash-active');

    // 2) Swap to the smaller second logo
    logo.src          = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3_2.png?raw=true";
    logo.style.height = "60px";    // your normal size

    // 3) Reset transform/opacity to final state (no new animation)
    logo.style.animation = "none";
    logo.style.transform = "scale(1)";
    logo.style.opacity   = "1";

  }, 2000);
});



// REMOVE or COMMENT OUT anything like this:
// window.addEventListener('scroll', function() {
//   const header = document.getElementById('site-header');
//   if (window.scrollY > 50) header.classList.add('scrolled');
//   else header.classList.remove('scrolled');
// });
