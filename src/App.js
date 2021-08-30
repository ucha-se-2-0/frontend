import { React, StrictMode, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom"
import { useState } from "react"

import HomePage from './pages/HomePage/HomePage'
import Universities from './pages/Universities/Universities'
import LessonsNav from './pages/LessonsNav/LessonsNav'
import Lesson from './pages/Lesson/Lesson'
import { Login, Signup } from './pages/Auth/Auth'
import Test from './pages/Test/Test'

import './Style/Components.css'
import './Style/Page.css'
import './Style/Index.css'
import './Style/Colors.css'

import { ThemeContext, UrlContext } from './Components';
import { GetCookie, SetCookie } from './Cookies';


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

function UrlController(props) {
  let [url, setUrl] = useState(window.location.pathnem);

  let redirect = null;

  function MyRedirect(new_url) {
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
              <Route path="/lessons/*" exact component={Lesson} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/tests/*" component={Test} />
            </Switch>
          </UrlController>
        </Router>
      </ThemeProvider>
    </StrictMode>
  )
}