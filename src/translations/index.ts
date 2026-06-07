export type Lang = "RU" | "KZ" | "EN";

export const translations = {
  RU: {
    // Header
    nav_program: "Программа",
    nav_news: "Новости",
    nav_gallery: "Галерея",
    nav_team: "Команда",
    nav_about: "О проекте",
    nav_partners: "Партнёры",
    nav_about_lab: "О лаборатории",
    nav_about_docs: "Разрешительные документы",
    cta_whatsapp: "WhatsApp",

    // Hero
    hero_badge: "Научный проект АР22783154 · КН МОН РК",
    hero_title: "Радиоэкологическая обсерватория",
    hero_subtitle: "бассейна реки Шаган",
    hero_desc:
      "Комплексный мониторинг тритиевого загрязнения, оценка дозовых нагрузок и разработка рекомендаций для населённых пунктов в зоне влияния Семипалатинского испытательного полигона.",
    hero_cta_program: "О программе исследований",
    hero_cta_gallery: "Посмотреть галерею",

    // Program
    program_label: "Научная программа",
    program_heading: "Радиоэкологический мониторинг бассейна реки Шаган",
    program_heading2: "в зоне влияния Семипалатинского испытательного полигона",
    program_p1:
      "Программа реализуется в рамках гранта Комитета науки МОН РК (проект № АР22783154). Объектом исследования является бассейн реки Шаган — основного водного артерии юго-западной буферной зоны Семипалатинского испытательного полигона (СИП).",
    program_p2:
      "Ключевым загрязнителем является тритий (³H) — радиоактивный изотоп водорода с периодом полураспада T₁/₂ = 12,32 года. Проникая в гидросферу в результате подземных ядерных испытаний, тритий мигрирует в поверхностные воды и вовлекается в биологический цикл, создавая хроническую дозовую нагрузку на население.",
    program_feat1_title: "Тритиевый мониторинг",
    program_feat1_desc:
      "Систематический отбор и анализ проб воды на содержание трития (³H) методом жидкостной сцинтилляционной спектрометрии на 14 стационарных точках мониторинга.",
    program_feat2_title: "Гидрогеохимия",
    program_feat2_desc:
      "Исследование путей миграции радионуклидов через систему «подземные воды — поверхностные воды» с построением гидрогеохимических моделей.",
    program_feat3_title: "Дозовые нагрузки",
    program_feat3_desc:
      "Расчёт эффективных доз облучения населения прилегающих посёлков от потребления питьевой воды и продуктов питания местного производства.",
    program_feat4_title: "Рекомендации",
    program_feat4_desc:
      "Разработка научно обоснованных рекомендаций для государственных органов по обеспечению радиационной безопасности населения.",
    program_stat1_val: "14",
    program_stat1_label: "точек мониторинга",
    program_stat2_val: "3",
    program_stat2_label: "года исследований",
    program_stat3_val: "500+",
    program_stat3_label: "проб проанализировано",
    program_img_caption: "Полевые измерения на точке мониторинга № 7",
    program_img_sub: "Нижнее течение р. Шаган · Апрель 2025",

    // News
    news_label: "Хроника проекта",
    news_heading: "Новости и события",
    news_more: "Подробнее",
    news_close: "Закрыть",

    // Gallery
    gallery_label: "Фотоматериалы",
    gallery_heading: "Галерея",
    gallery_desc: "Полевые экспедиции, лабораторная работа и мониторинговые станции",
    gallery_open: "Открыть",

    // Team
    team_label: "Научный коллектив",
    team_heading: "Исследовательская группа",
    team_more: "Подробнее →",
    team_modal_bio: "Биография и область ответственности",
    team_modal_role: "В рамках проекта",
    team_modal_pubs: "Избранные публикации (Scopus / WoS)",

    // About
    about_label: "Научный лонгрид",
    about_heading: "О проекте",
    about_nav_label: "Навигация",
    about_s1: "Актуальность",
    about_s2: "Цели и задачи",
    about_s3: "Методология",
    about_s4: "Ожидаемые результаты",
    about_s5: "Документы",

    about_s1_heading: "Актуальность исследования",
    about_s1_p1:
      "Семипалатинский испытательный полигон (СИП) — крупнейший в истории СССР ядерный испытательный полигон, где с 1949 по 1989 год было проведено 456 ядерных испытаний, в том числе 340 подземных. Несмотря на официальное закрытие полигона в 1991 году, радиоэкологические последствия испытаний сохраняются по сей день.",
    about_s1_p2:
      "Подземные ядерные взрывы создали разветвлённую сеть техногенных полостей и разломов, заполненных радиоактивными водами с высоким содержанием трития (³H), цезия-137, стронция-90 и других долгоживущих радионуклидов. Через системы подземных вод загрязнение мигрирует в поверхностные водотоки, в том числе в реку Шаган.",
    about_s1_box_title: "Критический аспект",
    about_s1_box:
      "Тритий является химическим аналогом водорода и легко включается в молекулы воды (HTO), что делает его биологически доступным. Попадая в организм с питьевой водой или продуктами питания, тритий равномерно распределяется по всем тканям и создаёт дополнительную внутреннюю дозу облучения.",
    about_s1_p3:
      "Населённые пункты Абай, Долонь и Малеевка, расположенные в 50–120 км от границы СИП, используют р. Шаган и связанные с ней грунтовые воды как источник питьевого водоснабжения.",

    about_s2_heading: "Цели и задачи",
    about_s2_goal_label: "Цель проекта:",
    about_s2_goal:
      "Разработка комплексной системы радиоэкологического мониторинга бассейна реки Шаган и научно обоснованной оценки дозовых нагрузок на население прилегающих территорий.",
    about_s2_tasks_label: "Задачи исследования:",
    about_s2_tasks: [
      "Создание сети из 14 стационарных пунктов мониторинга поверхностных и подземных вод с GPS-привязкой и картографированием в ГИС.",
      "Систематический (ежеквартальный) отбор и анализ проб воды, донных отложений и прибрежных почв на содержание трития методом ЖСС.",
      "Выявление основных путей и скоростей миграции трития от источников загрязнения к поверхностным водотокам.",
      "Построение гидрогеохимических моделей распространения загрязнения с использованием программ FEFLOW и MODFLOW.",
      "Расчёт эффективных доз облучения населения по четырём путям поступления: питьевая вода, рыба, молоко, прямое воздействие.",
      "Сравнительный анализ полученных доз с нормативами ICRP-60 и казахстанскими НРБ-2014.",
      "Разработка рекомендаций по оптимизации систем водоснабжения и снижению дозовых нагрузок для органов государственного управления.",
    ],

    about_s3_heading: "Методология",
    about_s3_intro:
      "Исследование сочетает методы полевого пробоотбора, лабораторного анализа и численного моделирования.",
    about_s3_block1_title: "Аналитические методы",
    about_s3_block1: [
      "Жидкостная сцинтилляционная спектрометрия (ЖСС) на приборе Quantulus 1220",
      "Гамма-спектрометрия на HPGe-детекторе",
      "Масс-спектрометрия с индуктивно связанной плазмой (ICP-MS)",
      "Атомно-абсорбционная спектроскопия (ААС)",
    ],
    about_s3_block2_title: "Моделирование и ГИС",
    about_s3_block2: [
      "Гидрогеологическое моделирование (FEFLOW, MODFLOW)",
      "ГИС-картирование (QGIS, ArcGIS Pro)",
      "Статистический анализ временных рядов (R, Python)",
      "Дозиметрическое моделирование по методологии IAEA",
    ],

    about_s4_heading: "Ожидаемые результаты",
    about_s4_pub_label: "Публикационный план:",
    about_s4_pubs: [
      "Не менее 6 статей в рецензируемых журналах Q1–Q2 базы Scopus / Web of Science",
      "1 монография «Радиоэкология бассейна реки Шаган» (издательство НАН РК)",
      "3 научных доклада на международных конференциях (IAEA, IRPA, EGU)",
      "1 учебно-методическое пособие для студентов экологических специальностей",
    ],
    about_s4_pract_label: "Практические результаты:",
    about_s4_practs: [
      "Интерактивная ГИС-система радиоэкологического мониторинга бассейна р. Шаган",
      "База данных радиационного мониторинга (>3 лет непрерывных наблюдений)",
      "Карты изолиний тритиевого загрязнения в масштабе 1:50 000",
      "Аналитические доклады и рекомендации для МЭПР РК, ДЧС ВКО",
      "Подготовка 2 кандидатов и 1 доктора наук в области радиационной экологии",
    ],

    // Footer
    footer_partners_label: "Партнёры проекта",
    footer_project_desc:
      "Научный проект № АР22783154, финансируемый Комитетом науки Министерства образования и науки Республики Казахстан. 2023–2026 гг.",
    footer_contacts_label: "Контакты",
    footer_pi_role: "Руководитель проекта · к.б.н., PhD",
    footer_copyright: "© 2025 Радиоэкологическая обсерватория бассейна р. Шаган",
    footer_grant: "Проект № АР22783154 · КН МОН РК",
    footer_write: "Написать",
    footer_pi_name: "Байгазинов Жанат Абылканович",

    // Header logo
    logo_line1: "Обсерватория",
    logo_line2: "р. Шаган",
  },

  KZ: {
    // Header
    nav_program: "Бағдарлама",
    nav_news: "Жаңалықтар",
    nav_gallery: "Галерея",
    nav_team: "Команда",
    nav_about: "Жоба туралы",
    nav_partners: "Серіктестер",
    nav_about_lab: "Зертхана туралы",
    nav_about_docs: "Рұқсат құжаттары",
    cta_whatsapp: "WhatsApp",

    // Hero
    hero_badge: "Ғылыми жоба АР22783154 · ҚР БҒМ ҒК",
    hero_title: "Шаған өзені бассейнінің",
    hero_subtitle: "радиоэкологиялық обсерваториясы",
    hero_desc:
      "Тритий ластануын кешенді бақылау, доза жүктемесін бағалау және Семей ядролық сынақ полигонының ықпал аймағындағы елді мекендерге ұсынымдар әзірлеу.",
    hero_cta_program: "Зерттеу бағдарламасы туралы",
    hero_cta_gallery: "Галереяны қарау",

    // Program
    program_label: "Ғылыми бағдарлама",
    program_heading: "Шаған өзені бассейнінің радиоэкологиялық мониторингі",
    program_heading2: "Семей ядролық сынақ полигонының ықпал аймағында",
    program_p1:
      "Бағдарлама ҚР БҒМ Ғылым комитетінің гранты шеңберінде жүзеге асырылады (жоба № АР22783154). Зерттеу объектісі — Семей ядролық сынақ полигонының (СЯП) оңтүстік-батыс буферлік аймағының негізгі су артериясы болып табылатын Шаған өзені бассейні.",
    program_p2:
      "Негізгі ластаушы — жартылай ыдырау кезеңі T₁/₂ = 12,32 жыл болатын радиоактивті сутегі изотопы тритий (³H). Жерасты ядролық жарылыстар нәтижесінде гидросфераға енген тритий беткі суларға миграцияланады және биологиялық айналымға тартылады.",
    program_feat1_title: "Тритийлік мониторинг",
    program_feat1_desc:
      "14 стационарлық бақылау нүктесінде сұйық сцинтилляциялық спектрометрия әдісімен тритий (³H) мөлшеріне су үлгілерін жүйелі іріктеу және талдау.",
    program_feat2_title: "Гидрогеохимия",
    program_feat2_desc:
      "Гидрогеохимиялық модельдер құра отырып, «жерасты сулары — беткі сулар» жүйесі арқылы радионуклидтер миграциясының жолдарын зерттеу.",
    program_feat3_title: "Доза жүктемесі",
    program_feat3_desc:
      "Іргелес ауылдар халқының ауыз суды және жергілікті өнімдерді тұтынудан алатын тиімді сәулелену дозаларын есептеу.",
    program_feat4_title: "Ұсынымдар",
    program_feat4_desc:
      "Халықтың радиациялық қауіпсіздігін қамтамасыз ету бойынша мемлекеттік органдарға ғылыми негізделген ұсынымдар әзірлеу.",
    program_stat1_val: "14",
    program_stat1_label: "бақылау нүктесі",
    program_stat2_val: "3",
    program_stat2_label: "жылдық зерттеу",
    program_stat3_val: "500+",
    program_stat3_label: "үлгі талданды",
    program_img_caption: "№ 7 бақылау нүктесінде далалық өлшеулер",
    program_img_sub: "Шаған өзенінің төменгі ағысы · 2025 жылғы сәуір",

    // News
    news_label: "Жоба шежіресі",
    news_heading: "Жаңалықтар мен оқиғалар",
    news_more: "Толығырақ",
    news_close: "Жабу",

    // Gallery
    gallery_label: "Фотоматериалдар",
    gallery_heading: "Галерея",
    gallery_desc: "Далалық экспедициялар, зертханалық жұмыс және мониторинг станциялары",
    gallery_open: "Ашу",

    // Team
    team_label: "Ғылыми ұжым",
    team_heading: "Зерттеу тобы",
    team_more: "Толығырақ →",
    team_modal_bio: "Өмірбаяны және жауапкершілік саласы",
    team_modal_role: "Жоба шеңберінде",
    team_modal_pubs: "Таңдаулы басылымдар (Scopus / WoS)",

    // About
    about_label: "Ғылыми мақала",
    about_heading: "Жоба туралы",
    about_nav_label: "Навигация",
    about_s1: "Өзектілігі",
    about_s2: "Мақсаттары мен міндеттері",
    about_s3: "Әдіснама",
    about_s4: "Күтілетін нәтижелер",
    about_s5: "Құжаттар",

    about_s1_heading: "Зерттеудің өзектілігі",
    about_s1_p1:
      "Семей ядролық сынақ полигоны (СЯП) — КСРО тарихындағы ең ірі ядролық сынақ алаңы. 1949–1989 жылдар аралығында 456 ядролық сынақ жүргізілді, оның ішінде 340 жерасты сынағы. 1991 жылы полигон жабылғанына қарамастан, сынақтардың радиоэкологиялық салдарлары күні бүгінге дейін сақталуда.",
    about_s1_p2:
      "Жерасты ядролық жарылыстары тритий (³H), цезий-137, стронций-90 және басқа да ұзақ өмір сүретін радионуклидтері бар радиоактивті сулармен толтырылған техногендік қуыстар мен жарықтардың тармақталған желісін қалыптастырды. Жерасты сулары арқылы ластану Шаған өзені сияқты беткі суларға миграцияланады.",
    about_s1_box_title: "Маңызды аспект",
    about_s1_box:
      "Тритий сутегінің химиялық аналогы болып табылады және су молекулаларына (HTO) оңай қосылады, бұл оны биологиялық қолжетімді етеді. Ауыз су немесе тамақ өнімдерімен бірге ағзаға түскен тритий барлық тіндерге біркелкі таралады және қосымша ішкі сәулелену дозасын тудырады.",
    about_s1_p3:
      "СЯП шекарасынан 50–120 км қашықтықта орналасқан Абай, Долон және Малеевка елді мекендері ауыз су көзі ретінде Шаған өзені мен онымен байланысты жерасты суларын пайдаланады.",

    about_s2_heading: "Мақсаттары мен міндеттері",
    about_s2_goal_label: "Жобаның мақсаты:",
    about_s2_goal:
      "Шаған өзені бассейнінің кешенді радиоэкологиялық мониторинг жүйесін және іргелес аумақтар халқына доза жүктемесін ғылыми негізді бағалауды әзірлеу.",
    about_s2_tasks_label: "Зерттеу міндеттері:",
    about_s2_tasks: [
      "GPS-байластырумен және ГАЖ-картографиялаумен беткі және жерасты суларының 14 стационарлық бақылау нүктесінің желісін құру.",
      "Беттің, шөгінді жыныстардың және жағалаудың тритий мөлшеріне жүйелі (тоқсандық) үлгілерін іріктеу және талдау.",
      "Ластанудан беткі суларға тритий миграциясының негізгі жолдары мен жылдамдықтарын анықтау.",
      "FEFLOW және MODFLOW бағдарламаларын қолдана отырып, ластану таралуының гидрогеохимиялық модельдерін құру.",
      "Халықтың ауыз су, балық, сүт, тікелей ықпал арқылы алатын тиімді сәулелену дозаларын есептеу.",
      "Алынған дозаларды ICRP-60 және ҚР НРБ-2014 нормативтерімен салыстырмалы талдау.",
      "Мемлекеттік басқару органдары үшін су жабдықтау жүйелерін оңтайландыру бойынша ұсынымдар әзірлеу.",
    ],

    about_s3_heading: "Әдіснама",
    about_s3_intro:
      "Зерттеу далалық үлгі іріктеу, зертханалық талдау және сандық модельдеу әдістерін біріктіреді.",
    about_s3_block1_title: "Аналитикалық әдістер",
    about_s3_block1: [
      "Quantulus 1220 аспабында сұйық сцинтилляциялық спектрометрия (ССС)",
      "HPGe-детекторында гамма-спектрометрия",
      "Индукциялы байланысқан плазмамен масс-спектрометрия (ICP-MS)",
      "Атомдық-абсорбциялық спектроскопия (ААС)",
    ],
    about_s3_block2_title: "Модельдеу және ГАЖ",
    about_s3_block2: [
      "Гидрогеологиялық модельдеу (FEFLOW, MODFLOW)",
      "ГАЖ-картографиялау (QGIS, ArcGIS Pro)",
      "Уақыт қатарларын статистикалық талдау (R, Python)",
      "МАГАТЭ әдіснамасы бойынша дозиметриялық модельдеу",
    ],

    about_s4_heading: "Күтілетін нәтижелер",
    about_s4_pub_label: "Жарияланым жоспары:",
    about_s4_pubs: [
      "Scopus / Web of Science базасының Q1–Q2 рецензияланатын журналдарында кемінде 6 мақала",
      "1 монография «Шаған өзені бассейнінің радиоэкологиясы» (ҚР ҰҒА баспасы)",
      "Халықаралық конференцияларда (МАГАТЭ, IRPA, EGU) 3 ғылыми баяндама",
      "Экология мамандықтарының студенттеріне арналған 1 оқу-әдістемелік құрал",
    ],
    about_s4_pract_label: "Практикалық нәтижелер:",
    about_s4_practs: [
      "Шаған өзені бассейнінің интерактивті ГАЖ радиоэкологиялық мониторинг жүйесі",
      "Радиациялық мониторинг деректер базасы (3 жылдан астам үздіксіз бақылау)",
      "1:50 000 масштабтағы тритий ластануының изосызық карталары",
      "ҚР ЭГТРМ, ШҚО ТЖД үшін аналитикалық баяндамалар мен ұсынымдар",
      "Радиациялық экология саласында 2 ғылым кандидаты мен 1 ғылым докторын дайындау",
    ],

    // Footer
    footer_partners_label: "Жоба серіктестері",
    footer_project_desc:
      "ҚР БҒМ Ғылым комитеті қаржыландыратын № АР22783154 ғылыми жоба. 2023–2026 жж.",
    footer_contacts_label: "Байланыс",
    footer_pi_role: "Жоба жетекшісі · б.ғ.к., PhD",
    footer_copyright: "© 2025 Шаған өзені бассейнінің радиоэкологиялық обсерваториясы",
    footer_grant: "Жоба № АР22783154 · ҚР БҒМ ҒК",
    footer_write: "Жазу",
    footer_pi_name: "Байғазинов Жанат Абылқанұлы",

    // Header logo
    logo_line1: "Обсерватория",
    logo_line2: "Шаған өзені",
  },

  EN: {
    // Header
    nav_program: "Programme",
    nav_news: "News",
    nav_gallery: "Gallery",
    nav_team: "Team",
    nav_about: "About",
    nav_partners: "Partners",
    nav_about_lab: "About the Laboratory",
    nav_about_docs: "Regulatory Documents",
    cta_whatsapp: "WhatsApp",

    // Hero
    hero_badge: "Research Project AP22783154 · MES RK",
    hero_title: "Radioecological Observatory",
    hero_subtitle: "of the Shagan River Basin",
    hero_desc:
      "Comprehensive tritium contamination monitoring, dose burden assessment and development of recommendations for settlements in the influence zone of the Semipalatinsk Nuclear Test Site.",
    hero_cta_program: "About the Research Programme",
    hero_cta_gallery: "View Gallery",

    // Program
    program_label: "Research Programme",
    program_heading: "Radioecological Monitoring of the Shagan River Basin",
    program_heading2: "in the Influence Zone of the Semipalatinsk Nuclear Test Site",
    program_p1:
      "The programme is implemented under a grant from the Committee of Science, MES RK (project No. AP22783154). The study object is the Shagan River basin — the main water artery of the south-western buffer zone of the Semipalatinsk Nuclear Test Site (SNTS).",
    program_p2:
      "The key contaminant is tritium (³H) — a radioactive hydrogen isotope with a half-life of T₁/₂ = 12.32 years. Entering the hydrosphere as a result of underground nuclear tests, tritium migrates into surface waters and is incorporated into the biological cycle, creating a chronic dose burden on the population.",
    program_feat1_title: "Tritium Monitoring",
    program_feat1_desc:
      "Systematic sampling and analysis of water for tritium (³H) content by liquid scintillation spectrometry at 14 stationary monitoring points.",
    program_feat2_title: "Hydrogeochemistry",
    program_feat2_desc:
      "Investigation of radionuclide migration pathways through the groundwater–surface water system with hydrogeochemical modelling.",
    program_feat3_title: "Dose Assessment",
    program_feat3_desc:
      "Calculation of effective radiation doses for the population of adjacent settlements from consumption of drinking water and locally produced food.",
    program_feat4_title: "Recommendations",
    program_feat4_desc:
      "Development of science-based recommendations for government authorities to ensure radiation safety of the population.",
    program_stat1_val: "14",
    program_stat1_label: "monitoring points",
    program_stat2_val: "3",
    program_stat2_label: "years of research",
    program_stat3_val: "500+",
    program_stat3_label: "samples analysed",
    program_img_caption: "Field measurements at monitoring point No. 7",
    program_img_sub: "Lower Shagan River · April 2025",

    // News
    news_label: "Project Chronicle",
    news_heading: "News & Events",
    news_more: "Read more",
    news_close: "Close",

    // Gallery
    gallery_label: "Photo Materials",
    gallery_heading: "Gallery",
    gallery_desc: "Field expeditions, laboratory work and monitoring stations",
    gallery_open: "Open",

    // Team
    team_label: "Research Team",
    team_heading: "Research Group",
    team_more: "Details →",
    team_modal_bio: "Biography & Area of Responsibility",
    team_modal_role: "Role in the Project",
    team_modal_pubs: "Selected Publications (Scopus / WoS)",

    // About
    about_label: "Scientific Overview",
    about_heading: "About the Project",
    about_nav_label: "Navigation",
    about_s1: "Background",
    about_s2: "Aims & Objectives",
    about_s3: "Methodology",
    about_s4: "Expected Outcomes",
    about_s5: "Documents",

    about_s1_heading: "Research Background",
    about_s1_p1:
      "The Semipalatinsk Nuclear Test Site (SNTS) is the largest nuclear testing ground in Soviet history, where 456 nuclear tests were conducted between 1949 and 1989, including 340 underground. Despite the official closure of the site in 1991, the radioecological consequences of the tests persist to this day.",
    about_s1_p2:
      "Underground nuclear explosions created an extensive network of man-made cavities and fractures filled with radioactive waters containing high levels of tritium (³H), caesium-137, strontium-90 and other long-lived radionuclides. Through groundwater systems, the contamination migrates into surface watercourses, including the Shagan River.",
    about_s1_box_title: "Critical Aspect",
    about_s1_box:
      "Tritium is a chemical analogue of hydrogen and is readily incorporated into water molecules (HTO), making it biologically available. Once ingested through drinking water or food, tritium distributes uniformly throughout all body tissues and creates an additional internal radiation dose.",
    about_s1_p3:
      "The settlements of Abay, Dolon and Maleyevka, located 50–120 km from the SNTS boundary, use the Shagan River and associated groundwater as a source of drinking water.",

    about_s2_heading: "Aims & Objectives",
    about_s2_goal_label: "Project Aim:",
    about_s2_goal:
      "Development of a comprehensive radioecological monitoring system for the Shagan River basin and a science-based assessment of dose burdens on the population of adjacent territories.",
    about_s2_tasks_label: "Research Objectives:",
    about_s2_tasks: [
      "Establishment of a network of 14 stationary monitoring points for surface and groundwater with GPS positioning and GIS mapping.",
      "Systematic (quarterly) sampling and analysis of water, bottom sediments and riparian soils for tritium content by liquid scintillation spectrometry.",
      "Identification of the main pathways and rates of tritium migration from contamination sources to surface watercourses.",
      "Construction of hydrogeochemical models of contamination distribution using FEFLOW and MODFLOW software.",
      "Calculation of effective radiation doses for the population via four intake pathways: drinking water, fish, milk and direct exposure.",
      "Comparative analysis of calculated doses against ICRP-60 standards and Kazakhstan NRB-2014 regulations.",
      "Development of recommendations for optimising water supply systems and reducing dose burdens for government authorities.",
    ],

    about_s3_heading: "Methodology",
    about_s3_intro:
      "The study combines field sampling, laboratory analysis and numerical modelling methods.",
    about_s3_block1_title: "Analytical Methods",
    about_s3_block1: [
      "Liquid scintillation spectrometry (LSS) on Quantulus 1220 instrument",
      "Gamma spectrometry on HPGe detector",
      "Inductively coupled plasma mass spectrometry (ICP-MS)",
      "Atomic absorption spectroscopy (AAS)",
    ],
    about_s3_block2_title: "Modelling & GIS",
    about_s3_block2: [
      "Hydrogeological modelling (FEFLOW, MODFLOW)",
      "GIS mapping (QGIS, ArcGIS Pro)",
      "Time-series statistical analysis (R, Python)",
      "Dosimetric modelling following IAEA methodology",
    ],

    about_s4_heading: "Expected Outcomes",
    about_s4_pub_label: "Publication Plan:",
    about_s4_pubs: [
      "At least 6 articles in peer-reviewed Q1–Q2 Scopus / Web of Science journals",
      "1 monograph «Radioecology of the Shagan River Basin» (RK NAS Publishing)",
      "3 scientific reports at international conferences (IAEA, IRPA, EGU)",
      "1 teaching manual for students of environmental specialisations",
    ],
    about_s4_pract_label: "Practical Outcomes:",
    about_s4_practs: [
      "Interactive GIS radioecological monitoring system for the Shagan River basin",
      "Radiation monitoring database (>3 years of continuous observations)",
      "Tritium contamination isoline maps at 1:50 000 scale",
      "Analytical reports and recommendations for MoE of RK, Civil Protection Dept. of EKO",
      "Training of 2 PhD candidates and 1 Doctor of Science in radiation ecology",
    ],

    // Footer
    footer_partners_label: "Project Partners",
    footer_project_desc:
      "Research Project No. AP22783154, funded by the Committee of Science of the Ministry of Education and Science of the Republic of Kazakhstan. 2023–2026.",
    footer_contacts_label: "Contacts",
    footer_pi_role: "Principal Investigator · Cand. Sci. (Biol.), PhD",
    footer_copyright: "© 2025 Radioecological Observatory of the Shagan River Basin",
    footer_grant: "Project No. AP22783154 · CS MES RK",
    footer_write: "Write",
    footer_pi_name: "Zhanat A. Baigazinov",

    // Header logo
    logo_line1: "Observatory",
    logo_line2: "Shagan River",
  },
} as const;

export type TranslationKey = keyof typeof translations.RU;
