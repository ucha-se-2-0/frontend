import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from "react-router-dom"

import MainPage from './MainPage/MainPage'
import Universities from './Universities/Universities'

import './Style/Navbar.css'
import './Style/Header.css'
import './Style/Content.css'
import './Style/Footer.css'
import './Style/Components.css'


ReactDOM.render(
  <>
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/universities" exact component={Universities} />
    </Router>
  </>,
  document.getElementById('root')
);