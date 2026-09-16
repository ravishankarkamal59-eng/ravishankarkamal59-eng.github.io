// ============================================
// Answer Checker - MASSIVE Database
// UPSC + UPPCS + BPSC + SSC + Agriculture + All Exams
// ============================================
window.AC_DATA = {

  // ========== UPSC MAINS ==========
  upsc_gs1: [
    { id:'upsc-gs1-1', q:'Discuss the significance of the Indus Valley Civilization. (150 words)', words:150, marks:10, subject:'History',
      keywords:['harappa','mohenjodaro','indus','civilization','urban','planning','drainage','seals','bronze','trade','mesopotamia','lothal','dholavira','kalibanga','script'],
      expectedPoints:['Urban planning','Drainage system','Trade with Mesopotamia','Seals and script','Bronze metallurgy','Great Bath','Decline theories'],
      commonMistakes:['Confusing with Vedic period','Missing trade details','No specific sites'] },
    { id:'upsc-gs1-2', q:'Examine the role of Bhakti and Sufi movements in Indian society. (250 words)', words:250, marks:15, subject:'History',
      keywords:['bhakti','sufi','kabir','nanak','mirabai','tulsidas','chishti','ramanam','devotion','monotheism','regional','languages','syncretism','vernacular'],
      expectedPoints:['Bhakti saints','Sufi orders','Vernacular languages','Hindu-Muslim unity','Rejected caste','Devotional literature'],
      commonMistakes:['Only listing saints','Missing social impact','No comparison'] },
    { id:'upsc-gs1-3', q:'Analyze causes and consequences of Revolt of 1857. (250 words)', words:250, marks:15, subject:'History',
      keywords:['1857','revolt','mutiny','sepoy','mangal pandey','bahadur shah','rani lakshmibai','nana saheb','tantia tope','doctrine','lapse','greased','cartridge','enfield'],
      expectedPoints:['Greased cartridges','Doctrine of Lapse','Heavy taxation','Racial discrimination','Rani Lakshmibai, Nana Saheb','End of Company rule','1858 Act'],
      commonMistakes:['Calling it first war only','Missing economic causes','No consequences'] },
    { id:'upsc-gs1-4', q:'Discuss factors for growth of Indian nationalism in late 19th century. (250 words)', words:250, marks:15, subject:'History',
      keywords:['nationalism','congress','1885','hume','bengal','partition','swadeshi','extremist','moderate','tilak','gokhale','naoroji','drain','theory','vernacular'],
      expectedPoints:['Foundation of INC','Role of AO Hume','Drain theory','Partition of Bengal','Swadeshi','Moderates vs Extremists','Press and railways'],
      commonMistakes:['Only events','Missing causes','No economic critique'] },
    { id:'upsc-gs1-5', q:'Discuss impact of climate change on Indian monsoon. (250 words)', words:250, marks:15, subject:'Geography',
      keywords:['monsoon','climate change','rainfall','erratic','drought','flood','elnino','lanina','indianocean','dipole','jetstream','ipcc','adaptation','resilience'],
      expectedPoints:['Changing rainfall','Extreme events','El Nino/La Nina','IOD','Effect on agriculture','Adaptation'],
      commonMistakes:['Only problems','No scientific basis','Missing adaptation'] },
    { id:'upsc-gs1-6', q:'How does urbanisation affect social fabric of Indian society? (250 words)', words:250, marks:15, subject:'Society',
      keywords:['urbanisation','migration','family','caste','nuclear','joint','slum','middle','class','women','empowerment','individualism','anomie','cosmopolitan'],
      expectedPoints:['Nuclear family','Caste barriers','Women empowerment','Slums','Individualism','Anomie','Cosmopolitan'],
      commonMistakes:['Only negative','Missing theory','No data'] },
    { id:'upsc-gs1-7', q:'Discuss the role of women in Indian freedom struggle. (250 words)', words:250, marks:15, subject:'History',
      keywords:['women','freedom','struggle','rani','lakshmibai','sarojini','naidu','annie','besant','aruna','asaf','ali','kamala','nehru','durgabai','deshmukh','partition'],
      expectedPoints:['Rani Lakshmibai','Sarojini Naidu','Annie Besant','Aruna Asaf Ali','Quit India','Dandi March','Revolutionary women'],
      commonMistakes:['Only famous names','Missing roles','No regional diversity'] },
    { id:'upsc-gs1-8', q:'Examine the causes of regionalism in India. (250 words)', words:250, marks:15, subject:'Society',
      keywords:['regionalism','linguistic','state','reorganization','1956','tamil','nadu','punjab','assam','khalistan','sonal','movement','water','dispute','identity'],
      expectedPoints:['Linguistic reorganisation','States Reorganisation Act','Tamil Nadu movement','Punjab Khalistan','Assam movement','River water disputes','Identity politics'],
      commonMistakes:['Only one region','No historical context','Missing solutions'] }
  ],

  upsc_gs2: [
    { id:'upsc-gs2-1', q:'Discuss role of Election Commission in free and fair elections. (250 words)', words:250, marks:15, subject:'Polity',
      keywords:['election commission','eci','article 324','model code','conduct','free','fair','electoral','rolls','evm','vvpat','funding','transparency','rpa'],
      expectedPoints:['Article 324','RPA 1951','Model Code of Conduct','Electoral rolls','EVM VVPAT','Funding reforms','State funding'],
      commonMistakes:['No Article 324','Missing MCC','No reforms'] },
    { id:'upsc-gs2-2', q:'Examine role of Governor in Indian federal setup. (250 words)', words:250, marks:15, subject:'Polity',
      keywords:['governor','article 155','156','356','discretion','pardon','bill','state','centre','appointment','pleasure','doctrine','sarkaria','commission'],
      expectedPoints:['Appointment','Article 155-156','Discretionary powers','Article 356','Bill reservation','Sarkaria Commission','Controversies'],
      commonMistakes:['Only powers','Missing controversy','No reforms'] },
    { id:'upsc-gs2-3', q:'Discuss role of civil services in democracy. (150 words)', words:150, marks:10, subject:'Governance',
      keywords:['civil','services','neutrality','impartiality','accountability','transparency','constitution','integrity','welfare','bureaucracy','policy','implementation','rti','lokpal'],
      expectedPoints:['Political neutrality','Impartial service','Policy implementation','Accountability','Corruption challenges','2nd ARC reforms'],
      commonMistakes:['Only positives','No reforms','Missing RTI'] },
    { id:'upsc-gs2-4', q:'Evaluate RTI Act in promoting transparency. (250 words)', words:250, marks:15, subject:'Governance',
      keywords:['rti','right to information','2005','transparency','accountability','corruption','information commission','public authority','pio','appeal','exemption','section 8','whistleblower','amendment'],
      expectedPoints:['RTI Act 2005','Information Commissions','PIO and appeals','Section 8 exemptions','Success stories','RTI Amendment 2019','Whistleblower'],
      commonMistakes:['No 2019 amendment','Missing exemptions','No examples'] },
    { id:'upsc-gs2-5', q:'Discuss constitutional provisions for SC/ST rights protection. (250 words)', words:250, marks:15, subject:'Polity',
      keywords:['sc','st','article 46','15','16','17','reservation','atrocities','act','1989','poa','safeguards','commission','ncsc','ncst','affirmative'],
      expectedPoints:['Article 15(4), 16(4), 46','Article 17','SC/ST POA Act 1989','Reservation','NCSC and NCST','Implementation challenges'],
      commonMistakes:['Missing articles','No statistics','Only listing'] },
    { id:'upsc-gs2-6', q:'Discuss the significance of the 73rd and 74th Constitutional Amendments. (250 words)', words:250, marks:15, subject:'Polity',
      keywords:['73rd','74th','amendment','panchayati','raj','municipality','article 243','gram sabha','reservation','women','sc','st','finance commission','election commission','devolution'],
      expectedPoints:['73rd - Panchayati Raj','74th - Municipalities','Article 243 series','Gram Sabha','Reservation','Finance Commission','Devolution of powers'],
      commonMistakes:['Missing articles','No committees','Only one amendment'] },
    { id:'upsc-gs2-7', q:'Examine India\'s relations with China. (250 words)', words:250, marks:15, subject:'IR',
      keywords:['china','india','border','lac','1962','war','doklam','galwan','trade','deficit','brics','sco','quad','bilateral','summit','dialogue','panchsheel'],
      expectedPoints:['Historical relations','1962 war','Border dispute','Trade deficit','BRICS SCO','Quad counter','Diplomatic engagement'],
      commonMistakes:['Only war','No trade','Missing recent events'] }
  ],

  upsc_gs3: [
    { id:'upsc-gs3-1', q:'Discuss impact of climate change on Indian agriculture and adaptation. (250 words)', words:250, marks:15, subject:'Economy',
      keywords:['climate change','agriculture','crop','monsoon','drought','flood','irrigation','crop insurance','pmfby','adaptation','mitigation','drip','sprinkler','organic','diversification','food security'],
      expectedPoints:['Changing monsoon','Effect on yields','Pest increase','Climate-resilient crops','Micro-irrigation','PMFBY','Diversification'],
      commonMistakes:['No schemes','Missing adaptation','Only problems'] },
    { id:'upsc-gs3-2', q:'Examine role of MSMEs in India\'s economic development. (250 words)', words:250, marks:15, subject:'Economy',
      keywords:['msme','small','medium','enterprise','employment','gdp','export','manufacturing','credit','mudra','yojana','udyam','cluster','technology','gst','formalization'],
      expectedPoints:['GDP and employment','Second largest employer','Exports','Credit challenges','MUDRA Udyam','Post-GST formalization'],
      commonMistakes:['No statistics','Missing schemes','No challenges'] },
    { id:'upsc-gs3-3', q:'Discuss renewable energy sources in India and potential. (250 words)', words:250, marks:15, subject:'Environment',
      keywords:['solar','wind','hydro','biomass','geothermal','tidal','renewable','energy','mnre','mission','nise','target','2030','paris','net zero','grid','storage','hydrogen'],
      expectedPoints:['Solar 750 GW','Wind 300 GW','Hydro 150 GW','Biomass 25 GW','500 GW by 2030','Storage grid','Green hydrogen'],
      commonMistakes:['No numbers','Missing targets','Only solar wind'] },
    { id:'upsc-gs3-4', q:'Discuss role of space technology in India\'s development. (150 words)', words:150, marks:10, subject:'Science',
      keywords:['isro','satellite','remote','sensing','gps','navic','communication','weather','disaster','management','agriculture','education','telemedicine','cartosat','gsat','chandrayaan','mangalyaan','aditya'],
      expectedPoints:['ISRO achievements','Remote sensing','NAVIC','Disaster management','Agriculture weather','Communication GSAT'],
      commonMistakes:['Only Chandrayaan','Missing applications','No ISRO history'] },
    { id:'upsc-gs3-5', q:'Examine challenges of internal security in India. (250 words)', words:250, marks:15, subject:'Security',
      keywords:['internal','security','naxal','terrorism','jammu','kashmir','northeast','insurgency','cyber','leftwing','extremism','afspa','maoist','radicalization','social','media','border'],
      expectedPoints:['Left-wing extremism','J&K terrorism','North-East insurgency','Cyber security','Radicalization','Border management','Police reforms'],
      commonMistakes:['Only one type','Missing cyber','No reforms'] },
    { id:'upsc-gs3-6', q:'Discuss the challenges of food security in India. (250 words)', words:250, marks:15, subject:'Economy',
      keywords:['food','security','hunger','poverty','pds','ration','nfsa','malnutrition','stunting','wasting','midday','meal','icds','anganwadi','buffer','stock','procurement','msp'],
      expectedPoints:['NFSA 2013','PDS system','Malnutrition','Mid-day meal','ICDS','Buffer stock','MSP'],
      commonMistakes:['No schemes','Missing nutrition','Only production'] },
    { id:'upsc-gs3-7', q:'Discuss India\'s defence modernization challenges. (250 words)', words:250, marks:15, subject:'Security',
      keywords:['defence','modernization','military','army','navy','airforce','drdo','hal','make in india','indigenous','import','russia','rafale','tejas','submarine','border','china','pakistan'],
      expectedPoints:['Import dependency','Make in India defence','DRDO HAL','Rafale Tejas','Indigenous production','Border challenges'],
      commonMistakes:['Only imports','No indigenous','Missing budget'] }
  ],

  upsc_gs4: [
    { id:'upsc-gs4-1', q:'What is conflict of interest? Examples from public service. (150 words)', words:150, marks:10, subject:'Ethics',
      keywords:['conflict of interest','public service','ethics','integrity','personal interest','official duty','transparency','disclosure','accountability','governance','impartiality','example','case study'],
      expectedPoints:['Definition','Difference from corruption','Examples','Disclosure mechanisms','Prevention','Code of conduct'],
      commonMistakes:['No examples','Only definition','Missing prevention'] },
    { id:'upsc-gs4-2', q:'Discuss emotional intelligence in civil services. (150 words)', words:150, marks:10, subject:'Ethics',
      keywords:['emotional','intelligence','eq','civil','services','empathy','self','awareness','motivation','self-regulation','social','skills','goleman','administration','crisis'],
      expectedPoints:['Goleman 5 components','Self-awareness','Self-regulation','Motivation','Empathy','Social skills','Administration'],
      commonMistakes:['No Goleman','Only listing','No examples'] },
    { id:'upsc-gs4-3', q:'Discuss the role of ethics in public administration. (250 words)', words:250, marks:15, subject:'Ethics',
      keywords:['ethics','public','administration','integrity','accountability','transparency','probity','civil','services','code','conduct','moral','values','corruption','whistleblower','lokpal'],
      expectedPoints:['Definition of ethics','Difference from morality','Code of conduct','2nd ARC recommendations','Lokpal Lokayukta','Whistleblower protection'],
      commonMistakes:['Only corruption','No ARC','Missing institutions'] }
  ],

  // ========== UPPCS MAINS ==========
  uppcs_gs1: [
    { id:'uppcs-gs1-1', q:'Discuss main features of Gupta period architecture. (150 words)', words:150, marks:10, subject:'Art & Culture',
      keywords:['gupta','architecture','temple','dashavatara','deogarh','bhitaragaon','nagara','dravida','shikhara','mandapa','garbhagriha','stone','brick','ajanta','ellora'],
      expectedPoints:['Temple architecture','Nagara style','Dashavatara temple','Bhitaragaon','Ajanta caves','Stone use'],
      commonMistakes:['Only Ajanta','No temple','Missing styles'] },
    { id:'uppcs-gs1-2', q:'Discuss impact of Bhakti movement on Hindi literature. (250 words)', words:250, marks:15, subject:'Art & Culture',
      keywords:['bhakti','hindi','literature','kabir','tulsidas','sur','mirabai','ram','krishna','sagun','nirgun','kavya','dohe','padavali','ramcharitmanas','sursagar','padmavat'],
      expectedPoints:['Sant literature','Sufi literature','Tulsidas','Surdas','Mirabai','Vernacular development'],
      commonMistakes:['Only Tulsidas','Missing Sufi','No analysis'] },
    { id:'uppcs-gs1-3', q:'Discuss geographical features of Ganga plain in UP. (250 words)', words:250, marks:15, subject:'Geography',
      keywords:['ganga','plain','uttar pradesh','bhabar','tarai','bhangar','khadar','alluvial','doab','yamuna','ghaghara','gandak','gomti','flood','irrigation'],
      expectedPoints:['Bhabar Tarai Bhangar Khadar','Alluvial soil','Doab','Ganga-Yamuna','Ghaghara-Gandak','Flood prone','Agriculture'],
      commonMistakes:['Missing divisions','No soil','Only Ganga'] },
    { id:'uppcs-gs1-4', q:'Discuss the main features of medieval Indian architecture. (250 words)', words:250, marks:15, subject:'Art & Culture',
      keywords:['medieval','architecture','mughal','sultanate','taj','mahal','red','fort','qutub','minar','jamia','masjid','charbagh','dome','minaret','arch','arcuate','calligraphy','pietra','dura'],
      expectedPoints:['Delhi Sultanate architecture','Mughal architecture','Taj Mahal','Qutub Minar','Red Fort','Charbagh','Dome and minarets','Calligraphy'],
      commonMistakes:['Only Taj','No Sultanate','Missing features'] },
    { id:'uppcs-gs1-5', q:'Discuss the various folk dances of Uttar Pradesh. (150 words)', words:150, marks:10, subject:'Art & Culture',
      keywords:['folk','dance','uttar','pradesh','nauटंकी','कजरी','चरकुला','ढोल','नगाड़ा','रासलीला','झूमर','चैती','bidesia','nachari'],
      expectedPoints:['Nautanki','Kajri','Charkula','Raslila','Jhoomar','Chaiti','Regional variations'],
      commonMistakes:['Only one dance','No regions','Missing UP-specific'] }
  ],

  uppcs_gs2: [
    { id:'uppcs-gs2-1', q:'Discuss problems of industrial development in UP. (150 words)', words:150, marks:10, subject:'UP Economy',
      keywords:['uttar','pradesh','industrial','development','problem','infrastructure','power','road','investment','policy','msme','regional','decentralization','employment','skilled','credit'],
      expectedPoints:['Inadequate infrastructure','Power shortage','Regional imbalance','Skilled labor','MSME credit','Industrial policy','Land acquisition'],
      commonMistakes:['Only problems','No solutions','Missing UP'] },
    { id:'uppcs-gs2-2', q:'Discuss need and challenges of agricultural diversification in UP. (250 words)', words:250, marks:15, subject:'UP Economy',
      keywords:['agriculture','diversification','uttar','pradesh','crop','horticulture','pulses','oilseeds','irrigation','market','farmer','income','challenge','mandi','profit','sugarcane','wheat'],
      expectedPoints:['Overdependence on cereals','Horticulture','Pulses oilseeds','Sugarcane dominance','Marketing','Farmer income','Irrigation'],
      commonMistakes:['No UP data','Missing challenges','Only need'] },
    { id:'uppcs-gs2-3', q:'Discuss the role of MSMEs in UP economy. (250 words)', words:250, marks:15, subject:'UP Economy',
      keywords:['msme','uttar','pradesh','small','medium','enterprise','employment','gdp','export','manufacturing','credit','odop','cluster','handicraft','khadi','village','industry'],
      expectedPoints:['Employment potential','GDP contribution','ODOP scheme','Cluster development','Handicrafts','Credit access'],
      commonMistakes:['No UP data','Missing ODOP','Only national'] }
  ],

  uppcs_gs3: [
    { id:'uppcs-gs3-1', q:'Discuss constitutional provisions of Panchayati Raj. (250 words)', words:250, marks:15, subject:'Polity',
      keywords:['panchayati','raj','73rd','amendment','article 243','gram','sabha','three','tier','reservation','women','sc','st','state','election','commission','finance','commission','balwant','mehta','ashok'],
      expectedPoints:['73rd Amendment','Article 243','Three-tier','Gram Sabha','Reservation','Election Commission','Finance Commission','Balwant Rai Mehta'],
      commonMistakes:['Missing articles','No committees','Only 73rd'] },
    { id:'uppcs-gs3-2', q:'Discuss main features of Indian federal system. (250 words)', words:250, marks:15, subject:'Polity',
      keywords:['federal','system','constitution','union','state','list','concurrent','residual','amendment','article 3','rajya','sabha','governor','emergency','single','citizenship','independent','judiciary'],
      expectedPoints:['Written Constitution','Three lists','Bicameralism','Independent judiciary','Emergency provisions','Single citizenship','Flexible vs rigid'],
      commonMistakes:['Missing lists','No comparison','Only features'] },
    { id:'uppcs-gs3-3', q:'Discuss the role of UP in India\'s freedom struggle. (250 words)', words:250, marks:15, subject:'History',
      keywords:['uttar','pradesh','freedom','struggle','1857','lucknow','kanpur','jhansi','meerut','banaras','allahabad','gandhi','nehru','congress','quit','india','kakori','chauri','chaura'],
      expectedPoints:['1857 revolt centers','Lucknow Kanpur Jhansi','Meerut 1857','Kakori conspiracy','Chauri Chaura','Nehru Gandhi','UP leaders'],
      commonMistakes:['Only national events','Missing UP sites','No leaders'] }
  ],

  uppcs_gs4: [
    { id:'uppcs-gs4-1', q:'Discuss main sources of energy in UP and their potential. (150 words)', words:150, marks:10, subject:'UP Economy',
      keywords:['energy','uttar','pradesh','coal','thermal','hydro','solar','wind','biomass','renewable','power','plant','upneda','potential','grid','distribution'],
      expectedPoints:['Thermal coal','Hydro Rihand','Solar Bundelkhand','Biomass','Wind limited','UPNEDA'],
      commonMistakes:['Only one source','No UP data','Missing potential'] },
    { id:'uppcs-gs4-2', q:'Discuss environmental issues in Uttar Pradesh. (250 words)', words:250, marks:15, subject:'Environment',
      keywords:['environment','uttar','pradesh','pollution','air','water','ganga','yamuna','ghaghara','industrial','domestic','sewage','industrial','waste','noise','deforestation','climate'],
      expectedPoints:['Ganga pollution','Yamuna pollution','Industrial waste','Sewage discharge','Air pollution','Deforestation','Climate impact'],
      commonMistakes:['No UP rivers','Missing sewage','Only air'] }
  ],

  // ========== BIHAR BPSC ==========
  bpsc_gs: [
    { id:'bpsc-1', q:'Discuss the role of Bihar in India\'s freedom struggle. (250 words)', words:250, marks:15, subject:'History',
      keywords:['bihar','freedom','struggle','champaran','1917','gandhi','satyagraha','quit','india','1942','jayaprakash','narayan','dr','rajendra','prasad','sahajanand','saraswati','bihar','vibhuti','kisan','sabha'],
      expectedPoints:['Champaran Satyagraha 1917','Gandhi in Bihar','Kisan Sabha','Quit India','JP movement','Dr Rajendra Prasad','Bihar Vibhuti'],
      commonMistakes:['Only Champaran','Missing leaders','No national context'] },
    { id:'bpsc-2', q:'Discuss the geographical features of Bihar. (150 words)', words:150, marks:10, subject:'Geography',
      keywords:['bihar','geography','ganga','plain','himalaya','terai','kosi','gandak','son','punpun','flood','drought','alluvial','soil','mineral','climate','rainfall'],
      expectedPoints:['Ganga plain','North Bihar plain','South Bihar plain','Kosi Gandak Son','Flood and drought','Alluvial soil','Climate'],
      commonMistakes:['Only Ganga','No rivers','Missing regions'] },
    { id:'bpsc-3', q:'Discuss the causes of floods in Bihar and remedial measures. (250 words)', words:250, marks:15, subject:'Geography',
      keywords:['bihar','flood','kosi','gandak','bagmati','mahananda','nepal','himalaya','embankment','drainage','congestion','siltation','embankment','breach','remedial','watershed','afforestation'],
      expectedPoints:['Kosi Gandak flooding','Nepal rivers','Siltation','Embankment breaches','Drainage congestion','Afforestation','Watershed management'],
      commonMistakes:['Only Kosi','No remedies','Missing historical'] },
    { id:'bpsc-4', q:'Discuss the industrial development of Bihar after independence. (250 words)', words:250, marks:15, subject:'Economy',
      keywords:['bihar','industrial','development','independence','sugar','jute','textile','barauni','bokaro','patna','gaya','bhagalpur','msme','handloom','silk','tasar','investment','policy'],
      expectedPoints:['Pre-independence industry','Barauni refinery','Sugar mills','Textile industry','Tasar silk','MSME development','Industrial policy'],
      commonMistakes:['No industries','Missing dates','No policy'] },
    { id:'bpsc-5', q:'Discuss the role of JP movement in Indian politics. (250 words)', words:250, marks:15, subject:'Polity',
      keywords:['jayaprakash','narayan','jp','movement','1974','bihar','navnirman','emergency','1975','student','movement','corruption','indira','gandhi','janata','party','1977','sampoorna','kranti'],
      expectedPoints:['1974 Bihar movement','JP Narayan leadership','Student participation','Emergency 1975','Janata Party 1977','Sampoorna Kranti','Impact on politics'],
      commonMistakes:['Only JP','No emergency','Missing impact'] }
  ],

  // ========== AGRICULTURE EXAMS ==========
  agri_agronomy: [
    { id:'agri-agr-1', q:'Discuss the classification of crops based on seasons. (150 words)', words:150, marks:10, subject:'Agronomy',
      keywords:['kharif','rabi','zaid','crop','season','monsoon','sowing','harvest','rice','wheat','maize','mustard','cotton','sugarcane','pulses','oilseeds'],
      expectedPoints:['Kharif - June-July','Rabi - Oct-Nov','Zaid - March-April','Examples each','Climatic conditions','Harvest times'],
      commonMistakes:['Only kharif rabi','No zaid','Missing examples'] },
    { id:'agri-agr-2', q:'Discuss the principles of crop rotation. (250 words)', words:250, marks:15, subject:'Agronomy',
      keywords:['crop','rotation','legume','cereal','soil','fertility','nitrogen','fixation','weed','pest','disease','rotation','principle','deep','shallow','rooted','green','manure'],
      expectedPoints:['Definition','Legume after cereal','Deep-shallow roots','Pest disease control','Soil fertility','Green manure','Examples'],
      commonMistakes:['Only definition','No principles','Missing examples'] },
    { id:'agri-agr-3', q:'Discuss the different methods of irrigation. (250 words)', words:250, marks:15, subject:'Agronomy',
      keywords:['irrigation','surface','drip','sprinkler','subsurface','flood','furrow','basin','trickle','efficiency','water','saving','fertigation','micro','crop','soil'],
      expectedPoints:['Surface irrigation','Drip irrigation','Sprinkler irrigation','Sub-surface','Efficiency comparison','Water saving','Fertigation'],
      commonMistakes:['Only flood','No efficiency','Missing modern'] },
    { id:'agri-agr-4', q:'Discuss weed management in crop production. (250 words)', words:250, marks:15, subject:'Agronomy',
      keywords:['weed','management','control','herbicide','mechanical','biological','cultural','integrated','weedicide','pendimethalin','glyphosate','atrazine','mulching','crop','rotation','competitive'],
      expectedPoints:['Weed definition','Mechanical control','Chemical control','Biological control','Cultural practices','Integrated weed management','Herbicide examples'],
      commonMistakes:['Only chemical','No IWM','Missing examples'] },
    { id:'agri-agr-5', q:'Discuss fertilizer management for major crops. (250 words)', words:250, marks:15, subject:'Agronomy',
      keywords:['fertilizer','nutrient','nitrogen','phosphorus','potassium','urea','dap','mop','npk','split','dose','basal','top','dressing','soil','test','organic','compost','vermicompost'],
      expectedPoints:['NPK nutrients','Urea DAP MOP','Split application','Basal top dressing','Soil testing','Organic fertilizers','Biofertilizers'],
      commonMistakes:['Only urea','No application method','Missing organic'] },
    { id:'agri-agr-6', q:'Discuss the rice production technology. (250 words)', words:250, marks:15, subject:'Agronomy',
      keywords:['rice','paddy','oryza','sativa','nursery','transplanting','sri','dapog','fertilizer','irrigation','pest','disease','blast','blight','stem','borer','harvest','yield','variety'],
      expectedPoints:['Scientific name','Nursery raising','Transplanting','SRI method','Fertilizer schedule','Pest management','Harvesting'],
      commonMistakes:['No scientific name','Missing SRI','No pest'] },
    { id:'agri-agr-7', q:'Discuss the wheat production technology. (250 words)', words:250, marks:15, subject:'Agronomy',
      keywords:['wheat','triticum','aestivum','sowing','seed','rate','fertilizer','irrigation','crown','root','rust','smut','harvest','yield','variety','timely','sowing','spacing'],
      expectedPoints:['Scientific name','Timely sowing','Seed rate','Fertilizer schedule','Critical irrigation','Rust management','Harvesting'],
      commonMistakes:['No scientific name','Missing irrigation','No disease'] },
    { id:'agri-agr-8', q:'Discuss cropping systems in Indian agriculture. (250 words)', words:250, marks:15, subject:'Agronomy',
      keywords:['cropping','system','monocropping','mixed','intercropping','sequence','multiple','relay','strip','cropping','intensity','rotation','diversification','sustainable','intensification'],
      expectedPoints:['Monocropping','Mixed cropping','Intercropping','Sequence cropping','Multiple cropping','Cropping intensity','Sustainability'],
      commonMistakes:['Only one type','No intensity','Missing sustainability'] }
  ],

  agri_soil: [
    { id:'agri-soil-1', q:'Discuss the physical properties of soil. (250 words)', words:250, marks:15, subject:'Soil Science',
      keywords:['soil','physical','texture','structure','color','porosity','permeability','density','temperature','moisture','sand','silt','clay','loam','aggregate','pore','space','water','holding'],
      expectedPoints:['Soil texture','Soil structure','Soil color','Porosity','Permeability','Bulk density','Water holding capacity'],
      commonMistakes:['Only texture','No structure','Missing properties'] },
    { id:'agri-soil-2', q:'Discuss the chemical properties of soil. (250 words)', words:250, marks:15, subject:'Soil Science',
      keywords:['soil','chemical','ph','acidic','alkaline','salinity','sodicity','cec','cation','exchange','organic','matter','nutrient','nitrogen','phosphorus','potassium','micronutrient'],
      expectedPoints:['Soil pH','Acidic alkaline','Salinity sodicity','CEC','Base saturation','Organic matter','Nutrient availability'],
      commonMistakes:['Only pH','No CEC','Missing nutrients'] },
    { id:'agri-soil-3', q:'Discuss soil erosion and conservation methods. (250 words)', words:250, marks:15, subject:'Soil Science',
      keywords:['soil','erosion','water','wind','sheet','rill','gully','conservation','contour','terrace','strip','cropping','mulching','afforestation','check','dam','windbreak','shelterbelt'],
      expectedPoints:['Water erosion','Wind erosion','Sheet rill gully','Contour ploughing','Terrace farming','Strip cropping','Afforestation','Check dams'],
      commonMistakes:['Only water','No conservation','Missing methods'] },
    { id:'agri-soil-4', q:'Discuss soil fertility and productivity. (250 words)', words:250, marks:15, subject:'Soil Science',
      keywords:['soil','fertility','productivity','nutrient','npk','organic','matter','humus','microorganism','nitrogen','fixation','manure','fertilizer','test','crop','rotation'],
      expectedPoints:['Fertility vs productivity','Essential nutrients','Organic matter role','Microorganisms','Nitrogen fixation','Manures fertilizers','Soil testing'],
      commonMistakes:['Only NPK','No microorganisms','Missing distinction'] },
    { id:'agri-soil-5', q:'Discuss problem soils and their management. (250 words)', words:250, marks:15, subject:'Soil Science',
      keywords:['problem','soil','acidic','saline','sodic','alkaline','waterlogged','eroded','gypsum','lime','drainage','leaching','reclamation','management','amelioration'],
      expectedPoints:['Acidic soil','Saline soil','Sodic soil','Waterlogged soil','Gypsum application','Lime application','Drainage','Reclamation'],
      commonMistakes:['Only one type','No reclamation','Missing gypsum'] }
  ],

  agri_horticulture: [
    { id:'agri-hort-1', q:'Discuss the importance of horticulture in Indian economy. (250 words)', words:250, marks:15, subject:'Horticulture',
      keywords:['horticulture','fruit','vegetable','flower','spice','plantation','export','economy','employment','income','nutrition','diversification','high','value','crop','garden','nursery'],
      expectedPoints:['Definition of horticulture','Fruits vegetables flowers','Export earnings','Employment generation','Nutritional security','High value crops','Diversification'],
      commonMistakes:['Only fruits','No economics','Missing export'] },
    { id:'agri-hort-2', q:'Discuss the cultivation practices of mango. (250 words)', words:250, marks:15, subject:'Horticulture',
      keywords:['mango','mangifera','indica','variety','grafting','planting','spacing','pruning','irrigation','fertilizer','harvest','yield','dashehari','langra','alphonso','chaunsa','malda','banganapalli'],
      expectedPoints:['Scientific name','Varieties','Propagation grafting','Planting spacing','Pruning','Fertilizer irrigation','Harvesting'],
      commonMistakes:['No varieties','No grafting','Missing practices'] },
    { id:'agri-hort-3', q:'Discuss the cultivation of banana. (250 words)', words:250, marks:15, subject:'Horticulture',
      keywords:['banana','musa','paradisiaca','variety','sucker','tissue','culture','planting','spacing','irrigation','fertilizer','bunch','harvest','yield','dwarf','cavendish','robusta','g9'],
      expectedPoints:['Scientific name','Varieties','Tissue culture','Sucker planting','Fertilizer irrigation','Bunch management','Harvesting'],
      commonMistakes:['No varieties','Missing tissue culture','No practices'] },
    { id:'agri-hort-4', q:'Discuss vegetable cultivation practices. (250 words)', words:250, marks:15, subject:'Horticulture',
      keywords:['vegetable','cultivation','tomato','brinjal','chilli','okra','cabbage','cauliflower','onion','potato','nursery','transplanting','spacing','fertilizer','irrigation','pest','disease','harvest'],
      expectedPoints:['Vegetable importance','Nursery raising','Transplanting','Spacing','Fertilizer schedule','Irrigation','Pest management','Harvesting'],
      commonMistakes:['Only one crop','No nursery','Missing practices'] }
  ],

  agri_pathology: [
    { id:'agri-path-1', q:'Discuss major diseases of rice and their management. (250 words)', words:250, marks:15, subject:'Plant Pathology',
      keywords:['rice','disease','blast','blight','bacterial','leaf','sheath','tungro','false','smut','fungicide','resistant','variety','management','control','symptoms','pyricularia','xanthomonas'],
      expectedPoints:['Rice blast','Bacterial blight','Sheath blight','Tungro virus','False smut','Resistant varieties','Fungicide management'],
      commonMistakes:['Only blast','No management','Missing pathogens'] },
    { id:'agri-path-2', q:'Discuss major diseases of wheat and their management. (250 words)', words:250, marks:15, subject:'Plant Pathology',
      keywords:['wheat','disease','rust','yellow','brown','black','smut','loose','karnal','bunt','powdery','mildew','fusarium','fungicide','resistant','variety','management'],
      expectedPoints:['Yellow rust','Brown rust','Black rust','Loose smut','Karnal bunt','Powdery mildew','Resistant varieties'],
      commonMistakes:['Only rust','Missing smut','No management'] },
    { id:'agri-path-3', q:'Discuss integrated disease management. (250 words)', words:250, marks:15, subject:'Plant Pathology',
      keywords:['integrated','disease','management','idm','cultural','biological','chemical','resistant','variety','seed','treatment','crop','rotation','sanitation','biological','control','trichoderma'],
      expectedPoints:['IDM concept','Cultural practices','Biological control','Chemical control','Resistant varieties','Seed treatment','Crop rotation'],
      commonMistakes:['Only chemical','No biological','Missing IDM'] }
  ],

  agri_entomology: [
    { id:'agri-ent-1', q:'Discuss major insect pests of rice and their management. (250 words)', words:250, marks:15, subject:'Entomology',
      keywords:['rice','pest','stem','borer','brown','plant','hopper','leaf','folder','gundhi','bug','hispa','insecticide','ipm','biological','control','predator','parasitoid','resistant'],
      expectedPoints:['Stem borer','Brown plant hopper','Leaf folder','Gundhi bug','Hispa','IPM','Biological control'],
      commonMistakes:['Only stem borer','No IPM','Missing biological'] },
    { id:'agri-ent-2', q:'Discuss integrated pest management. (250 words)', words:250, marks:15, subject:'Entomology',
      keywords:['integrated','pest','management','ipm','cultural','biological','chemical','mechanical','physical','pheromone','trap','resistant','variety','economic','threshold','predator','parasitoid'],
      expectedPoints:['IPM concept','Cultural control','Biological control','Chemical control','Pheromone traps','ETL','Resistant varieties'],
      commonMistakes:['Only chemical','No ETL','Missing biological'] },
    { id:'agri-ent-3', q:'Discuss major pests of cotton and their management. (250 words)', words:250, marks:15, subject:'Entomology',
      keywords:['cotton','pest','pink','bollworm','american','bollworm','spotted','whitefly','jassid','thrips','aphid','insecticide','bt','cotton','ipm','resistant','management'],
      expectedPoints:['Pink bollworm','American bollworm','Whitefly','Jassid','Thrips','Bt cotton','IPM practices'],
      commonMistakes:['Only bollworm','Missing Bt','No management'] }
  ],

  agri_extension: [
    { id:'agri-ext-1', q:'Discuss the role of extension education in agricultural development. (250 words)', words:250, marks:15, subject:'Extension Education',
      keywords:['extension','education','agricultural','development','transfer','technology','farmer','training','kvk','atma','demonstration','communication','adoption','diffusion','innovation'],
      expectedPoints:['Definition of extension','Technology transfer','KVK role','ATMA','Demonstration methods','Adoption process','Diffusion theory'],
      commonMistakes:['Only definition','No KVK','Missing methods'] },
    { id:'agri-ext-2', q:'Discuss communication methods in agricultural extension. (250 words)', words:250, marks:15, subject:'Extension Education',
      keywords:['communication','agricultural','extension','method','individual','group','mass','contact','farm','visit','demonstration','result','method','campaign','radio','tv','mobile','ict'],
      expectedPoints:['Individual contact','Group contact','Mass contact','Farm visit','Result demonstration','Campaign','ICT tools'],
      commonMistakes:['Only mass media','No individual','Missing modern'] }
  ],

  agri_economics: [
    { id:'agri-eco-1', q:'Discuss agricultural price policy in India. (250 words)', words:250, marks:15, subject:'Agricultural Economics',
      keywords:['agricultural','price','policy','msp','minimum','support','cacp','commission','cost','cultivation','procurement','market','mandi','apmc','farmer','income','subsidy'],
      expectedPoints:['MSP concept','CACP role','Cost of cultivation','Procurement system','APMC mandis','Farmer income','Subsidy'],
      commonMistakes:['Only MSP','No CACP','Missing procurement'] },
    { id:'agri-eco-2', q:'Discuss agricultural marketing in India. (250 words)', words:250, marks:15, subject:'Agricultural Economics',
      keywords:['agricultural','marketing','apmc','mandi','enam','contract','farming','direct','marketing','cooperative','farmer','producer','company','fpo','supply','chain','warehouse','cold','storage'],
      expectedPoints:['APMC mandis','e-NAM','Contract farming','Direct marketing','FPOs','Cold storage','Supply chain'],
      commonMistakes:['Only APMC','No e-NAM','Missing FPO'] }
  ],

  agri_animal: [
    { id:'agri-animal-1', q:'Discuss the role of livestock in Indian agriculture. (250 words)', words:250, marks:15, subject:'Animal Husbandry',
      keywords:['livestock','agriculture','milk','dairy','cattle','buffalo','goat','sheep','poultry','manure','draught','income','employment','nutrition','white','revolution','operation','flood'],
      expectedPoints:['Milk production','Dairy farming','Draught power','Manure','Employment','White Revolution','Operation Flood'],
      commonMistakes:['Only milk','No employment','Missing schemes'] },
    { id:'agri-animal-2', q:'Discuss poultry farming in India. (250 words)', words:250, marks:15, subject:'Animal Husbandry',
      keywords:['poultry','farming','chicken','hen','broiler','layer','egg','meat','feed','disease','vaccination','housing','management','hatchery','incubation','marketing','contract'],
      expectedPoints:['Poultry types','Broiler layer','Egg production','Feed management','Disease control','Housing','Marketing'],
      commonMistakes:['Only broiler','No layer','Missing diseases'] }
  ],

  // ========== ESSAY ==========
  essay: [
    { id:'essay-1', q:'"शिक्षा ही सामाजिक परिवर्तन का सबसे शक्तिशाली साधन है।" विवेचना करें। (300 words)', words:300, marks:20, subject:'Essay',
      keywords:['शिक्षा','सामाजिक','परिवर्तन','जागरूकता','सशक्तिकरण','समानता','विकास','ज्ञान','समाज','नागरिक','नैतिक','मूल्य','बदलाव','प्रगति','महिला','दलित','बाल','विवाह','केरल'],
      expectedPoints:['शिक्षा और जागरूकता','सामाजिक असमानता','महिला सशक्तिकरण','दलित उत्थान','लोकतंत्र','आर्थिक विकास','केरल उदाहरण'],
      commonMistakes:['Only slogans','No examples','Missing counter'] },
    { id:'essay-2', q:'"पर्यावरण संरक्षण और आर्थिक विकास साथ चल सकते हैं।" विश्लेषण करें। (300 words)', words:300, marks:20, subject:'Essay',
      keywords:['पर्यावरण','संरक्षण','आर्थिक','विकास','सतत','संतुलन','नवीकरणीय','ऊर्जा','प्रदूषण','हरित','तकनीक','नीति','जलवायु','कोप','पेरिस','एसडीजी','चक्रीय'],
      expectedPoints:['सतत विकास','हरित तकनीक','नवीकरणीय ऊर्जा','चक्रीय अर्थव्यवस्था','ESG निवेश','सौर ऊर्जा','COP सम्मेलन','चुनौतियाँ'],
      commonMistakes:['Only one side','No examples','Missing SDG'] },
    { id:'essay-3', q:'"भारत की विविधता ही उसकी शक्ति है।" विवेचना करें। (300 words)', words:300, marks:20, subject:'Essay',
      keywords:['भारत','विविधता','शक्ति','एकता','धर्म','भाषा','जाति','संस्कृति','त्योहार','खान','पहनावा','संगीत','नृत्य','लोकतंत्र','संघीय','सेcular','समावेशी'],
      expectedPoints:['भाषायी विविधता','धार्मिक विविधता','सांस्कृतिक विविधता','संघीय ढाँचा','लोकतंत्र','समावेशी विकास','चुनौतियाँ'],
      commonMistakes:['Only festivals','No political','Missing challenges'] }
  ],

  // ========== SOCIOLOGY ==========
  sociology: [
    { id:'soc-1', q:'Discuss the concept of social stratification. (250 words)', words:250, marks:15, subject:'Sociology',
      keywords:['social','stratification','caste','class','gender','power','status','functional','conflict','davis','moore','marx','weber','mobility','inequality','hierarchy'],
      expectedPoints:['Definition','Caste class gender','Functional theory','Conflict theory','Davis-Moore','Marx Weber','Social mobility'],
      commonMistakes:['Only caste','No theories','Missing mobility'] },
    { id:'soc-2', q:'Discuss the caste system in India. (250 words)', words:250, marks:15, subject:'Sociology',
      keywords:['caste','system','india','varna','jati','brahmin','kshatriya','vaishya','shudra','dalit','untouchability','endogamy','hierarchy','purity','pollution','sanskritization','dominant','caste'],
      expectedPoints:['Varna and Jati','Four varnas','Endogamy','Purity pollution','Untouchability','Sanskritization','Dominant caste'],
      commonMistakes:['Only varna','No change','Missing thinkers'] },
    { id:'soc-3', q:'Discuss social change in India. (250 words)', words:250, marks:15, subject:'Sociology',
      keywords:['social','change','india','modernization','westernization','sanskritization','industrialization','urbanization','globalization','secularization','tradition','modernity','caste','family','marriage'],
      expectedPoints:['Modernization','Westernization','Sanskritization','Industrialization','Urbanization','Globalization','Secularization'],
      commonMistakes:['Only modernization','Missing Sanskritization','No Srinivas'] }
  ]
};

