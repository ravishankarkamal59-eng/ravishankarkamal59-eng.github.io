// ===== Menu Toggle (Single Source of Truth) =====
(function() {
  'use strict';
  
  function init() {
    var toggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    
    if (!toggle || !navLinks) {
      // अगर नहीं मिला, 500ms बाद फिर try करें
      setTimeout(init, 500);
      return;
    }
    
    // अगर पहले से initialized है, skip
    if (toggle.dataset.menuInit === 'yes') return;
    toggle.dataset.menuInit = 'yes';
    
    console.log('✅ Menu toggle initialized');
    
    function openMenu() {
      navLinks.classList.add('active');
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      toggle.setAttribute('aria-expanded', 'true');
      console.log('📂 Menu opened');
    }
    
    function closeMenu() {
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
      console.log('📁 Menu closed');
    }
    
    function toggleMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
      
      if (navLinks.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    }
    
    // Remove any old listeners and add new one
    var newToggle = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(newToggle, toggle);
    toggle = newToggle;
    toggle.dataset.menuInit = 'yes';
    
    toggle.addEventListener('click', toggleMenu, true);
    toggle.addEventListener('touchstart', function(e){
      // Prevent double firing
    }, { passive: true });
    
    // Close button (×) - click detection on top-right corner
    document.addEventListener('click', function(e) {
      if (!document.body.classList.contains('menu-open')) return;
      
      // Close button area detection
      var rect = e.target.getBoundingClientRect();
      var topRightX = window.innerWidth - 70;
      var topRightY = 70;
      
      if (e.clientX > topRightX && e.clientY < topRightY) {
        closeMenu();
        return;
      }
      
      // Outside click on overlay
      if (e.target === navLinks) {
        closeMenu();
      }
    }, true);
    
    // ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
    
    // Link click → menu बंद
    navLinks.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        setTimeout(closeMenu, 100);
      }
    });
    
    // Expose globally for debugging
    window.openMenu = openMenu;
    window.closeMenu = closeMenu;
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Backup: 1 second बाद फिर try करें
  setTimeout(init, 1000);
})();
