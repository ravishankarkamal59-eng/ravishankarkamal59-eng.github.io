// ===== Full Menu Builder - Accordion Version =====
(function() {
  'use strict';

  var MENU_SECTIONS = [
    {
      title: '🏠 मुख्य',
      icon: '🏠',
      items: [
        { href: 'index.html', label: '🏠 होम' },
        { href: 'exams.html', label: '📚 सभी परीक्षाएँ' },
        { href: 'current-affairs.html', label: '📰 करंट अफेयर्स' },
        { href: 'success-stories.html', label: '🏆 Success Stories' }
      ]
    },
    {
      title: '🏛️ केंद्रीय परीक्षाएँ',
      icon: '🏛️',
      items: [
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
      ]
    },
    {
      title: '📘 UPPCS Mains',
      icon: '📘',
      items: [
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
      ]
    },
    {
      title: '📗 UPPCS Prelims',
      icon: '📗',
      items: [
        { href: 'uppcs-prelims-gs.html', label: 'GS Paper 1' },
        { href: 'uppcs-prelims-csat.html', label: 'CSAT Paper 2' },
        { href: 'uppcs-prelims-gs-notes.html', label: 'GS Notes' },
        { href: 'uppcs-prelims-gs1-syllabus.html', label: 'GS1 Syllabus' },
        { href: 'uppcs-prelims-gs1-pyq.html', label: 'GS1 PYQ' },
        { href: 'uppcs-prelims-csat-syllabus.html', label: 'CSAT Syllabus' },
        { href: 'uppcs-prelims-csat-pyq.html', label: 'CSAT PYQ' }
      ]
    },
    {
      title: '📙 UPSC Mains',
      icon: '📙',
      items: [
        { href: 'upsc-mains-gs1.html', label: 'GS Paper 1' },
        { href: 'upsc-mains-gs2.html', label: 'GS Paper 2' },
        { href: 'upsc-mains-gs3.html', label: 'GS Paper 3' },
        { href: 'upsc-mains-gs4.html', label: 'GS Paper 4' },
        { href: 'upsc-mains-essay.html', label: 'निबंध' },
        { href: 'upsc-prelims-gs1.html', label: 'UPSC Prelims GS' },
        { href: 'upsc-prelims-csat.html', label: 'UPSC Prelims CSAT' }
      ]
    },
    {
      title: '🎓 UGC NET / JRF',
      icon: '🎓',
      items: [
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
      ]
    },
    {
      title: '📚 BA / MA विषय',
      icon: '📚',
      items: [
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
      ]
    },
    {
      title: '🌾 कृषि / BSc Agri',
      icon: '🌾',
      items: [
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
      ]
    },
    {
      title: '🎯 अन्य परीक्षाएँ',
      icon: '🎯',
      items: [
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
      ]
    },
    {
      title: '📖 नोट्स',
      icon: '📖',
      items: [
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
      ]
    },
    {
      title: '📝 अभ्यास / मटेरियल',
      icon: '📝',
      items: [
        { href: 'syllabus.html', label: '📖 सिलेबस' },
        { href: 'pyq.html', label: '📄 PYQ Papers' },
        { href: 'mock-tests.html', label: '🎯 Mock Tests' },
        { href: 'quiz.html', label: '❓ क्विज़' },
        { href: 'quiz-advanced.html', label: '❓ Advanced Quiz' },
        { href: 'test-series.html', label: '📊 टेस्ट सीरीज़' },
        { href: 'study-material.html', label: '📚 स्टडी मटेरियल' },
        { href: 'study-plan.html', label: '📅 Study Plan' }
      ]
    },
    {
      title: '📅 अपडेट',
      icon: '📅',
      items: [
        { href: 'notifications.html', label: '🔔 Notifications' },
        { href: 'exam-calendar.html', label: '📅 Exam Calendar' },
        { href: 'admit-card.html', label: '🎫 Admit Card' },
        { href: 'result.html', label: '🏆 Result' },
        { href: 'answer-key.html', label: '✅ Answer Key' },
        { href: 'scholarship.html', label: '🎓 Scholarship' }
      ]
    },
    {
      title: '📰 करंट अफेयर्स',
      icon: '📰',
      items: [
        { href: 'current-affairs.html', label: 'सभी करंट अफेयर्स' },
        { href: 'current-national.html', label: 'राष्ट्रीय' },
        { href: 'current-international.html', label: 'अंतर्राष्ट्रीय' },
        { href: 'current-economy.html', label: 'अर्थव्यवस्था' },
        { href: 'current-science.html', label: 'विज्ञान' },
        { href: 'current-sports.html', label: 'खेल' },
        { href: 'current-culture.html', label: 'कला-संस्कृति' }
      ]
    },
    {
      title: '🛠️ अन्य',
      icon: '🛠️',
      items: [
        { href: 'ai-chat.html', label: '🤖 AI Chat' },
        { href: 'blog.html', label: '📝 ब्लॉग' },
        { href: 'forum.html', label: '💬 फोरम' },
        { href: 'dashboard.html', label: '📊 Dashboard' },
        { href: 'bookmarks.html', label: '🔖 Bookmarks' },
        { href: 'about.html', label: 'ℹ️ हमारे बारे में' },
        { href: 'contact.html', label: '📞 संपर्क' },
        { href: 'faq.html', label: '❓ FAQ' }
      ]
    }
  ];

  function buildMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks) { setTimeout(buildMenu, 300); return; }
    if (navLinks.dataset.built === 'yes') return;
    navLinks.dataset.built = 'yes';

    var currentPath = window.location.pathname.split('/').pop() || 'index.html';

    var html = '';
    html += '<style>';
    html += '.nav-links .acc-wrap{max-height:calc(100vh - 90px);overflow-y:auto;padding:0.5rem 0;width:100%}';
    html += '.nav-links .acc-cat{border-bottom:1px solid #eef2f7}';
    html += '.nav-links .acc-btn{width:100%;background:none;border:none;text-align:left;padding:0.85rem 1.2rem;font-size:0.95rem;font-weight:600;color:#0f3460;cursor:pointer;display:flex;align-items:center;gap:0.6rem;font-family:inherit}';
    html += '.nav-links .acc-btn:hover{background:#f5f7fa}';
    html += '.nav-links .acc-btn .arr{margin-left:auto;transition:transform 0.25s;font-size:0.8rem;color:#999}';
    html += '.nav-links .acc-cat.open .acc-btn .arr{transform:rotate(90deg)}';
    html += '.nav-links .acc-btn .ic{font-size:1.15rem}';
    html += '.nav-links .acc-body{max-height:0;overflow:hidden;transition:max-height 0.3s ease;background:#f8fafc}';
    html += '.nav-links .acc-cat.open .acc-body{max-height:1500px}';
    html += '.nav-links .acc-body a{display:block;padding:0.6rem 1.2rem 0.6rem 3rem;font-size:0.86rem;color:#333;text-decoration:none;border-bottom:1px solid #eef2f7}';
    html += '.nav-links .acc-body a:hover{background:#fff;color:#e94560;padding-left:3.2rem}';
    html += '.nav-links .acc-body a.active{color:#e94560;font-weight:600;background:#fff;border-left:3px solid #e94560}';
    html += '.nav-links .acc-search{padding:0.7rem 1.2rem;border-bottom:2px solid #e94560}';
    html += '.nav-links .acc-search input{width:100%;padding:0.6rem;border:1px solid #ddd;border-radius:20px;font-size:0.9rem;font-family:inherit}';
    html += '@media(min-width:769px){.nav-links .acc-wrap{max-height:80vh}}';
    html += '</style>';

    html += '<div class="acc-wrap">';
    html += '<div class="acc-search"><input type="text" id="accMenuSearch" placeholder="🔍 खोजें..." autocomplete="off"></div>';

    MENU_SECTIONS.forEach(function(section, idx) {
      var secId = 'acc-cat-' + idx;
      var hasActive = section.items.some(function(it) { return it.href === currentPath; });
      html += '<div class="acc-cat' + (hasActive ? ' open' : '') + '" id="' + secId + '">';
      html += '<button class="acc-btn" type="button" aria-expanded="' + (hasActive ? 'true' : 'false') + '">';
      html += '<span class="ic">' + section.icon + '</span>';
      html += '<span>' + section.title.replace(/^[^\s]+\s/, '') + '</span>';
      html += '<span class="arr">▶</span>';
      html += '</button>';
      html += '<div class="acc-body">';
      section.items.forEach(function(item) {
        var cls = item.href === currentPath ? ' class="active"' : '';
        html += '<a href="' + item.href + '"' + cls + ' data-label="' + item.label.toLowerCase() + '">' + item.label + '</a>';
      });
      html += '</div></div>';
    });

    html += '</div>';

    navLinks.innerHTML = html;

    navLinks.querySelectorAll('.acc-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        var cat = btn.parentElement;
        var wasOpen = cat.classList.contains('open');
        cat.classList.toggle('open', !wasOpen);
        btn.setAttribute('aria-expanded', !wasOpen ? 'true' : 'false');
      });
    });

    var search = document.getElementById('accMenuSearch');
    if (search) {
      search.addEventListener('input', function() {
        var q = this.value.toLowerCase().trim();
        navLinks.querySelectorAll('.acc-cat').forEach(function(cat) {
          var links = cat.querySelectorAll('.acc-body a');
          var anyVisible = false;
          links.forEach(function(a) {
            var match = !q || a.getAttribute('data-label').indexOf(q) !== -1;
            a.style.display = match ? '' : 'none';
            if (match) anyVisible = true;
          });
          if (q) {
            cat.style.display = anyVisible ? '' : 'none';
            if (anyVisible) cat.classList.add('open');
          } else {
            cat.style.display = '';
          }
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMenu);
  } else {
    buildMenu();
  }
})();