// ========== SYNONYMS ==========
window.AC_SYNONYMS = {
  'constitution': ['संविधान','samvidhan'],
  'democracy': ['लोकतंत्र','loktantra'],
  'governor': ['राज्यपाल','rajyapal'],
  'president': ['राष्ट्रपति','rashtrapati'],
  'parliament': ['संसद','sansad'],
  'election': ['चुनाव','chunav'],
  'education': ['शिक्षा','shiksha'],
  'agriculture': ['कृषि','krishi','खेती'],
  'economy': ['अर्थव्यवस्था','arthvyavastha'],
  'environment': ['पर्यावरण','paryavaran'],
  'climate change': ['जलवायु परिवर्तन','climate'],
  'monsoon': ['मानसून','monsoon'],
  'industry': ['उद्योग','udyog'],
  'poverty': ['गरीबी','garibi'],
  'health': ['स्वास्थ्य','swasthya'],
  'women': ['महिला','mahila','स्त्री'],
  'development': ['विकास','vikas'],
  'rights': ['अधिकार','adhikar'],
  'justice': ['न्याय','nyaya'],
  'unity': ['एकता','ekta'],
  'nationalism': ['राष्ट्रवाद','rashtravad'],
  'federal': ['संघीय','sanghiya'],
  'governance': ['शासन','shasan'],
  'transparency': ['पारदर्शिता','pardarshita'],
  'accountability': ['जवाबदेही','javabdehi'],
  'corruption': ['भ्रष्टाचार','bhrashtachar'],
  'rice': ['धान','chawal','paddy'],
  'wheat': ['गेहूँ','gehun'],
  'soil': ['मिट्टी','mitti','मृदा'],
  'fertilizer': ['उर्वरक','khad','खाद'],
  'irrigation': ['सिंचाई','sinchai'],
  'crop': ['फसल','fasal'],
  'caste': ['जाति','jati'],
  'class': ['वर्ग','varg'],
  'society': ['समाज','samaj'],
  'culture': ['संस्कृति','sanskriti'],
  'history': ['इतिहास','itihas'],
  'geography': ['भूगोल','bhugol'],
  'polity': ['राजनीति','rajniti'],
  'ethics': ['नैतिकता','naitikta']
};

