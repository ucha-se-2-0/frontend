import { React, StrictMode, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect, useHistory } from "react-router-dom"
import { useState } from "react"

import HomePage from './pages/HomePage/HomePage'
import Universities from './pages/Universities/Universities'
import LessonsNav from './pages/LessonsNav/LessonsNav'
import Lesson from './pages/Lesson/Lesson'
import { Login, Signup } from './pages/Auth/Auth'
import Test from './pages/Test/Test'
import Terms from './pages/Legality/Terms';
import NotFound from './pages/NotFound/NotFound';
import Privacy from './pages/Legality/Privacy';

import './Style/Style.css'

import { GetCookie, SetCookie, ThemeContext } from './Utilities';


function ThemeProvider(props) {
  let [theme, SetTheme] = useState("light");

  function ToggleTheme() {
    let new_theme = (theme === "light" ? "dark" : "light");
    SetTheme(new_theme);
    SetCookie("theme", new_theme, 24 * 30);
  }
  
  useEffect(() => {
    let cookie = GetCookie("theme");
    cookie && SetTheme(cookie);
  }, [])

  
  if (theme === "light") {
    document.body.classList.remove("dark");
  }
  else if (theme === "dark") {
    document.body.classList.add("dark");
  }

  return (
    <ThemeContext.Provider value={{ theme: theme, ToggleTheme: ToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default function App() {
  useEffect(()=>{
    //SetCookie("notFirstSiteVisit", true, 24 * 30);
  }, [])

  return (
    <StrictMode>
      <ThemeProvider>
        <Router forceRefresh={false}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/universities" exact component={Universities} />
              <Route path="/lessons" exact component={LessonsNav} />
              <Route path="/lessons/*/" exact component={Lesson} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/tests/*/" exact component={Test} />
              <Route path="/terms-and-conditions" exact component={Terms} />
              <Route path="/privacy-policy" exact component={Privacy} />
              <Route path="/*" component={NotFound} />
            </Switch>
        </Router>
      </ThemeProvider>
    </StrictMode>
  )
}