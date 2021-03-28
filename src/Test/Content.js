import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Button } from '../Components'
import { GetUrl, GetHeader, lessonsUrls, GetNext } from '../LessonsRelUrl'

var correctAnswers = []
var turnedIn = false;

class Question extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.correct instanceof Array)
            this.state = { selected: [] };
        else
            this.state = { selected: -1 };
    }

    componentDidMount() {
        if (this.props.correct instanceof Array) {
            let correct = [];
            for (let i = 0; i < this.props.options.length; i++)
                correct.push(this.props.correct.find(el => el === i) !== undefined);
            correctAnswers.push(correct);
        }
        else {
            correctAnswers.push(this.props.correct);
        }
    }

    render() {
        let options = [];

        for (let i = 0; i < this.props.options.length; i++) {
            options.push(
                <div className="option" key={i} onClick={() => { this.OnClick(i) }}>
                    <div className="checkbox" checked={false}>
                        <div style={this.GetOptionStyle(i)} />
                    </div>
                    <h3>{this.props.options[i]}</h3>
                </div>
            );
        }

        return (
            <div className="question" given_answer={JSON.stringify(this.state.selected)}>
                <h2>{this.props.question}</h2>
                {options}
            </div>
        );
    }

    OnClick(id) {
        if (!turnedIn) {
            let selected = this.state.selected;
            if (this.props.correct instanceof Array) {
                selected[id] = !selected[id];
            }
            else {
                if (selected === id) {
                    selected = -1;
                }
                else {
                    selected = id;
                }
            }


            this.setState({ selected: selected });
        }
    }

    GetOptionStyle(id) {
        if (this.state.selected instanceof Array) {
            return { display: this.state.selected[id] ? "block" : "none" };
        }
        else {
            return { display: this.state.selected === id ? "block" : "none" }
        }
    }
}

class FreeAnswerQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.number !== undefined) {
            if (this.props.precision !== undefined) {
                correctAnswers.push({
                    answer: Math.round(this.props.correct * Math.pow(10, this.props.precision)) / Math.pow(10, this.props.precision),
                    precision: this.props.precision
                });
            }
            else {
                correctAnswers.push({
                    answer: Math.round(this.props.correct),
                    precision: 0
                });
            }
        }
        else {
            correctAnswers.push(this.props.correct.toLowerCase());
        }
    }

    render() {
        return (
            <div className="question free-answer">
                <h2>{this.props.question}</h2>
                <input placeholder="Въведете отговора си" type={this.props.number === undefined ? "text" : "number"}></input>
                <div className = "correctAnswer"></div>
            </div>
        );
    }
}

