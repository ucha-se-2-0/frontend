import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar, Response} from './MainSite/Navbar';
import Content from './MainSite/Content'
import Footer from './MainSite/Footer';
import Header from './MainSite/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


//Global events

window.onresize = function () {
  //Navbar
  Response();


  //Logo
  var style = window.getComputedStyle(document.getElementById("logo").parentElement);
  document.getElementById("logo").style.height = Number(style.width.slice(0, -2)) / 4.0 + "px";
}

window.onload = function () {
  //Navbar
  Response();

  //Logo
  var style = window.getComputedStyle(document.getElementById("logo").parentElement);
  document.getElementById("logo").style.height = Number(style.width.slice(0, -2)) / 4.0 + "px";
}