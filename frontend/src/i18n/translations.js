/**
 * Translations for FR (French) and AR (Arabic)
 * Organized by component/page for easy maintenance
 */

const translations = {
    // ─── Shared / Common ───
    common: {
        home: { fr: 'Accueil', ar: 'الرئيسية' },
        about: { fr: 'À propos', ar: 'من نحن' },
        services: { fr: 'Services', ar: 'خدماتنا' },
        team: { fr: 'Équipe', ar: 'الفريق' },
        contact: { fr: 'Contact', ar: 'اتصل بنا' },
        appointment: { fr: 'Rendez-vous', ar: 'حجز موعد' },
        send: { fr: 'Envoyer', ar: 'إرسال' },
        sending: { fr: 'Envoi en cours...', ar: 'جاري الإرسال...' },
        name: { fr: 'Nom complet', ar: 'الاسم الكامل' },
        email: { fr: 'Email', ar: 'البريد الإلكتروني' },
        phone: { fr: 'Téléphone', ar: 'الهاتف' },
        subject: { fr: 'Sujet', ar: 'الموضوع' },
        message: { fr: 'Message', ar: 'الرسالة' },
        requiredFields: { fr: '* Champs obligatoires', ar: '* حقول إجبارية' },
    },

    // ─── Navbar ───
    nav: {
        home:       { fr: 'Accueil',         ar: 'الرئيسية' },
        about:      { fr: 'À propos',        ar: 'من نحن' },
        services:   { fr: 'Services',        ar: 'خدماتنا' },
        team:       { fr: 'Équipe',          ar: 'الفريق' },
        contact:    { fr: 'Contact',         ar: 'اتصل بنا' },
        login:      { fr: 'Connexion',       ar: 'تسجيل الدخول' },
        appointment:{ fr: 'Rendez-vous',     ar: 'موعد' },
        dashboard:  { fr: 'Tableau de bord', ar: 'لوحة التحكم' },
        logout:     { fr: 'Déconnexion',     ar: 'تسجيل الخروج' },
        logoutTitle:{ fr: 'Se déconnecter',  ar: 'تسجيل الخروج' },
        tagline:    { fr: 'Kinésithérapie',  ar: 'العلاج الطبيعي' },
        contactUs:  { fr: 'Contactez-nous',  ar: 'اتصل بنا' },
        mobileAppointment: { fr: 'Prendre Rendez-vous', ar: 'حجز موعد' },
    },

    // ─── Hero Section ───
    hero: {
        badge:       { fr: 'Cabinet de Kinésithérapie à Casablanca', ar: 'عيادة العلاج الطبيعي بالدار البيضاء' },
        titleSub:    { fr: 'Le meilleur pour votre santé',           ar: 'الأفضل لصحتكم' },
        description: {
            fr: "L'information, l'utilisation et la connaissance croissante de la physiothérapie sont parmi les facteurs les plus importants pour votre bien-être. Nous mettons notre expertise à votre service.",
            ar: 'المعلومات والاستخدام والمعرفة المتزايدة بالعلاج الطبيعي هي من أهم العوامل لرفاهيتكم. نضع خبرتنا في خدمتكم.'
        },
        appointmentBtn: { fr: 'Prendre Rendez-vous', ar: 'حجز موعد' },
        servicesBtn:    { fr: 'Nos Services',        ar: 'خدماتنا' },
        patients:       { fr: 'Patients satisfaits',  ar: 'مرضى راضون' },
        since:          { fr: 'Depuis 2017',          ar: 'منذ 2017' },
        atService:      { fr: 'À votre service',      ar: 'في خدمتكم' },
    },

    // ─── Specialties ───
    specialties: [
        { title: { fr: 'Traumatologique', ar: 'طب الإصابات' }, desc: { fr: 'Rééducation après blessures et traumatismes', ar: 'إعادة التأهيل بعد الإصابات والصدمات' } },
        { title: { fr: 'Rhumatologique',  ar: 'أمراض الروماتيزم' }, desc: { fr: 'Traitement des maladies articulaires',      ar: 'علاج أمراض المفاصل' } },
        { title: { fr: 'Neurologiques',   ar: 'الأمراض العصبية' }, desc: { fr: 'Rééducation neurologique spécialisée',      ar: 'إعادة تأهيل عصبية متخصصة' } },
    ],

    // ─── About Section ───
    about: {
        subtitle:    { fr: 'À propos de nous',               ar: 'من نحن' },
        headerTitle: { fr: 'À Propos de Nous',               ar: 'من نحن' },
        headerSub:   { fr: 'Votre partenaire santé de confiance à Casablanca depuis 2017', ar: 'شريككم الصحي الموثوق في الدار البيضاء منذ 2017' },
        title:       { fr: 'Les gens nous font confiance',    ar: 'الناس يثقون بنا' },
        highlight:   { fr: 'Parce que nos patients sont notre famille', ar: 'لأن مرضانا هم عائلتنا' },
        introSubtitle: { fr: 'Notre Histoire', ar: 'قصتنا' },
        introTitle: { fr: "L'excellence au service de votre santé", ar: 'التميز في خدمة صحتكم' },
        introLead: { fr: "Cabinet Hannit a été fondé avec une vision claire : offrir des soins de kinésithérapie et de physiothérapie d'excellence dans un cadre chaleureux et professionnel.", ar: 'تأسست عيادة حنيت برؤية واضحة: تقديم رعاية متميزة في العلاج الطبيعي والفيزيائي في إطار دافئ ومهني.' },
        description: {
            fr: "Depuis notre ouverture en 2017, nous nous sommes engagés à placer le patient au cœur de notre démarche thérapeutique. Notre fondatrice, Asmaa Hannit, a voulu créer un espace où chaque patient bénéficie d'une prise en charge personnalisée, alliant techniques manuelles traditionnelles et technologies de pointe.",
            ar: 'منذ افتتاحنا في عام 2017، التزمنا بوضع المريض في قلب نهجنا العلاجي. أرادت مؤسستنا، أسماء حنيت، إنشاء مساحة يستفيد منها كل مريض من رعاية شخصية، تجمع بين التقنيات اليدوية التقليدية والتقنيات المتطورة.'
        },
        description2: {
            fr: "Nous croyons fermement que la guérison passe par une écoute attentive et une compréhension globale des besoins de chacun. C'est pourquoi notre approche est résolument humaine et interdisciplinaire.",
            ar: 'نحن نؤمن بشدة بأن الشفاء يمر عبر الاستماع الجيد والفهم الشامل لاحتياجات كل فرد. لهذا السبب، فإن نهجنا إنساني ومتعدد التخصصات.'
        },
        badgeYear: { fr: '2017', ar: '2017' },
        badgeText: { fr: 'Année de fondation', ar: 'سنة التأسيس' },
        missionTitle: { fr: 'Notre Mission', ar: 'مهمتنا' },
        missionDesc: { fr: 'Améliorer la qualité de vie de nos patients en leur redonnant mobilité et autonomie grâce à des soins de rééducation de haute qualité.', ar: 'تحسين جودة حياة مرضانا من خلال استعادة حركتهم واستقلاليتهم بفضل رعاية إعادة تأهيل عالية الجودة.' },
        visionTitle: { fr: 'Notre Vision', ar: 'رؤيتنا' },
        visionDesc: { fr: 'Devenir la référence en kinésithérapie à Casablanca en innovant constamment et en maintenant les plus hauts standards de pratique médicale.', ar: 'أن نصبح المرجع في العلاج الطبيعي بالدار البيضاء من خلال الابتكار المستمر والحفاظ على أعلى معايير الممارسة الطبية.' },
        valuesTitle: { fr: 'Nos Valeurs', ar: 'قيمنا' },
        valuesDesc: { fr: 'Empathie, Professionnalisme, Innovation et Intégrité guident chacune de nos actions et interactions avec nos patients.', ar: 'التعاطف، المهنية، الابتكار والنزاهة هي ما يوجه كل عمل وتفاعل مع مرضانا.' },
        whyChooseUs: { fr: 'Pourquoi Nous Choisir', ar: 'لماذا تختارنا؟' },
        whyChooseUsTitle: { fr: 'Votre santé mérite le meilleur', ar: 'صحتكم تستحق الأفضل' },
        features: [
            { fr: 'Équipe de professionnels qualifiés',       ar: 'فريق من المتخصصين المؤهلين' },
            { fr: 'Équipements modernes et de pointe',        ar: 'معدات حديثة ومتطورة' },
            { fr: 'Suivi personnalisé pour chaque patient',   ar: 'متابعة شخصية لكل مريض' },
            { fr: 'Approche thérapeutique holistique',        ar: 'نهج علاجي شامل' },
        ],
        reasons: [
            { title: { fr: 'Expertise Reconnue', ar: 'خبرة مشهود بها' }, desc: { fr: 'Une équipe diplômée et continuellement formée aux dernières techniques.', ar: 'فريق مجاز ومتدرب باستمرار على أحدث التقنيات.' } },
            { title: { fr: 'Équipement Moderne', ar: 'معدات حديثة' }, desc: { fr: 'Utilisation de technologies de pointe pour optimiser votre rétablissement.', ar: 'استخدام تقنيات متطورة لتحسين تعافيكم.' } },
            { title: { fr: 'Cadre Apaisant', ar: 'إطار مريح' }, desc: { fr: 'Un environnement calme et accueillant favorisant la guérison et le bien-être.', ar: 'بيئة هادئة ومرحبة تساعد على الشفاء والراحة.' } },
        ],
        learnMore: { fr: 'En savoir plus', ar: 'اعرف المزيد' },
        experience: { fr: "Années d'expérience", ar: 'سنوات من الخبرة' },
    },

    // ─── Stats ───
    stats: [
        { number: '2000+', label: { fr: 'Patients Traités',       ar: 'مرضى تمت معالجتهم' } },
        { number: '8+',    label: { fr: "Ans d'expérience",        ar: 'سنوات من الخبرة' } },
        { number: '6',     label: { fr: 'Services Spécialisés',   ar: 'خدمات متخصصة' } },
        { number: '98%',   label: { fr: 'Satisfaction',            ar: 'نسبة الرضا' } },
    ],

    // ─── Services Section ───
    services: {
        subtitle:    { fr: 'Nos Services',             ar: 'خدماتنا' },
        headerTitle: { fr: 'Nos Services',             ar: 'خدماتنا' },
        headerSub:   { fr: 'Des soins complets et personnalisés pour votre rétablissement', ar: 'رعاية كاملة وشخصية لتعافيكم' },
        title:       { fr: 'Découvrez nos services',    ar: 'اكتشفوا خدماتنا' },
        description: {
            fr: 'Des soins de qualité adaptés à vos besoins, dispensés par une équipe de professionnels passionnés.',
            ar: 'رعاية عالية الجودة تتناسب مع احتياجاتكم، يقدمها فريق من المتخصصين المتحمسين.'
        },
        learnMore: { fr: 'En savoir plus', ar: 'اعرف المزيد' },
        appointmentBtn: { fr: 'Prendre Rendez-vous', ar: 'حجز موعد' },
        ctaTitle: { fr: "Besoin d'un conseil personnalisé ?", ar: 'هل تحتاجون إلى نصيحة شخصية؟' },
        ctaText: { fr: "Notre équipe est à votre écoute pour définir le protocole de soin le plus adapté à votre pathologie.", ar: 'فريقنا في خدمتكم لتحديد بروتوكول الرعاية الأكثر ملاءمة لحالتكم.' },
        contactLink: { fr: 'Contactez-nous', ar: 'اتصل بنا' },
        items: [
            { 
                id: 'kinesitherapie',
                title: { fr: 'Kinésithérapie',   ar: 'العلاج الطبيعي' },     
                desc: { fr: "La kinésithérapie est une discipline paramédicale qui utilise des techniques actives ou passives et la rééducation pour maintenir ou rétablir les capacités fonctionnelles.", ar: 'العلاج الطبيعي هو تخصص طبي يستخدم تقنيات نشطة أو سلبية وإعادة التأهيل للحفاظ على القدرات الوظيفية أو استعادتها.' },
                features: [
                    { fr: 'Rééducation fonctionnelle', ar: 'إعادة التأهيل الوظيفي' },
                    { fr: 'Renforcement musculaire', ar: 'تقوية العضلات' },
                    { fr: 'Drainage lymphatique', ar: 'التصريف اللمفاوي' },
                    { fr: 'Massages thérapeutiques', ar: 'التدليك العلاجي' }
                ]
            },
            { 
                id: 'physiotherapie',
                title: { fr: 'Physiothérapie',  ar: 'العلاج الفيزيائي' }, 
                desc: { fr: "La physiothérapie vise à traiter les incapacités physiques résultant de blessures ou de maladies par des moyens physiques (chaleur, froid, électricité, ultrasons).",  ar: 'يهدف العلاج الفيزيائي إلى علاج الإعاقات الجسدية الناتجة عن الإصابات أو الأمراض بوسائل فيزيائية (الحرارة، البرودة، الكهرباء، الأمواج فوق الصوتية).' },
                features: [
                    { fr: 'Électrothérapie', ar: 'العلاج الكهربائي' },
                    { fr: 'Ultrasons', ar: 'الأمواج فوق الصوتية' },
                    { fr: 'Thermothérapie', ar: 'العلاج الحراري' },
                    { fr: 'Cryothérapie', ar: 'علاج بالتبريد' }
                ]
            },
            { 
                id: 'traumatologie',
                title: { fr: 'Traumatologie',   ar: 'طب الإصابات' }, 
                desc: { fr: "Rééducation spécialisée après un accident, une fracture ou une opération chirurgicale pour retrouver une mobilité optimale.",          ar: 'إعادة تأهيل متخصصة بعد حادث أو كسر أو عملية جراحية لاستعادة الحركة المثلى.' },
                features: [
                    { fr: 'Rééducation post-opératoire', ar: 'إعادة التأهيل بعد العمليات' },
                    { fr: 'Traitement des fractures', ar: 'علاج الكسور' },
                    { fr: 'Entorses et luxations', ar: 'الالتواءات والخلع' },
                    { fr: 'Réathlétisation', ar: 'إعادة التأهيل الرياضي' }
                ]
            },
            { 
                id: 'rhumatologie',
                title: { fr: 'Rhumatologie',    ar: 'الروماتيزم' }, 
                desc: { fr: "Prise en charge des douleurs articulaires chroniques, de l'arthrose et des rhumatismes inflammatoires pour améliorer le confort de vie.",                       ar: 'رعاية آلام المفاصل المزمنة، الفصال العظمي والروماتيزم الالتهابي لتحسين جودة الحياة.' },
                features: [
                    { fr: 'Arthrose', ar: 'الفصال العظمي' },
                    { fr: 'Arthrite', ar: 'التهاب المفاصل' },
                    { fr: 'Douleurs dorsales', ar: 'آلام الظهر' },
                    { fr: 'Sciatique', ar: 'عرق النسا' }
                ]
            },
            { 
                id: 'neurologie',
                title: { fr: 'Neurologie',      ar: 'الأعصاب' },   
                desc: { fr: "Rééducation des patients atteints de troubles du système nerveux central ou périphérique (AVC, Parkinson, SEP).",              ar: 'إعادة تأهيل المرضى الذين يعانون من اضطرابات الجهاز العصبي المركزي أو المحيطي (السكتة الدماغية، باركنسون، التصلب المتعدد).' },
                features: [
                    { fr: 'AVC', ar: 'السكتة الدماغية' },
                    { fr: 'Maladie de Parkinson', ar: 'مرض باركنسون' },
                    { fr: 'Sclérose en plaques', ar: 'التصلب المتعدد' },
                    { fr: 'Paraplégie/Tétraplégie', ar: 'الشلل السفلي/الرباعي' }
                ]
            },
            { 
                id: 'amincissement',
                title: { fr: 'Amincissement',   ar: 'التنحيف' },     
                desc: { fr: "Programmes personnalisés alliant soins manuels et technologies pour une remise en forme et un remodelage de la silhouette.", ar: 'برامج مخصصة تجمع بين الرعاية اليدوية والتقنيات لاستعادة اللياقة البدنية ونحت الجسم.' },
                features: [
                    { fr: 'Cryolipolyse', ar: 'تحلل الدهون بالتبريد' },
                    { fr: 'Drainage lymphatique', ar: 'التصريف اللمفاوي' },
                    { fr: 'Suivi nutritionnel', ar: 'متابعة غذائية' },
                    { fr: 'Tonification', ar: 'شد الجسم' }
                ]
            },
        ],
        emergency: { fr: "Appelez-nous pour obtenir une aide d'urgence", ar: 'اتصلوا بنا للحصول على مساعدة عاجلة' },
    },

    // ─── Team / Doctors Section ───
    doctors: {
        headerTitle: { fr: 'Notre Équipe', ar: 'فريقنا' },
        headerSub:   { fr: 'Des professionnels passionnés et dévoués à votre santé', ar: 'متخصصون شغوفون ومكرسون لصحتكم' },
        members: [
            {
                name: { fr: 'Asmaa Hannit', ar: 'أسماء حنيت' },
                role: { fr: 'Fondatrice & Kinésithérapeute', ar: 'المؤسسة وأخصائية علاج طبيعي' },
                speciality: { fr: 'Rééducation fonctionnelle, Thérapie manuelle', ar: 'إعادة التأهيل الوظيفي، العلاج اليدوي' },
                bio: { fr: "Diplômée en kinésithérapie, Asmaa a fondé le cabinet en 2017 avec pour mission d'offrir des soins personnalisés et de qualité.", ar: 'مجازة في العلاج الطبيعي، أسست أسماء العيادة في عام 2017 بهدف تقديم رعاية شخصية وعالية الجودة.' }
            },
            {
                name: { fr: 'Dr. Sarah Bennani', ar: 'د. سارة بناني' },
                role: { fr: 'Médecin Physique', ar: 'طبيبة فيزيائية' },
                speciality: { fr: 'Réadaptation, Traumatologie du sport', ar: 'إعادة التأهيل، طب الإصابات الرياضية' },
                bio: { fr: "Spécialiste en médecine physique et réadaptation, elle supervise les protocoles de soins pour les sportifs de haut niveau.", ar: 'متخصصة في الطب الفيزيائي وإعادة التأهيل، تشرف على بروتوكولات الرعاية للرياضيين رفيعي المستوى.' }
            },
            {
                name: { fr: 'Youssef El Amrani', ar: 'يوسف العمراني' },
                role: { fr: 'Kinésithérapeute', ar: 'أخصائي علاج طبيعي' },
                speciality: { fr: 'Neurologie, Rééducation respiratoire', ar: 'الأعصاب، إعادة تأهيل الجهاز التنفسي' },
                bio: { fr: "Passionné par la neurologie, Youssef accompagne les patients atteints de pathologies neurologiques vers plus d'autonomie.", ar: 'شغوف بالأعصاب، يرافق يوسف المرضى الذين يعانون من أمراض عصبية نحو مزيد من الاستقلال.' }
            }
        ]
    },

    // ─── Contact Section ───
    contact: {
        headerTitle: { fr: 'Contactez-Nous', ar: 'اتصل بنا' },
        headerSub:   { fr: "Une question ? Besoin d'informations ? Nous sommes là pour vous.", ar: 'سؤال؟ بحاجة لمعلومات؟ نحن هنا لخدمتكم.' },
        subtitle: { fr: 'Informations', ar: 'معلومات' },
        title: { fr: 'Restons en contact', ar: 'لنكن على اتصال' },
        description: { fr: "N'hésitez pas à nous contacter pour toute demande d'information ou pour prendre rendez-vous. Notre équipe vous répondra dans les plus brefs délais.", ar: 'لا تترددوا في الاتصال بنا لأي طلب معلومات أو لتحديد موعد. فريقنا سيرد عليكم في أقرب وقت ممكن.' },
        addressTitle: { fr: 'Adresse', ar: 'العنوان' },
        phoneTitle: { fr: 'Téléphone', ar: 'الهاتف' },
        emailTitle: { fr: 'Email', ar: 'البريد الإلكتروني' },
        formTitle: { fr: 'Envoyez-nous un message', ar: 'أرسل لنا رسالة' },
        formPlaceholderName: { fr: 'Votre nom', ar: 'اسمكم' },
        formLabelName: { fr: 'Nom complet', ar: 'الاسم الكامل' },
        formLabelEmail: { fr: 'Email', ar: 'البريد الإلكتروني' },
        formLabelPhone: { fr: 'Téléphone', ar: 'الهاتف' },
        formLabelSubject: { fr: 'Sujet', ar: 'الموضوع' },
        formLabelMessage: { fr: 'Message', ar: 'الرسالة' },
        formPlaceholderEmail: { fr: 'votre@email.com', ar: 'email@example.com' },
        formPlaceholderPhone: { fr: '06 00 00 00 00', ar: '06 00 00 00 00' },
        formPlaceholderSubject: { fr: 'Sujet de votre message', ar: 'موضوع رسالتكم' },
        formPlaceholderMessage: { fr: 'Comment pouvons-nous vous aider ?', ar: 'كيف يمكننا مساعدتكم؟' },
        submitBtn: { fr: 'Envoyer le message', ar: 'إرسال الرسالة' },
        successMsg: { fr: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.', ar: 'تم إرسال رسالتكم بنجاح. سنرد عليكم في أقرب وقت ممكن.' },
        errorMsg: { fr: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.", ar: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.' },
        mapTitle: { fr: 'Cabinet Hannit Location', ar: 'موقع عيادة حنيت' },
    },

    // ─── Appointment Section ───
    appointment: {
        headerTitle: { fr: 'Prendre Rendez-vous', ar: 'حجز موعد' },
        headerSub:   { fr: 'Réservez votre consultation en ligne facilement', ar: 'احجز استشارتك عبر الإنترنت بسهولة' },
        subtitle:    { fr: 'Consultation', ar: 'استشارة' },
        title:       { fr: 'Votre santé ne peut pas attendre', ar: 'صحتكم لا تنتظر' },
        lead:        { fr: "Remplissez le formulaire ci-contre pour demander un rendez-vous. Notre équipe administrative vous contactera rapidement pour confirmer votre consultation.", ar: 'املأ الاستمارة لطلب موعد. سيتصل بك فريقنا الإداري سريعاً لتأكيد موعدك.' },
        step1Title:  { fr: 'Remplissez le formulaire', ar: 'املأ الاستمارة' },
        step1Desc:   { fr: 'Indiquez vos coordonnées et vos préférences de date.', ar: 'أدخل معلومات الاتصال بك وتاريخك المفضل.' },
        step2Title:  { fr: 'Confirmation', ar: 'التأكيد' },
        step2Desc:   { fr: 'Nous vous appelons pour confirmer le créneau horaire.', ar: 'سنتصل بك لتأكيد الوقت المتاح.' },
        step3Title:  { fr: 'Consultation', ar: 'الاستشارة' },
        step3Desc:   { fr: 'Présentez-vous au cabinet 10 minutes avant votre heure.', ar: 'يرجى الحضور إلى العيادة قبل 10 دقائق من موعدك.' },
        openingHours: { fr: "Heures d'ouverture", ar: 'ساعات العمل' },
        formTitle:   { fr: 'Formulaire de Réservation', ar: 'استمارة الحجز' },
        formSelectService: { fr: 'Sélectionnez un service', ar: 'اختر خدمة' },
        formServiceLabel: { fr: 'Service souhaité *', ar: 'الخدمة المطلوبة *' },
        formDateLabel: { fr: 'Date souhaitée *', ar: 'التاريخ المطلوب *' },
        formTimeLabel: { fr: 'Heure souhaitée', ar: 'الوقت المطلوب' },
        formMessageLabel: { fr: 'Message / Symptômes', ar: 'رسالة / أعراض' },
        formMessagePlaceholder: { fr: 'Décrivez brièvement vos symptômes ou laissez un message...', ar: 'صف باختصار أعراضك أو اترك رسالة...' },
        submitBtn:   { fr: 'Confirmer la demande', ar: 'تأكيد الطلب' },
        successMsg: { fr: "Votre demande de rendez-vous a bien été envoyée. Nous vous confirmerons la date et l'heure par téléphone sous peu.", ar: 'تم إرسال طلب الموعد الخاص بك بنجاح. سنؤكد لك التاريخ والوقت عبر الهاتف قريباً.' },
        errorMsg: { fr: 'Une erreur est survenue lors de la réservation. Veuillez réessayer ou nous contacter par téléphone.', ar: 'حدث خطأ أثناء الحجز. يرجى المحاولة مرة أخرى أو الاتصال بنا عبر الهاتف.' },
        services: [
            { fr: 'Kinésithérapie', ar: 'العلاج الطبيعي' },
            { fr: 'Physiothérapie', ar: 'العلاج الفيزيائي' },
            { fr: 'Traumatologie', ar: 'طب الإصابات' },
            { fr: 'Rhumatologie', ar: 'الروماتيزم' },
            { fr: 'Neurologie', ar: 'الأعصاب' },
            { fr: 'Amincissement', ar: 'التنحيف' },
            { fr: 'Autre', ar: 'آخر' }
        ]
    },

    // ─── Testimonials ───
    testimonials: {
        subtitle: { fr: 'Témoignages',                 ar: 'شهادات' },
        title:    { fr: 'Ce que disent nos patients',   ar: 'ماذا يقول مرضانا' },
        verified: { fr: 'Patient Vérifié',              ar: 'مريض موثق' },
        items: [
            { name: 'Fatima Z.', text: { fr: "Un cabinet exceptionnel ! L'équipe est très professionnelle et attentionnée. Je recommande vivement pour tout type de rééducation.", ar: 'عيادة استثنائية! الفريق محترف جداً ومهتم. أنصح بشدة لأي نوع من إعادة التأهيل.' }, rating: 5 },
            { name: 'Mohammed A.', text: { fr: "Après mon accident, Cabinet Hannit m'a aidé à retrouver ma mobilité. Les soins sont de qualité et le suivi est excellent.", ar: 'بعد حادثي، ساعدتني عيادة حنيت في استعادة حركتي. الرعاية ذات جودة عالية والمتابعة ممتازة.' }, rating: 5 },
            { name: 'Sara M.', text: { fr: "Très satisfaite des séances de physiothérapie. L'ambiance est chaleureuse et les résultats sont au rendez-vous.", ar: 'راضية جداً عن جلسات العلاج الطبيعي. الأجواء دافئة والنتائج في الموعد.' }, rating: 5 },
        ],
    },

    // ─── Working Hours ───
    hours: {
        subtitle:    { fr: 'Horaires',            ar: 'أوقات العمل' },
        title:       { fr: "Heures d'ouverture",   ar: 'ساعات العمل' },
        description: {
            fr: "Nous sommes disponibles pour vous accueillir du lundi au samedi. N'hésitez pas à nous contacter pour prendre rendez-vous.",
            ar: 'نحن متواجدون لاستقبالكم من الاثنين إلى السبت. لا تترددوا في التواصل معنا لحجز موعد.'
        },
        days: [
            { day: { fr: 'Lundi',    ar: 'الاثنين' },   hours: '9h00 - 18h00' },
            { day: { fr: 'Mardi',    ar: 'الثلاثاء' },  hours: '9h00 - 18h00' },
            { day: { fr: 'Mercredi', ar: 'الأربعاء' },  hours: '9h00 - 18h00' },
            { day: { fr: 'Jeudi',    ar: 'الخميس' },    hours: '9h00 - 18h00' },
            { day: { fr: 'Vendredi', ar: 'الجمعة' },    hours: '9h00 - 18h00' },
            { day: { fr: 'Samedi',   ar: 'السبت' },     hours: '10h00 - 15h00' },
            { day: { fr: 'Dimanche', ar: 'الأحد' },     hours: { fr: 'Fermé', ar: 'مغلق' }, closed: true },
        ],
        address:   { fr: 'Notre Adresse',  ar: 'عنواننا' },
        phone:     { fr: 'Téléphone',      ar: 'الهاتف' },
    },

    // ─── FAQ ───
    faq: {
        subtitle: { fr: 'FAQ',                    ar: 'أسئلة شائعة' },
        title:    { fr: 'Questions Fréquentes',    ar: 'الأسئلة المتكررة' },
        items: [
            {
                q: { fr: 'Comment prendre rendez-vous ?', ar: 'كيف يمكنني حجز موعد؟' },
                a: { fr: 'Vous pouvez prendre rendez-vous en ligne via notre site, par téléphone au +212 644 574 537, ou directement au cabinet.', ar: 'يمكنكم حجز موعد عبر الإنترنت من خلال موقعنا، أو عبر الهاتف على الرقم 537 574 644 212+، أو مباشرة في العيادة.' }
            },
            {
                q: { fr: 'Quels types de soins proposez-vous ?', ar: 'ما أنواع العلاجات التي تقدمونها؟' },
                a: { fr: "Nous proposons la kinésithérapie, la physiothérapie, la rééducation traumatologique, rhumatologique, neurologique, ainsi que des programmes d'amincissement.", ar: 'نقدم العلاج الطبيعي، العلاج الفيزيائي، إعادة تأهيل الإصابات، الروماتيزم، الأعصاب، وبرامج التنحيف.' }
            },
            {
                q: { fr: 'Les séances sont-elles remboursées ?', ar: 'هل يتم تعويض الجلسات؟' },
                a: { fr: 'Oui, nos séances sont prises en charge par la plupart des mutuelles et assurances maladie. Contactez-nous pour plus de détails.', ar: 'نعم، يتم تغطية جلساتنا من قبل معظم شركات التأمين الصحي. تواصلوا معنا لمزيد من التفاصيل.' }
            },
            {
                q: { fr: "Quelle est la durée d'une séance ?", ar: 'ما هي مدة الجلسة؟' },
                a: { fr: "Une séance dure généralement entre 30 et 60 minutes selon le type de traitement et les besoins du patient.", ar: 'تستغرق الجلسة عادةً بين 30 و60 دقيقة حسب نوع العلاج واحتياجات المريض.' }
            },
        ],
    },

    // ─── CTA Section ───
    cta: {
        title:     { fr: 'Ne perdez pas votre temps',                  ar: 'لا تضيعوا وقتكم' },
        subtitle:  { fr: 'Prenez rendez-vous en ligne dès maintenant', ar: 'احجزوا موعداً عبر الإنترنت الآن' },
        appointment: { fr: 'Prendre Rendez-vous', ar: 'حجز موعد' },
        callUs:    { fr: 'Appelez-nous',           ar: 'اتصلوا بنا' },
    },

    // ─── Footer ───
    footer: {
        description: {
            fr: 'Cabinet spécialisé en kinésithérapie et physiothérapie à Casablanca. Votre santé est notre priorité depuis 2017.',
            ar: 'عيادة متخصصة في العلاج الطبيعي والفيزيائي بالدار البيضاء. صحتكم أولويتنا منذ 2017.'
        },
        quickLinks:   { fr: 'Liens Rapides',       ar: 'روابط سريعة' },
        ourServices:  { fr: 'Nos Services',         ar: 'خدماتنا' },
        contact:      { fr: 'Contact',              ar: 'اتصل بنا' },
        home:         { fr: 'Accueil',              ar: 'الرئيسية' },
        aboutLink:    { fr: 'À propos',             ar: 'من نحن' },
        servicesLink: { fr: 'Services',             ar: 'خدماتنا' },
        teamLink:     { fr: 'Notre Équipe',         ar: 'فريقنا' },
        contactLink:  { fr: 'Contact',              ar: 'اتصل بنا' },
        appointmentLink: { fr: 'Rendez-vous',       ar: 'موعد' },
        kine:         { fr: 'Kinésithérapie',       ar: 'العلاج الطبيعي' },
        physio:       { fr: 'Physiothérapie',       ar: 'العلاج الفيزيائي' },
        amincissement:{ fr: 'Amincissement',        ar: 'التنحيف' },
        traumatologie:{ fr: 'Traumatologie',        ar: 'طب الإصابات' },
        rhumatologie: { fr: 'Rhumatologie',         ar: 'الروماتيزم' },
        neurologie:   { fr: 'Neurologie',           ar: 'الأعصاب' },
        hours:        { fr: 'Lun - Ven: 9h - 18h',  ar: 'الاثنين - الجمعة: 9ص - 6م' },
        satHours:     { fr: 'Sam: 10h - 15h',       ar: 'السبت: 10ص - 3م' },
        rights:       { fr: 'Tous droits réservés.', ar: 'جميع الحقوق محفوظة.' },
        madeWith:     { fr: 'Conçu avec',            ar: 'صُنع بـ' },
        forHealth:    { fr: 'pour votre santé',      ar: 'من أجل صحتكم' },
    },

    // ─── Login Page ───
    loginPage: {
        title: { fr: 'Connexion', ar: 'تسجيل الدخول' },
        subtitle: { fr: 'Accédez à votre espace patient', ar: 'الدخول إلى فضاء المريض الخاص بكم' },
        emailLabel: { fr: 'Email', ar: 'البريد الإلكتروني' },
        passwordLabel: { fr: 'Mot de passe', ar: 'كلمة المرور' },
        placeholderEmail: { fr: 'votre@email.com', ar: 'email@example.com' },
        placeholderPassword: { fr: '••••••••', ar: '••••••••' },
        loginBtn: { fr: 'Se connecter', ar: 'دخول' },
        loggingIn: { fr: 'Connexion en cours...', ar: 'جاري الدخول...' },
        or: { fr: 'OU', ar: 'أو' },
        googleBtn: { fr: 'Continuer avec Google', ar: 'المتابعة عبر جوجل' },
        noAccount: { fr: 'Pas encore de compte ?', ar: 'ليس لديكم حساب؟' },
        registerLink: { fr: 'Inscrivez-vous', ar: 'سجلوا الآن' },
        errorInvalid: { fr: 'Identifiants invalides. Veuillez réessayer.', ar: 'بيانات الاعتماد غير صالحة. يرجى المحاولة مرة أخرى.' },
        adminForbidden: { fr: 'Les administrateurs doivent se connecter via la page admin avec leur email.', ar: 'يجب على المسؤولين تسجيل الدخول عبر صفحة المسؤول ببريدهم الإلكتروني.' },
    },

    // ─── Register Page ───
    registerPage: {
        title: { fr: 'Créer un compte', ar: 'إنشاء حساب' },
        subtitle: { fr: 'Inscrivez-vous pour un suivi personnalisé', ar: 'سجل للحصول على متابعة شخصية' },
        nameLabel: { fr: 'Nom complet', ar: 'الاسم الكامل' },
        emailLabel: { fr: 'Email', ar: 'البريد الإلكتروني' },
        passwordLabel: { fr: 'Mot de passe', ar: 'كلمة المرور' },
        confirmPasswordLabel: { fr: 'Confirmer le mot de passe', ar: 'تأكيد كلمة المرور' },
        placeholderName: { fr: 'Votre nom', ar: 'اسمكم' },
        placeholderEmail: { fr: 'votre@email.com', ar: 'email@example.com' },
        placeholderPassword: { fr: '••••••••', ar: '••••••••' },
        registerBtn: { fr: "S'inscrire", ar: 'تسجيل' },
        registering: { fr: 'Inscription en cours...', ar: 'جاري التسجيل...' },
        hasAccount: { fr: 'Déjà un compte ?', ar: 'لديك حساب بالفعل؟' },
        loginLink: { fr: 'Connectez-vous ici', ar: 'سجل دخولك هنا' },
        errorMismatch: { fr: 'Les mots de passe ne correspondent pas.', ar: 'كلمات المرور غير متطابقة.' },
        errorServer: { fr: 'Erreur serveur (500). Veuillez vérifier votre configuration.', ar: 'خطأ في الخادم (500). يرجى التحقق من إعداداتك.' },
        errorGeneric: { fr: "Une erreur est survenue lors de l'inscription.", ar: 'حدث خطأ أثناء التسجيل.' },
        successMsg: { fr: 'Inscription réussie ! Veuillez vous connecter.', ar: 'تم التسجيل بنجاح! يرجى تسجيل الدخول.' },
    },

    // ─── User Dashboard ───
    userDashboard: {
        loading: { fr: 'Chargement de votre espace personnel...', ar: 'جاري تحميل فضائكم الشخصي...' },
        errorTitle: { fr: 'Oups !', ar: 'عذراً!' },
        errorDesc: { fr: 'Impossible de charger les données du tableau de bord.', ar: 'تعذر تحميل بيانات لوحة التحكم.' },
        retry: { fr: 'Réessayer', ar: 'إعادة المحاولة' },
        title: { fr: 'Mon Tableau de Bord', ar: 'لوحة التحكم الخاصة بي' },
        welcome: { fr: 'Bienvenue sur votre espace, ', ar: 'مرحباً بكم في فضائكم، ' },
        welcomeSub: { fr: "Retrouvez ici l'historique de vos rendez-vous, vos messages et vos services préférés.", ar: 'تجدون هنا تاريخ مواعيدكم، رسائلكم وخدماتكم المفضلة.' },
        patientSpace: { fr: 'Espace patient de ', ar: 'فضاء المريض لـ ' },
        tabs: {
            overview: { fr: 'Aperçu', ar: 'نظرة عامة' },
            appointments: { fr: 'Mes Rendez-vous', ar: 'مواعيدي' },
            messages: { fr: 'Mes Messages', ar: 'رسائلي' },
            selections: { fr: 'Mes Sélections', ar: 'اختياراتي' },
        },
        stats: {
            appointments: { fr: 'Rendez-vous', ar: 'المواعيد' },
            messages: { fr: 'Messages', ar: 'الرسائل' },
            selections: { fr: 'Sélections', ar: 'الاختيارات' },
            unreadReplies: { fr: 'Réponses non lues', ar: 'ردود غير مقروءة' },
        },
        overview: {
            nextAppt: { fr: 'Prochain Rendez-vous', ar: 'الموعد القادم' },
            lastMsg: { fr: 'Dernier Message', ar: 'آخر رسالة' },
            viewAll: { fr: 'Tout voir', ar: 'عرض الكل' },
            noAppt: { fr: 'Aucun rendez-vous à venir.', ar: 'لا توجد مواعيد قادمة.' },
            noMsg: { fr: 'Aucun message envoyé.', ar: 'لا توجد رسائل مرسلة.' },
            quickActions: { fr: 'Actions Rapides', ar: 'إجراءات سريعة' },
            newAppt: { fr: 'Nouveau Rendez-vous', ar: 'موعد جديد' },
            exploreServices: { fr: 'Explorer les Services', ar: 'استكشاف الخدمات' },
            contactUs: { fr: 'Nous Contacter', ar: 'اتصل بنا' },
        },
        appointments: {
            table: {
                service: { fr: 'Service', ar: 'الخدمة' },
                date: { fr: 'Date', ar: 'التاريخ' },
                time: { fr: 'Heure', ar: 'الوقت' },
                status: { fr: 'Statut', ar: 'الحالة' },
                actions: { fr: 'Actions', ar: 'الإجراءات' },
            },
            status: {
                pending: { fr: 'En attente', ar: 'في الانتظار' },
                confirmed: { fr: 'Confirmé', ar: 'مؤكد' },
                cancelled: { fr: 'Annulé', ar: 'ملغى' },
            },
            empty: { fr: 'Aucun rendez-vous trouvé', ar: 'لم يتم العثور على مواعيد' },
            bookNow: { fr: 'Prendre rendez-vous', ar: 'حجز موعد' },
            deleteConfirm: { fr: 'Êtes-vous sûr de vouloir annuler et supprimer ce rendez-vous ?', ar: 'هل أنت متأكد أنك تريد إلغاء وحذف هذا الموعد؟' },
        },
        messages: {
            replied: { fr: 'Répondu', ar: 'تم الرد' },
            read: { fr: 'Lu', ar: 'مقروء' },
            unread: { fr: 'Non lu', ar: 'غير مقروء' },
            yourMessage: { fr: 'Votre message', ar: 'رسالتكم' },
            adminReply: { fr: "Réponse de l'administration", ar: 'رد الإدارة' },
            repliedOn: { fr: 'Répondu le ', ar: 'تم الرد في ' },
            markRead: { fr: 'Marquer comme lu', ar: 'تحديد كمقروء' },
            waitingReply: { fr: 'En attente de réponse...', ar: 'في انتظار الرد...' },
            empty: { fr: 'Aucun message envoyé', ar: 'لا توجد رسائل مرسلة' },
            contactBtn: { fr: 'Nous contacter', ar: 'اتصل بنا' },
            deleteConfirm: { fr: 'Êtes-vous sûr de vouloir supprimer ce message ?', ar: 'هل أنت متأكد أنك تريد حذف هذه الرسالة؟' },
        },
        notifications: {
            title: { fr: 'Notifications', ar: 'التنبيهات' },
            new: { fr: ' nouvelle', ar: ' جديد' },
            news: { fr: ' nouvelles', ar: ' جديدة' },
            replyTo: { fr: 'Nouvelle réponse à "', ar: 'رد جديد على "' },
            empty: { fr: 'Aucune nouvelle notification', ar: 'لا توجد تنبيهات جديدة' },
            viewAll: { fr: 'Voir tous les messages', ar: 'عرض جميع الرسائل' },
        },
    },

    // ─── Loader ───
    loader: {
        text: { fr: 'Chargement...', ar: 'جاري التحميل...' },
    },
};

export default translations;
