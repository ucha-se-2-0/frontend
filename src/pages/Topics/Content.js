import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { colors, theme } from '../../Colors';
import { Button } from '../../Components'

import { GetLessonUrl } from '../../urls'

function onDropdownClick(component) {
    component.childNodes.forEach(element => {
        if (element.classList[0] === "topic") {
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "block";
                element.style.margin = "10px";
                element.style.marginLeft = "10%";
            }
            else {
                element.style.display = "none";
                element.style.margin = "0";
            }
        }
    });

    const i = component.querySelector(".button i");
    if (i.style.transform === "rotateZ(0deg)" || i.style.transform === "") {
        component.querySelector(".button i").style.transform = "rotateZ(-90deg)";
    }
    else {
        component.querySelector(".button i").style.transform = "rotateZ(0deg)";
    }
}

class LessonLink extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.subtopics !== undefined)
            this.DOMnode = React.createRef();
    }

    render() {
        let link = GetLessonUrl(this.props.title);
        if (link !== undefined) {
            link = "/lessons/" + link;
        }

        return (
            <div className="topic" ref={this.DOMnode}>
                <Button name={
                    <>
                        <img src={this.props.preview} alt="preview"></img>
                        {this.props.subtopics === undefined ? null :
                            (<i className="fa fa-caret-down" style={{ display: "inline-block", width: "10px", margin: "0 10px", fontSize: "20px" }} />)}
                        <h3 style={{ display: "inline", marginLeft: "10px" }}>{this.props.title}</h3>
                    </>
                } link={link} onClick={this.props.subtopics === undefined ? null : () => onDropdownClick(this.DOMnode.current)} />

                {this.props.subtopics}
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <Router>
                {/* <Route path="/topics" exact>
                <div className="content subjects-nav-content">
                    <Button name="Анатомия" link="/subjects/anatomy" />
                    <Button name="Физиология" link="/subjects/physiology" />
                    <Button name="Цитология" link="/subjects/cytology" />
                    <Button name="Генетика" link="/subjects/genetics" />
                    <Button name="Биохимия" link="/subjects/biochemistry" />
                </div>
            </Route> */}

                <Route path="/subjects/*" exact>
                    <div className="content" style = {{backgroundColor: theme === "dark" ? colors.content.dark : colors.content.light}}>
                        <div style={{ width: "80%" }}>
                            <Route path="/subjects/anatomy_and_physiology">
                                <LessonLink title="Тъкани" subtopics={
                                    <>
                                        <LessonLink title="Епителна и съединителна тъкани" />
                                        <LessonLink title="Мускулна и нервна тъкани" />
                                    </>} />
                                <LessonLink title="Кожа" />
                                <LessonLink title="Опорно-двигателна система" subtopics={
                                    <>
                                        <LessonLink title="Мускули. Устройство. Видове" />
                                        <LessonLink title="Физиология на мускулите" />
                                    </>} />
                                <LessonLink title="Сърдечно съдова система" subtopics={
                                    <>
                                        <LessonLink title="Сърце. Кръвоносни съдове" link="/lessons/heart_and_blood_vessels" />
                                        <LessonLink title="Кръвни клетки. Кръвни групи" link="/lessons/blood_cells_and_blood_types" />
                                        <LessonLink title="Имунитет. Вакцинация" link="/lessons/immunity_and_vaccination" />
                                        <LessonLink title="Сърдечна дейност. Кръвообращение. Лимфна система" link="/lessons/heart_activity_blood_circulation_and_lymphathic_system" />
                                    </>} />
                                <LessonLink title="Храносмилане" subtopics={
                                    <>
                                        <LessonLink title="Храносмилане в устната кухина" link="/lessons/digestion_in_oral_cavity" />
                                        <LessonLink title="Храносмилане в червата и стомаха" link="/lessons/digestion_in_intestines_and_stomach" />
                                    </>} />
                                <LessonLink title="Отделителна система" subtopics={
                                    <>
                                        <LessonLink title="Органи на отделителна система" link="/lessons/excretory_organs" />
                                        <LessonLink title="Хигиена на отделителна система" link="/lessons/hygienics_of_excretory_system" />
                                    </>} />
                                <LessonLink title="Дихателна система" subtopics={
                                    <>
                                        <LessonLink title="Органи на дихателна система" link="/lessons/respiratory_organs" />
                                        <LessonLink title="Дишане" link="/lessons/respiration" />
                                    </>} />
                                <LessonLink title="Полова система" subtopics={
                                    <>
                                        <LessonLink title="Мъжка" link="/lessons/male_reproductive_system" />
                                        <LessonLink title="Женска" link="/lessons/female_reproductive_system" />
                                        <LessonLink title="Хигиена на полова система" link="/lessons/hygienics_of_reproductive_system" />
                                    </>} />
                                <LessonLink title="Нервна система" subtopics={
                                    <>
                                        <LessonLink title="Гръбначен мозък" link="/lessons/medulla_spinalis" />
                                        <LessonLink title="Главен мозък" link="/lessons/cerebrum" />
                                        <LessonLink title="Краен мозък" link="/lessons/telencephalon" />
                                        <LessonLink title="Вегетативна нервна система" link="/lessons/autonomic_nervous_system" />
                                    </>} />
                                <LessonLink title="Сетивни системи" subtopics={
                                    <>
                                        <LessonLink title="Зрителна система" link="/lessons/visual_system" />
                                        <LessonLink title="Хигиена на зрителна система" link="/lessons/hygienics_of_visual_system" />
                                        <LessonLink title="Слухова система. Равновесие" link="/lessons/auditory_system_and_balance" />
                                        <LessonLink title="Вкусова система" link="/lessons/gustatory_system" />
                                        <LessonLink title="Обонятелна система" link="/lessons/olfactory_system" />
                                        <LessonLink title="Обща сетивност" link="/lessons/general_sensitivity" />
                                    </>} />
                                <LessonLink title="Ендокринна система" subtopics={
                                    <>
                                        <LessonLink title="Жлези" subtopics={
                                            <>
                                                <LessonLink title="Хипофиза" link="/lessons/hypophysis" />
                                                <LessonLink title="Щитовидна жлеза" link="/lessons/thyroid_gland" />
                                                <LessonLink title="Полови жлези" link="/lessons/gonads" />
                                                <LessonLink title="Задстомашна жлеза" link="/lessons/pancreas" />
                                                <LessonLink title="Надбъбречни жлези" link="/lessons/adrenal_glands" />
                                                <LessonLink title="Околощитовидни жлези" link="/lessons/parathyroid_glands" />
                                            </>} />
                                        <LessonLink title="Здравни познания за ендокринна система" link="/lessons/hygienics_of_endocrine_system" />
                                    </>} />
                            </Route>

                            <Route path="/topics/cytology">
                                <LessonLink title="Нуклеотиди. Полинуклеотидни вериги" link="#" />
                                <LessonLink title="ДНК. Структура" link="#" />
                                <LessonLink title="РНК. Видове" link="#" />
                                <LessonLink title="Белтъци" subtopics={
                                    <>
                                        <LessonLink title="Въведение" link="#" />
                                        <LessonLink title="Равнища на организация" link="#" />
                                        <LessonLink title="Ензими" link="#" />
                                    </>} />
                                <LessonLink title="Клетъчни органели" subtopics={
                                    <>
                                        <LessonLink title="РНК. Видове" link="#" />
                                        <LessonLink title="РНК. Видове" link="#" />
                                    </>
                                } />
                            </Route>

                            <Route path="/topics/ecology">
                                <LessonLink title="Урок1" link="#" />
                                <LessonLink title="Урок2" link="#" />
                                <LessonLink title="Урок3" link="#" />
                                <LessonLink title="Урок4" link="#" />
                                <LessonLink title="Урок5" link="#" />
                            </Route>

                            <Route path="/topics/genetics">
                                <LessonLink title="Урок1" link="#" />
                                <LessonLink title="Урок2" link="#" />
                                <LessonLink title="Урок3" link="#" />
                                <LessonLink title="Урок4" link="#" />
                                <LessonLink title="Урок5" link="#" />
                            </Route>

                            <Route path="/topics/chemistry">
                                <LessonLink title="Урок1" link="#" />
                                <LessonLink title="Урок2" link="#" />
                                <LessonLink title="Урок3" link="#" />
                                <LessonLink title="Урок4" link="#" />
                                <LessonLink title="Урок5" link="#" />
                            </Route>

                            <Route path="/topics/viruses">
                                <LessonLink title="Урок1" link="#" />
                                <LessonLink title="Урок2" link="#" />
                                <LessonLink title="Урок3" link="#" />
                                <LessonLink title="Урок4" link="#" />
                                <LessonLink title="Урок5" link="#" />
                            </Route>
                        </div>
                    </div>
                </Route>
            </Router>
        );
    }

    componentDidMount()
    {
        // if(theme === "dark")
        // {
        //     document.getElementsByClassName("content")[0].style.backgroundColor = colors.content.dark;
        //     document.querySelectorAll(".button").forEach(el=>{el.style.backgroundColor = colors.content.dark});
        // }
        // else
        // {
        //     document.getElementsByClassName("content")[0].style.backgroundColor = colors.content.light;
        //     document.querySelectorAll(".button").forEach(el=>{el.style.backgroundColor = colors.light});
        // }
    }
}

export default Content;