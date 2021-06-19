import {React, StrictMode} from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom"

import MainPage from './pages/MainPage/MainPage'
import Universities from './pages/Universities/Universities'
import Sections from './pages/LessonsSections/Sections'
import LessonsNav from './pages/LessonsNav/LessonsNav'
import Lesson from './pages/Lesson/Lesson'
import LogIn from './pages/LogIn/LogIn'
import Test from './pages/Test/Test'
import { theme, colors } from './Style/Colors'

import './Style/Navbar.css'
import './Style/Header.css'
import './Style/Content.css'
import './Style/Components.css'

import './Style/Index.css'

window.addEventListener("load", () => {
  document.getElementById("root").style.backgroundColor = theme === "dark" ? colors.darker : "white";

  render();
})

function render() {
  ReactDOM.render(
    <StrictMode>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/universities" component={Universities} />
          <Route path="/lessons/sections/*" exact component={LessonsNav} />
          <Route path="/lessons/sections" exact> <Redirect to = "/lessons"/> </Route>
          <Route path="/lessons/" exact component = {Sections} />
          <Route path="/lessons/*" exact component={Lesson} />
          <Route path="/Login" component={LogIn} />
          <Route path="/tests/*" component={Test} />
        </Switch>
      </Router>
    </StrictMode>,
    document.getElementById('root')
  );
}


export default render;