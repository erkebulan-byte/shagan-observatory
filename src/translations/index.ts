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
    hero_subtitle: "Шаган",
    hero_desc:
      "Современная международная научная инфраструктура для проведения комплексного радиоэкологического мониторинга, исследований в области радиационной безопасности, мониторинга подземных вод, миграции радионуклидов и долгосрочного экологического наблюдения за территориями, подвергшимися воздействию ядерных испытаний.",
    hero_cta_program: "О программе исследований",
    hero_cta_gallery: "Посмотреть галерею",

    // Program
    program_label: "Научная программа",
    program_heading: "Радиоэкологический мониторинг бассейна реки Шаган",
    program_heading2: "в зоне влияния Семипалатинского испытательного полигона",
    program_p1:
      "Программа реализуется в рамках гранта Комитета науки МНВО РК «Комплексное радиоэкологическое исследование бассейна р. Шаган и разработка рекомендаций по минимизации негативного влияния на окружающую среду и население» (№ АР22783154).",
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
    program_stat3_val: "+1500",
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
      "Жители населённых пунктов, расположенных в данном районе, используют воду реки Шаган для сельскохозяйственных нужд, а воду из скважин для питья.",

    about_s2_heading:
      "Цели и задачи Международной радиоэкологической и исследовательской обсерватории «Шаган»",
    about_s2_main_goal_label: "Основная цель",
    about_s2_main_goal:
      "Создание уникальной международной научной инфраструктуры на территории бывшего Семипалатинского испытательного полигона для проведения комплексного радиоэкологического мониторинга, исследований в области радиационной безопасности, долгосрочного экологического наблюдения и формирования научно-образовательного и туристического объекта международного значения.",
    about_s2_strategic_label: "Стратегические цели",
    about_s2_strategic: [
      "Формирование международного центра компетенций — Создать первый в Центральной Азии международный центр экспертизы в области радиоэкологии, радиационной безопасности, сельского хозяйства и экологического мониторинга.",
      "Обеспечение радиационной и экологической безопасности — Разработать современную систему долгосрочного мониторинга радиационной обстановки, миграции радионуклидов, подземных вод и воздействия на окружающую среду для защиты населения и обоснования управленческих решений.",
      "Научно-технологическое и социально-экономическое развитие региона — Стимулировать развитие научного потенциала Абайской области, укрепление материально-технической базы научных и образовательных организаций, подготовку кадров нового поколения и привлечение инвестиций и грантов.",
      "Сохранение исторической памяти и развитие туризма — Создать музейно-образовательный комплекс, посвящённый истории Семипалатинского полигона, атомной науки, антиядерному движению и вкладу Казахстана в глобальное ядерное разоружение, для развития научного, образовательного и историко-познавательного туризма.",
      "Международное сотрудничество — Укрепить партнёрство с МАГАТЭ и другими международными организациями, повысить узнаваемость Казахстана и Абайской области как ведущего центра ядерной и радиационной безопасности.",
    ],
    about_s2_specific_label: "Конкретные задачи",
    about_s2_specific: [
      "Организация комплексного радиоэкологического мониторинга на территории бывшего полигона, включая мониторинг подземных вод, миграции радионуклидов, трития и других загрязнителей.",
      "Проведение исследований в области радиационной безопасности, оценки дозовых нагрузок и разработки рекомендаций для безопасного использования территорий.",
      "Реализация программ МАГАТЭ (в частности, «Atoms4Food») по внедрению передовых технологий в сельском хозяйстве: повышение урожайности, эффективное использование водных ресурсов, улучшение почв и развитие животноводства.",
      "Создание и оснащение полевой экспедиционной базы, приобретение современного научного и мониторингового оборудования, модульных сооружений для исследователей.",
      "Формирование достоверной научной базы для оценки и вовлечения безопасных территорий полигона в хозяйственный оборот.",
      "Развитие музейно-образовательного комплекса как центра просвещения, проведения международных конференций, научных экспедиций и образовательных программ.",
      "Привлечение республиканских и международных инвестиций, грантовых средств и проектов технического сотрудничества.",
      "Подготовка высококвалифицированных кадров, укрепление сотрудничества с университетами и научными организациями Абайской области.",
      "Повышение международной узнаваемости проекта и продвижение результатов исследований на глобальном уровне.",
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
    hero_title: "Радиоэкологиялық обсерватория",
    hero_subtitle: "Шаған",
    hero_desc:
      "Заманауи халықаралық ғылыми инфрақұрылым — кешенді радиоэкологиялық мониторинг жүргізуге, радиациялық қауіпсіздік саласындағы зерттеулерге, жерасты суларын бақылауға, радионуклидтердің миграциясын зерттеуге және ядролық сынақтар әсеріне ұшыраған аумақтарды ұзақ мерзімді экологиялық бақылауға арналған.",
    hero_cta_program: "Зерттеу бағдарламасы туралы",
    hero_cta_gallery: "Галереяны қарау",

    // Program
    program_label: "Ғылыми бағдарлама",
    program_heading: "Шаған өзені бассейнінің радиоэкологиялық мониторингі",
    program_heading2: "Семей ядролық сынақ полигонының ықпал аймағында",
    program_p1:
      "Бағдарлама ҚР Білім және ғылым министрлігінің Ғылым комитетінің гранты шеңберінде жүзеге асырылады — «Шаған өзені бассейнінің кешенді радиоэкологиялық зерттеуі және қоршаған орта мен халыққа теріс әсерді барынша азайту бойынша ұсынымдар әзірлеу» (№ АР22783154).",
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
    program_stat3_val: "+1500",
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
      "Осы аймақта орналасқан елді мекендер тұрғындары Шаған өзенінің суларын ауыл шаруашылығы мақсатында, ал құбыр суларын ішуге пайдаланады.",

    about_s2_heading:
      "«Шаған» халықаралық радиоэкологиялық және зерттеу обсерваториясының мақсаттары мен міндеттері",
    about_s2_main_goal_label: "Негізгі мақсат",
    about_s2_main_goal:
      "Бұрынғы Семей ядролық сынақ полигоны аумағында бірегей халықаралық ғылыми инфрақұрылым құру — кешенді радиоэкологиялық мониторинг жүргізу, радиациялық қауіпсіздік саласындағы зерттеулер, ұзақ мерзімді экологиялық бақылау және халықаралық маңызы бар ғылыми-білім беру және туристік объект қалыптастыру үшін.",
    about_s2_strategic_label: "Стратегиялық мақсаттар",
    about_s2_strategic: [
      "Халықаралық құзыреттілік орталығын қалыптастыру — Орталық Азияда радиоэкология, радиациялық қауіпсіздік, ауыл шаруашылығы және экологиялық мониторинг саласындағы алғашқы халықаралық сараптама орталығын құру.",
      "Радиациялық және экологиялық қауіпсіздікті қамтамасыз ету — Халықты қорғау және басқарушылық шешімдерді негіздеу үшін радиациялық жағдайды, радионуклидтердің миграциясын, жерасты суларын және қоршаған ортаға әсерін ұзақ мерзімді бақылаудың заманауи жүйесін әзірлеу.",
      "Аймақтың ғылыми-технологиялық және әлеуметтік-экономикалық дамуы — Абай облысының ғылыми әлеуетін дамыту, ғылыми және білім беру ұйымдарының материалдық-техникалық базасын нығайту, жаңа буын мамандарын даярлау және инвестициялар мен гранттар тарту.",
      "Тарихи жадты сақтау және туризмді дамыту — Семей полигоны тарихына, атом ғылымына, ядролық қарсы қозғалысқа және Қазақстанның жаһандық ядролық қарусыздануға қосқан үлесіне арналған музейлік-білім беру кешенін құру.",
      "Халықаралық ынтымақтастық — МАГАТЭ және басқа халықаралық ұйымдармен серіктестікті нығайту, Қазақстан мен Абай облысының ядролық және радиациялық қауіпсіздік саласындағы жетекші орталық ретіндегі танымалдығын арттыру.",
    ],
    about_s2_specific_label: "Нақты міндеттер",
    about_s2_specific: [
      "Бұрынғы полигон аумағында кешенді радиоэкологиялық мониторинг ұйымдастыру, соның ішінде жерасты суларын, радионуклидтердің миграциясын, тритийді және басқа ластаушыларды бақылау.",
      "Радиациялық қауіпсіздік саласындағы зерттеулер жүргізу, доза жүктемесін бағалау және аумақтарды қауіпсіз пайдалану бойынша ұсынымдар әзірлеу.",
      "МАГАТЭ бағдарламаларын (соның ішінде «Atoms4Food») ауыл шаруашылығында озық технологияларды енгізу бойынша іске асыру.",
      "Далалық экспедициялық базаны құру және жабдықтау, заманауи ғылыми және мониторингтік жабдықтар, зерттеушілерге арналған модульдік құрылыстар сатып алу.",
      "Полигонның қауіпсіз аумақтарын бағалау және шаруашылық айналымына тарту үшін сенімді ғылыми база қалыптастыру.",
      "Музейлік-білім беру кешенін дамыту — просвещение, халықаралық конференциялар, ғылыми экспедициялар және білім беру бағдарламалары.",
      "Республикалық және халықаралық инвестициялар, гранттық қаражаттар және техникалық ынтымақтастық жобаларын тарту.",
      "Жоғары білікті кадрлар даярлау, Абай облысының университеттері мен ғылыми ұйымдарымен ынтымақтастықты нығайту.",
      "Жобаның халықаралық танымалдығын арттыру және зерттеу нәтижелерін жаһандық деңгейде насихаттау.",
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
    hero_subtitle: "Shagan",
    hero_desc:
      "A modern international scientific infrastructure for comprehensive radioecological monitoring, radiation safety research, groundwater monitoring, radionuclide migration studies, and long-term environmental observation of territories affected by nuclear testing.",
    hero_cta_program: "About the Research Programme",
    hero_cta_gallery: "View Gallery",

    // Program
    program_label: "Research Programme",
    program_heading: "Radioecological Monitoring of the Shagan River Basin",
    program_heading2: "in the Influence Zone of the Semipalatinsk Nuclear Test Site",
    program_p1:
      "The programme is implemented under a grant from the Committee of Science, Ministry of Science and Higher Education of the Republic of Kazakhstan — «Comprehensive radioecological study of the Shagan River basin and development of recommendations for minimising negative impacts on the environment and population» (No. AP22783154).",
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
    program_stat3_val: "+1500",
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
      "Residents of settlements located in this area use water from the Shagan River for agricultural needs and water from wells for drinking.",

    about_s2_heading:
      "Goals and Objectives of the International Radioecological and Research Observatory «Shagan»",
    about_s2_main_goal_label: "Main Goal",
    about_s2_main_goal:
      "Creation of a unique international scientific infrastructure on the territory of the former Semipalatinsk Nuclear Test Site for comprehensive radioecological monitoring, radiation safety research, long-term environmental observation, and development of a science-education and tourism facility of international significance.",
    about_s2_strategic_label: "Strategic Goals",
    about_s2_strategic: [
      "Formation of an international centre of expertise — Establish the first international centre of expertise in Central Asia in radioecology, radiation safety, agriculture and environmental monitoring.",
      "Ensuring radiation and environmental safety — Develop a modern long-term monitoring system for radiation conditions, radionuclide migration, groundwater and environmental impacts to protect the population and support management decisions.",
      "Scientific, technological and socio-economic development of the region — Stimulate the development of Abai Region's scientific potential, strengthen the material and technical base of research and educational organisations, train a new generation of specialists and attract investments and grants.",
      "Preservation of historical memory and tourism development — Create a museum and education complex dedicated to the history of the Semipalatinsk test site, nuclear science, the anti-nuclear movement and Kazakhstan's contribution to global nuclear disarmament.",
      "International cooperation — Strengthen partnership with the IAEA and other international organisations, enhance the recognition of Kazakhstan and Abai Region as a leading centre of nuclear and radiation safety.",
    ],
    about_s2_specific_label: "Specific Tasks",
    about_s2_specific: [
      "Organisation of comprehensive radioecological monitoring on the territory of the former test site, including monitoring of groundwater, radionuclide migration, tritium and other contaminants.",
      "Conducting research in radiation safety, dose burden assessment and development of recommendations for safe use of territories.",
      "Implementation of IAEA programmes (in particular, «Atoms4Food») to introduce advanced technologies in agriculture: increasing crop yields, efficient use of water resources, soil improvement and livestock development.",
      "Creation and equipping of a field expedition base, acquisition of modern scientific and monitoring equipment, modular facilities for researchers.",
      "Formation of a reliable scientific basis for assessing and involving safe areas of the test site in economic use.",
      "Development of the museum and education complex as a centre for outreach, international conferences, scientific expeditions and educational programmes.",
      "Attracting national and international investments, grant funding and technical cooperation projects.",
      "Training highly qualified personnel, strengthening cooperation with universities and research organisations of Abai Region.",
      "Enhancing the international visibility of the project and promoting research results at the global level.",
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
