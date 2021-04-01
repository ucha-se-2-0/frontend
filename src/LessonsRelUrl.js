const lessonsUrls = [
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

function GetUrl(lessonTitle) {
    for(let pair in lessonsUrls)
    {
        if(lessonsUrls[pair][0] === lessonTitle)
        {
            return lessonsUrls[pair][1];
        }
    }
}

function GetTitle(url) {
    var res = url.match(/\/[^/]+/g);
    res = res[res.length - 1].slice(1);
    for (let pair in lessonsUrls) {
        if(lessonsUrls[pair][1] === res)
            return lessonsUrls[pair][0];
    }
}

function GetNext(url)
{
    var res = url.match(/\/[^/]+/g);
    res = res[res.length - 1].slice(1);
    for (let i = 0; i < lessonsUrls.length - 1; i++) {
        if(lessonsUrls[i][1] === res)
            return lessonsUrls[i + 1];
    }
}

function GetIdByUrl(url)
{
    var res = url.match(/\/[^/]+/g);
    res = res[res.length - 1].slice(1);
    for (let i = 0; i < lessonsUrls.length - 1; i++) {
        if(lessonsUrls[i][1] === res)
            return i;
    }
}

function GetIdByTitle(url)
{
    var res = url.match(/\/[^/]+/g);
    res = res[res.length - 1].slice(1);
    for (let i = 0; i < lessonsUrls.length - 1; i++) {
        if(lessonsUrls[i][1] === res)
            return i;
    }
}

export { GetUrl, GetTitle, GetNext, GetIdByUrl, GetIdByTitle }
