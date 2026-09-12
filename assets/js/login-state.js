// ===== Login State Checker - Compact =====
(function() {
  
  function getUser() {
    try {
      var name = localStorage.getItem('userName');
      var email = localStorage.getItem('userEmail');
      var userStr = localStorage.getItem('user');
      
      if (userStr) {
        try {
          var u = JSON.parse(userStr);
          if (u && (u.displayName || u.email)) return u;
        } catch(e){}
      }
      
      if (name || email) {
        return { displayName: name, email: email };
      }
      return null;
    } catch(e) { return null; }
  }
  
  function updateUserBox() {
    var box = document.getElementById('userBox');
    if (!box) return;
    
    var user = getUser();
    
    if (user) {
      var displayName = user.displayName || user.email || 'छात्र';
      if (displayName.indexOf('@') > -1) displayName = displayName.split('@')[0];
      
      // Mobile पर छोटा, desktop पर पूरा
      var maxLen = window.innerWidth <= 768 ? 6 : 15;
      if (displayName.length > maxLen) displayName = displayName.substring(0, maxLen) + '…';
      
      if (box.dataset.user === displayName + '_' + window.innerWidth) return;
      box.dataset.user = displayName + '_' + window.innerWidth;
      
      box.innerHTML = 
        '<a href="dashboard.html" title="Dashboard" style="color:#fff;text-decoration:none;font-weight:600">👤 ' + displayName + '</a>' +
        '<button id="logoutBtn" class="btn-small" type="button">लॉगआउट</button>';
      
      var lo = document.getElementById('logoutBtn');
      if (lo) {
        lo.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (confirm('लॉगआउट करना है?')) {
            try {
              ['userName', 'userEmail', 'userId', 'user'].forEach(function(k){
                localStorage.removeItem(k);
              });
            } catch(e){}
            
            if (typeof firebase !== 'undefined' && firebase.auth) {
              firebase.auth().signOut().then(function(){
                location.href = 'index.html';
              }).catch(function(){
                location.href = 'index.html';
              });
            } else {
              location.href = 'index.html';
            }
          }
        };
      }
    } else {
      if (box.dataset.user === 'guest_' + window.innerWidth) return;
      box.dataset.user = 'guest_' + window.innerWidth;
      box.innerHTML = '<a href="login.html" class="btn-small" style="background:#27ae60">लॉगिन</a>';
    }
  }
  
  function initChecks() {
    updateUserBox();
    setTimeout(updateUserBox, 100);
    setTimeout(updateUserBox, 500);
    setTimeout(updateUserBox, 1000);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChecks);
  } else {
    initChecks();
  }
  
  window.addEventListener('resize', function() {
    var box = document.getElementById('userBox');
    if (box) box.dataset.user = '';
    updateUserBox();
  });
  
  window.addEventListener('load', function() {
    setTimeout(updateUserBox, 300);
    setTimeout(updateUserBox, 1500);
  });
})();
