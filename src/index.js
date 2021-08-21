import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom"
import { useState } from "react"

import HomePage from './pages/HomePage/HomePage'
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
import { ThemeContext } from './Components';

window.addEventListener("load", () => {
  document.getElementById("root").style.backgroundColor = theme === "dark" ? colors.darker : "white";

  render();
})


function ThemeProvider(props) {
  let [theme, setTheme] = useState("light");

  function ToggleTheme() {
    document.body.classList.toggle("dark");
    setTheme((theme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, ToggleTheme: ToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

function render() {
  ReactDOM.render(
    <StrictMode>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/universities" component={Universities} />
            <Route path="/lessons/sections/*" exact component={LessonsNav} />
            <Route path="/lessons/sections" exact> <Redirect to="/lessons" /> </Route>
            <Route path="/lessons/" exact component={Sections} />
            <Route path="/lessons/*" exact component={Lesson} />
            <Route path="/Login" component={LogIn} />
            <Route path="/tests/*" component={Test} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StrictMode>,
    document.getElementById('root')
  );
}


export default render;