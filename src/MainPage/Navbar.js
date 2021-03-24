import React from 'react';
import {Button, SearchField} from '../Components'

function Navbar () {
    return (
      <div className="navbar">
        <div className="dropdown">
          <Button name = "Предмети"/>
          <ul className="dropdown-content">
            <li><Button name = {<>Анатомия <br/> и физиология</>}   link = "/subjects/anatomy_and_physiology" style = {{}}/></li>
            <li><Button name = "Клетка"  link = "/subjects/cytology"/></li>
            <li><Button name = "Вируси"   link = "/subjects/viruses"/></li>
            <li><Button name = "Генетика"   link = "/subjects/genetics"/></li>
            <li><Button name = "Екология"   link = "/subjects/ecology"/></li>
            <li><Button name = "Химия"   link = "/subjects/chemistry"/></li>
          </ul>
        </div>

        <Button id = "unis" name = "Университети" link = "/universities" class = "important"/>

        <SearchField height = "50%" search = {Search} class = "important"/>

        <Button name = "Вход" class = "important"/>
      </div>
    );
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
