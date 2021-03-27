import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router } from "react-router-dom"

import MainPage from './MainPage/MainPage'
import Universities from './Universities/Universities'
import Subjects from './Topics/Topics'
import Lesson from './Lesson/Lesson'
import SignIn from './SignIn/SignIn'
import Test from './Test/Test'

import './Style/Navbar.css'
import './Style/Header.css'
import './Style/Content.css'
import './Style/Components.css'

import './index.css'

ReactDOM.render(
  <StrictMode>
    <Router>
      <Route path = "/"             exact component = {MainPage} />
      <Route path = "/universities" exact component = {Universities} />
      <Route path = "/topics/*"   exact component = {Subjects } />
      <Route path = "/lessons/*"    exact component = {Lesson} />
      <Route path = "/signin"       exact component = {SignIn} />
      <Route path = "/tests/*"       exact component = {Test}/>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);