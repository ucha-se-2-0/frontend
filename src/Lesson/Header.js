import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'


function Header() {
    return (
        <div className="header">
            <Router>
                <Route path="/lessons/epithelial_and_connective_tissues" exact render={() => <>Епителна и съединителни тъкани</>} />
                <Route path="/lessons/muscle_and_nervous_tissue" exact render={() => <>Мускулна и нервна тъкани</>} />

                <Route path="/lessons/skin" exact render={() => <>Кожа</>} />

                <Route path="/lessons/muscle_anatomy" exact render={() => <>Опорно-двигателна система. Мускули. Устройство. Видове</>} />
                <Route path="/lessons/muscle_physiology" exact render={() => <>Опорно-двигателна система. Физиология на мускулите</>} />

                <Route path="/lessons/heart_and_blood_vessels" exact render={() => <>Сърдечно съдова система. Сърце. Кръвоносни съдове</>} />
                <Route path="/lessons/blood_cells_and_blood_types" exact render={() => <>Сърдечно съдова система. Кръвни клетки. Кръвни групи</>} />
                <Route path="/lessons/immunity_and_vaccination" exact render={() => <>Сърдечно съдова система. Имунитет. Вакцинациs</>} />
                <Route path="/lessons/heart_activity_blood_circulation_and_lymphathic_system" exact render={() => <>Сърдечно съдова система. Сърдечна дейност. Кръвообращение. Лимфна система</>} />

                <Route path="/lessons/digestion_in_oral_cavity" exact render={() => <>Храносмилане. В устната кухина</>} />
                <Route path="/lessons/digestion_in_intestines_and_stomach" exact render={() => <>Храносмилане. В червата и стомаха</>} />

                <Route path="/lessons/excretory_organs" exact render={() => <>Отделителна система. Органи</>} />
                <Route path="/lessons/hygienics_of_excretory_system" exact render={() => <>Отделителна система. Хигиена</>} />


                <Route path="/lessons/respiratory_organs" exact render={() => <>Дихателна система. Органи</>} />
                <Route path="/lessons/respiration" exact render={() => <>Дихателна система. Дишане</>} />

                <Route path="/lessons/male_reproductive_system" exact render={() => <>Мъжка полова система</>} />
                <Route path="/lessons/female_reproductive_system" exact render={() => <>Женска полова система</>} />
                <Route path="/lessons/hygienics_of_reproductive_system" exact render={() => <>Полова система. Хигиена</>} />

                <Route path="/lessons/medulla_spinalis" exact render={() => <>Нервна система. Гръбначен мозък</>} />
                <Route path="/lessons/cerebrum" exact render={() => <>Нервна система. Главен мозък</>} />
                <Route path="/lessons/telencephalon" exact render={() => <>Нервна система. Краен мозък</>} />
                <Route path="/lessons/autonomic_nervous_system" exact render={() => <>Вегетативна нервна система</>} />

                <Route path="/lessons/visual_system" exact render={() => <>Сетивни системи. Зрителна система</>} />
                <Route path="/lessons/hygienics_of_visual_system" exact render={() => <>Сетивни системи. Зрителна система. Хигиена</>} />
                <Route path="/lessons/auditory_system_and_balance" exact render={() => <>Сетивни системи. Слухова система. Равновесие</>} />
                <Route path="/lessons/gustatory_system" exact render={() => <>Сетивни системи. Вкусова система</>} />
                <Route path="/lessons/olfactory_system" exact render={() => <>Сетивни системи. Обонятелна система</>} />
                <Route path="/lessons/general_sensitivity" exact render={() => <>Сетивни системи. Обща сетивност</>} />

                <Route path="/lessons/hypophysis" exact render={() => <>Ендокринна система. Жлези. Хипофиза</>} />
                <Route path="/lessons/thyroid_gland" exact render={() => <>Ендокринна система. Жлези. Щитовидна жлеза</>} />
                <Route path="/lessons/gonads" exact render={() => <>Ендокринна система. Жлези. Полови жлези</>} />
                <Route path="/lessons/pancreas" exact render={() => <>Ендокринна система. Жлези. Задстомашна жлеза</>} />
                <Route path="/lessons/adrenal_glands" exact render={() => <>Ендокринна система. Жлези. Надбъбречни жлези</>} />
                <Route path="/lessons/parathyroid_glands" exact render={() => <>Ендокринна система. Жлези. Околощитовидни жлези</>} />

                <Route path="/lessons/hygienics_of_endocrine_system" exact render={() => <>Здравни познания</>} />
            </Router>
        </div>
    );
}

export default Header;