// Scannerverse - Local Directory & Guide Data
// Maintained for Wakad, Pune & surrounding areas

const APP_CONFIG = {
  appName: "Scannerverse",
  city: "Wakad, Pune 411057",
  defaultCoordinates: {
    lat: 18.5987,
    lng: 73.7615
  },
  contactEmail: "anurag.aparaitech@gmail.com",
  version: "1.0.0",
  lastUpdated: "October 2026",
  mapsSearchBase: "https://www.google.com/maps/search/?api=1&query=",
  mapsDirBase: "https://www.google.com/maps/dir/?api=1&destination="
};

const I18N = {
  en: {
    heroTitle: "Welcome to Wakad, Pune",
    heroSubtitle: "Your smart neighborhood directory. Scan QR, discover essentials, and navigate the city easily.",
    searchPlaceholder: "Search hospitals, food, chowks, metro, hotels...",
    sosButton: "EMERGENCY 112",
    scanQrBtn: "Scan QR",
    generateQrBtn: "Make QR",
    nearMe: "Near Me",
    allCategories: "Explore Categories",
    quickAccess: "Quick Access",
    openMap: "Map",
    getDirections: "Directions",
    callNow: "Call",
    backToList: "Back to Home",
    noResults: "No places found matching your search. Try another keyword or browse categories.",
    liveSearchTitle: "Live search on Google Maps",
    scannerTitle: "QR Code Scanner",
    scannerSubtitle: "Scan any QR code using your device camera or upload an image file.",
    scanCameraTab: "Live Camera",
    scanFileTab: "Upload Image",
    startCamera: "Start Camera",
    stopCamera: "Stop Camera",
    dropImageText: "Click or drop a QR code image here",
    scannedResult: "Scanned Result",
    openLink: "Open Link",
    copyText: "Copy Content",
    copiedToast: "Copied to clipboard!",
    generatorTitle: "QR Code Generator",
    generatorSubtitle: "Generate a QR code for any local place, website URL, or contact info.",
    inputQrData: "Enter link or text:",
    generateBtn: "Generate QR",
    downloadQrBtn: "Download QR",
    verifiedPlace: "Verified Local Spot",
    footerMadeBy: "Scannerverse • Smart Local Directory & Scanner for Pune",
    emergencyNote: "For immediate police, fire, or medical emergencies in Maharashtra, call 112 directly."
  },
  mr: {
    heroTitle: "वाकड, पुणे मध्ये आपले स्वागत आहे",
    heroSubtitle: "तुमचा स्मार्ट स्थानिक मार्गदर्शक. QR स्कॅन करा, महत्त्वाची ठिकाणे शोधा आणि प्रवास सुलभ करा.",
    searchPlaceholder: "रुग्णालये, हॉटेल्स, चौक, मेट्रो, सेवा शोधा...",
    sosButton: "आणीबाणी 112",
    scanQrBtn: "QR स्कॅन",
    generateQrBtn: "QR बनवा",
    nearMe: "माझ्या जवळ",
    allCategories: "सर्व विभाग",
    quickAccess: "जलद सेवा",
    openMap: "नकाशा",
    getDirections: "मार्ग",
    callNow: "कॉल",
    backToList: "मुख्य पृष्ठावर जा",
    noResults: "कोणतेही ठिकाण सापडले नाही. कृपया दुसरा शब्द शोधून पहा.",
    liveSearchTitle: "Google Maps वर थेट शोधा",
    scannerTitle: "QR कोड स्कॅनर",
    scannerSubtitle: "तुमच्या कॅमेऱ्याने किंवा फोटो अपलोड करून कोणताही QR कोड स्कॅन करा.",
    scanCameraTab: "थेट कॅमेरा",
    scanFileTab: "फोटो निवडा",
    startCamera: "कॅमेरा सुरू करा",
    stopCamera: "कॅमेरा बंद करा",
    dropImageText: "येथे QR कोड फोटो ड्रॅग करा किंवा निवडा",
    scannedResult: "स्कॅन केलेले निकाल",
    openLink: "लिंक उघडा",
    copyText: "माहिती कॉपी करा",
    copiedToast: "कॉपी केले गेले!",
    generatorTitle: "QR कोड तयार करा",
    generatorSubtitle: "कोणत्याही ठिकाणासाठी, लिंकसाठी किंवा संपर्कासाठी स्वतःचा QR कोड बनवा.",
    inputQrData: "लिंक किंवा माहिती टाका:",
    generateBtn: "QR बनवा",
    downloadQrBtn: "डाउनलोड करा",
    verifiedPlace: "सत्यापित स्थानिक ठिकाण",
    footerMadeBy: "स्कॅनरव्हर्स • पुणेकरांसाठी स्मार्ट स्थानिक डिरेक्टरी व स्कॅनर",
    emergencyNote: "कोणत्याही आणीबाणीच्या वेळी त्वरित 112 क्रमांकावर संपर्क साधा."
  },
  hi: {
    heroTitle: "वाकड, पुणे में आपका स्वागत है",
    heroSubtitle: "आपका स्मार्ट स्थानीय गाइड। QR स्कैन करें, जरूरी स्थान ढूंढें और आसानी से घूमें।",
    searchPlaceholder: "अस्पताल, भोजन, चौक, मेट्रो, होटल खोजें...",
    sosButton: "आपातकाल 112",
    scanQrBtn: "QR स्कैन",
    generateQrBtn: "QR बनाएँ",
    nearMe: "आस-पास",
    allCategories: "सभी श्रेणियां",
    quickAccess: "त्वरित पहुँच",
    openMap: "मैप",
    getDirections: "रास्ता",
    callNow: "कॉल करें",
    backToList: "मुख्य पेज पर जाएँ",
    noResults: "कोई परिणाम नहीं मिला। कृपया दूसरा शब्द लिखकर खोजें।",
    liveSearchTitle: "Google Maps पर लाइव खोजें",
    scannerTitle: "QR कोड स्कैनर",
    scannerSubtitle: "अपने कैमरे या फोटो अपलोड करके किसी भी QR कोड को स्कैन करें।",
    scanCameraTab: "लाइव कैमरा",
    scanFileTab: "फोटो चुनें",
    startCamera: "कैमरा शुरू करें",
    stopCamera: "कैमरा बंद करें",
    dropImageText: "यहाँ QR कोड फोटो डालें या चुनें",
    scannedResult: "स्कैन परिणाम",
    openLink: "लिंक खोलें",
    copyText: "कॉपी करें",
    copiedToast: "कॉपी हो गया!",
    generatorTitle: "QR कोड बनाएँ",
    generatorSubtitle: "किसी भी जगह, वेबसाइट लिंक या संपर्क के लिए नया QR कोड बनाएँ।",
    inputQrData: "लिंक या जानकारी दर्ज करें:",
    generateBtn: "QR बनाएँ",
    downloadQrBtn: "डाउनलोड करें",
    verifiedPlace: "सत्यापित स्थानीय स्थान",
    footerMadeBy: "स्कैनरवर्स • स्मार्ट लोकल डायरेक्टरी एवं स्कैनर",
    emergencyNote: "आपातकाल के समय तुरंत 112 नंबर डायल करें।"
  }
};

