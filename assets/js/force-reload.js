// ===== Force Reload Handler =====
// अगर पेज पहली बार पर टूटा दिखे तो auto-reload करें
(function() {
  'use strict';
  
  // Check if page appears broken (CSS not loaded)
  function isCSSLoaded() {
    // Check if the main stylesheet has loaded
    var styles = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < styles.length; i++) {
      var sheet = styles[i].sheet;
      if (sheet && sheet.cssRules && sheet.cssRules.length > 50) {
        return true;
      }
    }
    return false;
  }
  
  // Wait for stylesheet to load
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (!isCSSLoaded()) {
        console.log('CSS not loaded - reloading...');
        // Force reload once
        if (!sessionStorage.getItem('reloadAttempted')) {
          sessionStorage.setItem('reloadAttempted', 'yes');
          location.reload(true);
        }
      } else {
        sessionStorage.removeItem('reloadAttempted');
      }
    }, 500);
  });
  
  // Also check stylesheet loading
  var links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(function(link) {
    link.addEventListener('error', function() {
      console.log('Stylesheet failed to load:', this.href);
      // Retry once with cache-busting
      var href = this.href;
      if (href.indexOf('?') === -1) {
        this.href = href + '?v=' + Date.now();
      }
    });
  });
})();
