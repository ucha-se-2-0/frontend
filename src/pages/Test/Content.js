import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { colors } from '../../Colors';
import { Button } from '../../Components'
import { GetNextLesson, GetSubject } from '../../assets'

var calcPointsCallbacks = []
var turnedIn = false

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.oneCorrectAnswer = !(this.props.correct instanceof Array)

        this.state = { selected: [], checked: false }
        if (this.oneCorrectAnswer) {
            this.state.selected = -1
        }
    }

    componentDidMount() {
        calcPointsCallbacks.push(this.CalcPoints.bind(this))
    }

    render() {
        let options = [];

        let anyError = false

        for (let i = 0; i < this.props.options.length; i++) {
            let checkboxStyle
            if (this.oneCorrectAnswer) {
                checkboxStyle = { borderRadius: "50%", backgroundColor: this.state.selected === i ? colors.dark : "transparent" }
            }
            else {
                checkboxStyle = { borderRadius: "2px", backgroundColor: this.state.selected[i] ? colors.dark : "transparent" }
            }

            let optionBackground = null
            if (this.state.checked) {
                if (this.oneCorrectAnswer) {
                    if (this.props.correct === this.state.selected) {
                        optionBackground = "transparent"
                    }
                    else {
                        anyError = true
                        if (this.state.selected === i) {
                            optionBackground = "#ffcccc"
                            anyError = true
                        }
                        if (this.props.correct === i) {
                            optionBackground = "#ddffbb"
                        }
                    }
                }
                else {
                    let optionCorrect = false
                    for (let c of this.props.correct) {
                        if (c === i) {
                            optionCorrect = true

                            if (!this.state.selected[i])
                            {
                                anyError = true
                                console.log(i)
                            }

                            break
                        }

                    }

                    if (optionCorrect)
                        optionBackground = "#ddffbb"
                    else if (this.state.selected[i]) {
                        console.log(i)
                        anyError = true
                        optionBackground = "#ffcccc"
                    }
                }
            }

            options.push(
                <div className="option" key={i} style={{ backgroundColor: optionBackground }} onClick={() => { this.OnClick(i) }}>
                    <div className="checkbox" style={checkboxStyle}>
                    </div>
                    <h3>{this.props.options[i]}</h3>
                </div>
            );
        }


        return (
            <div className="question" style={{ backgroundColor: this.state.checked ? anyError ? "#ffddcc" : "#ddffbb" : "transparent" }}>
                <h2>{this.props.question}</h2>
                {options}
            </div>
        );
    }

    CalcPoints() {
        let max_points = 0
        let points = 0
        if (this.oneCorrectAnswer) {
            max_points = this.props.options.length / 4
            points = (this.state.selected === this.props.correct) ? this.props.options.length / 4 : 0
        }
        else {
            let correctCount = 0
            for (let i in this.props.correct) {
                max_points += (this.props.options.length - i) / 4

                if (this.state.selected[this.props.correct[i]]) {
                    points += (this.props.options.length - correctCount) / 4
                    correctCount++;
                }
            }
        }

        this.setState({ checked: true })

        return { max_points: max_points, points: points }
    }

    OnClick(id) {
        if (!turnedIn) {

            let selected = this.state.selected;
            if (this.oneCorrectAnswer) {
                if (selected === id) {
                    selected = -1;
                }
                else {
                    selected = id;
                }
            }
            else {
                selected[id] = !selected[id];
            }


            this.setState({ selected: selected });
        }
    }
}

// class FreeAnswerQuestion extends React.Component {
//     componentDidMount() {
//         if (typeof this.props.correct === "number") {
//             if (this.props.precision !== undefined) {
//                 correctAnswers.push({
//                     answer: Math.round(this.props.correct * Math.pow(10, this.props.precision)) / Math.pow(10, this.props.precision),
//                     precision: this.props.precision
//                 });
//             }
//             else {
//                 correctAnswers.push({
//                     answer: Math.round(this.props.correct),
//                     precision: 0
//                 });
//             }
//         }
//         else {
//             correctAnswers.push(this.props.correct.toLowerCase());
//         }
//     }

//     render() {
//         return (
//             <div className="question free-answer">
//                 <h2>{this.props.question}</h2>
//                 <input placeholder="Въведете отговора си" type={typeof this.props.correct === "number" ? "number" : "text"}></input>
//                 <div className="correctAnswer"></div>
//             </div>
//         );
//     }
// }


