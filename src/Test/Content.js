import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Button } from '../Components'

var correctAnswers = []

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selected: [] };
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
            <div className="question" value={JSON.stringify(this.state.selected)}>
                <h2>{this.props.question}</h2>
                {options}
            </div>
        );
    }

    OnClick(id) {
        let selected = this.state.selected;
        console.log(selected);
        if (this.props.correct instanceof Array) {
            selected[id] = !selected[id];
        }
        else
        {
            if(selected === id)
            {
                selected = -1;
            }
            else
            {
                selected = id;
            }
        }


        this.setState({ selected: selected });
    }

    GetOptionStyle(id)
    {
        if(this.state.selected instanceof Array)
        {
            return { display: this.state.selected[id] ? "block" : "none" };
        }
        else
        {
            return { display: this.state.selected === id ? "block" : "none" }
        }
    }
}

function CheckAnswers() {
    console.log(correctAnswers);

    let content = document.getElementsByClassName("content")[0];
    content.removeChild(document.getElementById("checkAnswers"));

    let mistake = false;

    let questions = content.querySelectorAll(".question");
    for (let q = 0; q < questions.length; q++) {

        mistake = false;

        let options = questions[q].getElementsByClassName("option");

        let answer = JSON.parse(questions[q].getAttribute("value"));

        if (correctAnswers[q] instanceof Array) {

            for (let op = 0; op < correctAnswers[q].length; op++) {

                if (answer[op]) {
                    if (correctAnswers[q][op]) 
                    {
                        options[op].style.backgroundColor = "#77ff55";
                    }
                    else
                    {
                        options[op].style.backgroundColor = "#ee9090";
                        mistake = true;
                    }
                }
                else if (correctAnswers[q][op]) {
                    options[op].style.backgroundColor = "#77ff55";
                    mistake = true;
                }
            }
        }
        else {
            options[correctAnswers[q]].style.backgroundColor = "#77ff55";

            if(answer !== correctAnswers[q])
            {
                console.log(options, answer);
                options[answer].style.backgroundColor = "#ee7070";
                mistake = true;
            }
        }

        if (mistake) {
            questions[q].style.backgroundColor = "#ffcccc";
        }
    }

}

function Content() {
    return (
        <div className="content">
            <Router>
                <Route path="/tests/skin" exact render={() =>
                    <>
                        <Question question="What?" options={["dk", "that", "something"]} correct={[2, 0]} />
                        <Question question="How?" options={["somehow", "no", "cucumber"]} correct={2} />
                    </>
                } />
                <Button id="checkAnswers" name="Провери отговорите" height="50px" onClick={CheckAnswers} />
            </Router>
        </div>
    );
}



export { Content };