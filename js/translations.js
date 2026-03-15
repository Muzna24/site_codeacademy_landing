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
    productsNav: 'Our Services',
    servicesNav: 'Electronic Services',
    lmsNav: 'LMS Platform',
    foundersNav: 'Founders',
    contactNav: 'Contact Us',

    //------ Hero ------
    heroTitle: 'Code Academy',
    heroSub: '__ We touch minds to lead __',
    heroHock: 'We are excited to collaborate with you on a journey of innovation and excellence',
    // ----- About -----
    aboutTitle: 'About the Academy',
    aboutText: 'The Academy is proud of the experiences of its founders in the field of rehabilitation and training in various modern technologies related to the Fourth Industrial Revolution and the digital revolution, and in the field of scientific and professional advice related to the preparation of field studies for institutional and institutional transformation, institutional transformation and assessment, and numerical assessment. The Academy is proud of its societal initiatives in the field of disseminating technical knowledge and for being the first house of expertise of its kind in the field of programming competitions.',

    // ----- Statistics -----
    stat1Label: 'Participants on Competitions',
    stat2Label: 'Abroad Courses',
    stat3Label: 'Trainees',
    stat4Label: 'Training Programs',

    // ----- Vision, Mission, Values -----
    vmwTitle: 'Our Vision, Mission & Values',
    visionTitle: 'Vision',
    visionText: 'To be a leading institution in training and consultancy, shaping the future of the knowledge economy',
    missionTitle: 'Mission',
    missionText: 'Empowering individuals and organizations to harness modern science and technology for a better life',
    valuesTitle: 'Values',
    valuesText: 'Ethical Foundation - Continuous Learning - Integrity - Partnership - Customer First',

    // ----- Audience / Who Benefits -----
    audienceTitle: 'Who Benefits From Our Services',
    audienceSubtitle: 'We serve a wide range of clients who trust us for their learning and development needs.',
    audience1: 'Governmental & Private Sectors',
    audience1Desc: 'Corporate Training Programs for Capacity Building and Leadership Development',
    audience2: 'Private Sector',
    audience2Desc: 'Corporate training, leadership development, and e-learning platforms',
    audience3: 'University & School Students',
    audience3Desc: 'Developing a qualified generation of youth to sharpen their skills and knowledge',
    audience4: 'Individuals',
    audience4Desc: 'Professional certifications and skill-building courses for career growth',

    // ----- Courses -----
    coursesTitle: 'Types of Courses We Provide',
    course1: 'Leadership & Management',
    course1Desc: 'Strategic leadership, team management, and organizational development',
    course2: 'Professional Skills',
    course2Desc: 'Communication, project management, and Technical skills training to master today’s job market',
    course3: 'Languages',
    course3Desc: 'Breaking barriers and building bridges through global linguistic proficiency',
    course4: 'Professional Certifications',
    course4Desc: "Your gateway to international accreditation and world-class professional standards",

    // ----- Products -----
    productsTitle: 'Our Services',
    product1: 'Training Programs',
    product1Desc: 'Face-to-face and blended training programs for all levels',
    product2: 'Technical Solutions',
    product2Desc: 'Developing custom websites and apps that adapt to evolving market needs',
    product3: 'Consultancy',
    product3Desc: 'Expert consultancy in IT, Data Science, and the Knowledge Economy',

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
    partnersTitle: 'Our clients',

    // ----- Contact -----
    contactTitle: 'Contact Us',
    contactEmailLabel: '📧 Email',
    contactEmail:'admin@codeacademy.om',
    contactPhoneLabel: '📞 Phone',
    contactPhone:'+968 9745 1004',
    contactAddressLabel: '📍 Location',
    contactAddress: 'Al Seeb - Muscat - Oman',
    contactNamePlaceholder: 'Your Name',
    contactEmailPlaceholder: 'Your Email',
    contactMessagePlaceholder: 'Your Message',
    contactSubmit: 'Send Message',
    formSending: 'Sending...',
    formThankYou: 'Thank you! We will get back to you soon.',

    // ----- Footer -----
    footerCopy: '© 2026 Code Academy. All rights reserved.'
  },

  ar: {
    //------ Nav --------
    homeNav: 'الرئيسية',
    aboutNav: 'من نحن',
    productsNav: 'خدماتنا',
    servicesNav: 'الخدمات الإلكترونية',
    lmsNav: 'منصة LMS',
    foundersNav: 'المؤسسون',
    contactNav: 'اتصل بنا',

    //------ Hero ------
    heroTitle: 'أكاديمية البرمجة',
    heroSub: '__ نلامس العقول لتقود __',
    heroHock: 'متحمسون لخوض تجربة تعاون معكم تجسد الابتكار والتميز',

    // ----- About -----
    aboutTitle: 'عن الأكاديمية',
    aboutText: 'تفخـر الأكاديميـة بخبـرات مؤسسيها فـي مجـال التأهيـل والتدريـب فـي مختلـف التقنيـات الحديثـة المرتبطـة بالثـورة الصناعيـة الرابعـة والثـورة الرقميـة ، وفـي مجـال الإستشـارات العلميـة والمهنيـة المتعلقة بإعـداد دراسات ميدانية للتحـول الرقمـي المؤسسي ، والتقييم الوظيفـي وإمتحانات القبـول الترقيـة ، وتقييـم المناهـج الدراسية للجامعـات والمـدارس وغيرهـا .. كمـا تفخـر الأكاديميـة بمبادراتهـا المجتمعيـة فـي مجـال نشـر المعرفـة التقنيـة وكونهـا بيـت الخبـرة الأول مـن نـوعـه فـي مجال مسابقات البرمجة',

    // ----- Statistics -----
    stat1Label: 'المشاركون في المسابقات',
    stat2Label: 'الدورات الخارجية',
    stat3Label: 'المتدربون',
    stat4Label: 'البرامج التدريبية',

    // ----- Vision, Mission, Values -----
    vmwTitle: 'رؤيتنا ورسالتنا وقيمنا',
    visionTitle: 'الرؤية',
    visionText: 'أن نكون من المؤسسات الرائدة في التدريب والاستشارات المرتبطة باقتصاد المعرفة',
    missionTitle: 'الرسالة',
    missionText: 'تمكين الأفراد والمؤسسات للإستفادة من العلوم والتقنيات الحديثة من أجل حياة أفضل',
    valuesTitle: 'القيم',
    valuesText: 'التكوين الأخلاقي - التعليم المستمر - الأمانة - الشراكة - العميل أولاً',

    // ----- Audience / Who Benefits -----
    audienceTitle: 'من يستفيد من خدماتنا',
    audienceSubtitle: 'نخدم مجموعة واسعة من العملاء الذين يثقون بنا لاحتياجات التعلم والتطوير',
    audience1: 'المؤسسات الحكومية والخاصة',
    audience1Desc: 'برامج تدريب مؤسسي لبناء القدرات وتطوير المهارات القيادية',
    audience2: 'القطاع الخاص',
    audience2Desc: 'التدريب المؤسسي وتطوير القيادة ومنصات التعلم الإلكتروني',
    audience3: 'طلبة الجامعات والمدارس',
    audience3Desc: 'تطوير جيل مؤهل من الشباب والناشئة لصقل المهارات والمعرفة',
    audience4: 'الأفراد',
    audience4Desc: 'الشهادات المهنية ودورات بناء المهارات لنمو المسيرة المهنية',

    // ----- Courses -----
    coursesTitle: 'مجالات التدريب والخدمات',
    course1: 'القيادة والإدارة',
    course1Desc: 'القيادة الاستراتيجية وإدارة الفرق وتطوير المؤسسات',
    course2: 'المهارات المهنية',
    course2Desc: 'التواصل وإدارة المشاريع وتدريب المهارات التقنية التي يتطلبها سوق العمل',
    course3: 'اللغات',
    course3Desc: 'جسور تواصل بلا حدود؛ نمنحكم إتقان اللغات لفتح آفاق عالمية جديدة',
    course4: 'شهادات احترافية',
    course4Desc: 'بوابتكم للاعتماد الدولي؛ برامج متخصصة تؤهلك للحصول على أقوى الشهادات العالمية',

    // ----- Products -----
    productsTitle: 'خدماتنا',
    product1: 'برامج تدريبية',
    product1Desc: 'برامج تدريبية وجهاً لوجه ومدمجة لجميع المستويات',
    product2: 'حلول تقنية',
    product2Desc: 'تطوير مواقع وتطبيقات مبتكرة تلبي تطلعات السوق وتواكب متغيراته',
    product3: 'استشارات',
    product3Desc: 'استشارات متخصصة في تكنولوجيا المعلومات، وعلوم البيانات، واقتصاد المعرفة',

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
    partnersTitle: 'عُملاؤنا',

    // ----- Contact -----
    contactTitle: 'اتصل بنا',
    contactEmailLabel: '📧 البريد الإلكتروني',
    contactEmail:'admin@codeacademy.om',
    contactPhoneLabel: '📞 الهاتف',
    contactPhone:'+968 9745 1004',
    contactAddressLabel: '📍 الموقع',
    contactAddress: 'ولاية السيب - مسقط - سلطنة عُمان',
    contactNamePlaceholder: 'الاسم',
    contactEmailPlaceholder: 'البريد الإلكتروني',
    contactMessagePlaceholder: 'رسالتك',
    contactSubmit: 'إرسال الرسالة',
    formSending: 'جاري الإرسال...',
    formThankYou: 'شكراً! سنتواصل معك قريباً.',

    // ----- Footer -----
    footerCopy: '© 2026 أكاديمية البرمجة. جميع الحقوق محفوظة.'
  }
};

// Expose globally so script.js can use it (required for translation to work)
if (typeof window !== 'undefined') {
  window.TRANSLATIONS = TRANSLATIONS;
}
