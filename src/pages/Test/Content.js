import React from 'react'
import { Button, Title } from '../../Components'
import { GetNextLesson, GetLesson } from '../../Assets'



class Question extends React.Component {

    constructor(props) {
        super(props);
        this.oneCorrectAnswer = !(this.props.correct instanceof Array)

        this.state = { selected: [] }
        if (this.oneCorrectAnswer) {
            this.state.selected = -1
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
                checkboxStyle = { borderRadius: "50%", backgroundColor: this.state.selected === i ? "var(--primary)" : "transparent" }
            }
            else {
                checkboxStyle = { borderRadius: "2px", backgroundColor: this.state.selected[i] ? "var(--primary)" : "transparent" }
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
                    <p>{this.props.options[i]}</p>
                </div>
            );
        }


        return (
            <div className="question" style={{ backgroundColor: this.props.turnedIn ? anyError ? "#ffddcc" : "#ddffbb" : "transparent" }}>
                <p>{this.props.question}</p>
                {options}
            </div>
        );
    }

    CalcPoints() {
        let max_points = this.props.options.length / 4
        let points = 0
        if (this.oneCorrectAnswer) {
            points = (this.state.selected === this.props.correct) ? this.props.options.length / 4 : 0
        }
        else {
            for (let o in this.props.options) {
                let option_correct = false
                for (let c of this.props.correct) {
                    if (c == o) {
                        option_correct = true
                        break
                    }
                }

                let selected = this.state.selected[o] ? true : false
                if(option_correct === selected)
                {
                    points += 0.25
                }
                else
                {
                    points -= 0.25
                }
            }
        }

        if(points < 0)
            points = 0

        return { max_points: max_points, points: points }
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
                if (parseInt(this.givenAnswer) - this.props.correct < Math.pow(0.1, this.props.precision))
                    points = max_points
            }
            else {
                if (parseInt(this.givenAnswer) === this.props.correct)
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
        if (this.props.precision) {
            placeholder += " с точност до " + this.props.precision + " знака след запетая"
        }

        return (
            <div className="question free-answer">
                <p>{this.props.question}</p>
                <input placeholder={placeholder} type="text" onKeyDown={e => {
                    if (this.answerIsNumber) {
                        if (e.key === "Backspace")
                            return

                        if ((e.target.value + e.key).match(/^(\d+(\.|,){1}\d*|\d+)$/)) {
                            this.givenAnswer += e.key
                            e.target.value += e.key
                        }
                        e.preventDefault()
                    }
                    else {
                        this.givenAnswer += e.key
                    }
                }} />
                {this.props.turnedIn ? <div className="correctAnswer">{this.props.correct}</div> : <></>}
            </div>
        );
    }
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

                {this.GetActions()}
            </div>
        );
    }

    AddTurnInCallback(callback) {
        this.turnInCallbacks.push(callback)
    }

    GetActions() {
        if (this.state.turnedIn) {
            let next = GetNextLesson(window.location.pathname)
            let next_title, next_link, message
            if (next.title) {
                next_title = "Към следващия урок (" + next.title + ")"
                next_link = "/lessons/" + next.url
            }
            else {
                console.log(next)
                if(next.subsection)
                {
                    message = "Това беше последният урок от подраздела \"" + next.subsection.title + '"'
                    next_title = "Към раздел \"" + next.section.sectionName + '"'
                    next_link = "/lessons/sections/" + next.section.url
                }
                else
                {
                    message = "Това беше последният урок от раздела \"" + next.section.sectionName + '"'
                    next_title = "Към уроците"
                    next_link = "/lessons"
                }

            }

            if (message) {
                message = <div style = {{textAlign: "center"}} className = "content-text">{message}</div>
            }

            return (<>
                <Title subtitle content = {"Резултат: " + this.state.result + "%"} />
                {message}
                <Button name="Назад към урока" height="50px" link={window.location.pathname.replace("tests", "lessons")} />
                <Button name={next_title} height="50px" link={next_link} />
            </>)
        }
        return <Button name="Провери отговорите" height="50px" onClick={this.CheckAnswers.bind(this)} />
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
                        correct={q.ans} />)
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

            key++
        }

        return (
            questions
        )
    }


    CheckAnswers() {
        this.setState({ turnedIn: true })

        let points = 0
        let max_points = 0
        for (let callback of this.turnInCallbacks) {
            let res = callback()
            points += res.points
            max_points += res.max_points
        }

        this.setState({ result: Math.round(points / max_points * 10000) / 100 })
    }
}



export { Content };