const urls = [
    ["Анатомия и физиология", "anatomy_and_physiology",
        [
            ["Епителна и съединителна тъкани", "epithelial_and_connective_tissues"],
            ["Мускулна и нервна тъкани", "muscle_and_nervous_tissue"],
            ["Кожа", "skin"],
            ["Мускули. Устройство. Видове", "muscle_anatomy"],
            ["Физиология на мускулите", "muscle_physiology"],
            ["Сърце. Кръвоносни съдове", "heart_and_blood_vessels"],
            ["Кръвни клетки. Кръвни групи", "blood_cells_and_blood_types"],
            ["Имунитет. Вакцинация", "immunity_and_vaccination"],
            ["Сърдечна дейност. Кръвообращение. Лимфна система", "heart_activity_blood_circulation_and_lymphathic_system"],
            ["Храносмилане в устната кухина", "digestion_in_oral_cavity"],
            ["Храносмилане в червата и стомаха", "digestion_in_intestines_and_stomach"],
            ["Органи на отделителна система", "excretory_organs"],
            ["Хигиена на отделителна система", "hygienics_of_excretory_system"],
            ["Органи на дихателна система", "respiratory_organs"],
            ["Дишане", "respiration"],
            ["Мъжка", "male_reproductive_system"],
            ["Женска", "female_reproductive_system"],
            ["Хигиена на полова система", "hygienics_of_reproductive_system"],
            ["Гръбначен мозък", "medulla_spinalis"],
            ["Главен мозък", "cerebrum"],
            ["Краен мозък", "telencephalon"],
            ["Вегетативна нервна система", "autonomic_nervous_system"],
            ["Зрителна система", "visual_system"],
            ["Хигиена на зрителна система", "hygienics_of_visual_system"],
            ["Слухова система. Равновесие", "auditory_system_and_balance"],
            ["Вкусова система", "gustatory_system"],
            ["Обонятелна система", "olfactory_system"],
            ["Обща сетивност", "general_sensitivity"],
            ["Хипофиза", "hypophysis"],
            ["Щитовидна жлеза", "thyroid_gland"],
            ["Полови жлези", "gonads"],
            ["Задстомашна жлеза", "pancreas"],
            ["Надбъбречни жлези", "adrenal_glands"],
            ["Околощитовидни жлези", "parathyroid_glands"],
            ["Здравни познания за ендокринна система", "hygienics_of_endocrine_system"]
        ]
    ],
    ["Клетка", "cytology", []],
    ["Вируси", "viruses", []],
    ["Генетика", "genetics", []],
    ["Екология", "ecology", []],
    ["Биохимия", "chemistry", []]
]

function GetLessonUrl(lessonTitle) {
    for (let subject = 0; subject < urls.length; subject++) {
        for (let pair = 0; pair < urls[subject][2].length; pair++) {
            if (urls[subject][2][pair][0] === lessonTitle) {
                return urls[subject][2][pair][1];
            }
        }
    }
}

function GetLesson(url) {
    url = url.match(/\/[^/]+/g);
    url = url[url.length - 1].slice(1);
    for (let subject = 0; subject < urls.length; subject++) {
        for (let lesson = 0; lesson < urls[subject][2].length; lesson++) {
            if (urls[subject][2][lesson][1] === url) {
                return urls[subject][2][lesson][0];
            }
        }
    }
}

function GetSubject(url) {
    url = url.match(/\/[^/]+/g);
    url = url[url.length - 1].slice(1);
    for (let subject = 0; subject < urls.length; subject++) {
        for (let lesson = 0; lesson < urls[subject][2].length; lesson++) {
            if (urls[subject][2][lesson][1] === url) {
                return [urls[subject][0], urls[subject][1]];
            }
        }
    }
}

function GetNextLesson(url) {
    url = url.match(/\/[^/]+/g);
    url = url[url.length - 1].slice(1);
    for (let subject = 0; subject < urls.length; subject++) {
        for (let lesson = 0; lesson < urls[subject][2].length - 1; lesson++) {
            if (urls[subject][2][lesson][1] === url) {
                return urls[subject][2][lesson + 1];
            }
        }

        if (urls[subject][2][urls[subject][2].length - 1][1] === url) {
            return undefined;
        }
    }
}

function GetSubjectUrl(subjectTitle) {
    for (let subject = 0; subject < urls.length; subject++) {
        if (urls[subject][0] === subjectTitle) {
            return urls[subject][1];
        }
    }
}


function GetSubjectByUrl(url) {
    url = url.match(/\/[^/]+/g);
    url = url[url.length - 1].slice(1);

    for (let subject = 0; subject < urls.length; subject++) {
        if (urls[subject][1] === url) {
            return urls[subject][0];
        }
    }
}

