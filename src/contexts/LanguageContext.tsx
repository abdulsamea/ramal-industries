import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  language: "en" | "ar";
  setLanguage: (lang: "en" | "ar") => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    ramalIndustries: "Ramal Industries",
    // Navigation
    home: "Home",
    products: "Products",
    Hoses: "Hoses",
    Bellows: "Bellows",
    "End Fittings": "End Fittings",
    about: "About Us",
    contact: "Contact Us",
    language: "Language",

    // Home Page
    heroTitle: "Leading Supplier of Flexible Hose Solutions",
    heroSubtitle:
      "Specializing in Flexible Hoses, Bellow Solutions, and Premium End Fittings for Industrial Applications",
    learnMore: "Learn More",
    getQuote: "Get Quote",
    whyChooseUs: "Why Choose Ramal Industries?",
    whyChooseSubtitle:
      "We deliver excellence through innovation, quality, and customer satisfaction",
    readyToStart: "Ready to Get Started?",
    readySubtitle:
      "Contact us today for customized solutions that meet your specific industrial requirements",
    getInTouch: "Get in Touch",
    ourProducts: "Our Products",
    ourProductsSubtitle:
      "Comprehensive range of industrial hose solutions and fittings",

    // Product Features
    qualityAssurance: "Quality Assurance",
    qualityDesc:
      "ISO certified manufacturing processes ensuring the highest quality standards",
    expertTeam: "Expert Team",
    expertDesc: "Experienced professionals with decades of industry expertise",
    quickDelivery: "Quick Delivery",
    quickDesc: "Fast turnaround times with efficient supply chain management",

    // Products
    flexibleHose: "Flexible Hose",
    flexibleHoseDesc:
      "High-quality flexible hoses for various industrial applications",
    bellowSolutions: "Bellow Solutions",
    bellowDesc:
      "Precision-engineered bellow systems for specialized requirements",
    endFittings: "End Fittings",
    endFittingsDesc:
      "Comprehensive range of end fittings including flanges and couplings",
    flanges: "Flanges",
    quickRelease: "Quick Release Coupling",
    camlock: "Camlock Coupling",
    triclover: "Tri-Clover Fittings",

    // Hoses Page
    flexibleHosesTitle: "Flexible Hoses",
    flexibleHosesSubtitle:
      "High-quality flexible hoses for diverse industrial applications",
    metalFlexibleHoses: "Metal Flexible Hoses",
    metalHoseDesc:
      "High-performance metal hoses designed for extreme temperature and pressure conditions",
    foodGradeHoses: "Food Grade Hoses",
    foodHoseDesc:
      "FDA approved hoses specifically designed for food and beverage industry applications",
    compositeHoses: "Composite Tanker Hoses",
    compositeDesc:
      "Heavy-duty composite hoses for marine and industrial tanker applications",
    rubberHoses: "Industrial Rubber Hoses",
    rubberDesc: "Versatile rubber hoses for general industrial applications",
    needCustomHose: "Need Custom Hose Solutions?",
    customHoseDesc:
      "Contact our experts for customized hose solutions tailored to your specific requirements",

    // Bellows Page
    bellowSolutionsTitle: "Bellow Solutions",
    bellowSolutionsSubtitle:
      "Precision-engineered expansion joints and bellows for industrial applications",
    stainlessBellows: "Stainless Steel Expansion Bellows",
    stainlessBellowDesc:
      "High-quality stainless steel bellows for thermal expansion and vibration absorption",
    rubberBellows: "Rubber Expansion Bellows",
    rubberBellowDesc:
      "Flexible rubber bellows designed for vibration isolation and thermal movement",
    ptfeBellows: "PTFE Bellow Expansion Joints",
    ptfeBellowDesc:
      "Chemical resistant PTFE bellows for aggressive chemical environments",
    fabricBellows: "High Temperature Fabric Bellow",
    fabricBellowDesc:
      "Specialized fabric bellows designed for high-temperature applications and thermal insulation",
    whyChooseBellows: "Why Choose Our Bellows?",
    bellowBenefitsDesc:
      "Our bellows provide superior performance and reliability",
    thermalCompensation: "Thermal Compensation",
    thermalDesc: "Absorbs thermal expansion and contraction in piping systems",
    vibrationIsolation: "Vibration Isolation",
    vibrationDesc: "Reduces vibration transmission and noise in systems",
    misalignmentCorrection: "Misalignment Correction",
    misalignmentDesc: "Compensates for angular and lateral misalignments",
    needCustomBellow: "Need Custom Bellow Solutions?",
    customBellowDesc:
      "Our engineering team can design custom bellows to meet your specific requirements",
    contactEngineers: "Contact Engineers",

    // Fittings Page
    endFittingsTitle: "End Fittings",
    endFittingsSubtitle:
      "Comprehensive range of end fittings for secure and reliable connections",
    quickReleaseCouplings: "Quick Release Couplings",
    quickReleaseDesc:
      "Fast and secure connections for easy assembly and disassembly",
    camlockCouplings: "Camlock Couplings",
    camlockDesc:
      "Cam and groove couplings for rapid connection and disconnection",
    triCloverFittings: "Tri Clover Fittings",
    triCloverDesc:
      "Sanitary tri-clamp fittings designed for hygienic applications in food, pharmaceutical, and biotech industries",
    materialOptions: "Material Options",
    materialDesc:
      "We offer fittings in various materials to suit different applications",
    stainlessSteel: "Stainless Steel",
    stainlessSteelDesc: "Corrosion resistant, high strength",
    carbonSteel: "Carbon Steel",
    carbonSteelDesc: "Cost-effective, high strength",
    aluminum: "Aluminum",
    aluminumDesc: "Lightweight, corrosion resistant",
    brass: "Brass",
    brassDesc: "Excellent machinability",
    industryStandards: "Industry Standards",
    standardsDesc:
      "Our fittings comply with international standards and specifications",
    americanStandards: "American National Standards",
    germanStandards: "German Industrial Standards",
    japaneseStandards: "Japanese Industrial Standards",
    britishStandards: "British Standards",
    needCustomFittings: "Need Custom Fittings?",
    customFittingsDesc:
      "We can manufacture custom fittings according to your specifications and requirements",
    requestCustomQuote: "Request Custom Quote",

    // About
    aboutTitle: "About Ramal Industries",
    aboutSubtitle:
      "Leading supplier of flexible hose solutions and industrial fittings",
    ourStory: "Our Story",
    aboutText:
      "Ramal Industries is a leading supplier of high-quality flexible hose solutions, bellow systems, and end fittings. With years of experience in the industry, we provide reliable and durable products that meet the highest standards of quality and performance.",
    aboutText2:
      "Located in Mumbai, India, we serve customers across the nation with our comprehensive range of flexible hose solutions, bellow systems, and end fittings including flanges, quick release couplings, camlock couplings, and tricolor fittings.",
    aboutText3:
      "Our commitment to excellence and customer satisfaction has made us a trusted partner for industries ranging from manufacturing to water treatment, power generation, and beyond.",
    ourValues: "Our Values",
    valuesSubtitle:
      "The principles that guide our operations and define our culture",
    qualityExcellence: "Quality Excellence",
    qualityExcellenceDesc:
      "We maintain the highest standards in all our products and services",
    customerFocus: "Customer Focus",
    customerFocusDesc: "Our customers are at the heart of everything we do",
    innovation: "Innovation",
    innovationDesc:
      "Continuous improvement and innovation in our products and processes",
    ourAchievements: "Our Achievements",
    achievementsSubtitle:
      "Milestones that showcase our commitment to excellence",
    ourMission: "Our Mission",
    missionText:
      "To provide high-quality, innovative flexible hose solutions and industrial fittings that exceed customer expectations while maintaining the highest standards of safety, reliability, and performance.",
    ourVision: "Our Vision",
    visionText:
      "To be the leading Supplier of flexible hose solutions in India, recognized for our commitment to quality, innovation, and customer satisfaction across all industries we serve.",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch with our team",
    getInTouchTitle: "Get in Touch",
    getInTouchDesc:
      "We're here to help you find the perfect flexible hose solutions for your industrial needs. Contact us today for expert advice and competitive pricing.",
    sendMessage: "Send us a Message",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    phoneNumberNumerical: "+91 70214 83925",
    subject: "Subject",
    message: "Message",
    sendMessageBtn: "Send Message",
    sending: "Sending...",
    requiredFields:
      "* Required fields. We'll respond to your inquiry within 24 hours.",
    visitLocation: "Visit Our Location",
    locationDesc:
      "Located in Mumbai, we serve customers across India with our comprehensive range of industrial solutions.",
    businessHours: "Business Hours",
    mondayToSaturday: "Monday - Saturday: 9:00 AM - 6:00 PM",
    sundayClosed: "Sunday: Closed",
    thankYouMessage:
      "Thank you for your message! We will get back to you soon.",
    errorMessage:
      "Sorry, there was an error sending your message. Please try again later.",
    emailNotConfigured:
      "Email service is not configured. Please contact us directly at info@ramalindustries.com",
    phone: "Phone",
    email: "Email",
    address: "Address",

    // Footer
    footerText: "Leading supplier of flexible hose solutions and end fittings",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    followUs: "Follow Us",
  },
  ar: {
    ramalIndustries: "صناعات الرمل",
    // Navigation
    home: "الرئيسية",
    products: "المنتجات",
    Hoses: "الخراطيم",
    Bellows: "المنافيخ",
    "End Fittings": "تركيبات الطرف",
    about: "معلومات عنا",
    contact: "اتصل بنا",
    language: "اللغة",

    // Home Page
    heroTitle: "الشركة الرائدة في تصنيع حلول الخراطيم المرنة",
    heroSubtitle:
      "متخصصون في الخراطيم المرنة وحلول المنفاخ وتركيبات الطرف المتميزة للتطبيقات الصناعية",
    learnMore: "تعلم أكثر",
    getQuote: "احصل على عرض أسعار",
    whyChooseUs: "لماذا تختار رمال الصناعات؟",
    whyChooseSubtitle: "نحن نقدم التميز من خلال الابتكار والجودة ورضا العملاء",
    readyToStart: "هل أنت مستعد للبدء؟",
    readySubtitle:
      "اتصل بنا اليوم للحصول على حلول مخصصة تلبي متطلباتك الصناعية المحددة",
    getInTouch: "تواصل معنا",
    ourProducts: "منتجاتنا",
    ourProductsSubtitle: "مجموعة شاملة من حلول الخراطيم الصناعية والتركيبات",

    // Product Features
    qualityAssurance: "ضمان الجودة",
    qualityDesc: "عمليات تصنيع معتمدة من ISO تضمن أعلى معايير الجودة",
    expertTeam: "فريق خبراء",
    expertDesc: "محترفون ذوو خبرة مع عقود من الخبرة في الصناعة",
    quickDelivery: "التسليم السريع",
    quickDesc: "أوقات تسليم سريعة مع إدارة فعالة لسلسلة التوريد",

    // Products
    flexibleHose: "الخراطيم المرنة",
    flexibleHoseDesc: "خراطيم مرنة عالية الجودة لمختلف التطبيقات الصناعية",
    bellowSolutions: "حلول المنفاخ",
    bellowDesc: "أنظمة منفاخ مصممة بدقة للمتطلبات المتخصصة",
    endFittings: "تركيبات الطرف",
    endFittingsDesc: "مجموعة شاملة من تركيبات الطرف بما في ذلك الشفاه والوصلات",
    flanges: "الشفاه",
    quickRelease: "وصلة التحرير السريع",
    camlock: "وصلة كاملوك",
    triclover: "تركيبات تراي كلوفر",

    // Hoses Page
    flexibleHosesTitle: "الخراطيم المرنة",
    flexibleHosesSubtitle: "خراطيم مرنة عالية الجودة لتطبيقات صناعية متنوعة",
    metalFlexibleHoses: "الخراطيم المعدنية المرنة",
    metalHoseDesc:
      "خراطيم معدنية عالية الأداء مصممة لظروف درجة الحرارة والضغط القاسية",
    foodGradeHoses: "خراطيم درجة الطعام",
    foodHoseDesc:
      "خراطيم معتمدة من FDA مصممة خصيصاً لتطبيقات صناعة الأغذية والمشروبات",
    compositeHoses: "خراطيم الصهاريج المركبة",
    compositeDesc:
      "خراطيم مركبة للخدمة الشاقة للتطبيقات البحرية والصناعية للصهاريج",
    rubberHoses: "الخراطيم المطاطية الصناعية",
    rubberDesc: "خراطيم مطاطية متعددة الاستخدامات للتطبيقات الصناعية العامة",
    needCustomHose: "هل تحتاج حلول خراطيم مخصصة؟",
    customHoseDesc:
      "اتصل بخبرائنا للحصول على حلول خراطيم مخصصة مصممة خصيصاً لمتطلباتك المحددة",

    // Bellows Page
    bellowSolutionsTitle: "حلول المنفاخ",
    bellowSolutionsSubtitle:
      "مفاصل التمدد والمنافيخ المصممة بدقة للتطبيقات الصناعية",
    stainlessBellows: "منافيخ التمدد من الفولاذ المقاوم للصدأ",
    stainlessBellowDesc:
      "منافيخ عالية الجودة من الفولاذ المقاوم للصدأ للتمدد الحراري وامتصاص الاهتزاز",
    rubberBellows: "منافيخ التمدد المطاطية",
    rubberBellowDesc: "منافيخ مطاطية مرنة مصممة لعزل الاهتزاز والحركة الحرارية",
    ptfeBellows: "مفاصل منفاخ PTFE",
    ptfeBellowDesc:
      "منافيخ PTFE مقاومة للمواد الكيميائية للبيئات الكيميائية القاسية",
    fabricBellows: "منفاخ القماش عالي الحرارة",
    fabricBellowDesc:
      "منافيخ قماش متخصصة مصممة لتطبيقات درجات الحرارة العالية والعزل الحراري",
    whyChooseBellows: "لماذا تختار منافيخنا؟",
    bellowBenefitsDesc: "توفر منافيخنا أداءً فائقاً وموثوقية",
    thermalCompensation: "التعويض الحراري",
    thermalDesc: "يمتص التمدد والانكماش الحراري في أنظمة الأنابيب",
    vibrationIsolation: "عزل الاهتزاز",
    vibrationDesc: "يقلل من انتقال الاهتزاز والضوضاء في الأنظمة",
    misalignmentCorrection: "تصحيح عدم المحاذاة",
    misalignmentDesc: "يعوض عن عدم المحاذاة الزاوية والجانبية",
    needCustomBellow: "هل تحتاج حلول منفاخ مخصصة؟",
    customBellowDesc:
      "يمكن لفريق الهندسة لدينا تصميم منافيخ مخصصة لتلبية متطلباتك المحددة",
    contactEngineers: "اتصل بالمهندسين",

    // Fittings Page
    endFittingsTitle: "تركيبات الطرف",
    endFittingsSubtitle:
      "مجموعة شاملة من تركيبات الطرف للاتصالات الآمنة والموثوقة",
    quickReleaseCouplings: "وصلات التحرير السريع",
    quickReleaseDesc: "اتصالات سريعة وآمنة للتجميع والتفكيك السهل",
    camlockCouplings: "وصلات كاملوك",
    camlockDesc: "وصلات الكام والأخدود للاتصال والانفصال السريع",
    triCloverFittings: "تركيبات تراي كلوفر",
    triCloverDesc:
      "تركيبات تراي كلامب الصحية المصممة للتطبيقات الصحية في صناعات الأغذية والأدوية والتكنولوجيا الحيوية",
    materialOptions: "خيارات المواد",
    materialDesc: "نحن نقدم التركيبات بمواد مختلفة لتناسب التطبيقات المختلفة",
    stainlessSteel: "الفولاذ المقاوم للصدأ",
    stainlessSteelDesc: "مقاوم للتآكل، قوة عالية",
    carbonSteel: "الفولاذ الكربوني",
    carbonSteelDesc: "فعال من حيث التكلفة، قوة عالية",
    aluminum: "الألومنيوم",
    aluminumDesc: "خفيف الوزن، مقاوم للتآكل",
    brass: "النحاس الأصفر",
    brassDesc: "قابلية ممتازة للتشغيل الآلي",
    industryStandards: "المعايير الصناعية",
    standardsDesc: "تتوافق تركيباتنا مع المعايير والمواصفات الدولية",
    americanStandards: "المعايير الوطنية الأمريكية",
    germanStandards: "المعايير الصناعية الألمانية",
    japaneseStandards: "المعايير الصناعية اليابانية",
    britishStandards: "المعايير البريطانية",
    needCustomFittings: "هل تحتاج تركيبات مخصصة؟",
    customFittingsDesc: "يمكننا تصنيع تركيبات مخصصة وفقاً لمواصفاتك ومتطلباتك",
    requestCustomQuote: "طلب عرض أسعار مخصص",

    // About
    aboutTitle: "حول رمال الصناعات",
    aboutSubtitle: "الشركة الرائدة في حلول الخراطيم المرنة والتركيبات الصناعية",
    ourStory: "قصتنا",
    aboutText:
      "رمال الصناعات هي شركة رائدة في تصنيع حلول الخراطيم المرنة عالية الجودة وأنظمة المنفاخ وتركيبات الطرف. مع سنوات من الخبرة في الصناعة، نقدم منتجات موثوقة ومتينة تلبي أعلى معايير الجودة والأداء.",
    aboutText2:
      "تقع في مومباي، الهند، نحن نخدم العملاء في جميع أنحاء البلاد بمجموعتنا الشاملة من حلول الخراطيم المرنة وأنظمة المنفاخ وتركيبات الطرف بما في ذلك الشفاه ووصلات التحرير السريع ووصلات كاملوك وتركيبات تراي كلوفر.",
    aboutText3:
      "إن التزامنا بالتميز ورضا العملاء جعلنا شريكاً موثوقاً للصناعات التي تتراوح من التصنيع إلى معالجة المياه وتوليد الطاقة وما بعدها.",
    ourValues: "قيمنا",
    valuesSubtitle: "المبادئ التي توجه عملياتنا وتحدد ثقافتنا",
    qualityExcellence: "التميز في الجودة",
    qualityExcellenceDesc:
      "نحن نحافظ على أعلى المعايير في جميع منتجاتنا وخدماتنا",
    customerFocus: "التركيز على العملاء",
    customerFocusDesc: "عملاؤنا هم في قلب كل ما نقوم به",
    innovation: "الابتكار",
    innovationDesc: "التحسين المستمر والابتكار في منتجاتنا وعملياتنا",
    ourAchievements: "إنجازاتنا",
    achievementsSubtitle: "المعالم التي تُظهر التزامنا بالتميز",
    ourMission: "مهمتنا",
    missionText:
      "تقديم حلول خراطيم مرنة وتركيبات صناعية عالية الجودة ومبتكرة تتجاوز توقعات العملاء مع الحفاظ على أعلى معايير السلامة والموثوقية والأداء.",
    ourVision: "رؤيتنا",
    visionText:
      "أن نكون المورد الرائد لحلول الخراطيم المرنة في الهند، معترف بنا لالتزامنا بالجودة والابتكار ورضا العملاء عبر جميع الصناعات التي نخدمها.",

    // Contact
    contactTitle: "اتصل بنا",
    contactSubtitle: "تواصل مع فريقنا",
    getInTouchTitle: "تواصل معنا",
    getInTouchDesc:
      "نحن هنا لمساعدتك في العثور على حلول الخراطيم المرنة المثالية لاحتياجاتك الصناعية. اتصل بنا اليوم للحصول على مشورة الخبراء والأسعار التنافسية.",
    sendMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    subject: "الموضوع",
    message: "الرسالة",
    sendMessageBtn: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    requiredFields: "* الحقول المطلوبة. سنرد على استفسارك خلال 24 ساعة.",
    visitLocation: "زيارة موقعنا",
    locationDesc:
      "تقع في مومباي، نحن نخدم العملاء في جميع أنحاء الهند بمجموعتنا الشاملة من الحلول الصناعية.",
    businessHours: "ساعات العمل",
    mondayToSaturday: "الاثنين - السبت: 9:00 صباحاً - 6:00 مساءً",
    sundayClosed: "الأحد: مغلق",
    thankYouMessage: "شكراً لك على رسالتك! سنعود إليك قريباً.",
    errorMessage:
      "عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقاً.",
    emailNotConfigured:
      "خدمة البريد الإلكتروني غير مكونة. يرجى الاتصال بنا مباشرة على info@ramalindustries.com",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",

    // Footer
    footerText: "الشركة الرائدة في تصنيع حلول الخراطيم المرنة وتركيبات الطرف",
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات الاتصال",
    followUs: "تابعنا",

    // Product Features - Hoses
    metalHoseFeature1: "نطاق درجة الحرارة: -200°م إلى +800°م",
    metalHoseFeature2: "مقاومة ضغط عالية تصل إلى 250 بار",
    metalHoseFeature3: "بناء من الفولاذ المقاوم للصدأ المقاوم للتآكل",
    metalHoseFeature4: "تصميم مرن للتركيبات المعقدة",
    metalHoseFeature5: "متوفر بأقطار مختلفة",

    metalHoseApp1: "أنظمة البخار والماء الساخن",
    metalHoseApp2: "المعالجة الكيميائية",
    metalHoseApp3: "توليد الطاقة",
    metalHoseApp4: "أنظمة عادم السيارات",

    foodHoseFeature1: "مواد معتمدة من FDA و USDA",
    foodHoseFeature2: "بناء غير سام وعديم الرائحة",
    foodHoseFeature3: "سهل التنظيف والتعقيم",
    foodHoseFeature4: "مقاوم لدرجة الحرارة حتى 120°م",
    foodHoseFeature5: "سطح داخلي أملس يمنع التلوث",

    foodHoseApp1: "مصانع معالجة الأغذية",
    foodHoseApp2: "تصنيع المشروبات",
    foodHoseApp3: "صناعة الألبان",
    foodHoseApp4: "التطبيقات الصيدلانية",

    compositeHoseFeature1: "بناء متعدد الطبقات للمتانة",
    compositeHoseFeature2: "بطانة داخلية مقاومة للمواد الكيميائية",
    compositeHoseFeature3: "معزز بألياف عالية القوة",
    compositeHoseFeature4: "قدرة على الطفو للاستخدام البحري",
    compositeHoseFeature5: "خيارات أقطار كبيرة متاحة",

    compositeHoseApp1: "نقل النفط والغاز",
    compositeHoseApp2: "تحميل الوقود البحري",
    compositeHoseApp3: "عمليات صهاريج المواد الكيميائية",
    compositeHoseApp4: "نقل السوائل الصناعية بالجملة",

    rubberHoseFeature1: "بناء مطاطي مرن",
    rubberHoseFeature2: "مقاوم للزيت والمواد الكيميائية",
    rubberHoseFeature3: "نطاق واسع من درجات الحرارة",
    rubberHoseFeature4: "تصنيفات ضغط مختلفة",
    rubberHoseFeature5: "حل فعال من حيث التكلفة",

    rubberHoseApp1: "الأنظمة الهيدروليكية",
    rubberHoseApp2: "التطبيقات الهوائية",
    rubberHoseApp3: "نقل المياه",
    rubberHoseApp4: "الاستخدام الصناعي العام",

    // Product Features - Bellows
    stainlessBellowFeature1: "بناء من الفولاذ المقاوم للصدأ المقاوم للتآكل",
    stainlessBellowFeature2: "مقاومة درجة حرارة عالية تصل إلى 600°م",
    stainlessBellowFeature3: "عمر إجهاد ممتاز",
    stainlessBellowFeature4: "تصاميم مخصصة متاحة",
    stainlessBellowFeature5: "وصلات طرفية مختلفة",

    stainlessBellowApp1: "محطات الطاقة",
    stainlessBellowApp2: "الصناعات البتروكيماوية",
    stainlessBellowApp3: "أنظمة التدفئة والتهوية وتكييف الهواء",
    stainlessBellowApp4: "خطوط أنابيب البخار",

    rubberBellowFeature1: "امتصاص ممتاز للاهتزاز",
    rubberBellowFeature2: "مركبات مطاطية مقاومة للمواد الكيميائية",
    rubberBellowFeature3: "تركيب وصيانة سهلة",
    rubberBellowFeature4: "حل فعال من حيث التكلفة",
    rubberBellowFeature5: "مجموعة واسعة من الأحجام",

    rubberBellowApp1: "محطات معالجة المياه",
    rubberBellowApp2: "أنظمة الضخ",
    rubberBellowApp3: "تطبيقات التدفئة والتهوية وتكييف الهواء",
    rubberBellowApp4: "الأنابيب الصناعية",

    ptfeBellowFeature1: "مقاومة كيميائية استثنائية",
    ptfeBellowFeature2: "خصائص سطح غير لاصق",
    ptfeBellowFeature3: "نطاق درجة الحرارة: -200°م إلى +260°م",
    ptfeBellowFeature4: "مواد معتمدة من FDA",
    ptfeBellowFeature5: "معامل احتكاك منخفض",

    ptfeBellowApp1: "المعالجة الكيميائية",
    ptfeBellowApp2: "الصناعة الصيدلانية",
    ptfeBellowApp3: "معالجة الأغذية",
    ptfeBellowApp4: "تصنيع أشباه الموصلات",

    fabricBellowFeature1:
      "مقاومة استثنائية لدرجة الحرارة العالية تصل إلى 1000°م",
    fabricBellowFeature2: "بناء خفيف الوزن",
    fabricBellowFeature3: "خصائص عزل حراري فائقة",
    fabricBellowFeature4: "مواد قماش مخصصة لتطبيقات محددة",
    fabricBellowFeature5: "قدرة حركة محورية وجانبية كبيرة",
    fabricBellowFeature6: "مقاومة كيميائية ممتازة",

    fabricBellowApp1: "أنظمة القنوات عالية الحرارة",
    fabricBellowApp2: "الأفران والمواقد الصناعية",
    fabricBellowApp3: "وصلات غلايات محطات الطاقة",
    fabricBellowApp4: "تطبيقات مصانع الصلب",
    fabricBellowApp5: "معدات مصانع الأسمنت",
    fabricBellowApp6: "أنظمة عادم التوربينات الغازية",

    // Product Features - Fittings
    quickReleaseFeature1: "تشغيل بيد واحدة",
    quickReleaseFeature2: "إحكام مقاوم للتسرب",
    quickReleaseFeature3: "مواد مقاومة للتآكل",
    quickReleaseFeature4: "قدرة ضغط عالية",
    quickReleaseFeature5: "وصلات طرفية مختلفة",

    quickReleaseType1: "وصلات سريعة هيدروليكية",
    quickReleaseType2: "وصلات سريعة هوائية",
    quickReleaseType3: "وصلات سريعة للمياه",
    quickReleaseType4: "وصلات سريعة كيميائية",
    quickReleaseType5: "وصلات سريعة للبخار",

    camlockFeature1: "اتصال/فصل سريع",
    camlockFeature2: "تصميم ذاتي الإحكام",
    camlockFeature3: "خيارات مواد متعددة",
    camlockFeature4: "أحجام قياسية ومترية",
    camlockFeature5: "أغطية غبار وسدادات متاحة",

    camlockType1: "النوع أ - محول مع خيط خارجي",
    camlockType2: "النوع ب - مقرن مع خيط داخلي",
    camlockType3: "النوع ج - مقرن مع ساق خرطوم",
    camlockType4: "النوع د - مقرن مع خيط أنثوي",
    camlockType5: "النوع هـ - محول مع ساق خرطوم",

    triCloverFeature1: "تصميم صحي للتطبيقات النظيفة",
    triCloverFeature2: "تجميع وتفكيك سريع",
    triCloverFeature3: "أسطح داخلية ملساء تمنع التلوث",
    triCloverFeature4: "مواد معتمدة من FDA",
    triCloverFeature5: "تنظيف وتعقيم سهل",
    triCloverFeature6: "نظام إحكام بالحشية",

    triCloverType1: "حلقات تراي كلامب",
    triCloverType2: "حشيات تراي كلامب",
    triCloverType3: "مشابك تراي كلامب",
    triCloverType4: "مخفضات تراي كلامب",
    triCloverType5: "تيهات ومرفقات تراي كلامب",
    triCloverType6: "أغطية نهاية تراي كلامب",
    phoneNumberNumerical: "91-70214-83925+",
    // Contact Form Arabic
    // Form placeholders
    namePlaceholder: "أدخل اسمك الكامل",
    emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
    phonePlaceholder: "أدخل رقم هاتفك",
    subjectPlaceholder: "ما هو موضوع الاستفسار؟",
    messagePlaceholder: "يرجى وصف متطلباتك أو استفسارك بالتفصيل...",

    // About page achievements
    achievement1: "10+ سنوات من الخبرة",
    achievement2: "100+ عميل راضٍ",
    achievement3: "تصنيع معتمد من ISO",
    achievement4: "دعم العملاء 24/7",
    achievement5: "شبكة توصيل عبر الهند",
    achievement6: "خبرة في الحلول المخصصة",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div
        className={language === "ar" ? "rtl" : "ltr"}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
