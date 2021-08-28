const lessons = {
    biology:
        [
            {
                title: "8 клас", sections: [
                    {
                        title: "Структурна организация на човешкия организъм", lessons: [
                            {title: "Клетка", url: "kletka", test: [
                                    { q: "Коя е най-малката структурна и функционална единица на многоклетъчните организми?", opt: ["атом", "молекула", "клетка", "тъкан"], ans: 2 },
                                    { q: "Органичните вещества, които влизат в състава на клетки-те са: ", opt: ["вода", "въглехидрати", "белтъци", "минерални соли", "мазнини", "нуклеинови киселини"], ans: [1, 2, 4, 5] },]},
                            { title: "Епителна и съединителна тъкан", url: "epitelna-i-saedinitelna-takan", test: [{ question: "aaa", ans: 1.5, precision: 3 }] },
                            { title: "Мускулна и нервна тъкан", url: "muskulna-i-nervna-takan", test: [{}, {}] },
                            { title: "Организмът - единно цяло", url: "organizmat-edinno-tsyalo", test: [{}, {}] },
                            { title: "Микроскопско наблюдение на човешки тъкани", url: "mikroskopsko-nablyudenie-na-choveshki-takani", test: [] }
                        ]
                    },
                    {
                        title: "Обмяна на веществата", subsections: [
                            {
                                title: "Храносмилателна система", lessons: [
                                    { title: "Хранене", url: "hranene" },
                                    { title: "Храносмилане в устната кухина", url: "hranosmilane-v-ustnata-kuhina" },
                                    { title: "Храносмилане в стомаха и в червата", url: "hranosmilane-v-stomaha-i-v-chervata" },
                                    { title: "Доказване на съдържанието на въглехидрати, мазнини и белтъци в хранителни продукти", url: "dokazvane-na-vaglehidrati-maznini-i-beltatsi" },
                                    { title: "Хигиена на храненето и здравни познания за храносмилателната система", url: "higiena-na-hranosmilatelnata-sistema" },
                                    { title: "Съставяне на здравословно хранително меню", url: "sastavyane-na-zdravoslovno-hranitelno-menyu" }
                                ]
                            },
                            {
                                title: "Дихателна система", lessons: [
                                    { title: "Дихателна система", url: "dihatelna-sistema" },
                                    { title: "Дишане", url: "dishane" },
                                    { title: "Измерване на дихателна честота и изчисляване на жизнената вместимост на белите дробове", url: "dihatelna-chestota-i-vmestimost-na-belite-drobove" },
                                    { title: "Хигиена и здравни познания за дихателната система", url: "higiena-na-dihatelnata-sistema" },

                                ]
                            },
                            {
                                title: "Отделителна система", lessons: [
                                    { title: "Отделяне", url: "otdelyane" },
                                    { title: "Хигиена и здравни познания за отделителната система", url: "higiena-na-otdelitelnata-sistema" }
                                ]
                            },
                            {
                                title: "Сърдечно-съдова система", lessons: [
                                    { title: "Сърце и кръвоносни съдове", url: "sartse-i-kravonosni-sadove" },
                                    { title: "Кръв", url: "kruv" },
                                    { title: "Сърдечна дейност. Кръвообращение", url: "sardechna-deynost-i-kravoobrashtenie" },
                                    { title: "Измерване на честотата на пулса и стойностите на артериалното налягане", url: "puls-i-arterialnoto-nalyagane" },
                                    { title: "Имунитет", url: "imunitet" },
                                    { title: "Хигиена и здравни познания за сърдечно-съдова система", url: "higiena-na-sardechno-sadova-sistema" },
                                    { title: "Изчисляване на индекса на телесната маса, основната обмяна на веществата и дневния енргоразход", url: "indeks-na-telesnata-masa-i-dneven-enrgorazhod" }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Движение и опора на тялото", lessons: [
                            { title: "Устройсво на костите и ставите", url: "ustroysvo-na-kostite-i-stavite" },
                            { title: "Череп", url: "cherep" },
                            { title: "Гръбначен стълб, гръден кош и крайници", url: "grabnachen-stalb-graden-kosh-i-kraynitsi" },
                            { title: "Мускули", url: "muskuli" },
                            { title: "Превенция на заболявания и увреждания на опорно-двигателната система", url: "preventsiya-na-zabolyavaniya-i-uvrezhdaniya-na-oporno-dvigatelnata-sistema" },
                            { title: "Оказване на долекарска помощ при травми на опорно-двигателната система, кръвотечения и поражения от електричен ток", url: "dolekarska-pomosht-pri-travmi" }
                        ]
                    },
                    {
                        title: "Размножаване, растеж и развитие", lessons: [
                            { title: "Мъжка полова система", url: "mazhka-polova-sistema" },
                            { title: "Женска полова система", url: "zhenska-polova-sistema" },
                            { title: "Оплождане. Зародишно и следзародишно развитие", url: "oplozhdane-zarodishno-i-sledzarodishno-razvitie" },
                            { title: "Хигиена на половата система и безопасно сексуално поведение", url: "higiena-na-polovata-sistema-i-bezopasno-seksualno-povedenie" }
                        ]
                    },
                    {
                        title: "Регулация и хомеостаза", subsections: [
                            {
                                title: "Нервна система", lessons: [
                                    { title: "Гръбначен мозък", url: "grabnachen-mozak" },
                                    { title: "Главен мозък", url: "glaven-mozak" },
                                    { title: "Краен мозък", url: "kraen-mozak" },
                                    { title: "Вегетативна нервна система", url: "vegetativna-nervna-sistema" },
                                    { title: "Профилактика на нервната система", url: "profilaktika-na-nervnata-sistema" }
                                ]
                            },
                            {
                                title: "Ендокринна система", lessons: [
                                    { title: "Хипофиза", url: "hipofiza" },
                                    { title: "Щитовидна жлеза и околощитовидни жлези", url: "shtitovidna-zhleza-i-okoloshtitovidni-zhlezi" },
                                    { title: "Задстомашна жлеза", url: "задстомашна-жлеза" },
                                    { title: "Надбъбречни жлези", url: "nadbabrechni-zhlezi" },
                                    { title: "Полови жлези", url: "polovi-zhlezi" }
                                ]
                            },
                            {
                                title: "Сетивни системи", lessons: [
                                    { title: "Зрителна система", url: "zritelna-sistema" },
                                    { title: "Обонятелна и вкусова система", url: "obonyatelna-i-vkusova-sistema" },
                                    { title: "Слухова система и вестибуларен апарат", url: "sluhova-sistema-i-vestibularen-aparat" },
                                    { title: "Кожа", url: "kozha" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "9 клас", section: [
                    {
                        title: "Химичен състав на живата материя", lessons: [
                            { title: "Химичен състав на клетката", url: "himichen-sastav-na-kletkata" },
                            { title: "Липиди", url: "lipidi" },
                            { title: "Въглехидрати", url: "vaglehidrati" },
                            { title: "Белтъци", url: "beltatsi" },
                            { title: "Ензими", url: "enzimi" },
                            { title: "Нуклеинови киселини", url: "nukleinovi-kiselini" },
                            { title: "Химичен състав на клетката (експеримент)", url: "himichen-sastav-na-kletkata-eksperiment" }
                        ]
                    },
                    {
                        title: "Надмолекулни комплекси", lessons: [
                            { title: "Надмолекулни комплекси. Вируси", url: "virusi" },
                            { title: "Вирусни заболявания", url: "virusni-zabolyavaniya" }
                        ]
                    },
                    {
                        title: "Структура и процеси в клетката", lessons: [
                            { title: "Клетъчен строеж на организмите. Клетъчна теория", url: "kletachna-teoriya" },
                            { title: "Прокариотна клетка. Бактерии", url: "prokariotna-kletka-bakterii" },
                            { title: "Бактериални заболявания", url: "bakterialni-zabolyavaniya" },
                            { title: "Еукариотна клетка", url: "eukariotna-kletka" },
                            { title: "Клетъчна мембрана. Мембранен транспорт", url: "kletachna-membrana" },
                            { title: "Едномембранни органели", url: "ednomembranni-organeli" },
                            { title: "Двумембранни и немембранни органели", url: "dvumembranni-i-nemembranni-organeli" },
                            { title: "Устройство на клетката (екперимент)", url: "ustroystvo-na-kletkata-ekperiment" },
                            { title: "Метаболизъм. Катаболитни процеси", url: "metabolizam-katabolitni-protsesi" },
                            { title: "Анаболитни проциси. Фотосинтеза", url: "anabolitni-protsisi-fotosinteza" },
                            { title: "Генетични процесил Репликация", url: "genetichni-protsesil-replikatsiya" },
                            { title: "Транскрипция", url: "transkriptsiya" },
                            { title: "Транслация", url: "translatsiya" },
                        ]
                    },
                    {
                        title: "Възпроизводство на клетката", lessons: [
                            { title: "Хромозоми", url: "hromozomi" },
                            { title: "Митоза", url: "mitoza" },
                            { title: "Мейоза", url: "meyoza" },
                            { title: "Жизнен цикъл на клетката", url: "zhiznen-tsikal-na-kletkata" },
                            { title: "Делене на клетката (експеримент)", url: "delene-na-kletkata-eksperiment" }
                        ]
                    },
                ]
            },
            {
                title: "10 клас", sections: [
                    { title: "Генетика", lessons: [{ title: "", url: "" }] },
                    { title: "Еволюция", lessons: [{ title: "", url: "" }] },
                    { title: "Екология", lessons: [{ title: "", url: "" }] }
                ]
            }
        ],
    chemistry: [

    ]
}

function FindLessonInSections(sections, url, next_lesson) {
    for (let s of sections) {
        let res = FindLessonInSection(s, url, next_lesson)
        if (res === "eos")
            return { section: s }
        return res
    }
}

function FindLessonInSection(section, url, next_lesson) {
    if (section.lessons) {
        for (let l in section.lessons) {
            if (section.lessons[l].url === url) {
                if (next_lesson) {
                    if (parseInt(l) + 1 === section.lessons.length) {
                        //End of section
                        console.log("eos")
                        return "eos"
                    }

                    return section.lessons[parseInt(l) + 1]
                }
                return section.lessons[l]
            }
        }
    }
    else if (section.subsections) {
        for (let ss of section.subsections) {
            let res = FindLessonInSection(ss, url, next_lesson)
            if (res) {
                if (!"eos".localeCompare(res)) {
                    return { section: section, subsection: ss }
                }

                return res
            }
        }
    }
}

function FindLesson(url, next_lesson) {
    if (url === "/")
        return
    url = url.match(/[^/]+$/)[0];

    for (let grade in lessons.biology) {
        let l = FindLessonInSections(lessons.biology[grade], url, next_lesson)
        if (l) {
            return l
        }
    }
}

function GetLesson(url) {
    return FindLesson(url, false)
}

function GetNextLesson(url) {
    return FindLesson(url, true)
}

function GetSection(url) {
    for (let subject in lessons) {
        for (let grade in lessons[subject]) {
            for (let section of lessons[subject][grade]) {
                if (section.url === url) {
                    return section
                }
            }
        }
    }
}

export {
    GetLesson,
    GetNextLesson,
    GetSection,
    lessons
}


const unis = [
    {
        name: "Медицински университет София",
        img: "Images/UniVarna.jpg",
        url: "Med-uni-Sofia",
        description: "Медицински университет София е най-старото висше училище за медицинско образование у нас. Медицинският университет в София възниква като Медицински факултет към Софийския университет. През 1950 година той се отделя от СУ и става самостоятелно учреждение.",
        spec:
            [
                "Медицина",
                "Дентална медицина",
                "Фармация",
                "Управление на здравните грижи",
                "Кинезитерапия ",
                "Акушерка",
                "Медицинска сестра",
                "Медицински лаборант",
                "Помощник фармацевт",
                "Инспектор по обществено здраве",
                "Лекарски асистент",
                "Медицински лаборант (МК - Филаретова)",
                "Рентгенов лаборант (МК - Филаретова)",
                "Рехабилитатор (МК - Филаретова)",
                "Масажист (МК - Филаретова)",
                "Зъботехник (МК - Филаретова)",
                "Помощник фармацевт (МК - Филаретова)",
                "Инспектор по обществено здраве (МК - Филаретова)",
                "Медико-социални грижи (МК - Филаретова)",
                "Лекарски асистент (МУ-София, Филиал - Враца)",
                "Акушерка (МУ-София - филиал „Проф. д-р Ив. Митев“ - Враца)",
                "Медицинска сестра (МУ-София - филиал „Проф. д-р Ив. Митев“ - Враца)",
                "Лекарски асистент (МУ-София - филиал „Проф. д-р Ив. Митев“ - Враца)",
            ],
        link: "https://mu-sofia.bg/",
        application: "https://mu-sofia.bg/priem/ksk/spravochnik-kandidatstudenti/"
    },
    {
        name: "Медицински университет Варна",
        img: "",
        url: "Med-uni-Varna",
        description: "Варненският медицински университет „Проф. д-р Параскев Стоянов“ или МУ Варна е един от най-добрите медицински университети в страната, едно от най-модерните и високотехнологични висши училища.",
        spec:
            [
                "Медицина",
                "Дентална медицина",
                "Фармация",
                "Управление на здравните грижи",
                "Кинезитерапия",
                "Акушерка",
                "Медицинска сестра",
                "Медицински лаборант",
                "Рентгенов лаборант",
                "Рехабилитатор",
                "Зъботехник",
                "Помощник фармацевт",
                "Инспектор по обществено здраве",
                "Акушерка (Филиал Сливен)",
                "Медицинска сестра (Филиал Сливен)",
                "Акушерка (Филиал Велико Търново)",
                "Медицинска сестра (Филиал Велико Търново)",
                "Акушерка (Филиал Шумен)",
                "Медицинска сестра (Филиал Шумен)",
            ],
        link: "https://www.mu-varna.bg/BG",
        application: "https://www.mu-varna.bg/BG/Admission/Pages/default.aspx"
    },
    {
        name: "Медицински университет Пловдив",
        img: "",
        url: "Med-uni-Plovdiv",
        description: "Медицинският университет в Пловдив е един от най-старите медицински университети в страната, известен със своето обучение и традиции.",
        spec:
            [
                " Медицина",
                " Дентална медицина",
                " Фармация",
                " Управление на здравните грижи",
                " Медицинска сестра",
                " Акушерка",
                " Лекарски асистент",
                " Зъботехник",
                " Медицински лаборант",
                " Рентгенов лаборант",
                " Рехабилитатор",
                " Помощник фармацевт",
                " Инспектор по обществено здраве",
                " Инструктор диетично хранене",
                " Медицинска козметика",
            ],
        link: "https://mu-plovdiv.bg/",
        application: "https://mu-plovdiv.bg/priem/kandidat-studentski-spravochnik/"
    },
    {
        name: "Медицински университет Плевен",
        img: "",
        url: "Med-uni-Pleven",
        description: "Медицинският университет в Плевен има 45-годишна история и внушителна материална база (вкл. учебни звена, обновен спортен комплекс, две студентски общежития, модерна университетска библиотека, собствен издателски център).",
        spec:
            [
                "Медицина",
                "Фармация",
                "Управление на здравните грижи",
                "Акушерка",
                "Медицинска сестра",
                "Медицински лаборант",
                "Рентгенов лаборант",
                "Помощник фармацевт",
            ],
        link: "https://mu-plovdiv.bg/",
        application: "https://mu-plovdiv.bg/priem/kandidat-studentski-spravochnik/"
    },
    {
        name: "Тракийски университет Стара Загора",
        img: "",
        url: "Stara-Zagora",
        description: "Тракийският университет се намира в град Стара Загора – в центъра на страната. Университетът заема пето място в рейтинговата класация на университетите в България и обучава общо над 8200 български и чуждестранни студенти.",
        spec:
            [
                "Ветеринарна медицина",
                "Медицина",
                "Управление на здравните грижи",
                "Акушерка",
                "Медицинска сестра",
                "Медицински лаборант",
                "Рехабилитатор",
                "Лекарски асистент",
                "Акушерка (Филиал Хасково)",
                "Медицинска сестра (Филиал Хасково)",
            ],
        link: "http://www.uni-sz.bg/",
        application: "http://www.uni-sz.bg/%d0%be%d1%86%d0%b5%d0%bd%d0%ba%d0%b8-%d0%b8-%d0%ba%d0%bb%d0%b0%d1%81%d0%b8%d1%80%d0%b0%d0%bd%d0%b8%d1%8f-201415/"
    },
    {
        name: "Университет ,,Проф. д – р Асен Златаров“ Бургас",
        img: "",
        url: "Prof-Asen-Zlatanov",
        description: "Университет „Проф. д-р Асен Златаров“, МУ Бургас е единственият държавен университет в Югоизточна България, който разполага с 5 учебни корпуса, спортна база, 3 студентски общежития, стол, поща, център за медицинско обслужване, печатна база. По качество на научните изследвания университетът е класиран на едно от първите места в България по системата Хирш за принос в науката.",
        spec:
            [
                "Медицина",
                "Акушерка",
                "Медицинска сестра",
                "Рехабилитатор",
                "Помощник фармацевт",
                "Лекарски асистент",
            ],
        link: "https://www.btu.bg/index.php/bg/",
        application: "https://www.btu.bg/index.php/bg/candidatstudpriem-all-gm/spravochnikm"
    },
    {
        name: "Софийски университет ,,Св. Климент Охридски“",
        img: "",
        url: "Sv-Kliment-Ohridski",
        description: "Софийски университет „Св. Климент Охридски” е първото българско висше училище. Неговата история е въплъщение и продължение на многовековната българска културна и просветна традиция. Софийският университет е един от авторитетните научни центрове на Балканите, напълно развит европейски тип университет. Това е най-големият и престижен учебен и научноизследователски център в страната, който обхваща 16 факултета със 119 специалности.",
        spec:
            [
                "Медицина",
                "Фармация",
                "Медицинска сестра",
                "Медицинска рехабилитация и ерготерапия",
            ],
        link: "https://mu-sofia.bg/",
        application: "https://mu-sofia.bg/priem/ksk/spravochnik-kandidatstudenti/"
    },
    {
        name: "Лесотехнически университет София",
        img: "",
        url: "Lesotehnichecski-Sofia",
        description: "Лесотехническият университет е единственият университет в България, в който се обучават специалисти в областта на горското стопанство, технологията на дървесината и производството на мебели, инженерния дизайн на мебели и ландшафтната архитектура.",
        spec:
            [
                "Ветеринарна медицина",
                "Агрономство",
                "Растителна защита",
                "Екология и опазване на околната среда",
                "Горско стопанство",
                "Технология на дървесината и мебелите",
                "Компютърни технологии в мебелната индустрия",
                "Алтернативен туризъм",
                "Стопанско управление",
            ],
        link: "https://ltu.bg/bg/",
        application: "https://ltu.bg/bg/%D0%BF%D1%80%D0%B8%D0%B5%D0%BC/%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%D0%BD%D0%B8-%D0%B8%D0%B7%D0%BF%D0%B8%D1%82%D0%B8"
    }
]

function GetUni(url) {
    if (url.match("/universities/"))
        url = url.substring("/univesities/".length + 1, url.length)

    for (let uni of unis) {
        if (uni.url === url)
            return uni
    }
}

export {
    GetUni,
    unis
}