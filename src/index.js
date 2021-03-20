import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar, Resize} from './MainSite/Navbar'
import Content from './MainSite/Content'
import Footer from './MainSite/Footer'
import Header from './MainSite/Header'
import Button from './Components'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Content />
    <Footer />
    {/* <Button /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


//Global events

window.onresize = function () {
  //Navbar
  Resize();


  //Logo
  var style = window.getComputedStyle(document.getElementById("logo").parentElement);
  document.getElementById("logo").style.height = Number(style.width.slice(0, -2)) / 5.0 + "px";
}

window.onload = function () {
  //Navbar
  Resize();

  //Logo
  var style = window.getComputedStyle(document.getElementById("logo").parentElement);
  document.getElementById("logo").style.height = Number(style.width.slice(0, -2)) / 5.0 + "px";
}