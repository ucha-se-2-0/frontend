import React from 'react';
import {Button, SearchField} from '../Components'

switch(window.location.pathname)
{
  case "/": import('./Navbar.css'); break;
}

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <SearchField height = "50%" search = {Search}/>

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

        <Button id = "unis" name = "Университети" link = "/universities"/>

        <Button name = "Вход"/>

      </div>
    );
  }
}

function Search(request)
{
  console.log("Couldn't find anything that matches '", request, "'");
}

function OnResizeOrLoad()
{
  //Navbar
  var navbarElements = document.querySelectorAll(".navbar>*");
  navbarElements.forEach((element) => { 
    element.style.fontSize = Math.pow(window.innerWidth, 0.5) * 0.8 + "px"; 
  });

  document.querySelectorAll(".navbar>*.dropdown").forEach(element => {
    element.style.width = Number(window.getComputedStyle(element.querySelector(".dropdown-content li")).width.slice(0, -2)) + 20 + "px";
  });


  //Logo
  var style = window.getComputedStyle(document.getElementById("logo").parentElement);
  document.getElementById("logo").style.height = Number(style.width.slice(0, -2)) / 5.0 + "px";
  document.getElementById("logoOrbits").style.height = Number(style.width.slice(0, -2)) / 6.0 + "px";
}

window.addEventListener('load', ()=>{
  let url = window.location.pathname;

  switch(url)
  {
    case "/":
      OnResizeOrLoad();
      
      window.addEventListener('resize', ()=>{
        OnResizeOrLoad();
      });
      break;
    }
});

window.addEventListener('close', ()=>{
  window.removeEventListener('load', OnResizeOrLoad);
  window.removeEventListener('resize', OnResizeOrLoad);
});

export default Navbar;
