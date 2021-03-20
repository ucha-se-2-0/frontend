import React from 'react';
import Button from '../Components'
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="dropdown">
          <Button name = "Предмети"/>
          <ul className="dropdown-content">
            <li><Button name = "Анатомия"/></li>
            <li><Button name = "Физиология"/></li>
            <li><Button name = "Цитология"/></li>
            <li><Button name = "Генетика"/></li>
            <li><Button name = "Биохимия"/></li>
          </ul>
        </div>

        <Button id = "unis" name = "Университети"/>

        <Button name = "Вход"/>
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
