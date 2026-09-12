// ===== Full Menu Builder =====
// Menu में सभी exams और important links जोड़ता है
(function() {
  
  var MENU_SECTIONS = [
    {
      title: '🏠 Main',
      items: [
        { href: 'index.html', label: '🏠 होम' },
        { href: 'exams.html', label: '📚 सभी परीक्षाएँ' },
        { href: 'syllabus.html', label: '📖 सिलेबस' },
        { href: 'pyq.html', label: '📄 PYQ Papers' },
        { href: 'notes.html', label: '📝 नोट्स' },
        { href: 'current-affairs.html', label: '📰 करंट अफेयर्स' },
        { href: 'quiz.html', label: '🎯 क्विज़' },
        { href: 'quiz-advanced.html', label: '🎯 Advanced Quiz' },
        { href: 'test-series.html', label: '📊 टेस्ट सीरीज़' },
        { href: 'study-material.html', label: '📚 स्टडी मटेरियल' }
      ]
    },
    {
      title: '📅 Updates',
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
      title: '🏛️ Central Exams',
      items: [
        { href: 'upsc.html', label: 'UPSC Civil Services' },
        { href: 'bpsc.html', label: 'BPSC' },
        { href: 'uppcs.html', label: 'UPPCS PCS' },
        { href: 'mppsc.html', label: 'MPPSC' },
        { href: 'ras.html', label: 'RAS Rajasthan' },
        { href: 'jpsc.html', label: 'JPSC Jharkhand' },
        { href: 'ukpsc.html', label: 'UKPSC Uttarakhand' }
      ]
    },
    {
      title: '🎓 SSC & Railway',
      items: [
        { href: 'ssc-cgl.html', label: 'SSC CGL' },
        { href: 'ssc-chsl.html', label: 'SSC CHSL' },
        { href: 'ssc-mts.html', label: 'SSC MTS' },
        { href: 'ssc-gd.html', label: 'SSC GD Constable' },
        { href: 'railway.html', label: 'Railway (RRB)' }
      ]
    },
    {
      title: '💰 Banking & Defence',
      items: [
        { href: 'banking.html', label: 'Banking (IBPS/SBI)' },
        { href: 'nda-cds.html', label: 'NDA / CDS' }
      ]
    },
    {
      title: '👮 Police & PET',
      items: [
        { href: 'bihar-police.html', label: 'बिहार पुलिस' },
        { href: 'bihar-si.html', label: 'बिहार SI' },
        { href: 'up-police.html', label: 'UP Police' },
        { href: 'pet.html', label: 'PET (Physical Test)' }
      ]
    },
    {
      title: '👨‍🏫 Teaching',
      items: [
        { href: 'b-ed.html', label: 'B.Ed' },
        { href: 'ctet.html', label: 'CTET' },
        { href: 'ugc-net.html', label: 'UGC NET / JRF' }
      ]
    },
    {
      title: '🎓 UG & PG Courses',
      items: [
        { href: 'ba-ma.html', label: 'BA / MA' },
        { href: 'jee-mains.html', label: 'JEE Mains' },
        { href: 'neet.html', label: 'NEET' },
        { href: 'gate.html', label: 'GATE' },
        { href: 'llb.html', label: 'LLB / LLM' },
        { href: 'cat-mba.html', label: 'CAT / MBA' },
        { href: 'bca-mca.html', label: 'BCA / MCA' },
        { href: 'nursing.html', label: 'Nursing' },
        { href: 'cuet.html', label: 'CUET' }
      ]
    },
    {
      title: '🌾 Special',
      items: [
        { href: 'agta.html', label: 'AGTA (Agriculture)' },
        { href: 'up-lekhpal.html', label: 'UP लेखपाल' }
      ]
    },
    {
      title: '🛠️ Tools',
      items: [
        { href: 'ai-chat.html', label: '🤖 AI सहायक' },
        { href: 'pdf-viewer.html', label: '📄 PDF Reader' },
        { href: 'forum.html', label: '💬 Forum' },
        { href: 'bookmarks.html', label: '⭐ Bookmarks' },
        { href: 'dashboard.html', label: '📊 Dashboard' }
      ]
    },
    {
      title: '📄 Other',
      items: [
        { href: 'blog.html', label: '📝 Blog' },
        { href: 'faq.html', label: '❓ FAQ' },
        { href: 'about.html', label: 'ℹ️ हमारे बारे में' },
        { href: 'contact.html', label: '📞 संपर्क' }
      ]
    }
  ];
  
  function buildMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    
    var currentPath = location.pathname.split('/').pop() || 'index.html';
    
    var html = '';
    MENU_SECTIONS.forEach(function(section) {
      html += '<li style="list-style:none;margin:0.5rem 0 0.3rem">';
      html += '<div style="padding:0.5rem 1rem;color:#ffd700;font-weight:700;font-size:0.78rem;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid rgba(255,215,0,0.2)">' + section.title + '</div>';
      html += '<ul style="list-style:none;padding:0;margin:0">';
      section.items.forEach(function(item) {
        var isActive = currentPath === item.href;
        html += '<li style="list-style:none">';
        html += '<a href="' + item.href + '" style="display:block;padding:0.55rem 1.2rem;color:' + (isActive ? '#ffd700' : '#fff') + ';text-decoration:none;font-size:0.88rem;' + (isActive ? 'background:rgba(255,215,0,0.1);font-weight:600;' : '') + 'border-bottom:1px solid rgba(255,255,255,0.05)">' + item.label + '</a>';
        html += '</li>';
      });
      html += '</ul></li>';
    });
    
    navLinks.innerHTML = html;
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildMenu);
  } else {
    buildMenu();
  }
})();
