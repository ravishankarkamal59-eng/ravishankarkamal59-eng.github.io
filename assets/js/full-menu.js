// ===== Full Menu Builder - Compact Accordion (v5) =====
(function() {
  'use strict';

  var MENU_SECTIONS = [
    { icon: '🎯', title: 'Answer Checker', highlight: true, items: [
      { href: 'answer-checker.html', label: '✍️ Answer Check करें' },
      { href: 'answer-checker.html#pdf', label: '📄 PDF Upload करें' },
      { href: 'answer-checker.html#history', label: '📊 आपकी Progress' },
      { href: 'answer-checker.html#guide', label: '📚 Answer Writing Guide' }
    ]},
    { icon: '🤖', title: 'AI Assistant', highlight: true, items: [
      { href: 'ai-chat.html', label: '🤖 AI Chat' },
      { href: 'ai-chat.html#ask', label: '💬 AI से पूछें' },
      { href: 'ai-chat.html#notes', label: '📝 AI Notes' },
      { href: 'ai-chat.html#quiz', label: '❓ AI Quiz' }
    ]},
    { icon: '🎬', title: 'हमारा YouTube', highlight: true, items: [
      { href: 'https://youtu.be/_wkfMaJqZk8', label: '▶️ नया वीडियो देखें' },
      { href: 'https://youtube.com/@theravishankarinsights', label: '🔔 YouTube Channel' },
      { href: 'https://youtube.com/@theravishankarinsights?sub_confirmation=1', label: '✅ Subscribe करें' }
    ]},
    { icon: '🏠', title: 'मुख्य', items: [
      { href: 'index.html', label: '🏠 होम' },
      { href: 'exams.html', label: '📚 सभी परीक्षाएँ' },
      { href: 'current-affairs.html', label: '📰 करंट अफेयर्स' },
      { href: 'success-stories.html', label: '🏆 Success Stories' }
    ]},
    { icon: '🏛️', title: 'केंद्रीय परीक्षाएँ', items: [
      { href: 'upsc.html', label: 'UPSC Civil Services' },
      { href: 'bpsc.html', label: 'BPSC' },
      { href: 'uppcs.html', label: 'UPPCS / PCS' },
      { href: 'mppsc.html', label: 'MPPSC' },
      { href: 'ras.html', label: 'RAS Rajasthan' },
      { href: 'jpsc.html', label: 'JPSC Jharkhand' },
      { href: 'ukpsc.html', label: 'UKPSC Uttarakhand' },
      { href: 'ssc-cgl.html', label: 'SSC CGL' },
      { href: 'ssc-chsl.html', label: 'SSC CHSL' },
      { href: 'ssc-mts.html', label: 'SSC MTS' },
      { href: 'ssc-gd.html', label: 'SSC GD' },
      { href: 'railway.html', label: 'Railway' },
      { href: 'banking.html', label: 'Banking' },
      { href: 'bihar-police.html', label: 'बिहार पुलिस' },
      { href: 'up-police.html', label: 'UP Police' },
      { href: 'up-lekhpal.html', label: 'UP लेखपाल' },
      { href: 'bihar-si.html', label: 'बिहार SI' },
      { href: 'nda-cds.html', label: 'NDA / CDS' }
    ]},
    { icon: '📘', title: 'UPPCS Mains', items: [
      { href: 'uppcs-mains-gs1.html', label: 'GS Paper 1' },
      { href: 'uppcs-mains-gs2.html', label: 'GS Paper 2' },
      { href: 'uppcs-mains-gs3.html', label: 'GS Paper 3' },
      { href: 'uppcs-mains-gs4.html', label: 'GS Paper 4' },
      { href: 'uppcs-mains-gs5.html', label: 'GS Paper 5' },
      { href: 'uppcs-mains-gs6.html', label: 'GS Paper 6' },
      { href: 'uppcs-mains-essay.html', label: 'निबंध' },
      { href: 'uppcs-mains-hindi.html', label: 'हिंदी' }
    ]},
    { icon: '📗', title: 'UPPCS Prelims', items: [
      { href: 'uppcs-prelims-gs.html', label: 'GS Paper 1' },
      { href: 'uppcs-prelims-csat.html', label: 'CSAT Paper 2' },
      { href: 'uppcs-prelims-gs-notes.html', label: 'GS Notes' },
      { href: 'uppcs-prelims-gs1-syllabus.html', label: 'GS1 Syllabus' },
      { href: 'uppcs-prelims-gs1-pyq.html', label: 'GS1 PYQ' },
      { href: 'uppcs-prelims-csat-syllabus.html', label: 'CSAT Syllabus' },
      { href: 'uppcs-prelims-csat-pyq.html', label: 'CSAT PYQ' }
    ]},
    { icon: '📙', title: 'UPSC Mains', items: [
      { href: 'upsc-mains-gs1.html', label: 'GS Paper 1' },
      { href: 'upsc-mains-gs2.html', label: 'GS Paper 2' },
      { href: 'upsc-mains-gs3.html', label: 'GS Paper 3' },
      { href: 'upsc-mains-gs4.html', label: 'GS Paper 4' },
      { href: 'upsc-mains-essay.html', label: 'निबंध' }
    ]},
    { icon: '🎓', title: 'UGC NET / JRF', items: [
      { href: 'ugc-net.html', label: 'UGC NET मुख्य' },
      { href: 'net-paper1.html', label: 'Paper 1' },
      { href: 'net-hindi.html', label: 'हिंदी' },
      { href: 'net-english.html', label: 'English' },
      { href: 'net-history.html', label: 'इतिहास' },
      { href: 'net-polity.html', label: 'राजनीति शास्त्र' },
      { href: 'net-sociology.html', label: 'समाजशास्त्र' },
      { href: 'net-economics.html', label: 'अर्थशास्त्र' },
      { href: 'net-geography.html', label: 'भूगोल' },
      { href: 'net-education.html', label: 'शिक्षा' },
      { href: 'net-psychology.html', label: 'मनोविज्ञान' },
      { href: 'net-commerce.html', label: 'कॉमर्स' },
      { href: 'net-philosophy.html', label: 'दर्शनशास्त्र' },
      { href: 'net-sanskrit.html', label: 'संस्कृत' }
    ]},
    { icon: '📚', title: 'BA / MA विषय', items: [
      { href: 'ba-ma.html', label: 'BA/MA मुख्य' },
      { href: 'ba-hindi.html', label: 'BA हिंदी' },
      { href: 'ba-english.html', label: 'BA English' },
      { href: 'ba-history.html', label: 'BA इतिहास' },
      { href: 'ba-polity.html', label: 'BA राजनीति' },
      { href: 'ba-economics.html', label: 'BA अर्थशास्त्र' },
      { href: 'ba-sociology.html', label: 'BA समाजशास्त्र' },
      { href: 'ba-psychology.html', label: 'BA मनोविज्ञान' },
      { href: 'ba-geography.html', label: 'BA भूगोल' },
      { href: 'ma-hindi.html', label: 'MA हिंदी' },
      { href: 'ma-english.html', label: 'MA English' },
      { href: 'ma-history.html', label: 'MA इतिहास' },
      { href: 'ma-polity.html', label: 'MA राजनीति' },
      { href: 'ma-sociology.html', label: 'MA समाजशास्त्र' },
      { href: 'ma-economics.html', label: 'MA अर्थशास्त्र' },
      { href: 'ma-geography.html', label: 'MA भूगोल' },
      { href: 'ma-psychology.html', label: 'MA मनोविज्ञान' }
    ]},
    { icon: '🌾', title: 'कृषि / BSc Agri', items: [
      { href: 'agriculture.html', label: 'कृषि मुख्य' },
      { href: 'bhu-agri.html', label: 'BHU Agriculture' },
      { href: 'icar-jrf.html', label: 'ICAR JRF' },
      { href: 'ibps-afo.html', label: 'IBPS AFO' },
      { href: 'nabard-grade-a.html', label: 'NABARD Grade A' },
      { href: 'ars.html', label: 'ARS' },
      { href: 'agta.html', label: 'AGTA' },
      { href: 'bsc-agronomy.html', label: 'BSc Agronomy' },
      { href: 'bsc-horticulture.html', label: 'BSc Horticulture' },
      { href: 'bsc-forestry.html', label: 'BSc Forestry' },
      { href: 'bsc-plant-pathology.html', label: 'BSc Plant Pathology' },
      { href: 'bsc-soil-science.html', label: 'BSc Soil Science' }
    ]},
    { icon: '🎯', title: 'अन्य परीक्षाएँ', items: [
      { href: 'cuet.html', label: 'CUET' },
      { href: 'ctet.html', label: 'CTET' },
      { href: 'b-ed.html', label: 'B.Ed' },
      { href: 'llb.html', label: 'LLB / LLM' },
      { href: 'cat-mba.html', label: 'CAT / MBA' },
      { href: 'gate.html', label: 'GATE' },
      { href: 'jee-mains.html', label: 'JEE Mains' },
      { href: 'neet.html', label: 'NEET' },
      { href: 'nursing.html', label: 'Nursing' },
      { href: 'bca-mca.html', label: 'BCA / MCA' },
      { href: 'pet.html', label: 'PET' }
    ]},
    { icon: '📖', title: 'नोट्स', items: [
      { href: 'notes.html', label: 'सभी नोट्स' },
      { href: 'notes-polity.html', label: 'राजनीति शास्त्र' },
      { href: 'notes-history.html', label: 'इतिहास' },
      { href: 'notes-geography.html', label: 'भूगोल' },
      { href: 'notes-economics.html', label: 'अर्थशास्त्र' },
      { href: 'notes-english.html', label: 'English' },
      { href: 'notes-hindi.html', label: 'हिंदी' },
      { href: 'notes-maths.html', label: 'गणित' },
      { href: 'notes-reasoning.html', label: 'रीजनिंग' },
      { href: 'notes-science.html', label: 'विज्ञान' }
    ]},
    { icon: '📝', title: 'अभ्यास / मटेरियल', items: [
      { href: 'syllabus.html', label: '📖 सिलेबस' },
      { href: 'pyq.html', label: '📄 PYQ Papers' },
      { href: 'mock-tests.html', label: '🎯 Mock Tests' },
      { href: 'quiz.html', label: '❓ क्विज़' },
      { href: 'test-series.html', label: '📊 टेस्ट सीरीज़' },
      { href: 'study-material.html', label: '📚 स्टडी मटेरियल' }
    ]},
    { icon: '📅', title: 'अपडेट', items: [
      { href: 'notifications.html', label: '🔔 Notifications' },
      { href: 'exam-calendar.html', label: '📅 Exam Calendar' },
      { href: 'admit-card.html', label: '🎫 Admit Card' },
      { href: 'result.html', label: '🏆 Result' },
      { href: 'answer-key.html', label: '✅ Answer Key' },
      { href: 'scholarship.html', label: '🎓 Scholarship' }
    ]},
    { icon: '🛠️', title: 'अन्य', items: [
      { href: 'blog.html', label: '📝 ब्लॉग' },
      { href: 'forum.html', label: '💬 फोरम' },
      { href: 'dashboard.html', label: '📊 Dashboard' },
      { href: 'about.html', label: 'ℹ️ हमारे बारे में' },
      { href: 'contact.html', label: '📞 संपर्क' },
      { href: 'faq.html', label: '❓ FAQ' }
    ]}
  ];

  function buildMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks) { setTimeout(buildMenu, 300); return; }
    if (navLinks.dataset.built === 'yes') return;
    navLinks.dataset.built = 'yes';

    var currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.innerHTML = '';

    var wrap = document.createElement('div');
    wrap.style.cssText = 'max-height:calc(100vh - 90px);overflow-y:auto;width:100%;background:#0f3460;padding:0;margin:0;';

    // Search box
    var searchBox = document.createElement('div');
    searchBox.style.cssText = 'padding:0.6rem 1rem;background:#0f3460;border-bottom:2px solid #e94560;position:sticky;top:0;z-index:10;';
    var searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 खोजें...';
    searchInput.style.cssText = 'width:100%;padding:0.6rem 1rem;border:1px solid rgba(255,255,255,0.3);border-radius:20px;font-size:0.9rem;font-family:inherit;background:rgba(255,255,255,0.12);color:#fff;outline:none;box-sizing:border-box;';
    searchBox.appendChild(searchInput);
    wrap.appendChild(searchBox);

    MENU_SECTIONS.forEach(function(section, idx) {
      var hasActive = section.items.some(function(it) { return it.href === currentPath; });

      var cat = document.createElement('div');
      cat.style.cssText = 'border-bottom:1px solid rgba(255,255,255,0.12);';

      var btn = document.createElement('button');
      btn.type = 'button';
      var btnBg = section.highlight 
        ? 'linear-gradient(90deg,#e94560,#ff6b6b)' 
        : 'transparent';
      btn.style.cssText = 'width:100%;background:' + btnBg + ';border:none;text-align:left;padding:0.85rem 1.2rem;font-size:0.95rem;font-weight:600;color:#ffffff;cursor:pointer;display:flex;align-items:center;gap:0.6rem;font-family:inherit;box-sizing:border-box;line-height:1.4;';
      
      // Build button HTML safely
      var iconSpan = document.createElement('span');
      iconSpan.style.cssText = 'font-size:1.15rem;line-height:1;flex-shrink:0;display:inline-block;width:1.5rem;text-align:center;';
      iconSpan.textContent = section.icon;
      
      var titleSpan = document.createElement('span');
      titleSpan.style.cssText = 'flex:1;color:#ffffff;font-size:0.95rem;font-weight:600;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
      titleSpan.textContent = section.title;
      
      var arrowSpan = document.createElement('span');
      arrowSpan.className = 'acc-arrow';
      arrowSpan.style.cssText = 'font-size:0.7rem;color:#e94560;flex-shrink:0;display:inline-block;transition:transform 0.25s;';
      arrowSpan.textContent = '▶';
      
      btn.appendChild(iconSpan);
      btn.appendChild(titleSpan);
      btn.appendChild(arrowSpan);

      var body = document.createElement('div');
      body.style.cssText = 'max-height:0;overflow:hidden;transition:max-height 0.35s ease;background:rgba(0,0,0,0.18);';

      section.items.forEach(function(item) {
        var a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        var linkStyle = 'display:block;padding:0.6rem 1.2rem 0.6rem 2.8rem;font-size:0.86rem;color:#d1d9e6;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.05);';
        if (item.href === currentPath) {
          linkStyle += 'color:#fff;font-weight:600;background:rgba(233,69,96,0.25);border-left:3px solid #e94560;';
        }
        a.style.cssText = linkStyle;
        a.setAttribute('data-label', item.label.toLowerCase());
        body.appendChild(a);
      });

      var isOpen = hasActive;
      function setOpen(open) {
        isOpen = open;
        if (open) {
          body.style.maxHeight = '2000px';
          arrowSpan.style.transform = 'rotate(90deg)';
          btn.setAttribute('aria-expanded', 'true');
        } else {
          body.style.maxHeight = '0';
          arrowSpan.style.transform = 'rotate(0deg)';
          btn.setAttribute('aria-expanded', 'false');
        }
      }
      setOpen(isOpen);

      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(!isOpen);
      });

      cat.appendChild(btn);
      cat.appendChild(body);
      wrap.appendChild(cat);
    });

    navLinks.appendChild(wrap);

    // Search functionality
    searchInput.addEventListener('input', function() {
      var q = this.value.toLowerCase().trim();
      MENU_SECTIONS.forEach(function(section, idx) {
        var cat = wrap.children[idx + 1];
        if (!cat) return;
        var catBtn = cat.children[0];
        var catBody = cat.children[1];
        var links = catBody.querySelectorAll('a');
        var anyMatch = false;
        links.forEach(function(a) {
          var match = !q || a.getAttribute('data-label').indexOf(q) !== -1;
          a.style.display = match ? 'block' : 'none';
          if (match) anyMatch = true;
        });
        if (q) {
          cat.style.display = anyMatch ? 'block' : 'none';
          if (anyMatch) {
            catBody.style.maxHeight = '2000px';
            catBtn.querySelector('.acc-arrow').style.transform = 'rotate(90deg)';
          }
        } else {
          cat.style.display = 'block';
          catBody.style.maxHeight = '0';
          catBtn.querySelector('.acc-arrow').style.transform = 'rotate(0deg)';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMenu);
  } else {
    buildMenu();
  }
})();
