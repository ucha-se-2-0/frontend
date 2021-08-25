import { React, StrictMode } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom"
import { useState } from "react"

import HomePage from './pages/HomePage/HomePage'
import Universities from './pages/Universities/Universities'
import Sections from './pages/LessonsSections/Sections'
import LessonsNav from './pages/LessonsNav/LessonsNav'
// import Lesson from './pages/Lesson/Lesson'
import { Login, Signup } from './pages/Auth/Auth'
import Test from './pages/Test/Test'

import './Style/Navbar.css'
import './Style/Header.css'
import './Style/Content.css'
import './Style/Components.css'
import './Style/Page.css'

import './Style/Index.css'
import { ThemeContext, UrlContext } from './Components';


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

function UrlController(props) {
  let [url, setUrl] = useState(window.location.pathnem);

  let redirect = null;

  function MyRedirect(new_url) {
    console.log(new_url);
    window.history.pushState(null, "new page", new_url)
    setUrl(new_url);
  }
  redirect = (url && <Redirect to={url} />);

  return (
    <UrlContext.Provider value={{ Redirect: MyRedirect }}>
      {redirect}
      {props.children}
    </UrlContext.Provider>
  )
}

export default function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <Router forceRefresh={false}>
          <UrlController>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/universities" component={Universities} />
              {/* <Route path="/lessons/sections/*" exact component={LessonsNav} />
              <Route path="/lessons/sections" exact> <Redirect to="/lessons" /> </Route> */}
              <Route path="/lessons" exact component={LessonsNav} />
              {/* <Route path="/lessons/*" exact component={Lesson} /> */}
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/tests/*" component={() => <Redirect to={{ pathname: "/login" }} />} />
            </Switch>
          </UrlController>
        </Router>
      </ThemeProvider>
    </StrictMode>
  )
}