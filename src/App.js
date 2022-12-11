import { React, StrictMode, useContext } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomePage from './pages/HomePage/HomePage'
import Universities from './pages/Universities/Universities'
import LessonsNav from './pages/LessonsNav/LessonsNav'
import Lesson from './pages/Lesson/Lesson'
import Test from './pages/Test/Test'
import Terms from './pages/Legality/Terms';
import NotFound from './pages/NotFound/NotFound';
import Privacy from './pages/Legality/Privacy';

import './Style/Style.css'

import { CookiesAcceptedProvider, cookiesContext, ThemeProvider } from './Utilities';
import { CookiesWindow } from './Components';


function CookiesWindowOrApp() {
  const { accepted } = useContext(cookiesContext);

  const showWindow = window.location

  return (
    accepted ?
      <Router forceRefresh={false}>
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/universities" exact component={Universities} />
          <Route path="/lessons" exact component={LessonsNav} />
          <Route path="/lessons/*/" exact component={Lesson} />
          <Route path="/tests/*/" exact component={Test} />
          <Route path="/terms-and-conditions" exact component={Terms} />
          <Route path="/privacy-policy" exact component={Privacy} />
          <Route path="/*" component={NotFound} />
        </Routes>
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