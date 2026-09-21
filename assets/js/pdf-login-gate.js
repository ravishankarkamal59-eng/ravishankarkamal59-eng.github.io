// ============================================================
// PDF DOWNLOAD LOGIN GATE
// Existing login system ke saath integrate
// ============================================================

(function() {
  'use strict';
  console.log('🔒 PDF Login Gate loading...');

  // ============================================================
  // USER CHECK — Existing login system se
  // ============================================================
  function getUser() {
    try {
      // Check JSON user first
      var userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          var u = JSON.parse(userStr);
          if (u && (u.displayName || u.email)) return u;
        } catch(e){}
      }
      
      // Fallback to individual keys
      var name = localStorage.getItem('userName');
      var email = localStorage.getItem('userEmail');
      var uid = localStorage.getItem('userId');
      
      if (name || email) {
        return { displayName: name, email: email, uid: uid };
      }
      
      return null;
    } catch(e) {
      return null;
    }
  }

  function isLoggedIn() {
    var user = getUser();
    return !!(user && (user.email || user.displayName));
  }

  // ============================================================
  // LOGIN MODAL
  // ============================================================
  function createLoginModal() {
    if (document.getElementById('pdfLoginModal')) return;

    var modal = document.createElement('div');
    modal.id = 'pdfLoginModal';
    modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(10,25,41,0.92);backdrop-filter:blur(8px);z-index:9999999;overflow-y:auto;padding:20px;align-items:center;justify-content:center';

    modal.innerHTML = `
      <div style="background:#fff;border-radius:20px;max-width:400px;width:100%;padding:28px 24px;box-shadow:0 20px 60px rgba(0,0,0,0.3);position:relative;">
        
        <button onclick="document.getElementById('pdfLoginModal').style.display='none'" style="position:absolute;top:12px;right:14px;background:#f0f4f8;border:none;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;color:#666;font-weight:700;line-height:1;">✕</button>

        <div style="text-align:center;margin-bottom:20px;">
          <div style="font-size:42px;margin-bottom:8px;">🔒</div>
          <h2 style="color:#0f3460;font-size:1.2rem;font-weight:900;margin-bottom:4px;">PDF Download के लिए Login करें</h2>
          <p style="color:#666;font-size:0.82rem;line-height:1.5;">मुफ़्त Login/Signup करें और सभी PDFs download करें</p>
        </div>

        <a href="login.html?redirect=pdf" style="display:block;width:100%;padding:14px;background:linear-gradient(135deg,#e94560,#c73650);color:#fff;text-decoration:none;text-align:center;border-radius:12px;font-size:0.95rem;font-weight:800;box-shadow:0 4px 14px rgba(233,69,96,0.3);box-sizing:border-box;">
          🔓 Login / Sign Up करें
        </a>

        <div style="display:flex;gap:10px;margin-top:14px;">
          <a href="login.html?mode=signup&redirect=pdf" style="flex:1;padding:12px;background:#f0f4f8;color:#0f3460;text-decoration:none;text-align:center;border-radius:10px;font-size:0.82rem;font-weight:700;box-sizing:border-box;">
            ✨ नया अकाउंट
          </a>
          <button onclick="document.getElementById('pdfLoginModal').style.display='none'" style="flex:1;padding:12px;background:#f0f4f8;color:#666;border:none;border-radius:10px;font-size:0.82rem;font-weight:700;cursor:pointer;font-family:inherit;">
            बाद में
          </button>
        </div>

        <p style="font-size:0.7rem;color:#999;text-align:center;margin-top:16px;line-height:1.5;">
          Login करने पर आप हमारी <a href="terms.html" style="color:#e94560;">Terms</a> और <a href="privacy.html" style="color:#e94560;">Privacy</a> से सहमत हैं।
        </p>
      </div>
    `;

    document.body.appendChild(modal);
  }

  // ============================================================
  // LOGIN REQUIRED MODAL SHOW
  // ============================================================
  var pendingUrl = null;

  function requireLogin(url) {
    pendingUrl = url;
    
    // Save pending URL for after-login resume
    try {
      sessionStorage.setItem('pdf_pending_url', url);
    } catch(e) {}
    
    createLoginModal();
    var modal = document.getElementById('pdfLoginModal');
    if (modal) modal.style.display = 'flex';
    
    console.log('🔒 Login required for:', url);
  }

  // ============================================================
  // DOWNLOAD PERFORM
  // ============================================================
  function performDownload(url) {
    console.log('✅ Download allowed:', url);
    
    // PDF viewer pe bhejo
    if (url.indexOf('pdf-viewer.html') > -1) {
      window.open(url, '_blank');
    } else if (url.match(/\.pdf($|\?)/i)) {
      // Direct PDF — new tab mein open (viewer page prefer)
      var viewerUrl = 'pdf-viewer.html?url=' + encodeURIComponent(url);
      window.open(viewerUrl, '_blank');
    } else {
      window.location.href = url;
    }
  }

  // ============================================================
  // CHECK PENDING URL AFTER LOGIN
  // ============================================================
  function checkPendingUrl() {
    try {
      var url = sessionStorage.getItem('pdf_pending_url');
      if (url && isLoggedIn()) {
        sessionStorage.removeItem('pdf_pending_url');
        console.log('✅ User logged in — resuming download:', url);
        setTimeout(function() {
          performDownload(url);
        }, 500);
      }
    } catch(e) {}
  }

  // ============================================================
  // CLICK INTERCEPTOR
  // ============================================================
  function interceptClicks() {
    document.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;

      var href = link.getAttribute('href');
      if (!href) return;

      // Skip anchors, javascript, external social
      if (href.startsWith('#') || href.startsWith('javascript:')) return;
      if (href.indexOf('wa.me') > -1 || href.indexOf('youtube.com') > -1 || 
          href.indexOf('facebook.com') > -1 || href.indexOf('instagram.com') > -1 || 
          href.indexOf('twitter.com') > -1 || href.indexOf('t.me') > -1 ||
          href.indexOf('login.html') > -1 || href.indexOf('signup.html') > -1) return;

      // Check if it's a PDF or pdf-viewer link
      var isPDF = href.match(/\.pdf($|\?)/i) || href.indexOf('pdf-viewer.html') > -1;
      if (!isPDF) return;

      // Check if user is logged in
      if (isLoggedIn()) {
        // User logged in — allow download
        console.log('✅ User logged in, download allowed');
        return;
      }

      // Not logged in — show login modal
      e.preventDefault();
      e.stopPropagation();
      
      requireLogin(href);
    }, true);
  }

  // ============================================================
  // ADD DOWNLOAD BUTTON ICONS FOR LOGGED-OUT USERS
  // ============================================================
  function addLoginHints() {
    if (isLoggedIn()) return;
    
    // Add small lock icon on PDF links
    setTimeout(function() {
      var pdfLinks = document.querySelectorAll('a[href*=".pdf"], a[href*="pdf-viewer"]');
      pdfLinks.forEach(function(link) {
        if (link.dataset.lockAdded) return;
        link.dataset.lockAdded = '1';
        // Add subtle lock emoji if not present
        if (link.textContent.indexOf('🔒') === -1 && link.textContent.length < 100) {
          // Keep as is — no visual change, just tracking
        }
      });
    }, 1500);
  }

  // ============================================================
  // INITIALIZE
  // ============================================================
  function init() {
    createLoginModal();
    interceptClicks();
    addLoginHints();
    checkPendingUrl();

    var user = getUser();
    console.log('✅ PDF Login Gate ready');
    console.log('   Status:', user ? '👤 Logged in as ' + (user.displayName || user.email) : '🔒 Not logged in');
  }

  // Expose API
  window.__pdfGate = {
    isLoggedIn: isLoggedIn,
    getUser: getUser,
    performDownload: performDownload,
    requireLogin: requireLogin
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
