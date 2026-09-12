// ===== Mega Menu Toggle =====
(function() {
  function setup() {
    var toggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    
    if (!toggle || !navLinks) return;
    
    function openMenu() {
      navLinks.classList.add('active');
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
    
    // Toggle button
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (navLinks.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    
    // Close button (×)
    document.addEventListener('click', function(e) {
      if (document.body.classList.contains('menu-open')) {
        var rect = e.target.getBoundingClientRect();
        // अगर × area में click हुआ
        if (e.target === document.body && rect.top < 100 && rect.right > window.innerWidth - 100) {
          closeMenu();
        }
        // Close button pseudo-element click detection
        if (e.target === document.body) {
          var x = e.clientX;
          var y = e.clientY;
          if (x > window.innerWidth - 100 && y < 100) {
            closeMenu();
          }
        }
      }
    });
    
    // ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
    
    // Link click पर menu बंद
    navLinks.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        closeMenu();
      }
    });
    
    // Outside click
    navLinks.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