const CATEGORIES = [
  {
    id: "hospitals",
    icon: "🏥",
    title: {
      en: "Hospitals & Healthcare",
      mr: "रुग्णालये व आरोग्य सेवा",
      hi: "अस्पताल एवं स्वास्थ्य सेवा"
    },
    desc: {
      en: "24/7 emergency clinics, multispeciality hospitals, and pharmacies",
      mr: "२४ तास आपत्कालीन सेवा, मल्टिस्पेशालिटी हॉस्पिटल्स आणि औषध दुकाने",
      hi: "24 घंटे आपातकालीन सेवा, अस्पताल और मेडिकल स्टोर्स"
    },
    keywords: "hospital doctor clinic pharmacy ambulance medicine medical icu trauma emergency",
    liveSearches: [
      "Hospitals open 24 hours",
      "Pharmacies open 24/7",
      "Pediatric clinics",
      "Diagnostic centers & Labs",
      "Ambulance service"
    ],
    places: [
      {
        name: "Lifepoint Multispeciality Hospital",
        address: "Near Sayaji Hotel, Mumbai-Bangalore Highway, Wakad, Pune",
        phone: "+912067106710",
        timing: "Open 24 Hours • Emergency & ICU",
        tags: ["Multispeciality", "24/7 Emergency", "Cashless Mediclaim"],
        highlight: "Primary trauma and multispeciality care right on the highway bypass."
      },
      {
        name: "Ruby Hall Clinic Hinjawadi",
        address: "Rajiv Gandhi Infotech Park, Hinjawadi Phase 1 (Bordering Wakad)",
        phone: "+912066455100",
        timing: "Open 24 Hours • Cardiac Care & Emergency",
        tags: ["NABH Accredited", "Trauma Unit", "Full Diagnostics"],
        highlight: "Premier hospital with extensive critical care and specialist OPDs."
      },
      {
        name: "Surya Mother & Child Super Speciality Hospital",
        address: "Near Bhujbal Chowk, Mumbai-Pune Bypass, Wakad",
        phone: "+912067915555",
        timing: "Open 24 Hours • Pediatric & Maternity",
        tags: ["Pediatrics", "NICU", "Maternity"],
        highlight: "Top regional destination for women, infants, and pediatric care."
      },
      {
        name: "Hinjawadi Superspeciality Hospital",
        address: "Hinjewadi-Wakad Road, near Shivaji Chowk",
        phone: "+912022933000",
        timing: "Open 24 Hours",
        tags: ["Orthopedics", "General Surgery", "Pharmacy"],
        highlight: "Accessible multispeciality hospital bridging Wakad and Hinjewadi."
      },
      {
        name: "Apex Multispeciality Hospital",
        address: "Dange Chowk Road, Wakad, Pune",
        phone: "+918048039393",
        timing: "Open 24 Hours",
        tags: ["OPD", "Diagnostics", "24/7 Pharmacy"],
        highlight: "Community multispeciality hospital serving Dange Chowk and Wakad."
      }
    ]
  },
  {
    id: "food",
    icon: "🍽️",
    title: {
      en: "Food, Cafes & Dining",
      mr: "उपाहारगृहे, कॅफे व खाऊ गल्ली",
      hi: "रेस्तरां, कैफे व खान-पान"
    },
    desc: {
      en: "Popular family restaurants, authentic Maharashtrian breakfast, and trendy cafes",
      mr: "कुटुंबासाठी हॉटेल्स, अस्सल महाराष्ट्रीयन नाश्ता आणि कॅफे",
      hi: "फैमिली रेस्टोरेंट, महाराष्ट्रीयन नाश्ता और लोकप्रिय कैफे"
    },
    keywords: "food restaurant cafe breakfast lunch dinner misal biryani veg nonveg coffee bakery sweets",
    liveSearches: [
      "Pure vegetarian restaurants",
      "Family dining restaurants",
      "Cafes with WiFi and coffee",
      "Maharashtrian Misal and breakfast",
      "Late night food delivery"
    ],
    places: [
      {
        name: "Irani Cafe Wakad",
        address: "Datta Mandir Road, Shankar Kalat Nagar, Wakad",
        phone: "+917420000000",
        timing: "6:00 AM – 11:30 PM",
        tags: ["Bun Maska", "Irani Chai", "Keema Pav", "Parsi Delicacies"],
        highlight: "Famous for morning tea, bun maska, omelettes, and casual hangout vibes."
      },
      {
        name: "Nisarg Coastal Seafood",
        address: "Near Wakad Flyover, Mumbai-Pune Bypass",
        phone: "+912024220000",
        timing: "11:30 AM – 11:00 PM",
        tags: ["Seafood", "Malvani", "Family Dining"],
        highlight: "Renowned destination for authentic coastal fish curries and thalis."
      },
      {
        name: "Barbeque Nation (Sayaji Hotel)",
        address: "Sayaji Hotel, Mumbai-Bangalore Highway, Wakad",
        phone: "+912042121212",
        timing: "12:00 PM – 3:30 PM, 7:00 PM – 11:00 PM",
        tags: ["Buffet", "Live Grill", "Dessert Bar"],
        highlight: "Celebrated live grill buffet with extensive vegetarian and non-veg options."
      },
      {
        name: "Cafe Peter Wakad",
        address: "Datta Mandir Road, Wakad",
        phone: "+918484000000",
        timing: "8:00 AM – 11:00 PM",
        tags: ["Korean Ramen", "Donuts", "Brewed Coffee", "Work Friendly"],
        highlight: "Cozy ambience suitable for work from cafe, fresh baked pastries and coffee."
      },
      {
        name: "Anna Idli Wakad",
        address: "Kaspate Wasti Road, Wakad",
        phone: "+919850000000",
        timing: "7:00 AM – 10:30 PM",
        tags: ["South Indian", "Filter Coffee", "Ghee Dosa", "Pure Veg"],
        highlight: "Popular breakfast spot serving steaming idlis, crispy dosas, and filter coffee."
      }
    ]
  },
  {
    id: "transport",
    icon: "🚌",
    title: {
      en: "Public Transit & Travel",
      mr: "सार्वजनिक वाहतूक व प्रवास",
      hi: "सार्वजनिक परिवहन व यात्रा"
    },
    desc: {
      en: "PMPML bus stops, upcoming Metro Line 3, train stations, and airport connectivity",
      mr: "PMPML बस थांबे, आगामी मेट्रो लाईन ३, रेल्वे स्टेशन आणि विमानतळ",
      hi: "PMPML बस स्टॉप, मेट्रो लाइन 3, रेलवे स्टेशन व एयरपोर्ट"
    },
    keywords: "bus transport metro train railway airport pmpml cab auto rickshaw travel transit",
    liveSearches: [
      "Bus stops near me",
      "Pune Metro stations",
      "Taxi stand and auto stand",
      "EV Charging Stations"
    ],
    places: [
      {
        name: "Wakad Chowk Bus Stop",
        address: "Wakad Chowk, Mumbai-Pune Expressway Corridor",
        phone: "020-24440417",
        timing: "24/7 Connectivity (Frequent PMPML routes)",
        tags: ["PMPML Hub", "Outstation Buses", "Auto Stand"],
        highlight: "Central bus boarding point connecting Hinjewadi, Katraj, PMC and outstation routes."
      },
      {
        name: "Bhumkar Chowk Bus Stop",
        address: "Bhumkar Chowk, Wakad",
        phone: "020-24440417",
        timing: "5:30 AM – 11:30 PM",
        tags: ["Hinjewadi Route", "Ravet Link"],
        highlight: "Key transit junction for IT professionals heading towards Phase 1 & 2."
      },
      {
        name: "Dange Chowk Bus Interchange",
        address: "Dange Chowk Flyover Junction, Wakad/Thergaon",
        phone: "020-24440417",
        timing: "5:00 AM – Midnight",
        tags: ["Interchange", "Chinchwad Connect", "High Frequency"],
        highlight: "Major connection hub linking PCMC, Pimpri, Chinchwad, and Hinjewadi."
      },
      {
        name: "Wakad Chowk Metro Station (Line 3)",
        address: "Under Construction: Pune Metro Line 3 (Hinjewadi – Shivajinagar)",
        phone: "",
        timing: "Upcoming Elevated Metro Station",
        tags: ["Metro Line 3", "Direct to Shivajinagar", "Fast Transit"],
        highlight: "Upcoming express metro line connecting Wakad directly to Pune center."
      },
      {
        name: "Pimpri Metro Station (Purple Line)",
        address: "Old Mumbai-Pune Highway, Pimpri (~7.5 km from Wakad)",
        phone: "020-26051605",
        timing: "6:00 AM – 10:00 PM",
        tags: ["Operating Metro", "Purple Line", "PCMC Hub"],
        highlight: "Currently operational metro station providing rail link to Pune Court and Swargate."
      },
      {
        name: "Chinchwad Railway Station",
        address: "Station Road, Chinchwad (~8 km from Wakad)",
        phone: "139",
        timing: "24/7 Operations",
        tags: ["Suburban Railway", "Local Trains to Lonavala & Pune"],
        highlight: "Closest railway hub for Pune suburban local train commutes."
      },
      {
        name: "Pune Junction Railway Station",
        address: "Agarkar Nagar, Pune Central (~17 km from Wakad)",
        phone: "139",
        timing: "24/7 Major Railway Terminus",
        tags: ["Main Terminal", "Interstate Trains"],
        highlight: "Main railway junction of Pune with nationwide train connectivity."
      },
      {
        name: "Pune International Airport (PNQ)",
        address: "New Airport Road, Lohegaon, Pune (~21 km)",
        phone: "020-26683232",
        timing: "24/7 Domestic & International Flights",
        tags: ["Domestic", "International", "Prepaid Taxi"],
        highlight: "Primary commercial airport serving Pune metropolitan region."
      }
    ]
  },
  {
    id: "shopping",
    icon: "🛍️",
    title: {
      en: "Shopping Malls & Leisure",
      mr: "शॉपिंग मॉल्स व करमणूक",
      hi: "शॉपिंग मॉल व मनोरंजन"
    },
    desc: {
      en: "Premier retail destinations, multiplexes, supermarkets, and family entertainment",
      mr: "प्रसिद्ध मॉल्स, चित्रपटगृहे, सुपरमार्केट्स आणि मनोरंजन",
      hi: "मॉल, मल्टीप्लेक्स, सुपरमार्केट और परिवार के लिए मनोरंजन"
    },
    keywords: "mall shopping clothes cinema multiplex imax supermarket grocery entertainment kids",
    liveSearches: [
      "Shopping malls near me",
      "Movie theaters & Multiplexes",
      "Supermarkets & Grocery",
      "Children play zones"
    ],
    places: [
      {
        name: "Phoenix Mall of the Millennium",
        address: "Shankar Kalat Nagar, Sayaji Bypass, Wakad, Pune",
        phone: "+912069000000",
        timing: "11:00 AM – 10:00 PM (Daily)",
        tags: ["Mega Mall", "INシアター IMAX", "Global Brands", "Food Court"],
        highlight: "One of Pune's largest luxury shopping destinations with 300+ international stores."
      },
      {
        name: "Vision One Mall",
        address: "Bhumkar Chowk, Mumbai-Bangalore Highway, Wakad",
        phone: "+912066000000",
        timing: "10:00 AM – 10:30 PM",
        tags: ["Cinemas", "Fast Food", "Hypermarket", "Easy Parking"],
        highlight: "Vibrant neighborhood mall featuring retail outlets, movies, and food chains."
      },
      {
        name: "D-Mart Wakad",
        address: "Near Datta Mandir, Kaspate Wasti Road, Wakad",
        phone: "+912067000000",
        timing: "7:00 AM – 10:30 PM",
        tags: ["Groceries", "Household Essentials", "Discounts"],
        highlight: "The go-to hypermarket for monthly grocery shopping and home goods at best rates."
      },
      {
        name: "Thergaon Boat Club & Garden",
        address: "Pavana Riverfront, Thergaon (~3 km from Dange Chowk)",
        phone: "",
        timing: "9:00 AM – 7:00 PM",
        tags: ["Boating", "Jogging Park", "Children Garden"],
        highlight: "Scenic riverside garden with pedal boats, walking tracks, and play areas for kids."
      }
    ]
  },
  {
    id: "spiritual",
    icon: "🛕",
    title: {
      en: "Temples & Pilgrimage",
      mr: "धार्मिक स्थळे व मंदिरे",
      hi: "धार्मिक स्थल एवं मंदिर"
    },
    desc: {
      en: "Sacred shrines, historic village temples, and regional pilgrimage towns",
      mr: "पवित्र मंदिरे, ऐतिहासिक ग्रामदैवत आणि तीर्थक्षेत्रे",
      hi: "पवित्र मंदिर, ग्रामदैवत और प्रसिद्ध तीर्थ स्थल"
    },
    keywords: "temple mandir church gurudwara mosque spiritual prayer shrine pilgrimage devasthanam",
    liveSearches: [
      "Temples near Wakad",
      "Gurudwara near Wakad",
      "Churches in PCMC",
      "Mosques near Hinjewadi"
    ],
    places: [
      {
        name: "Mhatoba Mandir Wakad",
        address: "Mhatoba Nagar, Wakad Gaon, Pune",
        phone: "",
        timing: "6:00 AM – 9:00 PM",
        tags: ["Gramdaivat", "Historic Heritage", "Quiet Atmosphere"],
        highlight: "Revered historic village deity temple of Wakad, steeped in local tradition."
      },
      {
        name: "Dehu – Sant Tukaram Maharaj Mandir",
        address: "Dehu, on banks of Indrayani River (~18 km from Wakad)",
        phone: "020-27671234",
        timing: "5:00 AM – 9:30 PM",
        tags: ["Warkari Pilgrimage", "Gatha Mandir", "Indrayani Ghat"],
        highlight: "World-famous pilgrimage honoring the legendary 17th-century Bhakti saint Sant Tukaram."
      },
      {
        name: "Alandi – Sant Dnyaneshwar Maharaj Samadhi",
        address: "Alandi Devachi (~26 km from Wakad)",
        phone: "020-27185200",
        timing: "5:00 AM – 10:00 PM",
        tags: ["Sanjeevan Samadhi", "Sacred Temple", "Varkari Center"],
        highlight: "Profound spiritual center venerating Sant Dnyaneshwar's samadhi along the Indrayani."
      },
      {
        name: "Guru Nanak Darbar Gurudwara",
        address: "Near Dange Chowk / Kalewadi Link Road",
        phone: "",
        timing: "5:00 AM – 9:00 PM",
        tags: ["Langar", "Peaceful", "Community Worship"],
        highlight: "Community Gurudwara welcoming all visitors with daily prayers and community langar."
      }
    ]
  },
  {
    id: "landmarks",
    icon: "🛣️",
    title: {
      en: "Key Roads & Chowks",
      mr: "प्रमुख रस्ते व चौक",
      hi: "प्रमुख सड़कें व चौक"
    },
    desc: {
      en: "Main road intersections, highway corridors, and Hinjewadi IT park entry points",
      mr: "मुख्य चौक, महामार्ग आणि हिंजवडी आयटी पार्क प्रवेशद्वार",
      hi: "प्रमुख चौराहे, हाईवे कॉरिडोर और हिंजवड़ी आईटी पार्क प्रवेश मार्ग"
    },
    keywords: "road chowk circle junction highway route expressway bridge flyover intersection",
    liveSearches: [
      "Major traffic junctions in Wakad",
      "Mumbai Pune Expressway entry",
      "Hinjewadi Phase 1 route"
    ],
    places: [
      {
        name: "Wakad Chowk Junction",
        address: "Mumbai-Pune Bypass (NH 48), Wakad",
        phone: "",
        timing: "24/7 Highway Corridor",
        tags: ["Expressway Access", "Primary Landmark", "Flyover"],
        highlight: "Crucial intersection linking Pune city with the Mumbai-Pune Expressway."
      },
      {
        name: "Bhumkar Chowk",
        address: "Bhumkar Chowk, Hinjewadi-Wakad Road",
        phone: "",
        timing: "24/7 Traffic Hub",
        tags: ["IT Commute", "Commercial Zone", "Buses"],
        highlight: "Bustling junction packed with tech commuters, food joints, and transport stops."
      },
      {
        name: "Dange Chowk Flyover",
        address: "Dange Chowk, PCMC Link Road",
        phone: "",
        timing: "24/7 Arterial Junction",
        tags: ["Grade Separator", "PCMC Link", "Thergaon Gateway"],
        highlight: "High-capacity flyover junction joining Wakad to Chinchwad and Nigdi."
      },
      {
        name: "Shivaji Chowk Hinjawadi",
        address: "Entry point to Rajiv Gandhi Infotech Park",
        phone: "",
        timing: "24/7 Gateway",
        tags: ["IT Park Entrance", "Grand Statue", "Commercial Hub"],
        highlight: "The iconic gateway welcoming hundreds of thousands of IT professionals daily."
      },
      {
        name: "Hinjewadi-Wakad Link Road",
        address: "Arterial Spine connecting Wakad to Phase 1",
        phone: "",
        timing: "24/7 Thoroughfare",
        tags: ["Food Street", "Shopping", "High Density"],
        highlight: "Lively street lined with residential societies, cafes, bakeries, and essential stores."
      }
    ]
  },
  {
    id: "civic",
    icon: "🏛️",
    title: {
      en: "Civic & Essential Services",
      mr: "नागरी व प्रशासकीय सेवा",
      hi: "नागरिक एवं आवश्यक सेवाएँ"
    },
    desc: {
      en: "Police stations, fire brigade, post office, ATMs, and PCMC municipal centers",
      mr: "पोलीस ठाणे, अग्निशामक दल, पोस्ट ऑफिस, एटीएम आणि महापालिका सेवा",
      hi: "पुलिस स्टेशन, फायर ब्रिगेड, डाकघर, एटीएम और निगम सेवाएँ"
    },
    keywords: "police safety security fire post municipal pcmc citizen aadhaar bank atm fuel petrol",
    liveSearches: [
      "Police stations in Wakad",
      "ATMs and banks nearby",
      "Petrol and CNG pumps",
      "PCMC citizen facilitation center"
    ],
    places: [
      {
        name: "Wakad Police Station",
        address: "Datta Mandir Road, Kaspate Wasti, Wakad, Pune",
        phone: "020-27276100",
        timing: "Open 24 Hours • Law & Order",
        tags: ["PCMC Police", "24/7 Help Desk", "Women Cell"],
        highlight: "Jurisdictional police station for Wakad, Hinjewadi link, and neighbouring sectors."
      },
      {
        name: "Hinjewadi Police Station",
        address: "Near Shivaji Chowk, Phase 1, Hinjewadi",
        phone: "020-22938300",
        timing: "Open 24 Hours",
        tags: ["IT Park Security", "24/7 Assistance"],
        highlight: "Police headquarters overseeing security and traffic for Hinjewadi IT corridor."
      },
      {
        name: "PCMC Fire Station (Rahatani / Wakad)",
        address: "Rahatani-Wakad Link Road, PCMC",
        phone: "101",
        timing: "24/7 Emergency Fire & Rescue",
        tags: ["Fire Rescue", "Disaster Response"],
        highlight: "Equipped with hydraulic ladders and fast response engines for western PCMC."
      },
      {
        name: "Wakad Sub Post Office",
        address: "Near Datta Mandir, Kaspate Wasti, Wakad",
        phone: "020-27278000",
        timing: "9:00 AM – 5:00 PM (Mon–Sat)",
        tags: ["India Post", "Speed Post", "Savings Accounts"],
        highlight: "Full-service postal counter for letters, speed post, Aadhaar updates and parcel booking."
      }
    ]
  },
  {
    id: "sos",
    icon: "📞",
    title: {
      en: "Emergency Helplines",
      mr: "आणीबाणी संपर्क क्रमांक",
      hi: "आपातकालीन हेल्पलाइन नंबर"
    },
    desc: {
      en: "Direct toll-free hotlines for police, ambulance, fire, women, and child safety",
      mr: "पोलीस, रुग्णवाहिका, अग्निशमन, महिला व बाल मदतीसाठी २४ तास मोफत क्रमांक",
      hi: "पुलिस, एम्बुलेंस, फायर और महिला सुरक्षा के 24 घंटे आपातकालीन नंबर"
    },
    keywords: "emergency call sos 112 100 108 ambulance police fire helpline women child distress",
    liveSearches: [],
    helplines: [
      {
        number: "112",
        name: {
          en: "All-in-One National Emergency Helpline",
          mr: "सर्वसमावेशक राष्ट्रीय आणीबाणी सेवा",
          hi: "अखिल भारतीय आपातकालीन नंबर"
        },
        badge: "Single Emergency Number"
      },
      {
        number: "108",
        name: {
          en: "Maharashtra Emergency Medical & Ambulance Service",
          mr: "महाराष्ट्र मोफत आपत्कालीन रुग्णवाहिका सेवा",
          hi: "महाराष्ट्र आपातकालीन एम्बुलेंस सेवा"
        },
        badge: "Free Ambulance 24/7"
      },
      {
        number: "100",
        name: {
          en: "Police Control Room (Pune / PCMC)",
          mr: "पोलीस नियंत्रण कक्ष (पुणे / पिंपरी-चिंचवड)",
          hi: "पुलिस कंट्रोल रूम"
        },
        badge: "Police Assistance"
      },
      {
        number: "101",
        name: {
          en: "Fire Brigade & Rescue Control",
          mr: "अग्निशामक व बचाव नियंत्रण",
          hi: "दमकल एवं बचाव सेवा"
        },
        badge: "Fire Emergency"
      },
      {
        number: "1091",
        name: {
          en: "Women Helpline (24/7 Distress & Safety)",
          mr: "महिला हेल्पलाइन (२४ तास सुरक्षा व साहाय्य)",
          hi: "महिला सुरक्षा हेल्पलाइन"
        },
        badge: "Women Safety"
      },
      {
        number: "1098",
        name: {
          en: "Childline (National Emergency for Children)",
          mr: "बाल हेल्पलाइन (मुलांच्या सुरक्षेसाठी)",
          hi: "चाइल्डलाइन (बच्चों की सुरक्षा)"
        },
        badge: "Child Care & Protection"
      },
      {
        number: "1033",
        name: {
          en: "National Highway Emergency (NHAI - Expressway & Bypass)",
          mr: "राष्ट्रीय महामार्ग आणीबाणी सेवा (NHAI)",
          hi: "राष्ट्रीय राजमार्ग हेल्पलाइन"
        },
        badge: "Highway Breakdown / Accident"
      }
    ],
    places: []
  }
];
