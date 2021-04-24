import React from 'react';
import {Button, SearchField} from '../Components'
import {lessonsUrls} from '../LessonsUrl'
import {theme, colors} from '../Colors'

class DropdownElement extends React.Component
{
  render()
  {
    return(
      <li style = {{backgroundColor: theme === "dark" ? colors.notSoDark : colors.notSoLight}}>
        <Button name = {this.props.name} link = {this.props.name}/>
      </li>
    );
  }
}

class Navbar extends React.Component {
  render()
  {
    return (
      <div className="navbar" style = {{backgroundColor: theme === "dark" ? colors.navbar.dark : colors.navbar.light}}>
        <div className="dropdown">
          <Button name = "Предмети"/>
          <ul className="dropdown-content">
            <DropdownElement name = {<>Анатомия <br/> и физиология</>} link = "/topics/anatomy_and_physiology"/>
            <DropdownElement name = "Клетка"  link = "/topics/cytology"/>
            <DropdownElement name = "Вируси"   link = "/topics/viruses"/>
            <DropdownElement name = "Генетика"   link = "/topics/genetics"/>
            <DropdownElement name = "Екология"   link = "/topics/ecology"/>
            <DropdownElement name = "Химия"   link = "/topics/chemistry"/>
          </ul>
        </div>

        <Button id = "unis" name = "Университети" link = "/universities" class = "important"/>

        <SearchField height = "50%" search = {Search} class = "important"/>

        <Button name = "Вход" class = "important" link = "/Login"/>
      </div>
    );
  }
}



function Search(search_request)
{
  // let lessons = []
  // let request = new XMLHttpRequest;
  // for(let i = 0; i < lessonsUrls.length; i++)
  // {
  //   request.open('GET', '', false);
  //   request.send();
  //   if(request.responseText.match(search_request).length !== 0)
  //     lessons.push(lessonsUrls[i][1]);
  // }

  // if(lessons.length === 0)
  //   console.log("Couldn't find anything that matches '", request, "'");
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
  //document.getElementById("logoOrbits").style.height = Number(style.width.slice(0, -2)) / 6.0 + "px";
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
