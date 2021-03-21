import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from "react-router-dom"

import MainPage from './MainPage/MainPage'
import Universities from './Universities/Universities'

ReactDOM.render(
  <>
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/univerities" exact component={Universities} />
      {/* <Route path="/subjects" exact component={MainPage} /> */}
    </Router>
  </>,
  document.getElementById('root')
);