import React from 'react'
import { Button, Link, Title, Input } from '../../Components'
import { GetNextLesson, GetLesson } from '../../Assets'



class Question extends React.Component {

    constructor(props) {
        super(props);
        this.oneCorrectAnswer = !(this.props.correct instanceof Array)

        this.state = { selected: [] }
        if (this.oneCorrectAnswer) {
            this.state.selected = -1;
        }
    }

    componentDidMount() {
        this.props.addTurnInCallback(this.CalcPoints.bind(this))
    }

    render() {
        let options = [];

        let anyError = false

        for (let i = 0; i < this.props.options.length; i++) {
            let checkboxStyle
            if (this.oneCorrectAnswer) {
                checkboxStyle = { borderRadius: "50%", backgroundColor: this.state.selected === i ? this.props.turnedIn ? "var(--dark-blue)" : "var(--primary)" : "transparent" }
            }
            else {
                checkboxStyle = { borderRadius: "2px", backgroundColor: this.state.selected[i] ? this.props.turnedIn ? "var(--dark-blue)" : "var(--primary)" : "transparent" }
            }

            let optionBackground = null
            if (this.props.turnedIn) {
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

                            if (!this.state.selected[i]) {
                                anyError = true
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
                    <div className="checkbox" style={checkboxStyle} />

                    <p>{this.props.options[i]}</p>
                </div>
            );
        }


        return (
            <div className="question" style={{ backgroundColor: this.props.turnedIn ? anyError ? "#ffddcc" : "#ddffbb" : "transparent", color: this.props.turnedIn ? "var(--dark-blue)" : "" }}>
                <p>{this.props.question}</p>
                {options}
            </div>
        );
    }

    CalcPoints() {
        let max_points = this.props.options.length * 0.25;
        let points = 0
        if (this.oneCorrectAnswer) {
            points = (this.state.selected === this.props.correct) ? this.props.options.length / 4 : 0
        }
        else {
            let pointsForCorrect = this.props.options.length / this.props.correct.length * 0.25;

            for (let o in this.props.options) {
                let option_correct = false
                for (let c of this.props.correct) {
                    if (c == o) {
                        option_correct = true;
                        break;
                    }
                }

                if (Boolean(this.state.selected[o])) {
                    if (option_correct) {
                        points += pointsForCorrect;
                    }
                    else {
                        points -= pointsForCorrect;
                    }
                }
            }
        }

        if (points < 0)
            points = 0

        console.log(max_points, points);
        return { max_points, points }
    }

    OnClick(id) {
        if (!this.props.turnedIn) {

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

class FreeAnswerQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.answerIsNumber = (typeof this.props.correct === "number")
        this.givenAnswer = ""
    }

    componentDidMount() {
        this.props.addTurnInCallback(this.CalcPoints.bind(this))
    }

    CalcPoints() {
        let max_points = 0
        let points = 0
        if (this.answerIsNumber) {
            max_points = this.props.points ? this.props.points : 2
            if (this.props.precision) {
                if (Math.abs(parseFloat(this.givenAnswer) - this.props.correct) < Math.pow(0.1, this.props.precision))
                    points = max_points
            }
            else {
                if (Math.abs(parseFloat(this.givenAnswer) - this.props.correct) < 1e-6)
                    points = max_points
            }
        }
        else {
            max_points = this.props.points ? this.props.points : 3
            let mismatches = 0
            mismatches = Math.abs(this.givenAnswer.length - this.props.correct.length)
            for (let s = 0; s < this.givenAnswer.length && s < this.props.correct.length; s++) {
                if (this.givenAnswer[s] !== this.props.correct[s]) {
                    if (this.props.exact || mismatches >= 1) {
                        break
                    }

                    mismatches++
                }
            }
        }

        return { max_points: max_points, points: points }
    }

    render() {
        let placeholder = "Въведете отговора си"
        console.log(this.props);
        if (this.props.precision) {
            placeholder += " с точност до " + this.props.precision + " знака след запетая"
        }

        return (
            <div className="question free-answer">
                <p>{this.props.question}</p>
                <Input placeholder={placeholder} number/>
                {this.props.turnedIn ? <div className="correctAnswer">{this.props.correct}</div> : <></>}
            </div>
        );
    }
}

function Actions(props) {
    if (props.turnedIn) {
        let next = GetNextLesson(window.location.pathname)
        let next_title, next_link, message
        if (next.title) {
            next_title = "Към следващия урок (" + next.title + ")"
            next_link = "/lessons/" + next.url
        }
        else {
            console.log(next)
            if (next.subsection) {
                message = "Това беше последният урок от подраздела \"" + next.subsection.title + '"'
                next_title = "Към раздел \"" + next.section.sectionName + '"'
                next_link = "/lessons/sections/" + next.section.url
            }
            else {
                message = "Това беше последният урок от раздела \"" + next.section.sectionName + '"'
                next_title = "Към уроците"
                next_link = "/lessons"
            }

        }

        if (message) {
            message = <div style={{ textAlign: "center" }} className="content-text">{message}</div>
        }

        return (<>
            <Title title={"Резултат: " + props.result + "%"} />
            {message}
            <Link content="Назад към урока" height="50px" link={window.location.pathname.replace("tests", "lessons")} primary />
            <Link content={next_title} height="50px" link={next_link} primary />
        </>)
    }
    return <Button content="Провери отговорите" onClick={props.CheckAnswers} primary />
}

class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = { result: -1, turnedIn: false }

        this.turnInCallbacks = []
    }


    render() {
        return (
            <div className="content test-content">

                {this.GetQuestions()}

                {<Actions CheckAnswers={this.CheckAnswers.bind(this)} {...this.state} />}
            </div>
        );
    }

    AddTurnInCallback(callback) {
        this.turnInCallbacks.push(callback)
    }


    GetQuestions() {
        let questions = []
        let lesson = GetLesson(window.location.pathname)

        let key = 0
        for (let q of lesson.test) {
            if (q.opt) {
                questions.push(
                    <Question
                        key={key}
                        addTurnInCallback={this.AddTurnInCallback.bind(this)}
                        turnedIn={this.state.turnedIn}
                        question={q.q}
                        options={q.opt}
                        correct={q.ans}
                        precision = {q.prec} />)
            }
            else {
                questions.push(
                    <FreeAnswerQuestion
                        key={key}
                        addTurnInCallback={this.AddTurnInCallback.bind(this)}
                        turnedIn={this.state.turnedIn}
                        question={q.q}
                        correct={q.ans}
                        exact={q.exact}
                        precision={q.prec} />
                )
            }

            key++;
        }

        return questions;
    }


    CheckAnswers() {
        this.setState({ turnedIn: true })

        let points = 0;
        let max_points = 0;
        for (let callback of this.turnInCallbacks) {
            let res = callback();
            points += res.points;
            max_points += res.max_points;
        }

        this.setState({ result: Math.round(points / max_points * 10000) / 100 })
    }
}



export { Content };