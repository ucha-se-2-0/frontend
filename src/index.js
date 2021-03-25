import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from "react-router-dom"

import MainPage from './MainPage/MainPage'
import Universities from './Universities/Universities'
import Subjects from './Subjects/Subjects'
import Lesson from './Lesson/Lesson'

import './Style/Navbar.css'
import './Style/Header.css'
import './Style/Content.css'
import './Style/Components.css'

import './index.css'

ReactDOM.render(
  <>
    <Router>
      <Route path = "/"             exact component = {MainPage} />
      <Route path = "/universities" exact component = {Universities} />
      <Route path = "/subjects"     exact component = { Subjects } />
      <Route path = "/subjects/*"   exact component = { Subjects } />
      <Route path = "/lessons/*"    exact component = {Lesson} />
    </Router>
  </>,
  document.getElementById('root')
);