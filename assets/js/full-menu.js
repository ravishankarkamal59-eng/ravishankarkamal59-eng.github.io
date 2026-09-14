// ===== Full Menu Builder - Accordion Version (Inline Styles for max compatibility) =====
(function() {
  'use strict';

  var MENU_SECTIONS = [
    { icon: '🤖', title: 'AI Assistant', highlight: true, items: [
      { href: 'ai-chat.html', label: '🤖 AI Chat - तुरंत सवाल पूछें' },
      { href: 'ai-chat.html#ask', label: '💬 AI से पूछें' },
      { href: 'ai-chat.html#notes', label: '📝 AI Notes Generator' },
      { href: 'ai-chat.html#quiz', label: '❓ AI Quiz' }
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
      { href: 'uppcs-mains-hindi.html', label: 'हिंदी' },
      { href: 'uppcs-mains-gs1-syllabus.html', label: 'GS1 Syllabus' },
      { href: 'uppcs-mains-gs1-notes.html', label: 'GS1 Notes' }
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
      { href: 'upsc-mains-essay.html', label: 'निबंध' },
      { href: 'upsc-prelims-gs1.html', label: 'UPSC Prelims GS' },
      { href: 'upsc-prelims-csat.html', label: 'UPSC Prelims CSAT' }
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
      { href: 'ba-sanskrit.html', label: 'BA संस्कृत' },
      { href: 'ba-urdu.html', label: 'BA उर्दू' },
      { href: 'ba-finearts.html', label: 'BA फाइन आर्ट्स' },
      { href: 'ba-journalism.html', label: 'BA पत्रकारिता' },
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
      { href: 'bsc-entomology.html', label: 'BSc Entomology' },
      { href: 'bsc-soil-science.html', label: 'BSc Soil Science' },
      { href: 'bsc-microbiology.html', label: 'BSc Microbiology' },
      { href: 'bsc-biochemistry.html', label: 'BSc Biochemistry' },
      { href: 'bsc-statistics.html', label: 'BSc Statistics' },
      { href: 'bsc-agri-economics.html', label: 'BSc Agri Economics' },
      { href: 'bsc-extension.html', label: 'BSc Extension' },
      { href: 'bsc-plant-breeding.html', label: 'BSc Plant Breeding' },
      { href: 'bsc-plant-physiology.html', label: 'BSc Plant Physiology' },
      { href: 'bsc-animal-husbandry.html', label: 'BSc Animal Husbandry' },
      { href: 'bsc-agri-engineering.html', label: 'BSc Agri Engineering' },
      { href: 'agri-11-crop.html', label: 'Class 11 - Crop' },
      { href: 'agri-11-soil.html', label: 'Class 11 - Soil' },
      { href: 'agri-11-biology.html', label: 'Class 11 - Biology' },
      { href: 'agri-11-animal.html', label: 'Class 11 - Animal' },
      { href: 'agri-11-farm.html', label: 'Class 11 - Farm' },
      { href: 'agri-11-horticulture.html', label: 'Class 11 - Horticulture' },
      { href: 'agri-11-rural.html', label: 'Class 11 - Rural' },
      { href: 'agri-12-crop.html', label: 'Class 12 - Crop' },
      { href: 'agri-12-soil.html', label: 'Class 12 - Soil' },
      { href: 'agri-12-genetics.html', label: 'Class 12 - Genetics' },
      { href: 'agri-12-animal.html', label: 'Class 12 - Animal' },
      { href: 'agri-12-economics.html', label: 'Class 12 - Economics' },
      { href: 'agri-12-extension.html', label: 'Class 12 - Extension' },
      { href: 'agri-12-horticulture.html', label: 'Class 12 - Horticulture' }
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
      { href: 'notes-adv-maths.html', label: 'Advanced Maths' },
      { href: 'notes-reasoning.html', label: 'रीजनिंग' },
      { href: 'notes-science.html', label: 'विज्ञान' },
      { href: 'notes-environment.html', label: 'पर्यावरण' },
      { href: 'notes-essay.html', label: 'निबंध' },
      { href: 'indian-history-notes.html', label: 'भारतीय इतिहास' }
    ]},
    { icon: '📝', title: 'अभ्यास / मटेरियल', items: [
      { href: 'syllabus.html', label: '📖 सिलेबस' },
      { href: 'pyq.html', label: '📄 PYQ Papers' },
      { href: 'mock-tests.html', label: '🎯 Mock Tests' },
      { href: 'quiz.html', label: '❓ क्विज़' },
      { href: 'quiz-advanced.html', label: '❓ Advanced Quiz' },
      { href: 'test-series.html', label: '📊 टेस्ट सीरीज़' },
      { href: 'study-material.html', label: '📚 स्टडी मटेरियल' },
      { href: 'study-plan.html', label: '📅 Study Plan' }
    ]},
    { icon: '📅', title: 'अपडेट', items: [
      { href: 'notifications.html', label: '🔔 Notifications' },
      { href: 'exam-calendar.html', label: '📅 Exam Calendar' },
      { href: 'admit-card.html', label: '🎫 Admit Card' },
      { href: 'result.html', label: '🏆 Result' },
      { href: 'answer-key.html', label: '✅ Answer Key' },
      { href: 'scholarship.html', label: '🎓 Scholarship' }
    ]},
    { icon: '📰', title: 'करंट अफेयर्स', items: [
      { href: 'current-affairs.html', label: 'सभी करंट अफेयर्स' },
      { href: 'current-national.html', label: 'राष्ट्रीय' },
      { href: 'current-international.html', label: 'अंतर्राष्ट्रीय' },
      { href: 'current-economy.html', label: 'अर्थव्यवस्था' },
      { href: 'current-science.html', label: 'विज्ञान' },
      { href: 'current-sports.html', label: 'खेल' },
      { href: 'current-culture.html', label: 'कला-संस्कृति' }
    ]},
    { icon: '🛠️', title: 'अन्य', items: [
      { href: 'ai-chat.html', label: '🤖 AI Chat' },
      { href: 'blog.html', label: '📝 ब्लॉग' },
      { href: 'forum.html', label: '💬 फोरम' },
      { href: 'dashboard.html', label: '📊 Dashboard' },
      { href: 'bookmarks.html', label: '🔖 Bookmarks' },
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

    // Wipe everything
    navLinks.innerHTML = '';

    // Wrapper (inline styles - nothing can override)
    var wrap = document.createElement('div');
    wrap.setAttribute('style', 'max-height:calc(100vh - 90px);overflow-y:auto;width:100%;background:#0f3460;padding:0;margin:0;display:block;');

    // Search box
    var searchBox = document.createElement('div');
    searchBox.setAttribute('style', 'padding:0.7rem 1rem;background:#0f3460;border-bottom:2px solid #e94560;position:sticky;top:0;z-index:10;');
    var searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 खोजें...';
    searchInput.setAttribute('style', 'width:100%;padding:0.65rem 1rem;border:1px solid rgba(255,255,255,0.3);border-radius:20px;font-size:0.9rem;font-family:inherit;background:rgba(255,255,255,0.12);color:#ffffff;outline:none;box-sizing:border-box;');
    searchInput.addEventListener('focus', function(){ this.style.borderColor = '#e94560'; });
    searchInput.addEventListener('blur', function(){ this.style.borderColor = 'rgba(255,255,255,0.3)'; });
    searchBox.appendChild(searchInput);
    wrap.appendChild(searchBox);

    // Build categories
    MENU_SECTIONS.forEach(function(section, idx) {
      var hasActive = section.items.some(function(it) { return it.href === currentPath; });

      var cat = document.createElement('div');
      cat.setAttribute('style', 'border-bottom:1px solid rgba(255,255,255,0.12);');

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('style', 'width:100%;background:transparent;border:none;text-align:left;padding:0.95rem 1.2rem;font-size:0.95rem;font-weight:600;color:#ffffff;cursor:pointer;display:flex;align-items:center;gap:0.4rem;font-family:inherit;box-sizing:border-box;white-space:nowrap;line-height:1.4;');
      btn.innerHTML = '<span style="font-size:1.15rem;line-height:1;flex-shrink:0;display:inline-block;width:1.5rem;text-align:center;">' + section.icon + '</span><span style="flex:1;color:#ffffff;font-size:0.95rem;font-weight:600;text-align:left;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-left:0.5rem;">' + section.title + '</span><span class="acc-arrow" style="font-size:0.7rem;color:#e94560;flex-shrink:0;display:inline-block;transition:transform 0.25s;">▶</span>';
      btn.addEventListener('mouseenter', function(){ btn.style.background = 'rgba(255,255,255,0.08)'; });
      btn.addEventListener('mouseleave', function(){ btn.style.background = 'transparent'; });

      var body = document.createElement('div');
      body.setAttribute('style', 'max-height:0;overflow:hidden;transition:max-height 0.35s ease;background:rgba(0,0,0,0.18);');

      section.items.forEach(function(item) {
        var a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        var baseStyle = 'display:block;padding:0.7rem 1.2rem 0.7rem 3rem;font-size:0.88rem;color:#d1d9e6 !important;text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.06);transition:all 0.15s;box-sizing:border-box;background:transparent;';
        if (item.href === currentPath) {
          baseStyle += 'color:#ffffff !important;font-weight:600;background:rgba(233,69,96,0.25);border-left:3px solid #e94560;';
        }
        a.setAttribute('style', baseStyle);
        a.addEventListener('mouseenter', function(){
          a.style.background = 'rgba(233,69,96,0.18)';
          a.style.color = '#ffffff';
          a.style.paddingLeft = '3.2rem';
        });
        a.addEventListener('mouseleave', function(){
          if (item.href === currentPath) {
            a.style.background = 'rgba(233,69,96,0.25)';
          } else {
            a.style.background = 'transparent';
          }
          a.style.color = '#d1d9e6';
          a.style.paddingLeft = '3rem';
        });
        // store label for search
        a.setAttribute('data-label', item.label.toLowerCase());
        body.appendChild(a);
      });

      // Click to open/close
      var isOpen = hasActive;
      function setOpen(open) {
        isOpen = open;
        if (open) {
          body.style.maxHeight = '2000px';
          btn.querySelector('.acc-arrow').style.transform = 'rotate(90deg)';
          btn.setAttribute('aria-expanded', 'true');
        } else {
          body.style.maxHeight = '0';
          btn.querySelector('.acc-arrow').style.transform = 'rotate(0deg)';
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
      var cats = wrap.querySelectorAll('div[style*="border-bottom:1px solid rgba(255,255,255,0.12)"]');
      var buttons = wrap.querySelectorAll('button');
      var bodies = wrap.querySelectorAll('div[style*="max-height"]');

      // Iterate by index instead - simpler
      MENU_SECTIONS.forEach(function(section, idx) {
        var cat = wrap.children[idx + 1]; // +1 because first child is searchBox
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
          // close all on clear
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