function CheckAnswers() {
    let result = 0;
    let maxResult = 0;

    turnedIn = true;

    let content = document.getElementsByClassName("content")[0];
    document.getElementById("checkAnswers").style.display = "none";
    document.getElementById("toLesson").style.display = "inline-flex";

    let toNextLesson = document.getElementById("toNextLesson")
    toNextLesson.style.display = "inline-flex";
    let next = GetNext(window.location.pathname);
    if (next === undefined) {
        let topic = JSON.parse(sessionStorage.getItem("topic"));
        toNextLesson.getElementsByClassName("button-content")[0].innerHTML = "Към " + topic[0];
        toNextLesson.setAttribute("href", "/topics/" + topic[1]);
    }
    else {
        toNextLesson.getElementsByClassName("button-content")[0].innerHTML = "Към следващия урок (" + next[0] + ')';
        toNextLesson.setAttribute("href", "/lessons/" + next[1]);
    }

    let questions = content.querySelectorAll(".question");
    for (let q = 0; q < questions.length; q++) {

        if (questions[q].classList.contains("free-answer")) {
            //Free answer questions
            maxResult += 3;
            let input = questions[q].getElementsByTagName("input")[0];
            let mistake = 0;
            let dRes = 0;

            console.log(input.value, correctAnswers[q]);

            if (input.type === "number") {
                if (Math.round(input.value * Math.pow(10, correctAnswers[q].precision)) / Math.pow(10, correctAnswers[q].precision) === correctAnswers[q].answer)
                    dRes = 1;
                else {
                    dRes = 0;
                    mistake = 2;
                }
            }
            else {
                dRes = 3;
                let offset = 0;
                let value = input.value.toLowerCase();
                for (let i = 0; i < value.length && i < correctAnswers[q].length; i++) {
                    if (value[i + offset] !== correctAnswers[q][i]) {
                        dRes -= 1.5;
                        mistake = 1;
                        if (dRes === 0) {
                            mistake = 2;
                            break;
                        }
                    }
                }

            }
            result += dRes;
            if (mistake === 0)
            {
                questions[q].style.backgroundColor = "#ddffbb";
                questions[q].getElementsByTagName("input")[0].style.backgroundColor = "#77ff55";
            }
            if (mistake === 1) {
                questions[q].style.backgroundColor = "#ffe0c0";
                let correctAnswerField = questions[q].getElementsByClassName("correctAnswer")[0];
                correctAnswerField.innerHTML = "Правописна грешка. Правилен отговор: " + correctAnswers[q];
                correctAnswerField.style.display = "block";
            }
            if (mistake === 2) {
                questions[q].style.backgroundColor = "#ee7070";
                let correctAnswerField = questions[q].getElementsByClassName("correctAnswer")[0];
                correctAnswerField.innerHTML = correctAnswers[q];
                correctAnswerField.style.display = "block";
            }
        }
        else {
            let mistake = false;

            let correctOptions = 0;
            for (let i = 0; i < correctAnswers[q].length; i++) {
                correctOptions += correctAnswers[q][i];
            }

            let answerOptions = questions[q].getElementsByClassName("option");

            let givenAnswer = JSON.parse(questions[q].getAttribute("given_answer"));

            if (correctAnswers[q] instanceof Array) {
                maxResult += 2;

                let dRes = 0;

                for (let op = 0; op < correctAnswers[q].length; op++) {

                    if (givenAnswer[op]) {
                        if (correctAnswers[q][op]) {
                            answerOptions[op].style.backgroundColor = "#77ff55";
                            dRes += 2 / correctOptions;
                        }
                        else {
                            answerOptions[op].style.backgroundColor = "#ee7070";
                            dRes -= 2 / correctOptions;
                            mistake = true;
                        }
                    }
                    else if (correctAnswers[q][op]) {
                        answerOptions[op].style.backgroundColor = "#77ff55";
                        mistake = true;
                    }
                }

                if (dRes > 0)
                    result += dRes;
            }
            else {
                maxResult += 1;

                answerOptions[correctAnswers[q]].style.backgroundColor = "#77ff55";

                if (givenAnswer === -1)
                    mistake = true;
                else
                    if (givenAnswer !== correctAnswers[q]) {
                        answerOptions[givenAnswer].style.backgroundColor = "#ee7070";
                        mistake = true;
                    }
                    else
                        result += 1;
            }

            if (mistake) {
                questions[q].style.backgroundColor = "#ffcccc";
            }
            else
            {
                questions[q].style.backgroundColor = "#ddffbb";
            }
        }
    }


    document.getElementById("result").innerHTML = "Резултат: " + Math.round(result / maxResult * 1000) / 10 + "%";
}

function Content() {
    return (
        <div className="content">
            <Router>
                <Route path="/tests/skin" exact render={() =>
                    <>
                        <Question question="What?" options={["dk", "that", "something"]} correct={[2, 0]} />
                        <Question question="How?" options={["somehow", "no", "cucumber"]} correct={2} />
                        <FreeAnswerQuestion question="Explain" correct="Because" />
                    </>
                } />
                <h2 id="result" style={{ width: "100%", textAlign: "center" }}></h2>
                <Button id="checkAnswers" name="Провери отговорите" height="50px" onClick={CheckAnswers} />
                <Button id="toLesson" name="Назад към урока" height="50px" link={window.location.pathname.replace("tests", "lessons")} />
                <Button id="toNextLesson" height="50px" link="#" />
            </Router>
        </div>
    );
}



export { Content };