// ===== Reading Progress Bar =====
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.createElement('div');
  progressBar.id = 'readingProgress';
  progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#e94560,#f39c12);width:0%;z-index:9999;transition:width 0.1s;';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });

  // ===== Share Buttons =====
  const shareBox = document.getElementById('shareBox');
  if (shareBox) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    shareBox.innerHTML = `
      <p style="font-weight:600;color:#0f3460;margin-bottom:0.5rem">📤 इस पेज को शेयर करें:</p>
      <a href="https://wa.me/?text=${title}%20${url}" target="_blank" rel="noopener" style="background:#25D366;color:#fff;padding:0.5rem 1rem;border-radius:20px;text-decoration:none;margin:0.2rem;display:inline-block;font-size:0.9rem">💬 WhatsApp</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" style="background:#1877f2;color:#fff;padding:0.5rem 1rem;border-radius:20px;text-decoration:none;margin:0.2rem;display:inline-block;font-size:0.9rem">📘 Facebook</a>
      <a href="https://twitter.com/intent/tweet?url=${url}&text=${title}" target="_blank" rel="noopener" style="background:#1da1f2;color:#fff;padding:0.5rem 1rem;border-radius:20px;text-decoration:none;margin:0.2rem;display:inline-block;font-size:0.9rem">🐦 Twitter</a>
      <a href="https://t.me/share/url?url=${url}&text=${title}" target="_blank" rel="noopener" style="background:#0088cc;color:#fff;padding:0.5rem 1rem;border-radius:20px;text-decoration:none;margin:0.2rem;display:inline-block;font-size:0.9rem">✈️ Telegram</a>
    `;
  }
});

// ===== Dark Mode =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('darkToggle');
  if (!toggle) return;
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'on' : 'off');
    toggle.textContent = isDark ? '☀️' : '🌙';
  });
});
