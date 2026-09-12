// ===== Login State Checker - Bulletproof =====
(function() {
  
  function getUser() {
    try {
      // Check all possible localStorage keys
      var userName = localStorage.getItem('userName');
      var userEmail = localStorage.getItem('userEmail');
      var userStr = localStorage.getItem('user');
      
      if (userStr) {
        try {
          var u = JSON.parse(userStr);
          if (u && (u.displayName || u.email)) {
            return u;
          }
        } catch(e){}
      }
      
      if (userName || userEmail) {
        return { displayName: userName, email: userEmail };
      }
      
      return null;
    } catch(e) { return null; }
  }
  
  function updateUserBox() {
    var box = document.getElementById('userBox');
    if (!box) {
      // अगर userBox नहीं है, तो header में add करें
      var navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        var menuToggle = document.querySelector('.menu-toggle');
        var newBox = document.createElement('div');
        newBox.id = 'userBox';
        newBox.className = 'user-box';
        if (menuToggle && menuToggle.parentNode) {
          menuToggle.parentNode.insertBefore(newBox, menuToggle);
        } else {
          navLinks.parentNode.insertBefore(newBox, navLinks);
        }
        box = newBox;
      } else {
        return;
      }
    }
    
    var user = getUser();
    
    if (user) {
      var displayName = user.displayName || user.email || 'छात्र';
      if (displayName.indexOf('@') > -1) displayName = displayName.split('@')[0];
      if (displayName.length > 12) displayName = displayName.substring(0, 12) + '…';
      
      // Check if already showing this user
      if (box.dataset.user === displayName) return;
      box.dataset.user = displayName;
      
      box.innerHTML = 
        '<a href="dashboard.html" title="Dashboard">👤 ' + displayName + '</a>' +
        '<button id="logoutBtn" class="btn-small" type="button">लॉगआउट</button>';
      
      var lo = document.getElementById('logoutBtn');
      if (lo) {
        lo.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (confirm('लॉगआउट करना है?')) {
            // Clear all user data
            ['userName', 'userEmail', 'userId', 'user'].forEach(function(k){
              try { localStorage.removeItem(k); } catch(e){}
            });
            
            // Firebase signout
            try {
              if (window.firebase && window.firebase.auth) {
                window.firebase.auth().signOut().then(function(){
                  location.href = 'index.html';
                }).catch(function(){
                  location.href = 'index.html';
                });
              } else {
                location.href = 'index.html';
              }
            } catch(e) {
              location.href = 'index.html';
            }
          }
        };
      }
    } else {
      if (box.dataset.user === 'guest') return;
      box.dataset.user = 'guest';
      box.innerHTML = '<a href="login.html" class="btn-small" style="background:#27ae60">लॉगिन</a>';
    }
  }
  
  // Multiple times check करें (Firebase async होने के लिए)
  function initChecks() {
    updateUserBox();
    setTimeout(updateUserBox, 100);
    setTimeout(updateUserBox, 500);
    setTimeout(updateUserBox, 1000);
    setTimeout(updateUserBox, 2000);
    setTimeout(updateUserBox, 3000);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChecks);
  } else {
    initChecks();
  }
  
  window.addEventListener('load', function() {
    setTimeout(updateUserBox, 300);
    setTimeout(updateUserBox, 1500);
  });
  
  // Expose globally
  window.refreshLoginState = updateUserBox;
})();
