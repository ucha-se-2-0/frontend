import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Button } from '../Components'

class Question extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.correct instanceof Array) {
            this.state = { selected: [] };
        }
        else {
            this.state = { selected: -1 };
        }

    }

    render() {
        let options = [];

        for (let i = 0; i < this.props.options.length; i++) {
            options.push(
                <div className="option" key={i} onClick={() => { this.OnClick(i) }}>
                    <div className="checkbox" checked={false}>
                        <div style={this.CheckboxStyle(i)} />
                    </div>
                    <h3>{this.props.options[i]}</h3>
                </div>
            );
        }

        return (
            <div className="question" value={this.state.selected}>
                <h2>{this.props.question}</h2>
                {options}
            </div>
        );
    }

    OnClick(id) {
        let selected = this.state.selected;
        if (this.props.correct instanceof Array) {
            let select = true;
            for (let i = 0; i < selected.length; i++) {
                if (selected[i] === id) {
                    selected.splice(i, 1);
                    select = false;
                }
            }

            if (select)
                selected.push(id);
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

    CheckboxStyle(id) {
        if ((this.props.correct instanceof Array && this.state.selected.find(el => id === el) !== undefined) || this.state.selected === id) {
            return { display: "block" };
        }
        return { display: "none" };
    }
}

function CheckAnswers() {
    /* TO DO */
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
                <Button name="Провери отговорите" height="50px" onClick={CheckAnswers} />
            </Router>
        </div>
    );
}



export { Content };