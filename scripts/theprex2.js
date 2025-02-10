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
  //  A) For the first 2s, use bigger size & disable any “grow” animation
  //
  logo.style.height    = "120px";   // 2× bigger than normal 60px
  logo.style.width     = "auto";
  logo.style.transform = "none";    // just show as-is
  logo.style.opacity   = "1";
  logo.style.animation = "none";    // disable the grow animation (if any)

  //
  //  B) After 2s, remove splash & switch to second logo
  //
  setTimeout(function() {
    // 1) hide the splash
    header.classList.remove('splash-active');

    // 2) swap the logo to 3sunbiedu_sq_4_3_2.png
    logo.src = "https://github.com/88gh/3sunbi.com/blob/main/images/3sunbiedu_sq_4_3_2.png?raw=true";

    // 3) set the normal smaller size
    logo.style.height = "60px";
    logo.style.width  = "auto";

    // 4) Force it to start from smaller scale, then animate to scale(1)
    //    so we see the “get-larger” effect
    logo.style.transform = "scale(0.5)";
    logo.style.opacity   = "0";

    // 5) Re-trigger the scale+fade animation 
    //    (We use the same keyframes that were in your CSS for #splash-logo.)
    //    e.g. “splashLogoFadeIn 2s forwards”
    //    Use requestAnimationFrame trick so the browser sees the transform “jump”
    //    before applying the animation; that way you get a clean 0% → 100% transition.
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
