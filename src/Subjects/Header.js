import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom"

class SubjectHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <div>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

function Header() {
    return (
        <Router>
            <Route path = "/subjects/anatomy" exact component={() => <SubjectHeader text="Анатомия" />} />
            <Route path = "/subjects/physiology" exact component = {() => <SubjectHeader text = "Физиология"/>} />
            <Route path = "/subjects/cytology" exact component = {() => <SubjectHeader text = "Цитология"/>} />
            <Route path = "/subjects/genetics" exact component = {() => <SubjectHeader text = "Генетика"/>} />
            <Route path = "/subjects/biochemistry" exact component = {() => <SubjectHeader text = "Биохимия"/>} />
            <Route path = "/subjects" exact component = {()=> <SubjectHeader text = "Изберете предмет"/> } />
        </Router>
    );
}

export default Header;