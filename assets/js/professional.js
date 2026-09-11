// ===== Cookie Consent (AdSense compliance) =====
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookieConsent')) {
    const banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#0f3460;color:#fff;padding:1rem;z-index:9999;display:flex;flex-wrap:wrap;gap:0.8rem;align-items:center;justify-content:center;box-shadow:0 -2px 12px rgba(0,0,0,0.3);font-size:0.9rem';
    banner.innerHTML = `
      <span style="flex:1;min-width:200px">🍪 यह साइट बेहतर अनुभव और विज्ञापन के लिए cookies का उपयोग करती है। <a href="privacy.html" style="color:#6dd5fa">और जानें</a></span>
      <button id="acceptCookies" style="background:#27ae60;color:#fff;border:none;padding:0.5rem 1.2rem;border-radius:20px;cursor:pointer;font-weight:600">स्वीकार करें</button>
      <button id="declineCookies" style="background:transparent;color:#fff;border:1px solid #fff;padding:0.5rem 1.2rem;border-radius:20px;cursor:pointer">अस्वीकार</button>
    `;
    document.body.appendChild(banner);
    document.getElementById('acceptCookies').onclick = () => {
      localStorage.setItem('cookieConsent', 'accepted');
      banner.remove();
      showToast('✅ धन्यवाद! आपकी पसंद सेव हो गई।', 'success');
    };
    document.getElementById('declineCookies').onclick = () => {
      localStorage.setItem('cookieConsent', 'declined');
      banner.remove();
    };
  }

  // ===== Animated Counter =====
  const counters = document.querySelectorAll('.stat h3[data-target]');
  if (counters.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.done) {
          entry.target.dataset.done = '1';
          const target = parseInt(entry.target.dataset.target);
          const suffix = entry.target.dataset.suffix || '';
          let current = 0;
          const step = Math.max(1, Math.floor(target / 50));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            entry.target.textContent = current + suffix;
          }, 30);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  // ===== Reading Time =====
  const content = document.querySelector('.content');
  if (content && !document.getElementById('readingTime')) {
    const words = content.textContent.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.ceil(words / 200));
    const badge = document.createElement('div');
    badge.id = 'readingTime';
    badge.style.cssText = 'display:inline-block;background:#f0f4f8;color:#0f3460;padding:0.3rem 0.8rem;border-radius:16px;font-size:0.85rem;margin-bottom:1rem';
    badge.textContent = '⏱️ पढ़ने का समय: ' + mins + ' मिनट';
    content.insertBefore(badge, content.firstChild);
  }
});

// ===== Toast Notification =====
function showToast(message, type = 'info') {
  const colors = {
    success: '#27ae60',
    error: '#e74c3c',
    info: '#0f3460',
    warning: '#f39c12'
  };
  const toast = document.createElement('div');
  toast.style.cssText = `position:fixed;top:80px;right:20px;background:${colors[type]};color:#fff;padding:0.9rem 1.2rem;border-radius:12px;z-index:99999;box-shadow:0 4px 20px rgba(0,0,0,0.2);font-size:0.95rem;max-width:320px;animation:toastIn 0.3s ease`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ===== Add toast animations =====
const style = document.createElement('style');
style.textContent = `
  @keyframes toastIn { from { opacity:0; transform:translateX(60px); } to { opacity:1; transform:translateX(0); } }
  @keyframes toastOut { from { opacity:1; } to { opacity:0; transform:translateX(60px); } }
`;
document.head.appendChild(style);

// ===== Exam Countdown =====
function initCountdown(targetDate, elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  function update() {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;
    if (distance < 0) {
      el.innerHTML = '<span style="color:#27ae60">🎉 परीक्षा शुरू हो चुकी!</span>';
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    el.innerHTML = `<strong style="color:#e94560">${days}</strong> दिन <strong style="color:#e94560">${hours}</strong> घंटे <strong style="color:#e94560">${mins}</strong> मिनट`;
  }
  update();
  setInterval(update, 60000);
}
