// ===== Download Counter - हर PDF के लिए download count =====
(function() {
  'use strict';
  
  var COUNTER_KEY = 'downloadCounts';
  
  // Counter get/set
  function getCounts() {
    try { return JSON.parse(localStorage.getItem(COUNTER_KEY) || '{}'); }
    catch(e) { return {}; }
  }
  
  function incrementCount(url) {
    var counts = getCounts();
    var key = btoa(url).substring(0, 20);
    counts[key] = (counts[key] || 0) + 1;
    localStorage.setItem(COUNTER_KEY, JSON.stringify(counts));
    return counts[key];
  }
  
  function getCount(url) {
    var counts = getCounts();
    var key = btoa(url).substring(0, 20);
    return counts[key] || 0;
  }
  
  // PDF buttons पर counter badge add करें
  function addCountBadges() {
    document.querySelectorAll('.pdf-dl-btn').forEach(function(btn) {
      if (btn.dataset.countAdded) return;
      btn.dataset.countAdded = 'yes';
      
      var url = btn.dataset.url;
      var count = getCount(url);
      
      // Badge add करें
      var badge = document.createElement('span');
      badge.className = 'dl-count-badge';
      badge.style.cssText = 'background:rgba(255,255,255,0.25);padding:0.1rem 0.4rem;border-radius:8px;font-size:0.7rem;margin-left:0.3rem';
      badge.textContent = '⬇️ ' + count;
      btn.appendChild(badge);
      
      // Click पर increment
      btn.addEventListener('click', function() {
        var newCount = incrementCount(url);
        badge.textContent = '⬇️ ' + newCount;
      }, true);
    });
  }
  
  // हर 2 सेकंड में check करें
  setInterval(addCountBadges, 2000);
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCountBadges);
  } else {
    addCountBadges();
  }
  
  window.getDownloadCount = getCount;
  window.incrementDownloadCount = incrementCount;
})();
