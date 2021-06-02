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
        for(let lesson = 0; lesson < urls[subject][2].length; lesson++)
        {
            if (urls[subject][2][lesson][1] === url)
            {
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