function GetLessonIdByUrl(url) {
    var res = url.match(/\/[^/]+/g);
    res = res[res.length - 1].slice(1);
    for (let i = 0; i < urls.length - 1; i++) {
        if (urls[i][1] === res)
            return i;
    }
}

function GetIdBySubject(url) {
    var res = url.match(/\/[^/]+/g);
    res = res[res.length - 1].slice(1);
    for (let i = 0; i < urls.length - 1; i++) {
        if (urls[i][1] === res)
            return i;
    }
}

export {
    GetLessonUrl,
    GetLesson,
    GetNextLesson,
    GetLessonIdByUrl,
    GetIdBySubject,
    GetSubject,
    GetSubjectUrl,
    GetSubjectByUrl
}


const unis = [
    {
        name: "Медицински университет София",
        url: "Med_uni_Sofia",
        data:
        {
            info: "Медицински университет София е най-старото висше училище за медицинско образование у нас. Медицинският университет в София възниква като Медицински факултет към Софийския университет. През 1950 година той се отделя от СУ и става самостоятелно учреждение.",
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
        }
    },
    {
        name: "Медицински университет Варна",
        url: "Med_uni_Varna",
        data:
        {
            info: "Варненският медицински университет „Проф. д-р Параскев Стоянов“ или МУ Варна е един от най-добрите медицински университети в страната, едно от най-модерните и високотехнологични висши училища.",
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
        }
    },
    {
        name: "Медицински университет Пловдив",
        url: "Med_uni_Plovdiv",
        data:
        {
            info: "Медицинският университет в Пловдив е един от най-старите медицински университети в страната, известен със своето обучение и традиции.",
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
        }
    },
    {
        name: "Медицински университет Плевен",
        url: "Med_uni_Pleven",
        data:
        {
            info: "Медицинският университет в Плевен има 45-годишна история и внушителна материална база (вкл. учебни звена, обновен спортен комплекс, две студентски общежития, модерна университетска библиотека, собствен издателски център).",
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
        }
    },
    {
        name: "Тракийски университет Стара Загора",
        url: "Stara_Zagora",
        data:
        {
            info: "Тракийският университет се намира в град Стара Загора – в центъра на страната. Университетът заема пето място в рейтинговата класация на университетите в България и обучава общо над 8200 български и чуждестранни студенти.",
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
        }
    },
    {
        name: "Университет ,,Проф. д – р Асен Златаров“ Бургас",
        url: "Prof_Asen_Zlatanov",
        data:
        {
            info: "Университет „Проф. д-р Асен Златаров“, МУ Бургас е единственият държавен университет в Югоизточна България, който разполага с 5 учебни корпуса, спортна база, 3 студентски общежития, стол, поща, център за медицинско обслужване, печатна база. По качество на научните изследвания университетът е класиран на едно от първите места в България по системата Хирш за принос в науката.",
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
        }
    },
    {
        name: "Софийски университет ,,Св. Климент Охридски“",
        url: "Sv_Kliment_Ohridski",
        data:
        {
            info: "Софийски университет „Св. Климент Охридски” е първото българско висше училище. Неговата история е въплъщение и продължение на многовековната българска културна и просветна традиция. Софийският университет е един от авторитетните научни центрове на Балканите, напълно развит европейски тип университет. Това е най-големият и престижен учебен и научноизследователски център в страната, който обхваща 16 факултета със 119 специалности.",
            spec:
                [
                    "Медицина",
                    "Фармация",
                    "Медицинска сестра",
                    "Медицинска рехабилитация и ерготерапия",
                ],
                link: "https://mu-sofia.bg/",
                application: "https://mu-sofia.bg/priem/ksk/spravochnik-kandidatstudenti/"
        }
    },
    {
        name: "Лесотехнически университет София",
        url: "Lesotehnichecski_Sofia",
        data:
        {
            info: "Лесотехническият университет е единственият университет в България, в който се обучават специалисти в областта на горското стопанство, технологията на дървесината и производството на мебели, инженерния дизайн на мебели и ландшафтната архитектура.",
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
    }
]

function GetUniName(url) {
    for (let uni of unis) {
        if (uni.url === url)
            return uni.name
    }
}

function GetUniUrl(name) {
    for (let uni of unis) {
        if (uni.name === name)
            return uni.url
    }
}

function GetUniByUrl(url) {
    if(url.match("/universities/"))
        url = url.substring("/univesities/".length + 1, url.length)
        
    for (let uni of unis) {
        if (uni.url === url)
            return uni
    }
}

function GetUniByName(name) {
    for (let uni of unis)
        if (uni.name === name)
            return uni
}

export {
    GetUniName,
    GetUniUrl,
    GetUniByUrl,
    GetUniByName,
    unis
}