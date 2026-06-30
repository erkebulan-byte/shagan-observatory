export interface Testimonial {
  id: number;
  avatar: string;
  name: string;
  name_kz?: string;
  name_en?: string;
  degree: string;
  degree_kz?: string;
  degree_en?: string;
  affiliation: string;
  affiliation_kz?: string;
  affiliation_en?: string;
  title: string;
  title_kz?: string;
  title_en?: string;
  paragraphs: string[];
  paragraphs_kz?: string[];
  paragraphs_en?: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: "/testimonials/lukashenko.png",
    name: "Сергей Николаевич Лукашенко",
    name_kz: "Сергей Николаевич Лукашенко",
    name_en: "Sergey N. Lukashenko",
    degree: "д.б.н., профессор",
    degree_kz: "б.ғ.д., профессор",
    degree_en: "Dr. Sci. (Biol.), Professor",
    affiliation:
      "Заместитель директора НИЦ «Курчатовский институт» — ВНИИРАЭ, Обнинск, Россия",
    affiliation_kz:
      "«Курчатов институты» ҒЗО Бас директорының орынбасары — ВНИИРАЭ, Обнинск, Ресей",
    affiliation_en:
      "Deputy Director, NRC «Kurchatov Institute» — ARRIRAE, Obninsk, Russia",
    title: "Отзыв об Обсерватории «Шаган»",
    title_kz: "«Шаған» обсерваториясы туралы пікір",
    title_en: "Review of the Shagan Observatory",
    paragraphs: [
      "В рамках реализации научного проекта «Комплексное радиоэкологическое исследование бассейна р. Шаган и разработка рекомендаций по минимизации негативного влияния на окружающую среду и население» (грант Комитета науки МНВО РК № АР22783154) мне посчастливилось с 2025 года сотрудничать с коллективом Обсерватории «Шаган» и проводить исследования на её базе.",
      "За время совместной работы Обсерватория «Шаган» зарекомендовала себя как современная научно-исследовательская площадка, обладающая необходимой инфраструктурой для выполнения как фундаментальных, так и прикладных исследований. Особо хотелось бы отметить высокий уровень организации работ, техническое оснащение объекта, благоприятные условия для проведения полевых наблюдений и профессионализм сотрудников.",
      "Уникальное расположение обсерватории на территории бывшего Семипалатинского испытательного полигона делает её важным центром научного туризма и междисциплинарных исследований. Здесь успешно сочетаются исследования в области астрономии, экологии, радиоэкологии, геофизики и мониторинга окружающей среды. Обсерватория предоставляет исследователям возможность работать в уникальных природных и научных условиях, не имеющих аналогов в регионе.",
      "Особенно ценным является открытость коллектива к международному сотрудничеству, взаимодействию с научными организациями и образовательными учреждениями. Благодаря этому Обсерватория «Шаган» постепенно становится площадкой для реализации совместных исследовательских проектов, обмена опытом и популяризации науки среди молодёжи.",
      "Уверен, что дальнейшее развитие Обсерватории «Шаган» будет способствовать укреплению научного потенциала Казахстана, развитию международного сотрудничества и привлечению внимания к уникальному научному наследию региона.",
      "Желаю коллективу Обсерватории «Шаган» дальнейших успехов, новых научных достижений и реализации самых амбициозных проектов.",
    ],
    paragraphs_kz: [
      "«Шаған өзені бассейнінің кешенді радиоэкологиялық зерттеуі және қоршаған орта мен халыққа теріс әсерді барынша азайту бойынша ұсынымдар әзірлеу» ғылыми жобасын (ҚР БҒМ ҒК гранты № АР22783154) іске асыру аясында 2025 жылдан бастап «Шаған» обсерваториясы коллективімен ынтымақтасуға және оның базасында зерттеулер жүргізуге мүмкіндік түсті.",
      "Бірлескен жұмыс барысында «Шаған» обсерваториясы негізгі және қолданбалы зерттеулерді жүргізуге қажетті инфрақұрылымы бар заманауи ғылыми-зерттеу алаңы ретінде өзін танытты. Жұмыстарды ұйымдастырудың жоғары деңгейі, объектінің техникалық жарақтандырылуы, далалық бақылауларды жүргізуге қолайлы жағдайлар және қызметкерлердің кәсібилігі ерекше атап өтілуге лайық.",
      "Бұрынғы Семей ядролық сынақ полигоны аумағындағы обсерваторияның бірегей орналасуы оны ғылыми туризмнің және жан-жақты зерттеулердің маңызды орталығына айналдырады. Мұнда астрономия, экология, радиоэкология, геофизика және қоршаған ортаны мониторингілеу салаларындағы зерттеулер табысты үйлеседі.",
      "Халықаралық ынтымақтастыққа, ғылыми ұйымдармен және білім беру мекемелерімен өзара әрекеттесуге деген коллективтің ашықтығы ерекше құнды. Осының арқасында «Шаған» обсерваториясы бірлескен зерттеу жобаларын, тәжірибе алмасуды және жастар арасында ғылымды насихаттауды жүзеге асыратын алаңға айналуда.",
      "«Шаған» обсерваториясының одан әрі дамуы Қазақстанның ғылыми әлеуетін нығайтуға, халықаралық ынтымақтастықты дамытуға және аймақтың бірегей ғылыми мұрасын насихаттауға ықпал ететініне сенімдімін.",
      "«Шаған» обсерваториясы коллективіне одан әрі табыс, жаңа ғылыми жетістіктер және ең амбициозды жобаларды жүзеге асыруды тілеймін.",
    ],
    paragraphs_en: [
      "Within the framework of the research project «Comprehensive radioecological study of the Shagan River basin and development of recommendations for minimising negative impacts on the environment and population» (Grant of the Committee of Science of the MES RK No. AP22783154), I have had the opportunity since 2025 to collaborate with the Shagan Observatory team and conduct research at its facilities.",
      "During our joint work, the Shagan Observatory has established itself as a modern research platform with the infrastructure required for both fundamental and applied studies. I would especially like to note the high level of organisation, technical equipment, favourable conditions for field observations, and professionalism of the staff.",
      "The observatory's unique location on the territory of the former Semipalatinsk Nuclear Test Site makes it an important centre for scientific tourism and interdisciplinary research. Studies in astronomy, ecology, radioecology, geophysics, and environmental monitoring are successfully combined here.",
      "Particularly valuable is the team's openness to international cooperation and interaction with scientific organisations and educational institutions. Thanks to this, the Shagan Observatory is gradually becoming a platform for joint research projects, exchange of experience, and science outreach among young people.",
      "I am confident that the further development of the Shagan Observatory will strengthen Kazakhstan's scientific potential, develop international cooperation, and draw attention to the region's unique scientific heritage.",
      "I wish the Shagan Observatory team continued success, new scientific achievements, and the realisation of the most ambitious projects.",
    ],
  },
  {
    id: 2,
    avatar: "/testimonials/kovacs.jfif",
    name: "Тибор Ковач",
    name_kz: "Тибор Ковач",
    name_en: "Tibor Kovács",
    degree: "профессор",
    degree_kz: "профессор",
    degree_en: "Professor",
    affiliation:
      "Директор Института радиохимии и радиоэкологии, Университет Паннонии, Венгрия",
    affiliation_kz:
      "Радиохимия және радиоэкология институтының директоры, Паннония университеті, Венгрия",
    affiliation_en:
      "Head of the Institute of Radiochemistry and Radioecology, University of Pannonia, Hungary",
    title: "Об Обсерватории «Шаган»",
    title_kz: "«Шаған» обсерваториясы туралы",
    title_en: "About the Shagan Observatory",
    paragraphs: [
      "За годы научной карьеры мне довелось посетить множество исследовательских объектов по всему миру. Однако лишь немногие из них сочетают научную значимость, уникальные природные условия и возможности для международного сотрудничества так же эффективно, как Обсерватория «Шаган».",
      "Исключительность этой площадки определяется не только инфраструктурой, но и её расположением. Территория вокруг обсерватории представляет собой уникальную природную лабораторию, где исследователи могут изучать долгосрочные экологические процессы, радиоэкологические явления и восстановление экосистем в условиях, которые невозможно воспроизвести в другом месте.",
      "Для международных исследователей Обсерватория «Шаган» предлагает то, что в современной науке встречается всё реже — прямой доступ к уникальным полевым условиям в сочетании с надёжной логистической и научной поддержкой. Такие объекты необходимы для получения качественных экологических данных и подготовки нового поколения специалистов.",
      "Меня особенно впечатляют энтузиазм местной научной команды и их стремление развивать международное партнёрство. Обсерватория обладает значительным потенциалом стать одним из ведущих региональных центров экологических и радиоэкологических исследований в Центральной Азии.",
      "Помимо научной ценности, обсерватория имеет большой образовательный и просветительский потенциал. Она может служить площадкой, где студенты, исследователи и посетители глубже понимают взаимосвязь науки, технологий, охраны окружающей среды и исторического наследия ядерных испытаний.",
      "Я убеждён, что дальнейшее развитие Обсерватории «Шаган» укрепит позиции Казахстана в международном научном сотрудничестве и создаст новые возможности для совместных исследовательских проектов с участием учёных из Европы, Азии и других регионов мира.",
    ],
    paragraphs_kz: [
      "Ғылыми мансабым бойы әлемнің көптеген зерттеу объектілеріне баруға тура келді. Алайда «Шаған» обсерваториясы сияқты ғылыми маңыздылықты, бірегей табиғи жағдайларды және халықаралық ынтымақтастық мүмкіндіктерін осылай тиімді үйлестіретін орындар аз.",
      "Бұл алаңның ерекшелігі тек инфрақұрылымда емес, сонымен қатар оның орналасуында. Обсерватория аймағындағы аумақ — зерттеушілер ұзақ мерзімді экологиялық процестерді, радиоэкологиялық құбылыстарды және экожүйелердің қалпына келуін басқа жерде қайталай алмайтын жағдайларда зерттей алатын бірегей табиғи зертхана.",
      "Халықаралық зерттеушілер үшін «Шаған» обсерваториясы заманауи ғылымда сирек кездесетін нәрсені ұсынады — сенімді логистикалық және ғылыми қолдаумен бірге бірегей далалық жағдайларға тікелей қол жеткізу.",
      "Жергілікті ғылыми топтың энтузиазмы мен халықаралық серіктестікті дамытуға деген ұмтылысы мені ерекше таң қалдырады. Обсерватория Орталық Азиядағы экологиялық және радиоэкологиялық зерттеулердің жетекші орталықтарының біріне айналуға үлкен әлеуетке ие.",
      "Ғылыми құндылықтан бөлек, обсерваторияның күшті білім беру және насихаттау әлеуеті бар. Ол студенттер, зерттеушілер мен қонақтар ғылым, технология, қоршаған ортаны қорғау және ядролық сынақтардың тарихи мұрасы арасындағы байланысты тереңірек түсінетін алаң бола алады.",
      "«Шаған» обсерваториясының одан әрі дамуы Қазақстанның халықаралық ғылыми ынтымақтастықтағы позициясын нығайтып, Еуропа, Азия және әлемнің басқа аймақтарынан ғалымдарды қамтитын бірлескен зерттеу жобаларына жаңа мүмкіндіктер жасайтынына сенімдімін.",
    ],
    paragraphs_en: [
      "During my scientific career, I have visited many research facilities around the world. However, only a few places combine scientific significance, unique environmental conditions, and opportunities for international collaboration as effectively as the Shagan Observatory.",
      "What makes this site truly exceptional is not only its infrastructure but also its location. The territory surrounding the observatory represents a unique natural laboratory where researchers can study long-term environmental processes, radioecological phenomena, and ecosystem recovery under conditions that cannot be reproduced elsewhere.",
      "For international researchers, the Shagan Observatory offers something increasingly rare in modern science — direct access to unique field conditions combined with reliable logistical and scientific support. Such facilities are essential for obtaining high-quality environmental data and for training the next generation of specialists.",
      "I am particularly impressed by the enthusiasm of the local scientific team and their commitment to developing international partnerships. The observatory has significant potential to become one of the leading regional centers for environmental and radioecological research in Central Asia.",
      "Beyond its scientific value, the observatory also has strong educational and outreach potential. It can serve as a platform where students, researchers, and visitors gain a deeper understanding of the relationship between science, technology, environmental protection, and the historical legacy of nuclear testing.",
      "I believe that the continued development of the Shagan Observatory will strengthen Kazakhstan's position in international scientific cooperation and create new opportunities for collaborative research projects involving scientists from Europe, Asia, and other regions of the world.",
    ],
  },
  {
    id: 3,
    avatar: "/testimonials/kuzmenkova.jpg",
    name: "Наталья Викторовна Кузьменкова",
    name_kz: "Наталья Викторовна Кузьменкова",
    name_en: "Natalia V. Kuzmenkova",
    degree: "к.х.н., специалист в области радиоэкологии и радиохимии",
    degree_kz: "х.ғ.к., радиоэкология және радиохимия саласының маманы",
    degree_en: "Cand. Sci. (Chem.), specialist in radioecology and radiochemistry",
    affiliation:
      "Московский государственный университет имени М.В. Ломоносова, Россия",
    affiliation_kz:
      "М.В. Ломоносов атындағы Мәскеу мемлекеттік университеті, Ресей",
    affiliation_en:
      "Lomonosov Moscow State University, Russia",
    title: "Пожелание коллективу Обсерватории «Шаган»",
    title_kz: "«Шаған» обсерваториясы коллективіне тілек",
    title_en: "Wishes to the Shagan Observatory Team",
    paragraphs: [
      "Уважаемые коллеги!",
      "От всей души желаю коллективу Обсерватории «Шаган» дальнейшего развития, новых научных открытий и успешной реализации самых смелых исследовательских проектов.",
      "За последние годы обсерватория стала не только важной научной площадкой, но и местом, где объединяются специалисты различных направлений науки, создаются новые идеи и рождаются перспективные международные инициативы. Особенно ценно, что здесь сохраняется атмосфера открытого научного диалога, взаимного уважения и стремления к получению новых знаний.",
      "Желаю вашему коллективу крепкого здоровья, неиссякаемой энергии, профессионального вдохновения и надёжных партнёров. Пусть каждый новый проект приносит значимые результаты, а Обсерватория «Шаган» продолжает укреплять свой авторитет как уникальный научный центр Казахстана, известный далеко за его пределами.",
      "Пусть впереди будет ещё больше интересных исследований, успешных экспедиций, международных публикаций и молодых учёных, для которых ваша работа станет примером преданности науке.",
    ],
    paragraphs_kz: [
      "Құрметті әріптестер!",
      "«Шаған» обсерваториясы коллективіне одан әрі даму, жаңа ғылыми ашылулар және ең батыл зерттеу жобаларын сәтті іске асыруды шын жүректен тілеймін.",
      "Соңғы жылдары обсерватория маңызды ғылыми алаң ғана емес, әртүрлі ғылым салаларының мамандары біріге, жаңа идеялар туындайтын және перспективалы халықаралық бастамалар қалыптасатын орынға айналды. Ашық ғылыми диалог, өзара құрмет пен жаңа білімге ұмтылу атмосферы сақталғаны ерекше құнды.",
      "Коллективіңізге мықты денсаулық, мол энергия, кәсіби шабыт және сенімді серіктестер тілеймін. Әр жаңа жоба маңызды нәтижелер әкелсін, ал «Шаған» обсерваториясы Қазақстанның шекарасынан тыс белгілі бірегей ғылыми орталығы ретінде беделін нығайта берсін.",
      "Алда тағы да көбірек қызықты зерттеулер, сәтті экспедициялар, халықаралық жарияланымдар және сіздің жұмысыңыз ғылымға адалдықтың үлгісі болатын жас ғалымдар болсын.",
    ],
    paragraphs_en: [
      "Dear colleagues!",
      "I sincerely wish the Shagan Observatory team continued development, new scientific discoveries, and the successful implementation of the boldest research projects.",
      "In recent years, the observatory has become not only an important scientific platform but also a place where specialists from various fields of science come together, new ideas are born, and promising international initiatives emerge. It is especially valuable that an atmosphere of open scientific dialogue, mutual respect, and the pursuit of new knowledge is preserved here.",
      "I wish your team good health, inexhaustible energy, professional inspiration, and reliable partners. May every new project bring significant results, and may the Shagan Observatory continue to strengthen its reputation as a unique scientific centre of Kazakhstan known far beyond its borders.",
      "May there be even more interesting research, successful expeditions, international publications, and young scientists ahead, for whom your work will be an example of dedication to science.",
    ],
  },
];
