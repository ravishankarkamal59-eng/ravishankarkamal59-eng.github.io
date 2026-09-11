// ===== Login State Checker (Improved) =====
(function() {
  function getUser() {
    try {
      var name = localStorage.getItem('userName');
      var email = localStorage.getItem('userEmail');
      var userStr = localStorage.getItem('user');
      
      if (userStr) {
        try {
          var u = JSON.parse(userStr);
          if (u && (u.displayName || u.email)) {
            return { name: u.displayName || u.email, email: u.email };
          }
        } catch(e){}
      }
      
      if (name || email) {
        return { name: name || email, email: email };
      }
      
      return null;
    } catch(e) { return null; }
  }
  
  function updateUserBox() {
    var box = document.getElementById('userBox');
    if (!box) return;
    
    var user = getUser();
    
    if (user) {
      var displayName = user.name || 'छात्र';
      if (displayName.indexOf('@') > -1) displayName = displayName.split('@')[0];
      if (displayName.length > 12) displayName = displayName.substring(0, 12) + '…';
      
      box.innerHTML = 
        '<a href="dashboard.html" style="color:#fff;text-decoration:none">👤 ' + displayName + '</a>' +
        '<button id="logoutBtn" class="btn-small" type="button">लॉगआउट</button>';
      
      var lo = document.getElementById('logoutBtn');
      if (lo) {
        lo.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (confirm('लॉगआउट करना है?')) {
            try {
              localStorage.removeItem('userName');
              localStorage.removeItem('userEmail');
              localStorage.removeItem('userId');
              localStorage.removeItem('user');
            } catch(e){}
            
            if (typeof firebase !== 'undefined' && firebase.auth) {
              firebase.auth().signOut().then(function(){
                location.reload();
              }).catch(function(){
                location.reload();
              });
            } else {
              location.reload();
            }
          }
        };
      }
    } else {
      box.innerHTML = '<a href="login.html" class="btn-small">लॉगिन</a>';
    }
  }
  
  // Multiple times check करें
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(updateUserBox, 50);
      setTimeout(updateUserBox, 500);
      setTimeout(updateUserBox, 1500);
    });
  } else {
    setTimeout(updateUserBox, 50);
    setTimeout(updateUserBox, 500);
  }
  
  window.addEventListener('load', function() {
    setTimeout(updateUserBox, 300);
    setTimeout(updateUserBox, 1500);
    setTimeout(updateUserBox, 3000);
  });
  
  // Expose function globally
  window.refreshLoginState = updateUserBox;
})();
