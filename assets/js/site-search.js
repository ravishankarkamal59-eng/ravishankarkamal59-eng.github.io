// ===== Site-Wide Search System =====
(function() {
  'use strict';
  
  // ===== Search Index =====
  var SEARCH_INDEX = [
    // Home & Main pages
    { title: 'होम', url: 'index.html', keywords: 'home main page होम', icon: '🏠', category: 'मुख्य' },
    { title: 'सभी परीक्षाएँ', url: 'exams.html', keywords: 'exams all exams सभी परीक्षाएँ list', icon: '📚', category: 'मुख्य' },
    { title: 'Success Stories', url: 'success-stories.html', keywords: 'success stories topper selection rank प्रेरणा', icon: '🏆', category: 'मुख्य' },
    { title: 'Full Mock Tests', url: 'mock-tests.html', keywords: 'mock test full length practice timer', icon: '🎯', category: 'मुख्य' },
    { title: 'नोट्स PDF', url: 'notes.html', keywords: 'notes pdf hindi notes free notes नोट्स', icon: '📝', category: 'मुख्य' },
    { title: 'PYQ Papers', url: 'pyq.html', keywords: 'pyq previous year question papers old papers', icon: '📄', category: 'मुख्य' },
    { title: 'सिलेबस', url: 'syllabus.html', keywords: 'syllabus exam syllabus course', icon: '📖', category: 'मुख्य' },
    { title: 'करंट अफेयर्स', url: 'current-affairs.html', keywords: 'current affairs daily news करंट अफेयर्स', icon: '📰', category: 'मुख्य' },
    { title: 'क्विज़', url: 'quiz.html', keywords: 'quiz test practice questions क्विज़', icon: '🎯', category: 'मुख्य' },
    { title: 'Advanced Quiz', url: 'quiz-advanced.html', keywords: 'advanced quiz timer leaderboard level', icon: '🎯', category: 'मुख्य' },
    { title: 'Test Series', url: 'test-series.html', keywords: 'test series mock test practice', icon: '📊', category: 'मुख्य' },
    { title: 'Study Material', url: 'study-material.html', keywords: 'study material resources free', icon: '📚', category: 'मुख्य' },
    { title: 'Blog', url: 'blog.html', keywords: 'blog articles tips strategy', icon: '📝', category: 'मुख्य' },
    { title: 'FAQ', url: 'faq.html', keywords: 'faq questions answers help', icon: '❓', category: 'मुख्य' },
    { title: 'संपर्क', url: 'contact.html', keywords: 'contact whatsapp email help संपर्क', icon: '📞', category: 'मुख्य' },
    { title: 'हमारे बारे में', url: 'about.html', keywords: 'about us founder ravishankar', icon: 'ℹ️', category: 'मुख्य' },
    
    // Updates
    { title: 'Notifications', url: 'notifications.html', keywords: 'notifications alerts new vacancy notification', icon: '🔔', category: 'अपडेट' },
    { title: 'Exam Calendar', url: 'exam-calendar.html', keywords: 'exam calendar 2026 date schedule', icon: '📅', category: 'अपडेट' },
    { title: 'Admit Card', url: 'admit-card.html', keywords: 'admit card hall ticket download', icon: '🎫', category: 'अपडेट' },
    { title: 'Result', url: 'result.html', keywords: 'result merit list cut off selection', icon: '🏆', category: 'अपडेट' },
    { title: 'Answer Key', url: 'answer-key.html', keywords: 'answer key response sheet objection', icon: '✅', category: 'अपडेट' },
    { title: 'Scholarship', url: 'scholarship.html', keywords: 'scholarship financial aid नेशनल स्कॉलरशिप', icon: '🎓', category: 'अपडेट' },
    
    // Tools
    { title: 'AI सहायक', url: 'ai-chat.html', keywords: 'ai chat assistant help question answer सहायक', icon: '🤖', category: 'टूल्स' },
    { title: 'PDF Reader', url: 'pdf-viewer.html', keywords: 'pdf viewer read online notes', icon: '📄', category: 'टूल्स' },
    { title: 'Forum', url: 'forum.html', keywords: 'forum discussion doubt question reply', icon: '💬', category: 'टूल्स' },
    { title: 'Bookmarks', url: 'bookmarks.html', keywords: 'bookmarks saved pages', icon: '⭐', category: 'टूल्स' },
    { title: 'Dashboard', url: 'dashboard.html', keywords: 'dashboard progress streak', icon: '📊', category: 'टूल्स' },
    { title: 'लॉगिन', url: 'login.html', keywords: 'login signup register account', icon: '🔐', category: 'टूल्स' },
    
    // Central Exams
    { title: 'UPSC Civil Services', url: 'upsc.html', keywords: 'upsc ias ips ifs civil services सिविल सेवा संघ लोक सेवा', icon: '🏛️', category: 'परीक्षाएँ' },
    { title: 'BPSC', url: 'bpsc.html', keywords: 'bpsc bihar psc बिहार लोक सेवा आयोग 70th', icon: '📖', category: 'परीक्षाएँ' },
    { title: 'UPPCS', url: 'uppcs.html', keywords: 'uppcs up psc uppsc उत्तर प्रदेश लोक सेवा', icon: '🏛️', category: 'परीक्षाएँ' },
    { title: 'MPPSC', url: 'mppsc.html', keywords: 'mppsc mp psc मध्य प्रदेश लोक सेवा', icon: '🏞️', category: 'परीक्षाएँ' },
    { title: 'RAS Rajasthan', url: 'ras.html', keywords: 'ras rajasthan rpsc राजस्थान प्रशासनिक सेवा', icon: '🏰', category: 'परीक्षाएँ' },
    { title: 'JPSC Jharkhand', url: 'jpsc.html', keywords: 'jpsc jharkhand psc झारखंड लोक सेवा', icon: '🌾', category: 'परीक्षाएँ' },
    { title: 'UKPSC Uttarakhand', url: 'ukpsc.html', keywords: 'ukpsc uttarakhand psc उत्तराखंड लोक सेवा', icon: '🏔️', category: 'परीक्षाएँ' },
    
    // SSC
    { title: 'SSC CGL', url: 'ssc-cgl.html', keywords: 'ssc cgl combined graduate level tier 1 2', icon: '🎓', category: 'SSC' },
    { title: 'SSC CHSL', url: 'ssc-chsl.html', keywords: 'ssc chsl 10+2 ldc deo clerk', icon: '📝', category: 'SSC' },
    { title: 'SSC MTS', url: 'ssc-mts.html', keywords: 'ssc mts multi tasking staff', icon: '📋', category: 'SSC' },
    { title: 'SSC GD', url: 'ssc-gd.html', keywords: 'ssc gd constable capf bsf crpf cisf', icon: '💂', category: 'SSC' },
    
    // Railway & Banking
    { title: 'Railway (RRB)', url: 'railway.html', keywords: 'railway rrb ntpc group d alp je loco pilot', icon: '🚆', category: 'रेलवे' },
    { title: 'Banking', url: 'banking.html', keywords: 'banking ibps po clerk sbi rbi nabard', icon: '🏦', category: 'बैंकिंग' },
    
    // Defence
    { title: 'NDA / CDS', url: 'nda-cds.html', keywords: 'nda cds defence army navy air force ssb', icon: '🎖️', category: 'रक्षा' },
    
    // Police
    { title: 'बिहार पुलिस', url: 'bihar-police.html', keywords: 'bihar police constable बिहार पुलिस', icon: '👮', category: 'पुलिस' },
    { title: 'बिहार SI', url: 'bihar-si.html', keywords: 'bihar si sub inspector दरोगा बिहार', icon: '👮', category: 'पुलिस' },
    { title: 'UP Police', url: 'up-police.html', keywords: 'up police si constable fireman', icon: '🚔', category: 'पुलिस' },
    { title: 'PET', url: 'pet.html', keywords: 'pet physical test दौड़ running', icon: '🏃', category: 'पुलिस' },
    
    // Teaching
    { title: 'B.Ed', url: 'b-ed.html', keywords: 'bed b.ed teacher education शिक्षक', icon: '👨‍🏫', category: 'शिक्षक' },
    { title: 'CTET', url: 'ctet.html', keywords: 'ctet teacher eligibility kvs nvs', icon: '👨‍🏫', category: 'शिक्षक' },
    { title: 'UGC NET / JRF', url: 'ugc-net.html', keywords: 'ugc net jrf assistant professor paper 1 2', icon: '🎓', category: 'शिक्षक' },
    
    // UG & PG
    { title: 'JEE Mains', url: 'jee-mains.html', keywords: 'jee mains engineering iit nit iiit', icon: '⚙️', category: 'एंट्रेंस' },
    { title: 'NEET', url: 'neet.html', keywords: 'neet mbbs bds medical aiims', icon: '🩺', category: 'एंट्रेंस' },
    { title: 'GATE', url: 'gate.html', keywords: 'gate engineering m.tech psu iit', icon: '🎓', category: 'एंट्रेंस' },
    { title: 'BCA / MCA', url: 'bca-mca.html', keywords: 'bca mca computer software it', icon: '💻', category: 'एंट्रेंस' },
    { title: 'LLB / LLM', url: 'llb.html', keywords: 'llb llm law clat ailet advocate', icon: '⚖️', category: 'एंट्रेंस' },
    { title: 'CAT / MBA', url: 'cat-mba.html', keywords: 'cat mba management iim', icon: '💼', category: 'एंट्रेंस' },
    { title: 'Nursing', url: 'nursing.html', keywords: 'nursing bsc gnm anm aiims', icon: '🩺', category: 'एंट्रेंस' },
    { title: 'CUET', url: 'cuet.html', keywords: 'cuet ug pg university admission du bhu', icon: '🎓', category: 'एंट्रेंस' },
    { title: 'BA / MA', url: 'ba-ma.html', keywords: 'ba ma arts graduation hindi english history', icon: '🎓', category: 'डिग्री' },
    
    // Special
    { title: 'AGTA Agriculture', url: 'agta.html', keywords: 'agta agriculture krishi pravidaik sahayak', icon: '🌾', category: 'विशेष' },
    { title: 'UP लेखपाल', url: 'up-lekhpal.html', keywords: 'lekhpal up लेखपाल upsssc', icon: '📋', category: 'विशेष' },
    
    // BA Subjects
    { title: 'BA हिंदी', url: 'ba-hindi.html', keywords: 'ba hindi sahitya हिंदी साहित्य', icon: '📖', category: 'BA विषय' },
    { title: 'BA English', url: 'ba-english.html', keywords: 'ba english literature grammar', icon: '🇬🇧', category: 'BA विषय' },
    { title: 'BA इतिहास', url: 'ba-history.html', keywords: 'ba history इतिहास', icon: '📜', category: 'BA विषय' },
    { title: 'BA राजनीति शास्त्र', url: 'ba-polity.html', keywords: 'ba polity political science राजनीति', icon: '🏛️', category: 'BA विषय' },
    { title: 'BA अर्थशास्त्र', url: 'ba-economics.html', keywords: 'ba economics अर्थशास्त्र', icon: '💰', category: 'BA विषय' },
    { title: 'BA समाजशास्त्र', url: 'ba-sociology.html', keywords: 'ba sociology समाजशास्त्र', icon: '👥', category: 'BA विषय' },
    { title: 'BA मनोविज्ञान', url: 'ba-psychology.html', keywords: 'ba psychology मनोविज्ञान', icon: '🧠', category: 'BA विषय' },
    { title: 'BA भूगोल', url: 'ba-geography.html', keywords: 'ba geography भूगोल', icon: '🌍', category: 'BA विषय' },
    { title: 'BA संस्कृत', url: 'ba-sanskrit.html', keywords: 'ba sanskrit संस्कृत', icon: '🕉️', category: 'BA विषय' },
    { title: 'BA उर्दू', url: 'ba-urdu.html', keywords: 'ba urdu उर्दू', icon: '🕌', category: 'BA विषय' },
    { title: 'BA फाइन आर्ट्स', url: 'ba-finearts.html', keywords: 'ba fine arts painting चित्रकला', icon: '🎨', category: 'BA विषय' },
    { title: 'BA पत्रकारिता', url: 'ba-journalism.html', keywords: 'ba journalism पत्रकारिता media', icon: '📰', category: 'BA विषय' },
    
    // MA Subjects
    { title: 'MA हिंदी', url: 'ma-hindi.html', keywords: 'ma hindi sahitya', icon: '📖', category: 'MA विषय' },
    { title: 'MA English', url: 'ma-english.html', keywords: 'ma english literature', icon: '🇬🇧', category: 'MA विषय' },
    { title: 'MA इतिहास', url: 'ma-history.html', keywords: 'ma history इतिहास', icon: '📜', category: 'MA विषय' },
    { title: 'MA राजनीति शास्त्र', url: 'ma-polity.html', keywords: 'ma polity political science', icon: '🏛️', category: 'MA विषय' },
    { title: 'MA अर्थशास्त्र', url: 'ma-economics.html', keywords: 'ma economics', icon: '💰', category: 'MA विषय' },
    { title: 'MA समाजशास्त्र', url: 'ma-sociology.html', keywords: 'ma sociology', icon: '👥', category: 'MA विषय' },
    { title: 'MA मनोविज्ञान', url: 'ma-psychology.html', keywords: 'ma psychology', icon: '🧠', category: 'MA विषय' },
    { title: 'MA भूगोल', url: 'ma-geography.html', keywords: 'ma geography', icon: '🌍', category: 'MA विषय' },
    
    // UGC NET Subjects
    { title: 'UGC NET Paper 1', url: 'net-paper1.html', keywords: 'net paper 1 general teaching aptitude research', icon: '📚', category: 'UGC NET' },
    { title: 'NET हिंदी', url: 'net-hindi.html', keywords: 'net hindi sahitya', icon: '📖', category: 'UGC NET' },
    { title: 'NET English', url: 'net-english.html', keywords: 'net english literature', icon: '🇬🇧', category: 'UGC NET' },
    { title: 'NET इतिहास', url: 'net-history.html', keywords: 'net history', icon: '📜', category: 'UGC NET' },
    { title: 'NET राजनीति', url: 'net-polity.html', keywords: 'net polity', icon: '🏛️', category: 'UGC NET' },
    { title: 'NET अर्थशास्त्र', url: 'net-economics.html', keywords: 'net economics', icon: '💰', category: 'UGC NET' },
    { title: 'NET समाजशास्त्र', url: 'net-sociology.html', keywords: 'net sociology', icon: '👥', category: 'UGC NET' },
    { title: 'NET मनोविज्ञान', url: 'net-psychology.html', keywords: 'net psychology', icon: '🧠', category: 'UGC NET' },
    { title: 'NET भूगोल', url: 'net-geography.html', keywords: 'net geography', icon: '🌍', category: 'UGC NET' },
    { title: 'NET Education', url: 'net-education.html', keywords: 'net education', icon: '👨‍🏫', category: 'UGC NET' },
    { title: 'NET Commerce', url: 'net-commerce.html', keywords: 'net commerce accounting', icon: '📊', category: 'UGC NET' },
    { title: 'NET Philosophy', url: 'net-philosophy.html', keywords: 'net philosophy दर्शन', icon: '🕉️', category: 'UGC NET' },
    { title: 'NET संस्कृत', url: 'net-sanskrit.html', keywords: 'net sanskrit', icon: '📜', category: 'UGC NET' },
    
    // UPSC Papers
    { title: 'UPSC Prelims GS Paper 1', url: 'upsc-prelims-gs1.html', keywords: 'upsc prelims gs general studies paper 1', icon: '📘', category: 'UPSC Papers' },
    { title: 'UPSC Prelims CSAT', url: 'upsc-prelims-csat.html', keywords: 'upsc prelims csat paper 2 aptitude', icon: '🧮', category: 'UPSC Papers' },
    { title: 'UPSC Mains Essay', url: 'upsc-mains-essay.html', keywords: 'upsc mains essay निबंध', icon: '✍️', category: 'UPSC Papers' },
    { title: 'UPSC Mains GS1', url: 'upsc-mains-gs1.html', keywords: 'upsc mains gs1 history culture geography', icon: '📜', category: 'UPSC Papers' },
    { title: 'UPSC Mains GS2', url: 'upsc-mains-gs2.html', keywords: 'upsc mains gs2 polity governance ir', icon: '🏛️', category: 'UPSC Papers' },
    { title: 'UPSC Mains GS3', url: 'upsc-mains-gs3.html', keywords: 'upsc mains gs3 economy science environment', icon: '💰', category: 'UPSC Papers' },
    { title: 'UPSC Mains GS4 Ethics', url: 'upsc-mains-gs4.html', keywords: 'upsc mains gs4 ethics integrity case study', icon: '🎭', category: 'UPSC Papers' },
    
    // UPPCS Papers
    { title: 'UPPCS Prelims GS', url: 'uppcs-prelims-gs.html', keywords: 'uppcs prelims general studies', icon: '📘', category: 'UPPCS Papers' },
    { title: 'UPPCS Prelims CSAT', url: 'uppcs-prelims-csat.html', keywords: 'uppcs prelims csat aptitude', icon: '🧮', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains हिंदी', url: 'uppcs-mains-hindi.html', keywords: 'uppcs mains general hindi', icon: '🇮🇳', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains निबंध', url: 'uppcs-mains-essay.html', keywords: 'uppcs mains essay निबंध', icon: '✍️', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS1', url: 'uppcs-mains-gs1.html', keywords: 'uppcs mains gs1', icon: '📜', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS2', url: 'uppcs-mains-gs2.html', keywords: 'uppcs mains gs2', icon: '🏛️', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS3', url: 'uppcs-mains-gs3.html', keywords: 'uppcs mains gs3', icon: '💰', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS4', url: 'uppcs-mains-gs4.html', keywords: 'uppcs mains gs4 ethics', icon: '🎭', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS5 (UP Special)', url: 'uppcs-mains-gs5.html', keywords: 'uppcs mains gs5 up special history culture', icon: '⭐', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS6 (UP Special)', url: 'uppcs-mains-gs6.html', keywords: 'uppcs mains gs6 up special agriculture', icon: '🌾', category: 'UPPCS Papers' },
    
    // Notes Categories
    { title: 'Notes: भारतीय इतिहास', url: 'notes.html#notes-history', keywords: 'notes history इतिहास प्राचीन मध्यकालीन', icon: '📜', category: 'नोट्स' },
    { title: 'Notes: भूगोल', url: 'notes.html#notes-geography', keywords: 'notes geography भूगोल maps', icon: '🌍', category: 'नोट्स' },
    { title: 'Notes: राजनीति', url: 'notes.html#notes-polity', keywords: 'notes polity राजनीति संविधान', icon: '🏛️', category: 'नोट्स' },
    { title: 'Notes: अर्थशास्त्र', url: 'notes.html#notes-economics', keywords: 'notes economics अर्थशास्त्र budget', icon: '💰', category: 'नोट्स' },
    { title: 'Notes: विज्ञान', url: 'notes.html#notes-science', keywords: 'notes science विज्ञान physics chemistry', icon: '🔬', category: 'नोट्स' },
    { title: 'Notes: पर्यावरण', url: 'notes.html#notes-environment', keywords: 'notes environment पर्यावरण ecology', icon: '🌱', category: 'नोट्स' },
    { title: 'Notes: अंकगणित', url: 'notes.html#notes-maths', keywords: 'notes maths अंकगणित arithmetic', icon: '➕', category: 'नोट्स' },
    { title: 'Notes: उन्नत गणित', url: 'notes.html#notes-adv-maths', keywords: 'notes advanced maths', icon: '📐', category: 'नोट्स' },
    { title: 'Notes: रीजनिंग', url: 'notes.html#notes-reasoning', keywords: 'notes reasoning रीजनिंग', icon: '🧩', category: 'नोट्स' },
    { title: 'Notes: हिंदी व्याकरण', url: 'notes.html#notes-hindi', keywords: 'notes hindi व्याकरण grammar', icon: '📖', category: 'नोट्स' },
    { title: 'Notes: English Grammar', url: 'notes.html#notes-english', keywords: 'notes english grammar tense voice', icon: '🇬🇧', category: 'नोट्स' },
    { title: 'Notes: निबंध', url: 'notes.html#notes-essay', keywords: 'notes essay निबंध writing', icon: '📝', category: 'नोट्स' },
    
    // Current Affairs Categories
    { title: 'करंट अफेयर्स: राष्ट्रीय', url: 'current-national.html', keywords: 'national current affairs राष्ट्रीय news', icon: '🇮🇳', category: 'करंट अफेयर्स' },
    { title: 'करंट अफेयर्स: अंतर्राष्ट्रीय', url: 'current-international.html', keywords: 'international current affairs अंतर्राष्ट्रीय world', icon: '🌏', category: 'करंट अफेयर्स' },
    { title: 'करंट अफेयर्स: खेल', url: 'current-sports.html', keywords: 'sports current affairs खेल cricket olympics', icon: '🏏', category: 'करंट अफेयर्स' },
    { title: 'करंट अफेयर्स: विज्ञान', url: 'current-science.html', keywords: 'science current affairs विज्ञान isro drdo', icon: '🔬', category: 'करंट अफेयर्स' },
    { title: 'करंट अफेयर्स: अर्थव्यवस्था', url: 'current-economy.html', keywords: 'economy current affairs अर्थव्यवस्था gdp budget', icon: '💰', category: 'करंट अफेयर्स' },
    { title: 'करंट अफेयर्स: कला-संस्कृति', url: 'current-culture.html', keywords: 'culture current affairs कला संस्कृति awards', icon: '🎬', category: 'करंट अफेयर्स' }
  ];
  
  // ===== Create Search Bar =====
  function createSearchBar() {
    // अगर पहले से है तो skip
    if (document.getElementById('siteSearchBar')) return;
    
    // Search bar HTML
    var searchHTML = 
      '<div id="siteSearchBar" style="position:sticky;top:60px;z-index:100;background:#fff;padding:0.5rem 1rem;box-shadow:0 2px 12px rgba(0,0,0,0.08);display:flex;align-items:center;gap:0.5rem;max-width:100%;">' +
        '<div style="flex:1;max-width:900px;margin:0 auto;display:flex;align-items:center;gap:0.5rem;background:#f5f7fa;border-radius:25px;padding:0.4rem 1rem;border:2px solid #e0e6ed;transition:all 0.3s" id="searchBarContainer">' +
          '<span style="font-size:1.1rem">🔍</span>' +
          '<input id="siteSearchInput" type="text" placeholder="खोजें: UPSC, नोट्स, करंट अफेयर्स, AI..." style="flex:1;border:none;background:transparent;outline:none;font-size:0.95rem;font-family:inherit;padding:0.4rem 0;color:#333" autocomplete="off">' +
          '<span id="searchClearBtn" style="cursor:pointer;display:none;color:#888;font-size:1.2rem">×</span>' +
        '</div>' +
      '</div>' +
      '<div id="siteSearchResults" style="display:none;position:fixed;top:120px;left:50%;transform:translateX(-50%);width:90%;max-width:700px;background:#fff;border-radius:14px;box-shadow:0 10px 40px rgba(0,0,0,0.2);z-index:9999;max-height:70vh;overflow-y:auto"></div>';
    
    // Header के बाद insert करें
    var header = document.querySelector('header');
    if (header && header.parentNode) {
      var temp = document.createElement('div');
      temp.innerHTML = searchHTML;
      var searchBar = temp.firstChild;
      header.parentNode.insertBefore(searchBar, header.nextSibling);
    }
    
    // Event listeners
    var input = document.getElementById('siteSearchInput');
    var results = document.getElementById('siteSearchResults');
    var clearBtn = document.getElementById('searchClearBtn');
    var container = document.getElementById('searchBarContainer');
    
    if (!input || !results) return;
    
    // Focus effect
    input.addEventListener('focus', function() {
      container.style.borderColor = '#e94560';
      container.style.background = '#fff';
    });
    
    input.addEventListener('blur', function() {
      setTimeout(function() {
        container.style.borderColor = '#e0e6ed';
        container.style.background = '#f5f7fa';
      }, 200);
    });
    
    // Search on input
    input.addEventListener('input', function() {
      var q = this.value.trim().toLowerCase();
      
      if (q.length > 0) {
        clearBtn.style.display = 'block';
      } else {
        clearBtn.style.display = 'none';
        results.style.display = 'none';
        return;
      }
      
      if (q.length < 2) {
        results.style.display = 'none';
        return;
      }
      
      performSearch(q);
    });
    
    // Clear button
    clearBtn.onclick = function() {
      input.value = '';
      input.focus();
      results.style.display = 'none';
      clearBtn.style.display = 'none';
    };
    
    // ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        results.style.display = 'none';
        input.blur();
      }
      // Ctrl+K shortcut
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        input.focus();
      }
    });
    
    // Outside click
    document.addEventListener('click', function(e) {
      if (!e.target.closest('#siteSearchBar') && !e.target.closest('#siteSearchResults')) {
        results.style.display = 'none';
      }
    });
  }
  
  // ===== Perform Search =====
  function performSearch(query) {
    var results = document.getElementById('siteSearchResults');
    if (!results) return;
    
    // Search करें
    var matches = SEARCH_INDEX.filter(function(item) {
      var title = item.title.toLowerCase();
      var keywords = item.keywords.toLowerCase();
      var category = item.category.toLowerCase();
      
      // Exact match
      if (title.indexOf(query) > -1) return true;
      if (keywords.indexOf(query) > -1) return true;
      if (category.indexOf(query) > -1) return true;
      
      // Fuzzy - हर word separately check करें
      var queryWords = query.split(/\s+/);
      var allFound = queryWords.every(function(w) {
        return title.indexOf(w) > -1 || keywords.indexOf(w) > -1;
      });
      
      return allFound;
    });
    
    // Relevance score के हिसाब से sort करें
    matches.sort(function(a, b) {
      var aScore = 0, bScore = 0;
      if (a.title.toLowerCase().indexOf(query) > -1) aScore += 10;
      if (b.title.toLowerCase().indexOf(query) > -1) bScore += 10;
      if (a.title.toLowerCase().startsWith(query)) aScore += 20;
      if (b.title.toLowerCase().startsWith(query)) bScore += 20;
      return bScore - aScore;
    });
    
    // Limit 15
    matches = matches.slice(0, 15);
    
    // Render
    if (matches.length === 0) {
      results.innerHTML = 
        '<div style="padding:2rem;text-align:center;color:#888">' +
          '<div style="font-size:3rem;margin-bottom:0.5rem">🔍</div>' +
          '<p>कोई परिणाम नहीं मिला</p>' +
          '<p style="font-size:0.85rem;margin-top:0.5rem">आपने खोजा: <strong>' + query + '</strong></p>' +
          '<p style="font-size:0.8rem;margin-top:1rem">कोई और keyword try करें</p>' +
        '</div>';
      results.style.display = 'block';
      return;
    }
    
    // Group by category
    var grouped = {};
    matches.forEach(function(m) {
      if (!grouped[m.category]) grouped[m.category] = [];
      grouped[m.category].push(m);
    });
    
    var html = '<div style="padding:0.5rem">';
    html += '<div style="padding:0.7rem 1rem;color:#888;font-size:0.82rem;border-bottom:1px solid #f0f4f8">' + matches.length + ' परिणाम मिले — <strong>' + query + '</strong></div>';
    
    for (var cat in grouped) {
      html += '<div style="padding:0.5rem 1rem;color:#0f3460;font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;background:#f8fafc">' + cat + '</div>';
      grouped[cat].forEach(function(item) {
        html += '<a href="' + item.url + '" style="display:flex;align-items:center;gap:0.7rem;padding:0.7rem 1rem;text-decoration:none;color:#333;border-bottom:1px solid #f8fafc;transition:background 0.15s" onmouseover="this.style.background=\'#f5f7fa\'" onmouseout="this.style.background=\'#fff\'">';
        html += '<span style="font-size:1.3rem;flex-shrink:0">' + item.icon + '</span>';
        html += '<span style="flex:1">' + highlightMatch(item.title, query) + '</span>';
        html += '<span style="color:#e94560;font-size:1rem">→</span>';
        html += '</a>';
      });
    }
    
    html += '</div>';
    results.innerHTML = html;
    results.style.display = 'block';
  }
  
  // Highlight matching text
  function highlightMatch(text, query) {
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var regex = new RegExp('(' + escaped + ')', 'gi');
    return text.replace(regex, '<mark style="background:#fff3cd;color:#856404;padding:0.1rem 0.2rem;border-radius:3px">$1</mark>');
  }
  
  // ===== Init =====
  function init() {
    // सिर्फ content pages पर दिखाएँ (admin, login पर नहीं)
    var skipPages = ['admin.html', 'login.html'];
    var currentPage = location.pathname.split('/').pop() || 'index.html';
    if (skipPages.indexOf(currentPage) > -1) return;
    
    createSearchBar();
    console.log('✅ Site Search initialized - ' + SEARCH_INDEX.length + ' items indexed');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Expose for debugging
  window.SEARCH_INDEX = SEARCH_INDEX;
  window.performSiteSearch = performSearch;
})();
