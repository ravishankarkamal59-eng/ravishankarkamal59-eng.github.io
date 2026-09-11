document.addEventListener('DOMContentLoaded', () => {

  // ===== Global Search Modal (Ctrl+K) =====
  const searchModal = document.createElement('div');
  searchModal.id = 'searchModal';
  searchModal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:99999;align-items:flex-start;justify-content:center;padding-top:10vh;backdrop-filter:blur(5px)';
  searchModal.innerHTML = `
    <div style="background:#fff;width:90%;max-width:600px;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.3)">
      <div style="padding:1rem 1.2rem;border-bottom:1px solid #eee;display:flex;align-items:center;gap:0.8rem">
        <span style="font-size:1.2rem">🔍</span>
        <input id="globalSearchInput" type="text" placeholder="पेज खोजें... (जैसे: UPSC, नोट्स, क्विज़)" style="flex:1;border:none;outline:none;font-size:1rem;font-family:inherit" autocomplete="off">
        <kbd style="background:#f0f0f0;padding:0.2rem 0.5rem;border-radius:4px;font-size:0.75rem">ESC</kbd>
      </div>
      <div id="searchResults" style="max-height:400px;overflow-y:auto"></div>
    </div>
  `;
  document.body.appendChild(searchModal);

  const sitePages = [
    { title: '🏠 होम', url: 'index.html', keywords: 'home main page' },
    { title: '📚 परीक्षाएँ - UPSC, BPSC, SSC', url: 'exams.html', keywords: 'upsc bpsc ssc railway banking police exam' },
    { title: '📝 मुफ़्त नोट्स PDF', url: 'notes.html', keywords: 'notes pdf history geography polity' },
    { title: '📰 डेली करंट अफेयर्स', url: 'current-affairs.html', keywords: 'current affairs news daily' },
    { title: '🎯 मुफ़्त क्विज़ और टेस्ट', url: 'quiz.html', keywords: 'quiz test practice mock' },
    { title: '📅 स्टडी प्लान और टाइम टेबल', url: 'study-plan.html', keywords: 'study plan timetable schedule' },
    { title: '🤖 AI सहायक - कोई भी सवाल', url: 'ai-chat.html', keywords: 'ai chat gpt chatbot help' },
    { title: '📝 ब्लॉग - स्टडी टिप्स', url: 'blog.html', keywords: 'blog tips strategy' },
    { title: '❓ FAQ - अक्सर पूछे सवाल', url: 'faq.html', keywords: 'faq questions help' },
    { title: '👨‍🏫 हमारे बारे में', url: 'about.html', keywords: 'about us contact' },
    { title: '📞 संपर्क करें', url: 'contact.html', keywords: 'contact whatsapp email' },
    { title: '🔐 लॉगिन / साइनअप', url: 'login.html', keywords: 'login signup register account' },
    { title: '📊 डैशबोर्ड', url: 'dashboard.html', keywords: 'dashboard progress' },
    { title: '📜 प्राइवेसी पॉलिसी', url: 'privacy.html', keywords: 'privacy policy' },
    { title: '⚖️ नियम और शर्तें', url: 'terms.html', keywords: 'terms conditions' }
  ];

  function openSearch() {
    searchModal.style.display = 'flex';
    setTimeout(() => document.getElementById('globalSearchInput').focus(), 100);
  }
  function closeSearch() {
    searchModal.style.display = 'none';
    document.getElementById('globalSearchInput').value = '';
    renderSearchResults(sitePages.slice(0, 6));
  }
  function renderSearchResults(results) {
    const container = document.getElementById('searchResults');
    if (!results.length) {
      container.innerHTML = '<div style="padding:2rem;text-align:center;color:#888">कोई परिणाम नहीं मिला 😔</div>';
      return;
    }
    container.innerHTML = results.map(p => `
      <a href="${p.url}" style="display:block;padding:0.9rem 1.2rem;border-bottom:1px solid #f5f5f5;text-decoration:none;color:#333;transition:background 0.2s" onmouseover="this.style.background='#f5f7fa'" onmouseout="this.style.background='#fff'">
        ${p.title}
      </a>
    `).join('');
  }

  document.getElementById('globalSearchInput').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) return renderSearchResults(sitePages.slice(0, 6));
    const results = sitePages.filter(p =>
      p.title.toLowerCase().includes(q) || p.keywords.includes(q)
    );
    renderSearchResults(results);
  });

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Keyboard shortcut Ctrl+K / Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && searchModal.style.display === 'flex') {
      closeSearch();
    }
  });

  // Search button in header
  const searchBtn = document.createElement('button');
  searchBtn.id = 'searchBtn';
  searchBtn.innerHTML = '🔍';
  searchBtn.setAttribute('aria-label', 'खोजें');
  searchBtn.style.cssText = 'position:fixed;top:80px;right:70px;background:#0f3460;color:#fff;border:none;width:45px;height:45px;border-radius:50%;font-size:1.2rem;cursor:pointer;z-index:80;box-shadow:0 2px 10px rgba(0,0,0,0.3)';
  searchBtn.onclick = openSearch;
  document.body.appendChild(searchBtn);
  renderSearchResults(sitePages.slice(0, 6));

  // ===== Table of Contents =====
  const contentArea = document.querySelector('.content');
  if (contentArea) {
    const headings = contentArea.querySelectorAll('h2, h3');
    if (headings.length >= 3) {
      const toc = document.createElement('div');
      toc.id = 'toc';
      toc.style.cssText = 'background:#f0f4f8;padding:1rem 1.2rem;border-radius:12px;margin-bottom:1.5rem;border-left:4px solid #e94560';
      let html = '<div style="font-weight:700;color:#0f3460;margin-bottom:0.6rem">📋 इस पेज पर:</div><ul style="list-style:none;padding:0;margin:0">';
      headings.forEach((h, i) => {
        const id = 'section-' + i;
        h.id = id;
        html += `<li style="padding:0.25rem 0"><a href="#${id}" style="color:#0f3460;text-decoration:none;font-size:0.92rem">${h.tagName === 'H2' ? '•' : '◦'} ${h.textContent}</a></li>`;
      });
      html += '</ul>';
      toc.innerHTML = html;
      contentArea.insertBefore(toc, contentArea.firstChild);
    }
  }

  // ===== Font Size Adjuster =====
  const fontControls = document.createElement('div');
  fontControls.style.cssText = 'position:fixed;top:135px;right:15px;background:#fff;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.15);padding:0.4rem;z-index:80;display:flex;flex-direction:column;gap:0.2rem';
  fontControls.innerHTML = `
    <button id="fontUp" title="बड़ा फ़ॉन्ट" style="background:none;border:none;font-size:1.1rem;cursor:pointer;width:34px;height:34px;border-radius:6px;color:#0f3460">A+</button>
    <button id="fontDown" title="छोटा फ़ॉन्ट" style="background:none;border:none;font-size:0.85rem;cursor:pointer;width:34px;height:34px;border-radius:6px;color:#0f3460">A−</button>
  `;
  document.body.appendChild(fontControls);

  let fontSize = parseInt(localStorage.getItem('fontSize') || '100');
  function applyFontSize() {
    document.documentElement.style.fontSize = fontSize + '%';
    localStorage.setItem('fontSize', fontSize);
  }
  applyFontSize();
  document.getElementById('fontUp').onclick = () => { if (fontSize < 130) { fontSize += 10; applyFontSize(); } };
  document.getElementById('fontDown').onclick = () => { if (fontSize > 80) { fontSize -= 10; applyFontSize(); } };

  // ===== Print Button =====
  const printBtn = document.createElement('button');
  printBtn.innerHTML = '🖨️';
  printBtn.title = 'प्रिंट करें';
  printBtn.style.cssText = 'position:fixed;top:190px;right:15px;background:#fff;color:#0f3460;border:none;width:44px;height:44px;border-radius:50%;font-size:1.1rem;cursor:pointer;z-index:80;box-shadow:0 2px 12px rgba(0,0,0,0.15)';
  printBtn.onclick = () => window.print();
  document.body.appendChild(printBtn);

  // ===== Bookmark Page =====
  const bookmarkBtn = document.createElement('button');
  const pageKey = 'bookmark_' + location.pathname;
  const isBookmarked = localStorage.getItem(pageKey) === 'yes';
  bookmarkBtn.innerHTML = isBookmarked ? '⭐' : '☆';
  bookmarkBtn.title = 'बुकमार्क करें';
  bookmarkBtn.style.cssText = 'position:fixed;top:240px;right:15px;background:#fff;color:#f39c12;border:none;width:44px;height:44px;border-radius:50%;font-size:1.3rem;cursor:pointer;z-index:80;box-shadow:0 2px 12px rgba(0,0,0,0.15)';
  bookmarkBtn.onclick = () => {
    const current = localStorage.getItem(pageKey) === 'yes';
    if (current) {
      localStorage.removeItem(pageKey);
      bookmarkBtn.innerHTML = '☆';
      if (typeof showToast === 'function') showToast('बुकमार्क हटा दिया', 'info');
    } else {
      localStorage.setItem(pageKey, 'yes');
      bookmarkBtn.innerHTML = '⭐';
      if (typeof showToast === 'function') showToast('⭐ पेज बुकमार्क हो गया', 'success');
    }
  };
  document.body.appendChild(bookmarkBtn);

  // ===== Recently Viewed =====
  const currentPage = { title: document.title, url: location.pathname + location.search };
  let recent = JSON.parse(localStorage.getItem('recentPages') || '[]');
  recent = recent.filter(p => p.url !== currentPage.url);
  recent.unshift(currentPage);
  recent = recent.slice(0, 8);
  localStorage.setItem('recentPages', JSON.stringify(recent));
});

// ===== Print Styles =====
const printStyle = document.createElement('style');
printStyle.textContent = `
  @media print {
    header, footer, .whatsapp-float, .top-btn, .dark-toggle,
    #searchBtn, #bookmarkBtn, #cookieBanner, #shareBox,
    .suggestions, .ad-slot, [id$="Btn"], .chat-input-area { display: none !important; }
    body { background: #fff !important; }
    .content { box-shadow: none !important; }
  }
`;
document.head.appendChild(printStyle);