// ========== PHRASES ==========
window.AC_PHRASES = {
  intro: ['प्रस्तावना','introduction','भूमिका','परिचय','संदर्भ','context','background'],
  conclusion: ['निष्कर्ष','conclusion','अंत में','समापन','सुझाव','way forward','रास्ता'],
  points: ['पहला','दूसरा','तीसरा','प्रथम','द्वितीय','तृतीय','firstly','secondly','thirdly','(1)','(2)','1.','2.'],
  examples: ['उदाहरण','example','जैसे','for example','यथा','जैसे कि','case study','केस स्टडी'],
  data: ['प्रतिशत','percent','%','करोड़','crore','लाख','lakh','billion','2020','2021','2022','2023','2024','2025'],
  schemes: ['योजना','scheme','मिशन','mission','अधिनियम','act','नीति','policy','कार्यक्रम','program'],
  quotes: ['कहा','अनुसार','according','said','कथन','statement']
,

  // ========== JEE MAINS ==========
  jee_mains: [
    { id:'jee-m-1', q:'State and explain Newton\'s Laws of Motion with examples. (150 words)', words:150, marks:10, subject:'Physics',
      keywords:['newton','law','motion','inertia','force','mass','acceleration','action','reaction','momentum','frame','reference','equation'],
      expectedPoints:['First law - inertia','Second law - F=ma','Third law - action reaction','Examples','Applications'] },
    { id:'jee-m-2', q:'Discuss the periodic trends in properties of elements. (150 words)', words:150, marks:10, subject:'Chemistry',
      keywords:['periodic','trend','element','atomic','radius','ionization','electronegativity','electron','affinity','group','period','increase','decrease'],
      expectedPoints:['Atomic radius','Ionization energy','Electronegativity','Electron affinity','Metallic character'] },
    { id:'jee-m-3', q:'Explain the concept of limits and continuity in calculus. (200 words)', words:200, marks:12, subject:'Mathematics',
      keywords:['limit','continuity','calculus','function','left','right','approach','exist','differentiable','discontinuity','lhopital','infinity'],
      expectedPoints:['Definition of limit','Left-right limits','Continuity conditions','Types of discontinuity','L\'Hopital rule'] },
    { id:'jee-m-4', q:'Discuss the working principle of a transformer. (150 words)', words:150, marks:10, subject:'Physics',
      keywords:['transformer','mutual','induction','coil','primary','secondary','voltage','current','step','up','down','turns','ratio','efficiency','core','flux'],
      expectedPoints:['Mutual induction','Primary-secondary coils','Step up/down','Turns ratio','Applications'] },
    { id:'jee-m-5', q:'Discuss the structure and function of DNA. (200 words)', words:200, marks:12, subject:'Biology',
      keywords:['dna','structure','function','nucleotide','base','pair','adenine','thymine','guanine','cytosine','helix','double','strand','replication','gene','protein'],
      expectedPoints:['Double helix','Nucleotide composition','Base pairing','Replication','Protein synthesis'] }
  ],

  // ========== JEE ADVANCED ==========
  jee_adv: [
    { id:'jee-a-1', q:'Derive electric field due to uniformly charged infinite plane sheet. (250 words)', words:250, marks:15, subject:'Physics',
      keywords:['electric','field','charge','plane','sheet','infinite','gauss','law','flux','surface','density','sigma','perpendicular','uniform','epsilon','derivation'],
      expectedPoints:['Gaussian surface','Flux calculation','Gauss law','E = σ/2ε₀','Direction','Field independence'] },
    { id:'jee-a-2', q:'Discuss the mechanism of SN1 and SN2 reactions with examples. (250 words)', words:250, marks:15, subject:'Chemistry',
      keywords:['sn1','sn2','mechanism','nucleophilic','substitution','carbocation','transition','state','stereochemistry','inversion','retention','solvent','primary','tertiary','rate'],
      expectedPoints:['SN1 carbocation','SN2 concerted','Stereochemistry','Rate law','Solvent effect','Substrate effect'] },
    { id:'jee-a-3', q:'Prove that √2 is irrational using method of contradiction. (200 words)', words:200, marks:12, subject:'Mathematics',
      keywords:['irrational','proof','contradiction','root','square','prime','factor','rational','fraction','coprime','even','odd','assumption'],
      expectedPoints:['Assumption of rationality','Coprime form','Squaring','2 divides both','Contradiction','Conclusion'] }
  ],

  // ========== BA ENGLISH ==========
  ba_english: [
    { id:'ba-eng-1', q:'Discuss theme of colonialism in Achebe\'s "Things Fall Apart". (250 words)', words:250, marks:15, subject:'BA English',
      keywords:['things','fall','apart','achebe','colonialism','africa','igbo','okonkwo','british','missionary','culture','tradition','clash','identity','resistance','postcolonial'],
      expectedPoints:['Igbo society','British arrival','Missionary impact','Okonkwo','Cultural clash','Postcolonial themes'] },
    { id:'ba-eng-2', q:'Analyze the character of Hamlet as a tragic hero. (250 words)', words:250, marks:15, subject:'BA English',
      keywords:['hamlet','tragic','hero','shakespeare','revenge','procrastination','soliloquy','ghost','claudius','ophelia','denmark','flaw','hamartia','delay'],
      expectedPoints:['Noble birth','Hamartia','Revenge plot','Soliloquies','Tragic downfall'] },
    { id:'ba-eng-3', q:'Critical appreciation of Wordsworth\'s "The Solitary Reaper". (250 words)', words:250, marks:15, subject:'BA English',
      keywords:['solitary','reaper','wordsworth','romantic','nature','girl','song','highland','melancholy','recollection','emotion','spontaneity','hebrides','nightingale','cuckoo'],
      expectedPoints:['Romantic elements','Nature imagery','Emotion','Similes','Music and melancholy','Subjective experience'] }
  ],

  // ========== BA HISTORY ==========
  ba_history: [
    { id:'ba-hist-1', q:'Discuss the main features of Harappan civilization. (250 words)', words:250, marks:15, subject:'BA History',
      keywords:['harappa','indus','civilization','urban','planning','drainage','seals','script','bronze','trade','mohenjodaro','lothal','kalibanga','dholavira','great bath'],
      expectedPoints:['Urban planning','Drainage','Trade','Seals','Bronze age','Great Bath','Decline'] },
    { id:'ba-hist-2', q:'Analyze the causes of French Revolution of 1789. (250 words)', words:250, marks:15, subject:'BA History',
      keywords:['french','revolution','1789','bastille','louis','xvi','estates','general','bourgeoisie','enlightenment','liberty','equality','fraternity','absolute','monarchy','taxation'],
      expectedPoints:['Absolute monarchy','Social inequality','Economic crisis','Enlightenment','Estates General','Bastille'] },
    { id:'ba-hist-3', q:'Discuss impact of Industrial Revolution on Indian economy. (250 words)', words:250, marks:15, subject:'BA History',
      keywords:['industrial','revolution','india','economy','britain','deindustrialization','handicraft','textile','railway','trade','raw','material','drain','poverty','famine','colonial'],
      expectedPoints:['Deindustrialization','Handicrafts collapse','Raw material export','Railways','Drain of wealth','Famines'] }
  ],

  // ========== BA POLITICAL SCIENCE ==========
  ba_polity: [
    { id:'ba-pol-1', q:'Discuss the main features of the Indian Constitution. (250 words)', words:250, marks:15, subject:'BA Political Science',
      keywords:['constitution','feature','federal','unitary','secular','democratic','republic','fundamental','rights','directive','principles','parliamentary','amendment','bicameral','sovereign'],
      expectedPoints:['Longest written','Federal with unitary bias','Parliamentary','Fundamental Rights','DPSP','Secular','Amendment'] },
    { id:'ba-pol-2', q:'Discuss role of political parties in Indian democracy. (250 words)', words:250, marks:15, subject:'BA Political Science',
      keywords:['political','party','india','democracy','congress','bjp','coalition','election','representation','interest','aggregation','government','opposition','regional','national'],
      expectedPoints:['Functions','National vs regional','Coalition','Electoral role','Government formation','Opposition'] }
  ],

  // ========== MA ENGLISH ==========
  ma_english: [
    { id:'ma-eng-1', q:'Discuss stream of consciousness in Virginia Woolf\'s "Mrs Dalloway". (300 words)', words:300, marks:20, subject:'MA English',
      keywords:['stream','consciousness','woolf','mrs','dalloway','modernism','interior','monologue','time','memory','septimus','clarissa','big','ben','psychological','narrative','fragmented'],
      expectedPoints:['Stream of consciousness','Modernist technique','Interior monologue','Time and memory','Parallel characters','Fragmented narrative'] },
    { id:'ma-eng-2', q:'Analyze T.S. Eliot\'s "The Waste Land" as modernist epic. (300 words)', words:300, marks:20, subject:'MA English',
      keywords:['eliot','waste','land','modernist','epic','fragmentation','myth','allusion','april','cruelest','fisher','king','tiresias','unreal','city','spiritual','decay'],
      expectedPoints:['Modernist features','Mythical method','Fragmentation','Allusions','Multiple voices','Tiresias','Regeneration'] },
    { id:'ma-eng-3', q:'Discuss postcolonial theory in Edward Said\'s "Orientalism". (300 words)', words:300, marks:20, subject:'MA English',
      keywords:['postcolonial','theory','said','orientalism','east','west','discourse','representation','power','knowledge','foucault','colonial','other','imperialism','culture','hegemony'],
      expectedPoints:['Orientalism definition','East-West binary','Knowledge-power','Foucault influence','Other representation','Colonial discourse'] }
  ],

  // ========== MA HISTORY ==========
  ma_history: [
    { id:'ma-hist-1', q:'Discuss main features of Mughal administration. (300 words)', words:300, marks:20, subject:'MA History',
      keywords:['mughal','administration','akbar','mansabdari','jagirdari','central','provincial','subah','diwan','bakshi','sadr','qazi','wazir','revenue','zamindar','todar','mal'],
      expectedPoints:['Central admin','Mansabdari','Jagirdari','Provincial admin','Revenue - Todar Mal','Judicial','Military'] },
    { id:'ma-hist-2', q:'Analyze causes and consequences of Partition of India 1947. (300 words)', words:300, marks:20, subject:'MA History',
      keywords:['partition','1947','india','pakistan','muslim','league','congress','jinnah','nehru','mountbatten','radcliffe','communal','violence','migration','refugee','kashmir','independence'],
      expectedPoints:['Two-nation theory','Communal politics','Jinnah','Congress-League','Mountbatten Plan','Radcliffe Line','Migration','Violence'] }
  ],

  // ========== MA POLITICAL SCIENCE ==========
  ma_polity: [
    { id:'ma-pol-1', q:'Discuss the concept of sovereignty in modern political theory. (300 words)', words:300, marks:20, subject:'MA Political Science',
      keywords:['sovereignty','modern','political','theory','state','power','austin','bodino','legal','popular','external','internal','absolute','limited','globalization','pluralist'],
      expectedPoints:['Definition','Bodin Austin','Types','Internal vs external','Pluralist critique','Globalization impact'] },
    { id:'ma-pol-2', q:'Explain John Rawls\' theory of justice. (300 words)', words:300, marks:20, subject:'MA Political Science',
      keywords:['rawls','justice','theory','fairness','veil','ignorance','original','position','liberty','equality','difference','principle','social','primary','goods','distributive','liberal'],
      expectedPoints:['Justice as fairness','Veil of ignorance','Original position','Two principles','Difference principle','Primary goods'] }
  ]
};
