// ===== Menu Toggle - Robust Version =====
(function() {
  'use strict';
  
  function setupMenu() {
    var toggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    
    if (!toggle || !navLinks) {
      setTimeout(setupMenu, 300);
      return;
    }
    
    // अगर पहले से setup है, skip
    if (toggle.dataset.menuReady === 'yes') {
      // Force ensure display: flex
      if (window.innerWidth <= 768) {
        toggle.style.display = 'flex';
        toggle.style.visibility = 'visible';
      }
      return;
    }
    
    toggle.dataset.menuReady = 'yes';
    
    function openMenu() {
      navLinks.classList.add('active');
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      toggle.setAttribute('aria-expanded', 'true');
    }
    
    function closeMenu() {
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    }
    
    // Remove old listeners
    var newToggle = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(newToggle, toggle);
    newToggle.dataset.menuReady = 'yes';
    
    newToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      if (navLinks.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
      return false;
    }, true);
    
    // ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
    
    // Close button
    var closeBtn = document.getElementById('menuCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        closeMenu();
      });
    }
    
    // Link click → close menu
    navLinks.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        setTimeout(closeMenu, 100);
      }
    });
    
    // Force display for menu-toggle (mobile)
    function ensureVisible() {
      if (window.innerWidth <= 768) {
        newToggle.style.setProperty('display', 'flex', 'important');
        newToggle.style.setProperty('visibility', 'visible', 'important');
        newToggle.style.setProperty('opacity', '1', 'important');
      }
    }
    ensureVisible();
    window.addEventListener('resize', ensureVisible);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMenu);
  } else {
    setupMenu();
  }
  
  // Multiple checks
  setTimeout(setupMenu, 300);
  setTimeout(setupMenu, 1000);
  setTimeout(setupMenu, 2000);
})();
