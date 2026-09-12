// ===== Mobile Header Fix - Show brand text, keep menu visible =====
(function() {
  'use strict';
  
  function applyMobileFix() {
    var isMobile = window.innerWidth <= 768;
    
    if (!isMobile) return;
    
    // 1. Brand text को SHOW करें (अब hide नहीं)
    var brandTexts = document.querySelectorAll('.brand-text');
    brandTexts.forEach(function(el) {
      el.style.setProperty('display', 'flex', 'important');
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('position', 'static', 'important');
      el.style.setProperty('left', 'auto', 'important');
      el.style.setProperty('width', 'auto', 'important');
      el.style.setProperty('height', 'auto', 'important');
      el.style.setProperty('opacity', '1', 'important');
      el.style.setProperty('overflow', 'visible', 'important');
      el.style.setProperty('flex-direction', 'column', 'important');
      el.style.setProperty('margin-left', '0.4rem', 'important');
      el.style.setProperty('padding-left', '0.4rem', 'important');
      el.style.setProperty('border-left', '1.5px solid rgba(255,215,0,0.6)', 'important');
      el.style.setProperty('flex', '1 1 auto', 'important');
      el.style.setProperty('min-width', '0', 'important');
      el.style.setProperty('max-width', '130px', 'important');
      el.style.setProperty('justify-content', 'center', 'important');
    });
    
    // 2. Menu button forcefully show
    var menuBtn = document.querySelector('.menu-toggle');
    if (menuBtn) {
      menuBtn.style.setProperty('display', 'flex', 'important');
      menuBtn.style.setProperty('visibility', 'visible', 'important');
      menuBtn.style.setProperty('opacity', '1', 'important');
      menuBtn.style.setProperty('width', '36px', 'important');
      menuBtn.style.setProperty('height', '36px', 'important');
      menuBtn.style.setProperty('min-width', '36px', 'important');
      menuBtn.style.setProperty('max-width', '36px', 'important');
      menuBtn.style.setProperty('flex', '0 0 36px', 'important');
      menuBtn.style.setProperty('font-size', '1.2rem', 'important');
      menuBtn.style.setProperty('background', 'rgba(255,255,255,0.2)', 'important');
      menuBtn.style.setProperty('color', '#fff', 'important');
      menuBtn.style.setProperty('border', '2px solid rgba(255,255,255,0.3)', 'important');
      menuBtn.style.setProperty('border-radius', '10px', 'important');
      menuBtn.style.setProperty('align-items', 'center', 'important');
      menuBtn.style.setProperty('justify-content', 'center', 'important');
      menuBtn.style.setProperty('padding', '0', 'important');
      menuBtn.style.setProperty('margin', '0', 'important');
      menuBtn.style.setProperty('margin-left', '0.15rem', 'important');
      menuBtn.style.setProperty('order', '999', 'important');
      menuBtn.style.setProperty('cursor', 'pointer', 'important');
    }
    
    // 3. Header nav compact
    var nav = document.querySelector('header nav');
    if (nav) {
      nav.style.setProperty('display', 'flex', 'important');
      nav.style.setProperty('align-items', 'center', 'important');
      nav.style.setProperty('justify-content', 'space-between', 'important');
      nav.style.setProperty('gap', '0.2rem', 'important');
      nav.style.setProperty('flex-wrap', 'nowrap', 'important');
      nav.style.setProperty('padding', '0.3rem 0.1rem', 'important');
    }
    
    // 4. Logo image - छोटा
    var logoImg = document.querySelector('header nav > a img');
    if (logoImg) {
      logoImg.style.setProperty('height', '34px', 'important');
      logoImg.style.setProperty('max-width', '42px', 'important');
      logoImg.style.setProperty('width', 'auto', 'important');
    }
    
    // 5. Logo link - compact
    var logoLink = document.querySelector('header nav > a');
    if (logoLink) {
      logoLink.style.setProperty('flex', '0 0 auto', 'important');
      logoLink.style.setProperty('min-width', '0', 'important');
      logoLink.style.setProperty('max-width', '42px', 'important');
      logoLink.style.setProperty('gap', '0', 'important');
    }
    
    // 6. User box - compact
    var userBox = document.getElementById('userBox');
    if (userBox) {
      userBox.style.setProperty('max-width', '88px', 'important');
      userBox.style.setProperty('padding', '0.12rem 0.3rem', 'important');
      userBox.style.setProperty('font-size', '0.62rem', 'important');
      userBox.style.setProperty('flex', '0 1 auto', 'important');
      userBox.style.setProperty('margin-left', 'auto', 'important');
      userBox.style.setProperty('order', '500', 'important');
    }
    
    var userLink = userBox ? userBox.querySelector('a') : null;
    if (userLink) {
      userLink.style.setProperty('max-width', '45px', 'important');
      userLink.style.setProperty('font-size', '0.62rem', 'important');
    }
    
    // 7. Install button hide
    var installBtn = document.getElementById('installBtn');
    if (installBtn) {
      installBtn.style.setProperty('display', 'none', 'important');
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyMobileFix);
  } else {
    applyMobileFix();
  }
  
  setTimeout(applyMobileFix, 100);
  setTimeout(applyMobileFix, 300);
  setTimeout(applyMobileFix, 500);
  setTimeout(applyMobileFix, 1000);
  setTimeout(applyMobileFix, 2000);
  setTimeout(applyMobileFix, 3000);
  
  window.addEventListener('resize', applyMobileFix);
  window.addEventListener('orientationchange', function() {
    setTimeout(applyMobileFix, 300);
  });
  
  window.applyMobileFix = applyMobileFix;
})();
