// ===== Site-Wide Search System v2 =====
(function() {
  'use strict';
  
  var SEARCH_INDEX = [
    // ===== Main Pages =====
    { title: 'होम', url: 'index.html', keywords: 'home main page होम मुख्यपृष्ठ', icon: '🏠', category: 'मुख्य पेज' },
    { title: 'सभी परीक्षाएँ', url: 'exams.html', keywords: 'exams all exams सभी परीक्षाएँ list', icon: '📚', category: 'मुख्य पेज' },
    { title: 'Success Stories', url: 'success-stories.html', keywords: 'success stories topper selection rank प्रेरणा motivation', icon: '🏆', category: 'मुख्य पेज' },
    { title: 'Full Mock Tests', url: 'mock-tests.html', keywords: 'mock test full length practice timer exam', icon: '🎯', category: 'मुख्य पेज' },
    { title: 'नोट्स PDF', url: 'notes.html', keywords: 'notes pdf hindi notes free notes नोट्स', icon: '📝', category: 'मुख्य पेज' },
    { title: 'PYQ Papers', url: 'pyq.html', keywords: 'pyq previous year question papers old papers', icon: '📄', category: 'मुख्य पेज' },
    { title: 'सिलेबस', url: 'syllabus.html', keywords: 'syllabus exam syllabus course पाठ्यक्रम', icon: '📖', category: 'मुख्य पेज' },
    { title: 'करंट अफेयर्स', url: 'current-affairs.html', keywords: 'current affairs daily news करंट अफेयर्स समसामयिक', icon: '📰', category: 'मुख्य पेज' },
    { title: 'क्विज़', url: 'quiz.html', keywords: 'quiz test practice questions क्विज़ प्रश्न', icon: '🎯', category: 'मुख्य पेज' },
    { title: 'Advanced Quiz', url: 'quiz-advanced.html', keywords: 'advanced quiz timer leaderboard level practice', icon: '🎯', category: 'मुख्य पेज' },
    { title: 'Test Series', url: 'test-series.html', keywords: 'test series mock test practice series', icon: '📊', category: 'मुख्य पेज' },
    { title: 'Study Material', url: 'study-material.html', keywords: 'study material resources free notes', icon: '📚', category: 'मुख्य पेज' },
    { title: 'Blog', url: 'blog.html', keywords: 'blog articles tips strategy ब्लॉग', icon: '📝', category: 'मुख्य पेज' },
    { title: 'FAQ', url: 'faq.html', keywords: 'faq questions answers help सवाल', icon: '❓', category: 'मुख्य पेज' },
    { title: 'संपर्क', url: 'contact.html', keywords: 'contact whatsapp email help संपर्क', icon: '📞', category: 'मुख्य पेज' },
    { title: 'हमारे बारे में', url: 'about.html', keywords: 'about us founder ravishankar परिचय', icon: 'ℹ️', category: 'मुख्य पेज' },
    
    // ===== Updates =====
    { title: 'Notifications', url: 'notifications.html', keywords: 'notifications alerts new vacancy notification सूचना', icon: '🔔', category: 'अपडेट' },
    { title: 'Exam Calendar', url: 'exam-calendar.html', keywords: 'exam calendar 2026 date schedule कैलेंडर', icon: '📅', category: 'अपडेट' },
    { title: 'Admit Card', url: 'admit-card.html', keywords: 'admit card hall ticket download प्रवेश पत्र', icon: '🎫', category: 'अपडेट' },
    { title: 'Result', url: 'result.html', keywords: 'result merit list cut off selection परिणाम', icon: '🏆', category: 'अपडेट' },
    { title: 'Answer Key', url: 'answer-key.html', keywords: 'answer key response sheet objection उत्तर कुंजी', icon: '✅', category: 'अपडेट' },
    { title: 'Scholarship', url: 'scholarship.html', keywords: 'scholarship financial aid छात्रवृत्ति', icon: '🎓', category: 'अपडेट' },
    
    // ===== Tools =====
    { title: 'AI सहायक', url: 'ai-chat.html', keywords: 'ai chat assistant help question answer सहायक', icon: '🤖', category: 'टूल्स' },
    { title: 'PDF Reader', url: 'pdf-viewer.html', keywords: 'pdf viewer read online notes पढ़ें', icon: '📄', category: 'टूल्स' },
    { title: 'Forum', url: 'forum.html', keywords: 'forum discussion doubt question reply चर्चा', icon: '💬', category: 'टूल्स' },
    { title: 'Bookmarks', url: 'bookmarks.html', keywords: 'bookmarks saved pages बुकमार्क', icon: '⭐', category: 'टूल्स' },
    { title: 'Dashboard', url: 'dashboard.html', keywords: 'dashboard progress streak डैशबोर्ड', icon: '📊', category: 'टूल्स' },
    { title: 'लॉगिन', url: 'login.html', keywords: 'login signup register account', icon: '🔐', category: 'टूल्स' },
    
    // ===== Central Exams =====
    { title: 'UPSC Civil Services', url: 'upsc.html', keywords: 'upsc ias ips ifs civil services सिविल सेवा संघ लोक सेवा', icon: '🏛️', category: 'केंद्रीय परीक्षा' },
    { title: 'BPSC', url: 'bpsc.html', keywords: 'bpsc bihar psc बिहार लोक सेवा आयोग 70th 68th', icon: '📖', category: 'केंद्रीय परीक्षा' },
    { title: 'UPPCS', url: 'uppcs.html', keywords: 'uppcs up psc uppsc उत्तर प्रदेश लोक सेवा', icon: '🏛️', category: 'केंद्रीय परीक्षा' },
    { title: 'MPPSC', url: 'mppsc.html', keywords: 'mppsc mp psc मध्य प्रदेश लोक सेवा', icon: '🏞️', category: 'केंद्रीय परीक्षा' },
    { title: 'RAS Rajasthan', url: 'ras.html', keywords: 'ras rajasthan rpsc राजस्थान प्रशासनिक सेवा', icon: '🏰', category: 'केंद्रीय परीक्षा' },
    { title: 'JPSC Jharkhand', url: 'jpsc.html', keywords: 'jpsc jharkhand psc झारखंड लोक सेवा', icon: '🌾', category: 'केंद्रीय परीक्षा' },
    { title: 'UKPSC Uttarakhand', url: 'ukpsc.html', keywords: 'ukpsc uttarakhand psc उत्तराखंड लोक सेवा', icon: '🏔️', category: 'केंद्रीय परीक्षा' },
    
    // ===== SSC =====
    { title: 'SSC CGL', url: 'ssc-cgl.html', keywords: 'ssc cgl combined graduate level tier 1 2', icon: '🎓', category: 'SSC' },
    { title: 'SSC CHSL', url: 'ssc-chsl.html', keywords: 'ssc chsl 10+2 ldc deo clerk', icon: '📝', category: 'SSC' },
    { title: 'SSC MTS', url: 'ssc-mts.html', keywords: 'ssc mts multi tasking staff', icon: '📋', category: 'SSC' },
    { title: 'SSC GD', url: 'ssc-gd.html', keywords: 'ssc gd constable capf bsf crpf cisf', icon: '💂', category: 'SSC' },
    
    // ===== Railway & Banking =====
    { title: 'Railway (RRB)', url: 'railway.html', keywords: 'railway rrb ntpc group d alp je loco pilot रेलवे', icon: '🚆', category: 'रेलवे और बैंकिंग' },
    { title: 'Banking', url: 'banking.html', keywords: 'banking ibps po clerk sbi rbi nabard बैंकिंग', icon: '🏦', category: 'रेलवे और बैंकिंग' },
    
    // ===== Defence =====
    { title: 'NDA / CDS', url: 'nda-cds.html', keywords: 'nda cds defence army navy air force ssb रक्षा', icon: '🎖️', category: 'रक्षा' },
    
    // ===== Police =====
    { title: 'बिहार पुलिस', url: 'bihar-police.html', keywords: 'bihar police constable बिहार पुलिस', icon: '👮', category: 'पुलिस' },
    { title: 'बिहार SI', url: 'bihar-si.html', keywords: 'bihar si sub inspector दरोगा बिहार', icon: '👮', category: 'पुलिस' },
    { title: 'UP Police', url: 'up-police.html', keywords: 'up police si constable fireman jail warder', icon: '🚔', category: 'पुलिस' },
    { title: 'PET Physical Test', url: 'pet.html', keywords: 'pet physical test दौड़ running fitness', icon: '🏃', category: 'पुलिस' },
    
    // ===== Teaching =====
    { title: 'B.Ed', url: 'b-ed.html', keywords: 'bed b.ed teacher education शिक्षक शिक्षा', icon: '👨‍🏫', category: 'शिक्षक' },
    { title: 'CTET', url: 'ctet.html', keywords: 'ctet teacher eligibility kvs nvs paper 1 2', icon: '👨‍🏫', category: 'शिक्षक' },
    { title: 'UGC NET / JRF', url: 'ugc-net.html', keywords: 'ugc net jrf assistant professor paper 1 2', icon: '🎓', category: 'शिक्षक' },
    
    // ===== UG & PG =====
    { title: 'JEE Mains', url: 'jee-mains.html', keywords: 'jee mains engineering iit nit iiit entrance', icon: '⚙️', category: 'एंट्रेंस एग्जाम' },
    { title: 'NEET', url: 'neet.html', keywords: 'neet mbbs bds medical aiims nursing', icon: '🩺', category: 'एंट्रेंस एग्जाम' },
    { title: 'GATE', url: 'gate.html', keywords: 'gate engineering m.tech psu iit research', icon: '🎓', category: 'एंट्रेंस एग्जाम' },
    { title: 'BCA / MCA', url: 'bca-mca.html', keywords: 'bca mca computer software it programming', icon: '💻', category: 'एंट्रेंस एग्जाम' },
    { title: 'LLB / LLM', url: 'llb.html', keywords: 'llb llm law clat ailet advocate वकील', icon: '⚖️', category: 'एंट्रेंस एग्जाम' },
    { title: 'CAT / MBA', url: 'cat-mba.html', keywords: 'cat mba management iim business', icon: '💼', category: 'एंट्रेंस एग्जाम' },
    { title: 'Nursing', url: 'nursing.html', keywords: 'nursing bsc gnm anm aiims nurse', icon: '🩺', category: 'एंट्रेंस एग्जाम' },
    { title: 'CUET', url: 'cuet.html', keywords: 'cuet ug pg university admission du bhu jnu', icon: '🎓', category: 'एंट्रेंस एग्जाम' },
    { title: 'BA / MA', url: 'ba-ma.html', keywords: 'ba ma arts graduation hindi english history', icon: '🎓', category: 'डिग्री कोर्स' },
    
    // ===== Special =====
    { title: 'AGTA Agriculture', url: 'agta.html', keywords: 'agta agriculture krishi pravidaik sahayak कृषि', icon: '🌾', category: 'विशेष परीक्षा' },
    { title: 'UP लेखपाल', url: 'up-lekhpal.html', keywords: 'lekhpal up लेखपाल upsssc राजस्व', icon: '📋', category: 'विशेष परीक्षा' },
    
    // ===== BA Subjects =====
    { title: 'BA हिंदी', url: 'ba-hindi.html', keywords: 'ba hindi sahitya हिंदी साहित्य', icon: '📖', category: 'BA विषय' },
    { title: 'BA English', url: 'ba-english.html', keywords: 'ba english literature grammar', icon: '🇬🇧', category: 'BA विषय' },
    { title: 'BA इतिहास', url: 'ba-history.html', keywords: 'ba history इतिहास प्राचीन', icon: '📜', category: 'BA विषय' },
    { title: 'BA राजनीति शास्त्र', url: 'ba-polity.html', keywords: 'ba polity political science राजनीति विज्ञान', icon: '🏛️', category: 'BA विषय' },
    { title: 'BA अर्थशास्त्र', url: 'ba-economics.html', keywords: 'ba economics अर्थशास्त्र', icon: '💰', category: 'BA विषय' },
    { title: 'BA समाजशास्त्र', url: 'ba-sociology.html', keywords: 'ba sociology समाजशास्त्र', icon: '👥', category: 'BA विषय' },
    { title: 'BA मनोविज्ञान', url: 'ba-psychology.html', keywords: 'ba psychology मनोविज्ञान', icon: '🧠', category: 'BA विषय' },
    { title: 'BA भूगोल', url: 'ba-geography.html', keywords: 'ba geography भूगोल', icon: '🌍', category: 'BA विषय' },
    { title: 'BA संस्कृत', url: 'ba-sanskrit.html', keywords: 'ba sanskrit संस्कृत', icon: '🕉️', category: 'BA विषय' },
    { title: 'BA उर्दू', url: 'ba-urdu.html', keywords: 'ba urdu उर्दू', icon: '🕌', category: 'BA विषय' },
    { title: 'BA फाइन आर्ट्स', url: 'ba-finearts.html', keywords: 'ba fine arts painting चित्रकला कला', icon: '🎨', category: 'BA विषय' },
    { title: 'BA पत्रकारिता', url: 'ba-journalism.html', keywords: 'ba journalism पत्रकारिता media', icon: '📰', category: 'BA विषय' },
    
    // ===== MA Subjects =====
    { title: 'MA हिंदी', url: 'ma-hindi.html', keywords: 'ma hindi sahitya स्नातकोत्तर', icon: '📖', category: 'MA विषय' },
    { title: 'MA English', url: 'ma-english.html', keywords: 'ma english literature', icon: '🇬🇧', category: 'MA विषय' },
    { title: 'MA इतिहास', url: 'ma-history.html', keywords: 'ma history इतिहास', icon: '📜', category: 'MA विषय' },
    { title: 'MA राजनीति शास्त्र', url: 'ma-polity.html', keywords: 'ma polity political science', icon: '🏛️', category: 'MA विषय' },
    { title: 'MA अर्थशास्त्र', url: 'ma-economics.html', keywords: 'ma economics अर्थशास्त्र', icon: '💰', category: 'MA विषय' },
    { title: 'MA समाजशास्त्र', url: 'ma-sociology.html', keywords: 'ma sociology समाजशास्त्र', icon: '👥', category: 'MA विषय' },
    { title: 'MA मनोविज्ञान', url: 'ma-psychology.html', keywords: 'ma psychology मनोविज्ञान', icon: '🧠', category: 'MA विषय' },
    { title: 'MA भूगोल', url: 'ma-geography.html', keywords: 'ma geography भूगोल', icon: '🌍', category: 'MA विषय' },
    
    // ===== UGC NET =====
    { title: 'UGC NET Paper 1', url: 'net-paper1.html', keywords: 'net paper 1 general teaching aptitude research', icon: '📚', category: 'UGC NET' },
    { title: 'NET हिंदी', url: 'net-hindi.html', keywords: 'net hindi sahitya', icon: '📖', category: 'UGC NET' },
    { title: 'NET English', url: 'net-english.html', keywords: 'net english literature', icon: '🇬🇧', category: 'UGC NET' },
    { title: 'NET इतिहास', url: 'net-history.html', keywords: 'net history इतिहास', icon: '📜', category: 'UGC NET' },
    { title: 'NET राजनीति', url: 'net-polity.html', keywords: 'net polity political science', icon: '🏛️', category: 'UGC NET' },
    { title: 'NET अर्थशास्त्र', url: 'net-economics.html', keywords: 'net economics', icon: '💰', category: 'UGC NET' },
    { title: 'NET समाजशास्त्र', url: 'net-sociology.html', keywords: 'net sociology', icon: '👥', category: 'UGC NET' },
    { title: 'NET मनोविज्ञान', url: 'net-psychology.html', keywords: 'net psychology', icon: '🧠', category: 'UGC NET' },
    { title: 'NET भूगोल', url: 'net-geography.html', keywords: 'net geography', icon: '🌍', category: 'UGC NET' },
    { title: 'NET Education', url: 'net-education.html', keywords: 'net education teaching', icon: '👨‍🏫', category: 'UGC NET' },
    { title: 'NET Commerce', url: 'net-commerce.html', keywords: 'net commerce accounting', icon: '📊', category: 'UGC NET' },
    { title: 'NET Philosophy', url: 'net-philosophy.html', keywords: 'net philosophy दर्शन', icon: '🕉️', category: 'UGC NET' },
    { title: 'NET संस्कृत', url: 'net-sanskrit.html', keywords: 'net sanskrit', icon: '📜', category: 'UGC NET' },
    
    // ===== UPSC Papers =====
    { title: 'UPSC Prelims GS Paper 1', url: 'upsc-prelims-gs1.html', keywords: 'upsc prelims gs general studies paper 1', icon: '📘', category: 'UPSC Papers' },
    { title: 'UPSC Prelims CSAT', url: 'upsc-prelims-csat.html', keywords: 'upsc prelims csat paper 2 aptitude', icon: '🧮', category: 'UPSC Papers' },
    { title: 'UPSC Mains Essay', url: 'upsc-mains-essay.html', keywords: 'upsc mains essay निबंध', icon: '✍️', category: 'UPSC Papers' },
    { title: 'UPSC Mains GS1', url: 'upsc-mains-gs1.html', keywords: 'upsc mains gs1 history culture geography', icon: '📜', category: 'UPSC Papers' },
    { title: 'UPSC Mains GS2', url: 'upsc-mains-gs2.html', keywords: 'upsc mains gs2 polity governance ir', icon: '🏛️', category: 'UPSC Papers' },
    { title: 'UPSC Mains GS3', url: 'upsc-mains-gs3.html', keywords: 'upsc mains gs3 economy science environment', icon: '💰', category: 'UPSC Papers' },
    { title: 'UPSC Mains GS4 Ethics', url: 'upsc-mains-gs4.html', keywords: 'upsc mains gs4 ethics integrity case study', icon: '🎭', category: 'UPSC Papers' },
    
    // ===== UPPCS Papers =====
    { title: 'UPPCS Prelims GS', url: 'uppcs-prelims-gs.html', keywords: 'uppcs prelims general studies', icon: '📘', category: 'UPPCS Papers' },
    { title: 'UPPCS Prelims CSAT', url: 'uppcs-prelims-csat.html', keywords: 'uppcs prelims csat aptitude', icon: '🧮', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains हिंदी', url: 'uppcs-mains-hindi.html', keywords: 'uppcs mains general hindi', icon: '🇮🇳', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains निबंध', url: 'uppcs-mains-essay.html', keywords: 'uppcs mains essay निबंध', icon: '✍️', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS1', url: 'uppcs-mains-gs1.html', keywords: 'uppcs mains gs1 history', icon: '📜', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS2', url: 'uppcs-mains-gs2.html', keywords: 'uppcs mains gs2 polity', icon: '🏛️', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS3', url: 'uppcs-mains-gs3.html', keywords: 'uppcs mains gs3 economy', icon: '💰', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS4', url: 'uppcs-mains-gs4.html', keywords: 'uppcs mains gs4 ethics', icon: '🎭', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS5 (UP Special)', url: 'uppcs-mains-gs5.html', keywords: 'uppcs mains gs5 up special history culture', icon: '⭐', category: 'UPPCS Papers' },
    { title: 'UPPCS Mains GS6 (UP Special)', url: 'uppcs-mains-gs6.html', keywords: 'uppcs mains gs6 up special agriculture', icon: '🌾', category: 'UPPCS Papers' },
    
    // ===== Notes Categories =====
    { title: 'Notes: भारतीय इतिहास', url: 'notes.html', keywords: 'notes history इतिहास प्राचीन मध्यकालीन आधुनिक', icon: '📜', category: 'नोट्स श्रेणी' },
    { title: 'Notes: भूगोल', url: 'notes.html', keywords: 'notes geography भूगोल maps मानचित्र', icon: '🌍', category: 'नोट्स श्रेणी' },
    { title: 'Notes: राजनीति विज्ञान', url: 'notes.html', keywords: 'notes polity राजनीति संविधान constitution', icon: '🏛️', category: 'नोट्स श्रेणी' },
    { title: 'Notes: अर्थशास्त्र', url: 'notes.html', keywords: 'notes economics अर्थशास्त्र budget budget', icon: '💰', category: 'नोट्स श्रेणी' },
    { title: 'Notes: सामान्य विज्ञान', url: 'notes.html', keywords: 'notes science विज्ञान physics chemistry biology', icon: '🔬', category: 'नोट्स श्रेणी' },
    { title: 'Notes: पर्यावरण', url: 'notes.html', keywords: 'notes environment पर्यावरण ecology जलवायु', icon: '🌱', category: 'नोट्स श्रेणी' },
    { title: 'Notes: अंकगणित', url: 'notes.html', keywords: 'notes maths अंकगणित arithmetic प्रतिशत', icon: '➕', category: 'नोट्स श्रेणी' },
    { title: 'Notes: उन्नत गणित', url: 'notes.html', keywords: 'notes advanced maths बीजगणित ज्यामिति', icon: '📐', category: 'नोट्स श्रेणी' },
    { title: 'Notes: रीजनिंग', url: 'notes.html', keywords: 'notes reasoning रीजनिंग logic', icon: '🧩', category: 'नोट्स श्रेणी' },
    { title: 'Notes: हिंदी व्याकरण', url: 'notes.html', keywords: 'notes hindi व्याकरण grammar संधि समास', icon: '📖', category: 'नोट्स श्रेणी' },
    { title: 'Notes: English Grammar', url: 'notes.html', keywords: 'notes english grammar tense voice narration', icon: '🇬🇧', category: 'नोट्स श्रेणी' },
    { title: 'Notes: निबंध और पत्र', url: 'notes.html', keywords: 'notes essay निबंध letter writing', icon: '📝', category: 'नोट्स श्रेणी' },
    
    // ===== Current Affairs Categories =====
    { title: 'करंट: राष्ट्रीय', url: 'current-national.html', keywords: 'national current affairs राष्ट्रीय news खबरें', icon: '🇮🇳', category: 'करंट अफेयर्स श्रेणी' },
    { title: 'करंट: अंतर्राष्ट्रीय', url: 'current-international.html', keywords: 'international current affairs अंतर्राष्ट्रीय world', icon: '🌏', category: 'करंट अफेयर्स श्रेणी' },
    { title: 'करंट: खेल', url: 'current-sports.html', keywords: 'sports current affairs खेल cricket olympics', icon: '🏏', category: 'करंट अफेयर्स श्रेणी' },
    { title: 'करंट: विज्ञान', url: 'current-science.html', keywords: 'science current affairs विज्ञान isro drdo', icon: '🔬', category: 'करंट अफेयर्स श्रेणी' },
    { title: 'करंट: अर्थव्यवस्था', url: 'current-economy.html', keywords: 'economy current affairs अर्थव्यवस्था gdp budget', icon: '💰', category: 'करंट अफेयर्स श्रेणी' },
    { title: 'करंट: कला-संस्कृति', url: 'current-culture.html', keywords: 'culture current affairs कला संस्कृति awards', icon: '🎬', category: 'करंट अफेयर्स श्रेणी' },
    
    // ===== विषय (General Topics) =====
    { title: 'भारतीय संविधान', url: 'notes.html', keywords: 'constitution संविधान polity अनुच्छेद', icon: '📖', category: 'विषय' },
    { title: 'भारतीय इतिहास', url: 'notes.html', keywords: 'history भारत इतिहास प्राचीन', icon: '📜', category: 'विषय' },
    { title: 'भूगोल', url: 'notes.html', keywords: 'geography भूगोल भारत विश्व', icon: '🌍', category: 'विषय' },
    { title: 'अर्थशास्त्र', url: 'notes.html', keywords: 'economics अर्थशास्त्र gdp budget', icon: '💰', category: 'विषय' },
    { title: 'सामान्य विज्ञान', url: 'notes.html', keywords: 'science विज्ञान physics chemistry biology', icon: '🔬', category: 'विषय' },
    { title: 'करंट अफेयर्स 2026', url: 'current-affairs.html', keywords: 'current affairs 2026 daily news', icon: '📰', category: 'विषय' },
    { title: 'गणित Formulas', url: 'notes.html', keywords: 'maths गणित formulas सूत्र', icon: '➕', category: 'विषय' },
    { title: 'रीजनिंग Tricks', url: 'notes.html', keywords: 'reasoning रीजनिंग tricks shortcuts', icon: '🧩', category: 'विषय' },
    { title: 'English Grammar', url: 'notes.html', keywords: 'english grammar tense voice narration', icon: '🇬🇧', category: 'विषय' },
    { title: 'हिंदी व्याकरण', url: 'notes.html', keywords: 'hindi व्याकरण संधि समास अलंकार', icon: '📖', category: 'विषय' }
  ];
  
  // ===== Create Search Bar - AFTER HERO =====
  function createSearchBar() {
    // पहले से कोई search bar है तो हटाएँ (cache से बचने के लिए)
    var existing = document.getElementById('siteSearchBar');
    if (existing) existing.remove();
    var oldResults = document.getElementById('siteSearchResults');
    if (oldResults) oldResults.remove();
    
    // Search bar HTML
    var searchHTML = 
      '<div id="siteSearchBar" style="background:transparent;padding:1rem;max-width:900px;margin:0 auto;position:relative;z-index:10">' +
        '<div id="searchBarContainer" style="display:flex;align-items:center;gap:0.6rem;background:#fff;border-radius:50px;padding:0.5rem 1.2rem;box-shadow:0 4px 20px rgba(0,0,0,0.12);border:2px solid #e0e6ed;transition:all 0.3s">' +
          '<span style="font-size:1.2rem">🔍</span>' +
          '<input id="siteSearchInput" type="text" placeholder="खोजें: UPSC, नोट्स, करंट अफेयर्स, AI सहायक, Quiz..." style="flex:1;border:none;background:transparent;outline:none;font-size:0.95rem;font-family:inherit;padding:0.5rem 0;color:#333" autocomplete="off">' +
          '<span id="searchClearBtn" style="cursor:pointer;display:none;color:#888;font-size:1.3rem;padding:0 0.3rem">×</span>' +
        '</div>' +
        '<div id="siteSearchResults" style="display:none;position:absolute;top:100%;left:1rem;right:1rem;background:#fff;border-radius:14px;box-shadow:0 10px 40px rgba(0,0,0,0.25);z-index:9999;max-height:70vh;overflow-y:auto;margin-top:0.5rem;border:1px solid #e0e6ed"></div>' +
      '</div>';
    
    // Search bar create करें
    var temp = document.createElement('div');
    temp.innerHTML = searchHTML;
    var searchBar = temp.firstChild;
    
    // Hero section के बाद insert करें
    var hero = document.querySelector('.hero');
    if (hero && hero.parentNode) {
      // Hero के अगले element को ढूंढें (text nodes skip करें)
      var nextEl = hero.nextElementSibling;
      if (nextEl) {
        hero.parentNode.insertBefore(searchBar, nextEl);
      } else {
        hero.parentNode.appendChild(searchBar);
      }
      console.log('✅ Search bar inserted after hero');
    } else {
      // Fallback: main के शुरू में
      var main = document.querySelector('main');
      if (main) {
        main.insertBefore(searchBar, main.firstChild);
        console.log('✅ Search bar inserted at top of main');
      } else {
        document.body.appendChild(searchBar);
        console.log('⚠️ Search bar added to body end');
      }
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
      container.style.boxShadow = '0 6px 25px rgba(233,69,96,0.25)';
      var q = input.value.trim();
      if (q.length >= 2) performSearch(q.toLowerCase());
    });
    
    input.addEventListener('blur', function() {
      setTimeout(function() {
        container.style.borderColor = '#e0e6ed';
        container.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
      }, 250);
    });
    
    // Search on input
    input.addEventListener('input', function() {
      var q = this.value.trim();
      
      if (q.length > 0) {
        clearBtn.style.display = 'block';
      } else {
        clearBtn.style.display = 'none';
        results.style.display = 'none';
        return;
      }
      
      if (q.length < 1) {
        results.style.display = 'none';
        return;
      }
      
      performSearch(q.toLowerCase());
    });
    
    // Clear button
    clearBtn.onclick = function(e) {
      e.preventDefault();
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
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        input.focus();
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
    
    // Outside click
    document.addEventListener('click', function(e) {
      if (!e.target.closest('#siteSearchBar')) {
        results.style.display = 'none';
      }
    });
    
    console.log('✅ Search bar initialized');
  }
  
  // ===== Perform Search =====
  function performSearch(query) {
    var results = document.getElementById('siteSearchResults');
    if (!results) return;
    
    var matches = SEARCH_INDEX.filter(function(item) {
      var title = item.title.toLowerCase();
      var keywords = item.keywords.toLowerCase();
      var category = item.category.toLowerCase();
      
      if (title.indexOf(query) > -1) return true;
      if (keywords.indexOf(query) > -1) return true;
      if (category.indexOf(query) > -1) return true;
      
      var queryWords = query.split(/\s+/).filter(function(w) { return w.length > 0; });
      var allFound = queryWords.every(function(w) {
        return title.indexOf(w) > -1 || keywords.indexOf(w) > -1 || category.indexOf(w) > -1;
      });
      
      return allFound;
    });
    
    matches.sort(function(a, b) {
      var aScore = 0, bScore = 0;
      if (a.title.toLowerCase().indexOf(query) > -1) aScore += 10;
      if (b.title.toLowerCase().indexOf(query) > -1) bScore += 10;
      if (a.title.toLowerCase().startsWith(query)) aScore += 20;
      if (b.title.toLowerCase().startsWith(query)) bScore += 20;
      return bScore - aScore;
    });
    
    matches = matches.slice(0, 20);
    
    if (matches.length === 0) {
      results.innerHTML = 
        '<div style="padding:2rem;text-align:center;color:#888">' +
          '<div style="font-size:3rem;margin-bottom:0.5rem">🔍</div>' +
          '<p style="font-weight:600;color:#0f3460">कोई परिणाम नहीं मिला</p>' +
          '<p style="font-size:0.85rem;margin-top:0.5rem">आपने खोजा: <strong>' + query + '</strong></p>' +
          '<p style="font-size:0.8rem;margin-top:0.8rem;color:#999">कोई और keyword try करें — जैसे: UPSC, नोट्स, Quiz</p>' +
        '</div>';
      results.style.display = 'block';
      return;
    }
    
    var grouped = {};
    matches.forEach(function(m) {
      if (!grouped[m.category]) grouped[m.category] = [];
      grouped[m.category].push(m);
    });
    
    var html = '<div>';
    html += '<div style="padding:0.7rem 1rem;color:#888;font-size:0.82rem;border-bottom:1px solid #f0f4f8;background:#f8fafc;border-radius:14px 14px 0 0">' + matches.length + ' परिणाम मिले — <strong style="color:#e94560">' + query + '</strong></div>';
    
    for (var cat in grouped) {
      html += '<div style="padding:0.4rem 1rem;color:#0f3460;font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;background:#f0f4f8;border-top:1px solid #e0e6ed">' + cat + '</div>';
      grouped[cat].forEach(function(item) {
        html += '<a href="' + item.url + '" style="display:flex;align-items:center;gap:0.7rem;padding:0.7rem 1rem;text-decoration:none;color:#333;border-bottom:1px solid #f8fafc;transition:background 0.15s" onmouseover="this.style.background=\'#f5f7fa\'" onmouseout="this.style.background=\'#fff\'">';
        html += '<span style="font-size:1.3rem;flex-shrink:0">' + item.icon + '</span>';
        html += '<span style="flex:1;font-size:0.92rem">' + highlightMatch(item.title, query) + '</span>';
        html += '<span style="color:#e94560;font-size:1rem">→</span>';
        html += '</a>';
      });
    }
    
    html += '</div>';
    results.innerHTML = html;
    results.style.display = 'block';
  }
  
  function highlightMatch(text, query) {
    if (!query) return text;
    var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var regex = new RegExp('(' + escaped + ')', 'gi');
    return text.replace(regex, '<mark style="background:#fff3cd;color:#856404;padding:0.1rem 0.2rem;border-radius:3px">$1</mark>');
  }
  
  function init() {
    var skipPages = ['admin.html', 'login.html'];
    var currentPage = location.pathname.split('/').pop() || 'index.html';
    if (skipPages.indexOf(currentPage) > -1) return;
    
    createSearchBar();
    console.log('✅ Site Search v3 ready - ' + SEARCH_INDEX.length + ' items');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  window.SEARCH_INDEX = SEARCH_INDEX;
  window.performSiteSearch = performSearch;
})();
