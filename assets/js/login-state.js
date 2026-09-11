// ===== Login State Checker =====
// हर page पर यूज़र का login status check करके header में नाम दिखाता है
(function() {
  function getUser() {
    // Try all possible sources
    try {
      var name = localStorage.getItem('userName') || localStorage.getItem('userEmail');
      var email = localStorage.getItem('userEmail');
      
      // Firebase auth check
      if (typeof firebase !== 'undefined' && firebase.auth) {
        var user = firebase.auth().currentUser;
        if (user) return { name: user.displayName || user.email, email: user.email };
      }
      
      // Fallback to localStorage
      if (name) return { name: name, email: email };
      
      // Try user object stored
      var userObj = localStorage.getItem('user');
      if (userObj) {
        try {
          var u = JSON.parse(userObj);
          return { name: u.displayName || u.email, email: u.email };
        } catch(e){}
      }
      
      return null;
    } catch(e) { return null; }
  }
  
  function updateUserBox() {
    var user = getUser();
    var box = document.getElementById('userBox');
    if (!box) return;
    
    if (user) {
      var displayName = user.name || 'छात्र';
      if (displayName.length > 15) displayName = displayName.substring(0, 15) + '...';
      
      box.innerHTML = 
        '<a href="dashboard.html" style="color:#fff;text-decoration:none;font-weight:600">👤 ' + displayName + '</a>' +
        ' <button id="logoutBtn" class="btn-small" style="margin-left:0.3rem">लॉगआउट</button>';
      
      var lo = document.getElementById('logoutBtn');
      if (lo) {
        lo.onclick = function(e) {
          e.preventDefault();
          if (confirm('लॉगआउट करना है?')) {
            try {
              localStorage.removeItem('userName');
              localStorage.removeItem('userEmail');
              localStorage.removeItem('user');
              if (typeof firebase !== 'undefined' && firebase.auth) {
                firebase.auth().signOut().then(function(){ location.reload(); });
              } else {
                location.reload();
              }
            } catch(e) { location.reload(); }
          }
        };
      }
    } else {
      box.innerHTML = '<a href="login.html" class="btn-small">लॉगिन</a>';
    }
  }
  
  // DOM ready पर execute
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(updateUserBox, 100); });
  } else {
    setTimeout(updateUserBox, 100);
  }
  
  // Firestore Firebase auth state change
  window.addEventListener('load', function() {
    setTimeout(updateUserBox, 800);
    setTimeout(updateUserBox, 2000);
  });
})();
