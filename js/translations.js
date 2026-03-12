/**
 * ============================================
 * CA SITE – TRANSLATIONS
 * ============================================
 *
 * HOW TO USE:
 * 1. Add a new key in BOTH "en" and "ar" with the same key name.
 * 2. In your HTML, add: data-i18n="yourKeyName" to the element.
 *    Example: <h2 data-i18n="myNewTitle">My Title</h2>
 * 3. The text will be replaced when the user switches language.
 *
 * TO ADD A NEW TRANSLATION:
 * - Copy an existing key (e.g. aboutTitle) and add your key.
 * - Use camelCase for key names: myNewSectionTitle
 * - Keep keys identical in en and ar.
 *
 * This file is loaded before script.js in index.html.
 */

var TRANSLATIONS = {
  en: {
    //------ Nav --------
    homeNav: 'Home',
    aboutNav: 'About Us',
    productsNav: 'Our Products',
    servicesNav: 'Electronic Services',
    lmsNav: 'LMS Platform',
    foundersNav: 'Founders',
    contactNav: 'Contact Us',
    // ----- About -----
    aboutTitle: 'About the Company',
    aboutText: 'We are a leading company dedicated to delivering excellence in training, e-learning, and professional development. With years of experience, we help organizations and individuals achieve their goals through innovative learning solutions and cutting-edge technology.',

    // ----- Statistics -----
    stat1Label: 'Participants on Competitions',
    stat2Label: 'Abroad Courses',
    stat3Label: 'Trainers',
    stat4Label: 'Training Programs',

    // ----- Vision, Mission, Values -----
    vmwTitle: 'Our Vision, Mission & Values',
    visionTitle: 'Vision',
    visionText: 'To be the preferred partner for learning and development across the region, driving growth and excellence through innovation.',
    missionTitle: 'Mission',
    missionText: 'To deliver high-quality training programs, e-learning solutions, and consultancy services that transform organizations and empower individuals.',
    valuesTitle: 'Values',
    valuesText: 'Excellence, Integrity, Innovation, and Partnership. We build lasting relationships based on trust and measurable results.',

    // ----- Audience / Who Benefits -----
    audienceTitle: 'Who Benefits From Our Services',
    audienceSubtitle: 'We serve a wide range of clients who trust us for their learning and development needs.',
    audience1: 'Government & Ministries',
    audience1Desc: 'Custom training and capacity-building programs for public sector employees.',
    audience2: 'Private Sector',
    audience2Desc: 'Corporate training, leadership development, and e-learning platforms.',
    audience3: 'Educational Institutions',
    audience3Desc: 'LMS solutions, curriculum design, and faculty development.',
    audience4: 'Individuals',
    audience4Desc: 'Professional certifications and skill-building courses for career growth.',

    // ----- Courses -----
    coursesTitle: 'Types of Courses We Provide',
    course1: 'Leadership & Management',
    course1Desc: 'Strategic leadership, team management, and organizational development.',
    course2: 'Professional Skills',
    course2Desc: 'Communication, project management, and soft skills training.',
    course3: 'E-Learning & Digital',
    course3Desc: 'LMS implementation, instructional design, and digital literacy.',
    course4: 'Custom Corporate Programs',
    course4Desc: "Tailored training solutions designed for your organization's needs.",

    // ----- Products -----
    productsTitle: 'Our Products',
    product1: 'Training Programs',
    product1Desc: 'Face-to-face and blended training programs for all levels.',
    product2: 'E-Learning Solutions',
    product2Desc: 'Custom LMS, courses, and digital learning content.',
    product3: 'Consultancy',
    product3Desc: 'Strategy, assessment, and capacity-building consultancy.',

    // ----- LMS / Electronic Services -----
    lmsTitle: 'Electronic Services — LMS Platform',
    lmsText: 'Our Learning Management System (LMS) platform enables organizations to deliver, track, and manage training online. Features include course management, assessments, reporting, and mobile access—all designed to scale with your needs.',
    lmsCta: 'Request a Demo',

    // ----- FAQ -----
    faqTitle: 'Frequently Asked Questions',
    faqQ1: 'What types of organizations do you work with?',
    faqA1: "We work with government ministries, private companies, educational institutions, and individuals. Our solutions are tailored to each client's needs.",
    faqQ2: 'Do you offer online and in-person training?',
    faqA2: 'Yes. We offer face-to-face, fully online, and blended programs. Our LMS platform supports remote learning and tracking.',
    faqQ3: 'How can I get a demo of your LMS?',
    faqA3: 'Contact us through the form below or email us. We will schedule a personalized demo at your convenience.',

    // ----- Founders -----
    foundersTitle: 'Our Founders',
    founder1Role: 'Co-Founder & CEO',
    founder1Bio: '20+ years in corporate training and e-learning. Former director of learning at major regional organizations. MBA, Harvard Business School.',
    founder2Role: 'Co-Founder & COO',
    founder2Bio: 'Expert in instructional design and LMS implementation. Previously led learning design for government and education sectors. PhD in Education Technology.',

    // ----- Partners -----
    partnersTitle: 'Companies & Ministries We Work With',

    // ----- Contact -----
    contactTitle: 'Contact Us',
    contactEmailLabel: '📧 Email',
    contactPhoneLabel: '📞 Phone',
    contactAddressLabel: '📍 Address',
    contactAddress: 'Riyadh, Kingdom of Saudi Arabia',
    contactNamePlaceholder: 'Your Name',
    contactEmailPlaceholder: 'Your Email',
    contactMessagePlaceholder: 'Your Message',
    contactSubmit: 'Send Message',
    formSending: 'Sending...',
    formThankYou: 'Thank you! We will get back to you soon.',

    // ----- Footer -----
    footerCopy: '© 2025 CA Company. All rights reserved.'
  },

  ar: {
    //------ Nav --------
    homeNav: 'الرئيسية',
    aboutNav: 'من نحن',
    productsNav: 'منتجاتنا',
    servicesNav: 'الخدمات الإلكترونية',
    lmsNav: 'منصة LMS',
    foundersNav: 'المؤسسون',
    contactNav: 'اتصل بنا',
    // ----- About -----
    aboutTitle: 'عن الشركة',
    aboutText: 'نحن شركة رائدة متخصصة في التميز في التدريب والتعلم الإلكتروني والتطوير المهني. بخبرة سنوات، نساعد المؤسسات والأفراد على تحقيق أهدافهم من خلال حلول تعليمية مبتكرة وتقنية متطورة.',

    // ----- Statistics -----
    stat1Label: 'المشاركون في المسابقات',
    stat2Label: 'الدورات الخارجية',
    stat3Label: 'المدربون',
    stat4Label: 'البرامج التدريبية',

    // ----- Vision, Mission, Values -----
    vmwTitle: 'رؤيتنا ورسالتنا وقيمنا',
    visionTitle: 'الرؤية',
    visionText: 'أن نكون الشريك المفضل للتعلم والتطوير في المنطقة، ودفع النمو والتميز من خلال الابتكار.',
    missionTitle: 'الرسالة',
    missionText: 'تقديم برامج تدريبية عالية الجودة وحلول التعلم الإلكتروني وخدمات استشارية تحول المؤسسات وتمكن الأفراد.',
    valuesTitle: 'القيم',
    valuesText: 'التميز والنزاهة والابتكار والشراكة. نبني علاقات دائمة قائمة على الثقة والنتائج القابلة للقياس.',

    // ----- Audience / Who Benefits -----
    audienceTitle: 'من يستفيد من خدماتنا',
    audienceSubtitle: 'نخدم مجموعة واسعة من العملاء الذين يثقون بنا لاحتياجات التعلم والتطوير.',
    audience1: 'الحكومات والوزارات',
    audience1Desc: 'برامج تدريب وبناء قدرات مخصصة لموظفي القطاع العام.',
    audience2: 'القطاع الخاص',
    audience2Desc: 'التدريب المؤسسي وتطوير القيادة ومنصات التعلم الإلكتروني.',
    audience3: 'المؤسسات التعليمية',
    audience3Desc: 'حلول LMS وتصميم المناهج وتطوير أعضاء هيئة التدريس.',
    audience4: 'الأفراد',
    audience4Desc: 'الشهادات المهنية ودورات بناء المهارات لنمو المسيرة المهنية.',

    // ----- Courses -----
    coursesTitle: 'أنواع الدورات التي نقدمها',
    course1: 'القيادة والإدارة',
    course1Desc: 'القيادة الاستراتيجية وإدارة الفرق وتطوير المؤسسات.',
    course2: 'المهارات المهنية',
    course2Desc: 'التواصل وإدارة المشاريع وتدريب المهارات الناعمة.',
    course3: 'التعلم الإلكتروني والرقمي',
    course3Desc: 'تنفيذ LMS والتصميم التعليمي والثقافة الرقمية.',
    course4: 'برامج مؤسسية مخصصة',
    course4Desc: 'حلول تدريبية مصممة خصيصاً لاحتياجات مؤسستك.',

    // ----- Products -----
    productsTitle: 'منتجاتنا',
    product1: 'برامج التدريب',
    product1Desc: 'برامج تدريبية وجهاً لوجه ومدمجة لجميع المستويات.',
    product2: 'حلول التعلم الإلكتروني',
    product2Desc: 'LMS مخصص ودورات ومحتوى تعليمي رقمي.',
    product3: 'الاستشارات',
    product3Desc: 'استشارات في الاستراتيجية والتقييم وبناء القدرات.',

    // ----- LMS / Electronic Services -----
    lmsTitle: 'الخدمات الإلكترونية — منصة LMS',
    lmsText: 'تمكّن منصة نظام إدارة التعلم (LMS) المؤسسات من تقديم التدريب وتتبعه وإدارته عبر الإنترنت. تشمل الميزات إدارة الدورات والتقييمات والتقارير والوصول عبر الجوال—كلها مصممة لتنمو مع احتياجاتك.',
    lmsCta: 'طلب عرض تجريبي',

    // ----- FAQ -----
    faqTitle: 'الأسئلة الشائعة',
    faqQ1: 'ما أنواع المؤسسات التي تعملون معها؟',
    faqA1: 'نعمل مع الوزارات الحكومية والشركات الخاصة والمؤسسات التعليمية والأفراد. حلولنا مصممة وفق احتياجات كل عميل.',
    faqQ2: 'هل تقدمون تدريباً عبر الإنترنت وحضورياً؟',
    faqA2: 'نعم. نقدم برامج وجهاً لوجه وعبر الإنترنت ومدمجة. منصة LMS تدعم التعلم والتتبع عن بُعد.',
    faqQ3: 'كيف أحصل على عرض تجريبي لمنصة LMS؟',
    faqA3: 'تواصل معنا عبر النموذج أدناه أو البريد الإلكتروني. سنحدد موعد عرض تجريبي يناسبك.',

    // ----- Founders -----
    foundersTitle: 'المؤسسون',
    founder1Role: 'المؤسس المشارك والرئيس التنفيذي',
    founder1Bio: 'أكثر من 20 عاماً في التدريب المؤسسي والتعلم الإلكتروني. مدير تعلم سابق في مؤسسات إقليمية كبرى. ماجستير إدارة أعمال، هارفارد.',
    founder2Role: 'المؤسس المشارك والرئيس التنفيذي للعمليات',
    founder2Bio: 'خبيرة في التصميم التعليمي وتنفيذ LMS. قادت سابقاً تصميم التعلم للقطاعات الحكومية والتعليم. دكتوراه في تكنولوجيا التعليم.',

    // ----- Partners -----
    partnersTitle: 'الشركات والوزارات التي نعمل معها',

    // ----- Contact -----
    contactTitle: 'اتصل بنا',
    contactEmailLabel: '📧 البريد الإلكتروني',
    contactPhoneLabel: '📞 الهاتف',
    contactAddressLabel: '📍 العنوان',
    contactAddress: 'الرياض، المملكة العربية السعودية',
    contactNamePlaceholder: 'الاسم',
    contactEmailPlaceholder: 'البريد الإلكتروني',
    contactMessagePlaceholder: 'رسالتك',
    contactSubmit: 'إرسال الرسالة',
    formSending: 'جاري الإرسال...',
    formThankYou: 'شكراً! سنتواصل معك قريباً.',

    // ----- Footer -----
    footerCopy: '© 2025 شركة CA. جميع الحقوق محفوظة.'
  }
};

// Expose globally so script.js can use it (required for translation to work)
if (typeof window !== 'undefined') {
  window.TRANSLATIONS = TRANSLATIONS;
}
