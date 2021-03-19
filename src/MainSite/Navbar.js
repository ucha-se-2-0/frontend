import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="dropdown">
          <a className="button" href="">Предмети</a>
          <ul className="dropdown-content">
            <li>Анатомия</li>
            <li>Физиология</li>
            <li>Цитология</li>
            <li>Генетика</li>
            <li>Биохимия</li>
          </ul>
        </div>

        <a id="unis" className="button" href="">Университети</a>

        <a className="button" href="" style = {{float: "left"}}>Вход</a>
      </div>
    );
  }
}

function Resize() {
  var navbarList = document.querySelectorAll(".navbar>*");
  navbarList[0].parentElement.style.height = Math.pow(window.innerWidth, 0.5) * 2 + "px";
  navbarList.forEach((element) => { 
    element.style.minWidth = window.innerWidth / 70.0 + "%";
    element.style.fontSize = Math.pow(window.innerWidth, 0.5) + "px"; 
  });
}

export { Navbar, Resize };
