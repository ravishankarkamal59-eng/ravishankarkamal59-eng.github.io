// ===== Signup Prompt - PDF/Action से पहले account बनाने का prompt =====
(function() {
  'use strict';
  
  // Check if user is logged in
  function isLoggedIn() {
    return !!(localStorage.getItem('userName') || localStorage.getItem('userEmail') || localStorage.getItem('user'));
  }
  
  // Check if user dismissed recently (24 hours)
  function recentlyDismissed() {
    var dismissed = localStorage.getItem('signupPromptDismissed');
    if (!dismissed) return false;
    return (Date.now() - parseInt(dismissed)) < (24 * 60 * 60 * 1000);
  }
  
  // Show signup modal
  function showSignupModal(actionType, callback) {
    if (document.getElementById('signupModal')) return;
    
    var modal = document.createElement('div');
    modal.id = 'signupModal';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(15,52,96,0.9);display:flex;align-items:center;justify-content:center;z-index:99999;padding:1rem;backdrop-filter:blur(5px);animation:sigFadeIn 0.3s ease';
    
    var title = actionType === 'download' ? '📥 Download करने के लिए Account बनाएँ' : '🎓 Account बनाएँ';
    
    modal.innerHTML = `
      <div style="background:#fff;border-radius:20px;max-width:420px;width:100%;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.5);animation:sigSlideUp 0.4s ease">
        <div style="background:linear-gradient(135deg,#0f3460,#e94560);padding:1.5rem;text-align:center;color:#fff;position:relative">
          <button id="sigClose" style="position:absolute;top:0.8rem;right:0.8rem;background:rgba(255,255,255,0.2);color:#fff;border:none;width:32px;height:32px;border-radius:50%;font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1">×</button>
          <img src="assets/images/logo.svg" alt="Logo" style="height:70px;width:auto;margin-bottom:0.8rem;filter:drop-shadow(0 4px 12px rgba(255,215,0,0.4))">
          <h2 style="color:#fff;margin:0;font-size:1.2rem">${title}</h2>
        </div>
        <div style="padding:1.5rem">
          <p style="color:#333;font-size:0.95rem;line-height:1.6;margin-bottom:1rem;text-align:center">
            <strong style="color:#e94560">मुफ़्त account</strong> बनाएँ और पाएँ:
          </p>
          <ul style="list-style:none;padding:0;margin:0 0 1.2rem">
            <li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.6rem"><span style="color:#27ae60;font-size:1.2rem">✓</span> अनलिमिटेड PDF Download</li>
            <li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.6rem"><span style="color:#27ae60;font-size:1.2rem">✓</span> सभी Notes, PYQ, Syllabus</li>
            <li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.6rem"><span style="color:#27ae60;font-size:1.2rem">✓</span> Progress Tracking + Streak</li>
            <li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.6rem"><span style="color:#27ae60;font-size:1.2rem">✓</span> Bookmarks और Test History</li>
            <li style="padding:0.5rem 0;color:#555;font-size:0.9rem;display:flex;align-items:center;gap:0.6rem"><span style="color:#27ae60;font-size:1.2rem">✓</span> AI सहायक - Unlimited</li>
          </ul>
          <a href="login.html" id="sigSignup" style="display:block;background:#e94560;color:#fff;text-align:center;padding:1rem;border-radius:12px;text-decoration:none;font-weight:700;font-size:1rem;margin-bottom:0.6rem">🎉 मुफ़्त Account बनाएँ</a>
          <button id="sigLater" style="width:100%;background:transparent;border:none;color:#888;padding:0.7rem;cursor:pointer;font-size:0.88rem;text-decoration:underline">24 घंटे के लिए बंद करें</button>
          <p style="text-align:center;font-size:0.72rem;color:#aaa;margin-top:0.8rem">🔒 कोई payment नहीं, 100% मुफ़्त</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    if (!document.getElementById('sigStyle')) {
      var style = document.createElement('style');
      style.id = 'sigStyle';
      style.textContent = '@keyframes sigFadeIn{from{opacity:0}to{opacity:1}}@keyframes sigSlideUp{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}';
      document.head.appendChild(style);
    }
    
    function closeModal() {
      modal.style.animation = 'sigFadeIn 0.3s ease reverse';
      setTimeout(function() { modal.remove(); }, 300);
    }
    
    document.getElementById('sigClose').onclick = function() {
      localStorage.setItem('signupPromptDismissed', Date.now().toString());
      closeModal();
    };
    
    document.getElementById('sigLater').onclick = function() {
      localStorage.setItem('signupPromptDismissed', Date.now().toString());
      closeModal();
    };
    
    document.getElementById('sigSignup').onclick = function() {
      localStorage.setItem('signupPromptDismissed', Date.now().toString());
      if (callback) callback('signup');
    };
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        localStorage.setItem('signupPromptDismissed', Date.now().toString());
        closeModal();
      }
    });
  }
  
  // Intercept PDF download buttons
  function interceptActions() {
    // Existing buttons पर event listener add करें
    document.addEventListener('click', function(e) {
      var target = e.target;
      
      // अगर user logged in है, तो कुछ नहीं करें
      if (isLoggedIn()) return;
      
      // Skip अगर recent dismissal है
      if (recentlyDismissed()) return;
      
      // Check for PDF download buttons
      var pdfBtn = target.closest('.pdf-dl-btn');
      if (pdfBtn) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        showSignupModal('download', function() {
          // User ने signup करने का फैसला किया
          setTimeout(function() {
            if (pdfBtn && window.downloadPdfWithWatermark) {
              window.downloadPdfWithWatermark(pdfBtn.dataset.url, pdfBtn.dataset.title);
            }
          }, 500);
        });
        return false;
      }
      
      // Check for other download links
      if (target.tagName === 'A' && target.download) {
        e.preventDefault();
        e.stopPropagation();
        showSignupModal('download');
        return false;
      }
      
      // Check for PDF viewer links
      if (target.tagName === 'A' && target.href && target.href.indexOf('pdf-viewer.html') > -1) {
        e.preventDefault();
        e.stopPropagation();
        showSignupModal('download', function() {
          setTimeout(function() {
            window.location.href = target.href;
          }, 500);
        });
        return false;
      }
      
    }, true); // Capture phase में intercept करें
  }
  
  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', interceptActions);
  } else {
    interceptActions();
  }
  
  // Expose globally
  window.showSignupPrompt = showSignupModal;
  window.isUserLoggedIn = isLoggedIn;
  
  console.log('✅ Signup Prompt system loaded');
})();
