import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Button } from '../Components'

import './Content.css'

function onDropdownClick(component) {
    component.childNodes.forEach(element => {
        if(element.classList[0] === "topic")
        {
            if (element.style.display === "none" || element.style.display == "") {
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
    if(i.style.transform === "rotateZ(0deg)" || i.style.transform === "")
    {
        component.querySelector(".button i").style.transform = "rotateZ(-90deg)";
    }
    else
    {
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
        return (
            <div className="topic" ref={this.DOMnode}>
                <Button name={
                    <>
                        <img src={this.props.preview}></img>
                        {this.props.subtopics === undefined ? null : 
                        (<i className = "fa fa-caret-down" style = {{display: "inline-block", width: "10px", margin: "0 10px", fontSize: "20px"}} />)}
                        <h3 style = {{display: "inline", marginLeft: "10px"}}>{this.props.title}</h3>
                    </>
                } link={this.props.link} onClick={this.props.subtopics === undefined ? null : () => onDropdownClick(this.DOMnode.current)} />

                {this.props.subtopics}
            </div>
        );
    }
}

function Content() {
    return (
        <Router>
            <Route path="/subjects" exact>
                <div className="content subjects-nav-content">
                    <Button name="Анатомия" link="/subjects/anatomy" />
                    <Button name="Физиология" link="/subjects/physiology" />
                    <Button name="Цитология" link="/subjects/cytology" />
                    <Button name="Генетика" link="/subjects/genetics" />
                    <Button name="Биохимия" link="/subjects/biochemistry" />
                </div>
            </Route>

            <Route path="/subjects/*" exact>
                <div className="content subject-content">
                    <div style={{ width: "80%" }}>
                        <Route path="/subjects/anatomy_and_physiology">
                            <LessonLink title="Тъкани" subtopics={
                                <>
                                    <LessonLink title="Епителна и съединителна тъкани" link="/lessons/" />
                                    <LessonLink title="Мускулна и нервна тъкани" link="/lessons/" />
                                </>} />
                            <LessonLink title="Кожа" link="/lessons/" />
                            <LessonLink title="Опорно-двигателна система" subtopics={
                                <>
                                    <LessonLink title="Мускули. Устройство. Видове" link="/lessons/" />
                                    <LessonLink title="Физиология на мускулите" link="/lessons/" />
                                </>} />
                            <LessonLink title="Сърдечно съдова система" subtopics={
                                <>
                                    <LessonLink title="Сърце. Кръвоносни съдове" link="/lessons/" />
                                    <LessonLink title="Кръвни клетки. Кръвни групи" link="/lessons/" />
                                    <LessonLink title="Имунитет. Вакцинация" link="/lessons/" />
                                    <LessonLink title="Сърдечна дейност. Кръвообращение. Лимфна система" link="/lessons/" />
                                </>} />
                            <LessonLink title="Храносмилане" subtopics={
                                <>
                                    <LessonLink title="В устната кухина" link="/lessons/" />
                                    <LessonLink title="В червата и стомаха" link="/lessons/" />
                                </>} />
                            <LessonLink title="Отделителна система" subtopics={
                                <>
                                    <LessonLink title="Органи" link="/lessons/" />
                                    <LessonLink title="Хигиена" link="/lessons/" />
                                </>} />
                            <LessonLink title="Дихателна система" subtopics={
                                <>
                                    <LessonLink title="Органи" link="/lessons/" />
                                    <LessonLink title="Дишане" link="/lessons/" />
                                </>} />
                            <LessonLink title="Полова система" subtopics={
                                <>
                                    <LessonLink title="Мъжка" link="/lessons/" />
                                    <LessonLink title="Женска" link="/lessons/" />
                                    <LessonLink title="Хигиена" link="/lessons/" />
                                </>} />
                            <LessonLink title="Нервна система" subtopics={
                                <>
                                    <LessonLink title="Гръбначен мозък" link="/lessons/" />
                                    <LessonLink title="Главен мозък" link="/lessons/" />
                                    <LessonLink title="Краен мозък" link="/lessons/" />
                                    <LessonLink title="Вегетативна нервна система" link="/lessons/" />
                                </>} />
                            <LessonLink title="Сетивни системи" subtopics={
                                <>
                                    <LessonLink title="Зрителна система" link="/lessons/" />
                                    <LessonLink title="Зрителна система. Хигиена" link="/lessons/" />
                                    <LessonLink title="Слухова система. Равновесие" link="/lessons/" />
                                    <LessonLink title="Вкусова система" link="/lessons/" />
                                    <LessonLink title="Обонятелна система" link="/lessons/" />
                                    <LessonLink title="Обща сетивност" link="/lessons/" />
                                </>} />
                            <LessonLink title="Ендокринна система" subtopics={
                                <>
                                    <LessonLink title="Жлези" subtopics={
                                        <>
                                            <LessonLink title="Хипофиза" link="/lessons/" />
                                            <LessonLink title="Щитовидна жлеза" link="/lessons/" />
                                            <LessonLink title="Полови жлези" link="/lessons/" />
                                            <LessonLink title="Задстомашна жлеза" link="/lessons/" />
                                            <LessonLink title="Надбъбречни жлези" link="/lessons/" />
                                            <LessonLink title="Околощитовидни жлези" link="/lessons/" />
                                        </>} />
                                    <LessonLink title="Здравни познания" link="/lessons/" />
                                </>} />
                        </Route>
                    </div>
                    <Route path="/subjects/ecology">
                        <LessonLink title="Урок1" link="#" />
                        <LessonLink title="Урок2" link="#" />
                        <LessonLink title="Урок3" link="#" />
                        <LessonLink title="Урок4" link="#" />
                        <LessonLink title="Урок5" link="#" />
                    </Route>

                    <Route path="/subjects/cytology">
                        <LessonLink title="Урок1" link="#" />
                        <LessonLink title="Урок2" link="#" />
                        <LessonLink title="Урок3" link="#" />
                        <LessonLink title="Урок4" link="#" />
                        <LessonLink title="Урок5" link="#" />
                    </Route>

                    <Route path="/subjects/genetics">
                        <LessonLink title="Урок1" link="#" />
                        <LessonLink title="Урок2" link="#" />
                        <LessonLink title="Урок3" link="#" />
                        <LessonLink title="Урок4" link="#" />
                        <LessonLink title="Урок5" link="#" />
                    </Route>

                    <Route path="/subjects/chemistry">
                        <LessonLink title="Урок1" link="#" />
                        <LessonLink title="Урок2" link="#" />
                        <LessonLink title="Урок3" link="#" />
                        <LessonLink title="Урок4" link="#" />
                        <LessonLink title="Урок5" link="#" />
                    </Route>
                    
                    <Route path="/subjects/viruses">
                        <LessonLink title="Урок1" link="#" />
                        <LessonLink title="Урок2" link="#" />
                        <LessonLink title="Урок3" link="#" />
                        <LessonLink title="Урок4" link="#" />
                        <LessonLink title="Урок5" link="#" />
                    </Route>
                </div>
            </Route>
        </Router>
    );
}

export default Content;