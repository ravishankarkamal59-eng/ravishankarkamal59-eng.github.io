(function(){
  var lang = localStorage.getItem('siteLang') || 'hi';
  
  // Language button create करें
  function addToggle(){
    if (document.getElementById('langToggle')) return;
    var btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.innerHTML = lang === 'hi' ? '🌐 EN' : '🌐 हिं';
    btn.title = 'Change Language';
    btn.style.cssText = 'position:fixed;top:280px;right:15px;background:#fff;color:#0f3460;border:none;width:44px;height:44px;border-radius:50%;font-size:0.8rem;font-weight:700;cursor:pointer;z-index:80;box-shadow:0 2px 12px rgba(0,0,0,0.15)';
    btn.onclick = function(){
      lang = lang === 'hi' ? 'en' : 'hi';
      localStorage.setItem('siteLang', lang);
      applyLang();
      btn.innerHTML = lang === 'hi' ? '🌐 EN' : '🌐 हिं';
    };
    document.body.appendChild(btn);
  }
  
  // Common translations
  var translations = {
    'होम': 'Home', 'परीक्षाएँ': 'Exams', 'नोट्स': 'Notes',
    'करंट अफेयर्स': 'Current Affairs', 'क्विज़': 'Quiz', 'ब्लॉग': 'Blog',
    'संपर्क': 'Contact', 'हमारे बारे में': 'About Us', 'स्टडी प्लान': 'Study Plan',
    'AI सहायक': 'AI Assistant', 'सिलेबस': 'Syllabus', 'टेस्ट': 'Test',
    'स्टडी मटेरियल': 'Study Material', 'कैलेंडर': 'Calendar',
    'स्कॉलरशिप': 'Scholarship', 'बुकमार्क': 'Bookmarks',
    'पिछला': 'Previous', 'अगला': 'Next', 'सबमिट': 'Submit', 'छोड़ें': 'Skip'
  };
  
  var reverse = {};
  Object.keys(translations).forEach(function(k){ reverse[translations[k]] = k; });
  
  function applyLang(){
    var map = lang === 'en' ? translations : reverse;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while (node = walker.nextNode()){
      var t = node.nodeValue.trim();
      if (map[t]){
        node.nodeValue = node.nodeValue.replace(t, map[t]);
      }
    }
    // Update all buttons/links
    document.querySelectorAll('a, button').forEach(function(el){
      var t = el.textContent.trim();
      if (map[t]) el.textContent = map[t];
    });
  }
  
  // Add toggle button after DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addToggle);
  } else {
    addToggle();
  }
})();