class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = { result: -1 }
    }



    render() {
        return (
            <div className="content">
                <Router>
                    <Route path="/tests/skin" exact render={() =>
                        <>
                            <Question question="What?" options={["dk", "that", "something"]} correct={[2, 0]} />
                            <Question question="How?" options={["somehow", "no", "cucumber"]} correct={2} />
                            {/* <FreeAnswerQuestion question="Explain" correct={"Because"} />
                            <FreeAnswerQuestion question="3 / 2 ?" correct={1.5} precision={3} /> */}
                        </>
                    } />
                    <h1> {this.state.result === -1 ? "" : "Резултат: " + this.state.result + "%"} </h1>
                    {this.state.result === -1 ? <Button id="checkAnswers" name="Провери отговорите" height="50px" onClick={this.CheckAnswers.bind(this)} /> : <></>}

                    <Button id="toLesson" name="Назад към урока" height="50px" link={window.location.pathname.replace("tests", "lessons")} />
                    <Button id="toNextLesson" height="50px" link="#" />
                </Router>
            </div>
        );
    }


    CheckAnswers() {
        let points = 0
        let max_points = 0
        for (let callback of calcPointsCallbacks) {
            let res = callback()
            points += res.points
            max_points += res.max_points
        }

        this.setState({ result: Math.round(points / max_points * 10000) / 100 })
        /* let result = 0;
        let maxResult = 0;
    
        turnedIn = true;
    
        let content = document.getElementsByClassName("content")[0];
        document.getElementById("checkAnswers").style.display = "none";
        document.getElementById("toLesson").style.display = "inline-flex";
    
        let toNextLesson = document.getElementById("toNextLesson")
        toNextLesson.style.display = "inline-flex";
        let next = GetNextLesson(window.location.pathname);
        if (next === undefined) {
            let topic = GetSubject(window.location.pathname);
            toNextLesson.getElementsByClassName("button-content")[0].innerHTML = "Към " + topic[0];
            toNextLesson.setAttribute("href", "/subjects/" + topic[1]);
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
                input.setAttribute("readonly", true);
    
                let dRes = 0;
    
                console.log(input.value, correctAnswers[q]);
    
                if (input.type === "number") {
                    if (Math.round(input.value * Math.pow(10, correctAnswers[q].precision)) / Math.pow(10, correctAnswers[q].precision) === correctAnswers[q].answer)
                        dRes = 3;
                }
                else {
                    let value = input.value.toLowerCase();
    
                    if (Math.abs(value.length - correctAnswers[q].length) < 2) {
                        dRes = 3;
                        if (Math.abs(value.length - correctAnswers[q].length) === 1) {
                            dRes = 1.5;
                        }
                        let offset = 0;
                        for (let i = 0; i + offset < value.length && i < correctAnswers[q].length; i++) {
                            if (value[i + offset] !== correctAnswers[q][i]) {
                                if (value[i + 1] === correctAnswers[q][i]) {
                                    offset = 1;
                                }
                                if (i + 1 < correctAnswers[q].length && value[i] === correctAnswers[q][i + 1]) {
                                    offset = -1;
                                }
                                dRes -= 1.5;
                                if (dRes === 0) {
                                    break;
                                }
                            }
                        }
                    }
                }
                result += dRes;
                if (dRes === 3) {
                    questions[q].style.backgroundColor = "#ddffbb";
                    questions[q].getElementsByTagName("input")[0].style.backgroundColor = "#77ff55";
                }
                else {
                    let correctAnswerField = questions[q].getElementsByClassName("correctAnswer")[0];
                    correctAnswerField.style.display = "block";
    
                    questions[q].style.backgroundColor = "#ffcccc";
                    if (input.type === "number") {
                        correctAnswerField.innerHTML = correctAnswers[q].answer;
                    }
                    else {
                        correctAnswerField.innerHTML = correctAnswers[q];
                    }
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
                else {
                    questions[q].style.backgroundColor = "#ddffbb";
                }
            }
        }
    
    
        document.getElementById("result").innerHTML = "Резултат: " + Math.round(result / maxResult * 1000) / 10 + "%";*/
    }
}



export { Content };