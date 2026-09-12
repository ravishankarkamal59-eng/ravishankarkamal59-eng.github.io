// ===== Mobile Header Force Fix =====
// JavaScript से forcefully brand-text hide और menu button show करें
(function() {
  'use strict';
  
  function applyMobileFix() {
    // Check if mobile
    var isMobile = window.innerWidth <= 768;
    
    if (!isMobile) return;
    
    // 1. Brand text को forcefully hide करें
    var brandTexts = document.querySelectorAll('.brand-text');
    brandTexts.forEach(function(el) {
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('width', '0', 'important');
      el.style.setProperty('height', '0', 'important');
      el.style.setProperty('overflow', 'hidden', 'important');
      el.style.setProperty('position', 'absolute', 'important');
      el.style.setProperty('left', '-9999px', 'important');
    });
    
    // 2. Menu button forcefully show करें
    var menuBtn = document.querySelector('.menu-toggle');
    if (menuBtn) {
      menuBtn.style.setProperty('display', 'flex', 'important');
      menuBtn.style.setProperty('visibility', 'visible', 'important');
      menuBtn.style.setProperty('opacity', '1', 'important');
      menuBtn.style.setProperty('width', '42px', 'important');
      menuBtn.style.setProperty('height', '42px', 'important');
      menuBtn.style.setProperty('min-width', '42px', 'important');
      menuBtn.style.setProperty('max-width', '42px', 'important');
      menuBtn.style.setProperty('flex', '0 0 42px', 'important');
      menuBtn.style.setProperty('font-size', '1.4rem', 'important');
      menuBtn.style.setProperty('background', 'rgba(255,255,255,0.2)', 'important');
      menuBtn.style.setProperty('color', '#fff', 'important');
      menuBtn.style.setProperty('border', '2px solid rgba(255,255,255,0.3)', 'important');
      menuBtn.style.setProperty('border-radius', '10px', 'important');
      menuBtn.style.setProperty('align-items', 'center', 'important');
      menuBtn.style.setProperty('justify-content', 'center', 'important');
      menuBtn.style.setProperty('padding', '0', 'important');
      menuBtn.style.setProperty('margin-left', 'auto', 'important');
      menuBtn.style.setProperty('order', '99', 'important');
      menuBtn.style.setProperty('cursor', 'pointer', 'important');
      menuBtn.style.setProperty('position', 'relative', 'important');
      menuBtn.style.setProperty('z-index', '999', 'important');
    }
    
    // 3. Header nav - compact
    var nav = document.querySelector('header nav');
    if (nav) {
      nav.style.setProperty('display', 'flex', 'important');
      nav.style.setProperty('align-items', 'center', 'important');
      nav.style.setProperty('justify-content', 'space-between', 'important');
      nav.style.setProperty('gap', '0.3rem', 'important');
      nav.style.setProperty('flex-wrap', 'nowrap', 'important');
      nav.style.setProperty('padding', '0.3rem 0', 'important');
    }
    
    // 4. Logo image - छोटा
    var logoImg = document.querySelector('header nav > a img');
    if (logoImg) {
      logoImg.style.setProperty('height', '36px', 'important');
      logoImg.style.setProperty('max-width', '50px', 'important');
      logoImg.style.setProperty('width', 'auto', 'important');
    }
    
    // 5. Logo link - छोटा
    var logoLink = document.querySelector('header nav > a');
    if (logoLink) {
      logoLink.style.setProperty('flex', '0 0 auto', 'important');
      logoLink.style.setProperty('min-width', '0', 'important');
      logoLink.style.setProperty('max-width', '55px', 'important');
      logoLink.style.setProperty('overflow', 'hidden', 'important');
      logoLink.style.setProperty('gap', '0', 'important');
    }
    
    // 6. User box - compact
    var userBox = document.getElementById('userBox');
    if (userBox) {
      userBox.style.setProperty('display', 'flex', 'important');
      userBox.style.setProperty('align-items', 'center', 'important');
      userBox.style.setProperty('gap', '0.2rem', 'important');
      userBox.style.setProperty('padding', '0.15rem 0.4rem', 'important');
      userBox.style.setProperty('background', 'rgba(255,255,255,0.15)', 'important');
      userBox.style.setProperty('border-radius', '12px', 'important');
      userBox.style.setProperty('font-size', '0.68rem', 'important');
      userBox.style.setProperty('max-width', '105px', 'important');
      userBox.style.setProperty('flex', '0 1 auto', 'important');
      userBox.style.setProperty('order', '50', 'important');
    }
    
    var userLink = userBox ? userBox.querySelector('a') : null;
    if (userLink) {
      userLink.style.setProperty('max-width', '55px', 'important');
      userLink.style.setProperty('overflow', 'hidden', 'important');
      userLink.style.setProperty('text-overflow', 'ellipsis', 'important');
      userLink.style.setProperty('white-space', 'nowrap', 'important');
      userLink.style.setProperty('font-size', '0.68rem', 'important');
    }
    
    var logoutBtn = userBox ? userBox.querySelector('#logoutBtn') : null;
    if (logoutBtn) {
      logoutBtn.style.setProperty('padding', '0.15rem 0.35rem', 'important');
      logoutBtn.style.setProperty('font-size', '0.58rem', 'important');
      logoutBtn.style.setProperty('white-space', 'nowrap', 'important');
      logoutBtn.style.setProperty('background', '#e74c3c', 'important');
      logoutBtn.style.setProperty('color', '#fff', 'important');
      logoutBtn.style.setProperty('border', 'none', 'important');
      logoutBtn.style.setProperty('border-radius', '8px', 'important');
    }
    
    // 7. Install button - hide on mobile
    var installBtn = document.getElementById('installBtn');
    if (installBtn) {
      installBtn.style.setProperty('display', 'none', 'important');
    }
  }
  
  // Apply on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyMobileFix);
  } else {
    applyMobileFix();
  }
  
  // Apply multiple times (Firebase login आने के बाद)
  setTimeout(applyMobileFix, 100);
  setTimeout(applyMobileFix, 300);
  setTimeout(applyMobileFix, 500);
  setTimeout(applyMobileFix, 1000);
  setTimeout(applyMobileFix, 2000);
  setTimeout(applyMobileFix, 3000);
  
  // On resize
  window.addEventListener('resize', applyMobileFix);
  window.addEventListener('orientationchange', function() {
    setTimeout(applyMobileFix, 300);
  });
  
  // Observer for DOM changes
  if (typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function() {
      if (window.innerWidth <= 768) {
        applyMobileFix();
      }
    });
    setTimeout(function() {
      observer.observe(document.body, { childList: true, subtree: true });
    }, 1000);
  }
  
  // Expose
  window.applyMobileFix = applyMobileFix;
})();
