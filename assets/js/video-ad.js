// ===== Auto-playing Animated Video Ad =====
(function() {
  'use strict';
  
  // Check अगर user ने इस session में पहले देखा है
  // sessionStorage use करने से हर नए tab/browser open पर दिखेगा
  function alreadyWatched() {
    return sessionStorage.getItem('videoAdWatchedInSession') === 'yes';
  }
  
  // Check अगर homepage पर हैं
  function isHomepage() {
    var path = location.pathname;
    return path === '/' || 
           path.endsWith('/index.html') || 
           path.endsWith('/ravishankarkamal59-eng.github.io/') ||
           path === '';
  }
  
  // Slides data - हर स्लाइड में एक feature
  var SLIDES = [
    {
      bg: 'linear-gradient(135deg, #0f3460, #1a5276, #2980b9)',
      icon: '📚',
      title: 'The Ravishankar Insights',
      subtitle: 'सभी सरकारी परीक्षाओं की मुफ़्त तैयारी',
      features: ['UPSC', 'BPSC', 'SSC', 'Railway', 'Banking', 'Police']
    },
    {
      bg: 'linear-gradient(135deg, #8e44ad, #c0392b, #e94560)',
      icon: '🎯',
      title: '33+ परीक्षाएँ',
      subtitle: 'हर परीक्षा का पूरा सिलेबस और गाइड',
      features: ['JEE Mains', 'NEET', 'LLB', 'MBA', 'GATE', 'B.Ed', 'NDA', 'UGC NET']
    },
    {
      bg: 'linear-gradient(135deg, #27ae60, #16a085, #0f3460)',
      icon: '📝',
      title: 'मुफ़्त नोट्स PDF',
      subtitle: 'सभी विषयों के हिंदी में नोट्स',
      features: ['इतिहास', 'भूगोल', 'राजनीति', 'अर्थशास्त्र', 'विज्ञान', 'गणित']
    },
    {
      bg: 'linear-gradient(135deg, #e94560, #f39c12, #c0392b)',
      icon: '🤖',
      title: 'AI सहायक',
      subtitle: 'कोई भी सवाल पूछें - 2 सेकंड में जवाब',
      features: ['हिंदी में जवाब', '24x7 उपलब्ध', 'सभी विषय', 'मुफ़्त']
    },
    {
      bg: 'linear-gradient(135deg, #1a5276, #8e44ad, #0f3460)',
      icon: '🎯',
      title: 'Advanced Quiz',
      subtitle: 'Timer, Leaderboard, Detailed Result',
      features: ['सभी विषय', 'Beginner/Intermediate/Advanced', 'Answer Review']
    },
    {
      bg: 'linear-gradient(135deg, #16a085, #27ae60, #0f3460)',
      icon: '📰',
      title: 'डेली करंट अफेयर्स',
      subtitle: 'रोज़ाना अपडेट - राष्ट्रीय, अंतर्राष्ट्रीय, खेल',
      features: ['राष्ट्रीय', 'अंतर्राष्ट्रीय', 'खेल', 'विज्ञान', 'अर्थव्यवस्था']
    },
    {
      bg: 'linear-gradient(135deg, #c0392b, #e94560, #f39c12)',
      icon: '📊',
      title: 'Dashboard + Progress',
      subtitle: 'अपनी पढ़ाई track करें',
      features: ['Study Streak', 'Bookmarks', 'Test History', 'Progress']
    },
    {
      bg: 'linear-gradient(135deg, #0f3460, #e94560, #0f3460)',
      icon: '🎓',
      title: 'अभी जुड़ें - 100% मुफ़्त',
      subtitle: 'कोई payment नहीं, कोई hidden charges नहीं',
      features: ['लॉगिन करें', 'सभी content access', 'Progress save'],
      isLast: true
    }
  ];
  
  // Create overlay
  function createAdOverlay() {
    var overlay = document.createElement('div');
    overlay.id = 'videoAdOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:#000;z-index:999999;display:flex;flex-direction:column;overflow:hidden';
    
    overlay.innerHTML = `
      <!-- Skip Button -->
      <div style="position:absolute;top:1rem;right:1rem;z-index:100;display:flex;gap:0.5rem;align-items:center">
        <span id="adCounter" style="color:#fff;font-size:0.85rem;background:rgba(0,0,0,0.5);padding:0.4rem 0.8rem;border-radius:20px">1/${SLIDES.length}</span>
        <button id="adSkip" style="background:rgba(255,255,255,0.2);color:#fff;border:2px solid rgba(255,255,255,0.4);padding:0.5rem 1rem;border-radius:20px;cursor:pointer;font-size:0.85rem;font-weight:600;backdrop-filter:blur(10px)">Skip ▶</button>
      </div>
      
      <!-- Progress Bar -->
      <div style="position:absolute;top:0;left:0;right:0;height:4px;background:rgba(255,255,255,0.2);z-index:100">
        <div id="adProgress" style="height:100%;background:linear-gradient(90deg,#e94560,#f39c12);width:0%;transition:width 0.1s linear"></div>
      </div>
      
      <!-- Slide Container -->
      <div id="adSlideContainer" style="flex:1;position:relative;overflow:hidden"></div>
      
      <!-- Bottom Info -->
      <div style="position:absolute;bottom:1rem;left:1rem;right:1rem;z-index:100;display:flex;justify-content:center;gap:0.5rem;flex-wrap:wrap">
        <a href="login.html" id="adLoginBtn" style="background:#e94560;color:#fff;padding:0.7rem 1.5rem;border-radius:25px;text-decoration:none;font-weight:700;font-size:0.9rem;box-shadow:0 4px 15px rgba(233,69,96,0.5)">🎓 मुफ़्त Account बनाएँ</a>
        <a href="exams.html" style="background:rgba(255,255,255,0.2);color:#fff;padding:0.7rem 1.5rem;border-radius:25px;text-decoration:none;font-weight:600;font-size:0.9rem;backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.3)">📚 सभी Exams देखें</a>
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Add animations CSS
    if (!document.getElementById('adAnimStyle')) {
      var style = document.createElement('style');
      style.id = 'adAnimStyle';
      style.textContent = `
        @keyframes adSlideIn {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes adIconPop {
          0% { transform: scale(0.5) rotate(-20deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes adTextFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes adFeaturePop {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes adFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes adPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `;
      document.head.appendChild(style);
    }
    
    return overlay;
  }
  
  // Render एक slide
  function renderSlide(slide, index) {
    var container = document.getElementById('adSlideContainer');
    var slideEl = document.createElement('div');
    slideEl.className = 'ad-slide';
    slideEl.style.cssText = `
      position:absolute;
      inset:0;
      background:${slide.bg};
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      padding:4rem 1.5rem 6rem;
      animation:adSlideIn 0.6s ease;
      background-size:200% 200%;
    `;
    
    var featuresHtml = slide.features.map(function(f, i) {
      return '<span style="background:rgba(255,255,255,0.2);color:#fff;padding:0.5rem 1rem;border-radius:20px;font-size:0.85rem;font-weight:600;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.3);animation:adFeaturePop 0.5s ease ' + (0.8 + i * 0.1) + 's both">' + f + '</span>';
    }).join('');
    
    slideEl.innerHTML = `
      <div style="text-align:center;max-width:600px">
        <div style="font-size:5rem;margin-bottom:1rem;animation:adIconPop 0.8s ease, adFloat 3s ease-in-out infinite;filter:drop-shadow(0 10px 30px rgba(0,0,0,0.3))">${slide.icon}</div>
        <h1 style="color:#fff;font-size:1.8rem;margin:0 0 0.8rem;line-height:1.3;animation:adTextFade 0.6s ease 0.3s both;text-shadow:0 3px 15px rgba(0,0,0,0.3)">${slide.title}</h1>
        <p style="color:rgba(255,255,255,0.95);font-size:1rem;margin:0 0 1.5rem;line-height:1.5;animation:adTextFade 0.6s ease 0.5s both">${slide.subtitle}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;margin-bottom:1rem">
          ${featuresHtml}
        </div>
      </div>
    `;
    
    // पुरानी slide हटाएँ
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(slideEl);
  }
  
  // Show ad
  function showAd() {
    var overlay = createAdOverlay();
    var currentSlide = 0;
    var slideDuration = 3500; // 3.5 seconds per slide
    var totalDuration = SLIDES.length * slideDuration;
    var startTime = Date.now();
    var animationFrame;
    var closed = false;
    
    function updateProgress() {
      if (closed) return;
      var elapsed = Date.now() - startTime;
      var percent = (elapsed / totalDuration) * 100;
      var progressBar = document.getElementById('adProgress');
      if (progressBar) progressBar.style.width = Math.min(100, percent) + '%';
      
      var newSlide = Math.floor(elapsed / slideDuration);
      if (newSlide >= SLIDES.length) newSlide = SLIDES.length - 1;
      
      if (newSlide !== currentSlide) {
        currentSlide = newSlide;
        renderSlide(SLIDES[currentSlide], currentSlide);
        var counter = document.getElementById('adCounter');
        if (counter) counter.textContent = (currentSlide + 1) + '/' + SLIDES.length;
      }
      
      if (elapsed < totalDuration) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        closeAd();
      }
    }
    
    function closeAd() {
      if (closed) return;
      closed = true;
      cancelAnimationFrame(animationFrame);
      sessionStorage.setItem('videoAdWatchedInSession', 'yes');
      overlay.style.animation = 'adSlideIn 0.4s ease reverse';
      setTimeout(function() {
        overlay.remove();
      }, 400);
    }
    
    // Skip button
    document.getElementById('adSkip').onclick = function(e) {
      e.preventDefault();
      closeAd();
    };
    
    // ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeAd();
    });
    
    // Login button click → close ad
    document.getElementById('adLoginBtn').onclick = function() {
      closeAd();
    };
    
    // First slide render
    renderSlide(SLIDES[0], 0);
    
    // Start animation
    animationFrame = requestAnimationFrame(updateProgress);
  }
  
  // Initialize - homepage पर ही दिखाएँ
  function init() {
    if (!isHomepage()) return;
    if (alreadyWatched()) return;
    
    // 1 second बाद दिखाएँ
    setTimeout(showAd, 1000);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Expose for testing
  window.showVideoAd = showAd;
})();
