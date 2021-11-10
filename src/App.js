import { React, StrictMode, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
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

import { CookiesAcceptedProvider, cookiesContext, ThemeProvider } from './Utilities';
import { CookiesWindow } from './Components';
import { useContext } from 'react/cjs/react.development';


function CookiesWindowOrApp() {
  const { accepted } = useContext(cookiesContext);

  const showWindow = window.location

  return (
    accepted ?
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
      :
      <CookiesWindow />
  )
}

export default function App() {
  return (
    <StrictMode>
      <CookiesAcceptedProvider>
        <ThemeProvider>
          <CookiesWindowOrApp />
        </ThemeProvider>
      </CookiesAcceptedProvider>
    </StrictMode>
  )
}