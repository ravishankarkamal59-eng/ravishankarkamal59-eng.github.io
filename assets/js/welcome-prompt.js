// ===== New User Welcome Prompt =====
// पहली बार आने वाले users को signup करने के लिए prompt करता है
(function() {
  
  // Check if user already logged in or dismissed
  function checkAndShow() {
    try {
      var isLoggedIn = localStorage.getItem('userName') || localStorage.getItem('userEmail');
      var dismissed = localStorage.getItem('welcomeDismissed');
      var visitCount = parseInt(localStorage.getItem('visitCount') || '0');
      
      // Visit count बढ़ाएँ
      visitCount++;
      localStorage.setItem('visitCount', visitCount);
      
      // अगर user logged in है तो कुछ नहीं करना
      if (isLoggedIn) return;
      
      // अगर user ने dismiss किया है तो 7 दिन तक नहीं दिखाना
      if (dismissed) {
        var dismissTime = parseInt(dismissed);
        var weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        if (dismissTime > weekAgo) return;
      }
      
      // Homepage पर ही दिखाएँ (index.html)
      var isHome = location.pathname === '/' || 
                   location.pathname.endsWith('/index.html') ||
                   location.pathname === '/ravishankarkamal59-eng.github.io/';
      
      // अगर 2nd या 3rd visit पर है और homepage पर है
      if (visitCount >= 2 && isHome) {
        setTimeout(showWelcomePopup, 3000);
      }
      
    } catch(e) { console.error(e); }
  }
  
  function showWelcomePopup() {
    if (document.getElementById('welcomeModal')) return;
    
    var modal = document.createElement('div');
    modal.id = 'welcomeModal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(15,52,96,0.85);display:flex;align-items:center;justify-content:center;z-index:9999;padding:1rem;backdrop-filter:blur(5px);animation:wpFadeIn 0.3s ease';
    
    modal.innerHTML = 
      '<div style="background:#fff;border-radius:20px;max-width:400px;width:100%;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4);animation:wpSlideUp 0.4s ease">' +
        '<div style="background:linear-gradient(135deg,#0f3460,#e94560);padding:1.5rem;text-align:center;color:#fff;position:relative">' +
          '<button id="wpClose" style="position:absolute;top:0.8rem;right:0.8rem;background:rgba(255,255,255,0.2);color:#fff;border:none;width:32px;height:32px;border-radius:50%;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>' +
          '<div style="font-size:3.5rem;margin-bottom:0.4rem">🎓</div>' +
          '<h2 style="color:#fff;margin:0;font-size:1.3rem">स्वागत है!</h1>' +
          '<p style="margin:0.3rem 0 0;font-size:0.88rem;opacity:0.95">The Ravishankar Insights</p>' +
        '</div>' +
        '<div style="padding:1.5rem">' +
          '<p style="color:#333;font-size:0.95rem;line-height:1.6;margin-bottom:1rem;text-align:center">' +
            '<strong>मुफ़्त account बनाएँ</strong> और पाएँ:' +
          '</p>' +
          '<ul style="list-style:none;padding:0;margin:0 0 1.2rem">' +
            '<li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem"><span style="color:#27ae60;font-size:1.1rem">✓</span> Progress Tracking (Study Streak)</li>' +
            '<li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem"><span style="color:#27ae60;font-size:1.1rem">✓</span> Bookmarks और Notes सेव</li>' +
            '<li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem"><span style="color:#27ae60;font-size:1.1rem">✓</span> Test Results का History</li>' +
            '<li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.5rem"><span style="color:#27ae60;font-size:1.1rem">✓</span> Personalized Dashboard</li>' +
          '</ul>' +
          '<a href="login.html" id="wpSignup" style="display:block;background:#e94560;color:#fff;text-align:center;padding:0.9rem;border-radius:12px;text-decoration:none;font-weight:700;font-size:1rem;margin-bottom:0.6rem">🎉 मुफ़्त Account बनाएँ</a>' +
          '<button id="wpLater" style="width:100%;background:transparent;border:none;color:#888;padding:0.6rem;cursor:pointer;font-size:0.85rem;text-decoration:underline">बाद में</button>' +
          '<p style="text-align:center;font-size:0.72rem;color:#aaa;margin-top:0.8rem">🔒 कोई payment नहीं, 100% मुफ़्त</p>' +
        '</div>' +
      '</div>';
    
    document.body.appendChild(modal);
    
    // Add animations
    if (!document.getElementById('wpStyle')) {
      var style = document.createElement('style');
      style.id = 'wpStyle';
      style.textContent = '@keyframes wpFadeIn{from{opacity:0}to{opacity:1}}@keyframes wpSlideUp{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}';
      document.head.appendChild(style);
    }
    
    // Close handlers
    function closeModal() {
      localStorage.setItem('welcomeDismissed', Date.now().toString());
      modal.style.animation = 'wpFadeIn 0.3s ease reverse';
      setTimeout(function(){ modal.remove(); }, 300);
    }
    
    document.getElementById('wpClose').onclick = closeModal;
    document.getElementById('wpLater').onclick = closeModal;
    document.getElementById('wpSignup').onclick = function() {
      localStorage.setItem('welcomeDismissed', Date.now().toString());
    };
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
  }
  
  // Load पर check करें
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndShow);
  } else {
    checkAndShow();
  }
})();
