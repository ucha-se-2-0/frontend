import React from 'react';
import { Button, SearchField, Dropdown, DropdownElement } from '../../Components'
import { theme, colors } from '../../Colors'



class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar" style={{ backgroundColor: theme === "dark" ? colors.navbar.dark : colors.navbar.light }}>

        <Button name = "Уроци" class = "important" link = "/lessons"/>

        <Button id="unis" name="Университети" link="/universities" class="important" />

        <SearchField height="50%" search={Search} class="important" />

        <Button name="Вход" class="important" link="/Login" />
      </div>
    );
  }

  componentDidMount() {
    let url = window.location.pathname;

    if (url === "/") {
      OnResizeOrLoad();

      window.addEventListener('resize', () => {
        OnResizeOrLoad();
      });
    }
  }
}



function Search(search_request) {
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



function OnResizeOrLoad() {
  //Logo
  var style = window.getComputedStyle(document.getElementById("logo").parentElement);
  document.getElementById("logo").style.height = Number(style.width.slice(0, -2)) / 5.0 + "px";
  //document.getElementById("logoOrbits").style.height = Number(style.width.slice(0, -2)) / 6.0 + "px";
}

window.addEventListener('close', () => {
  window.removeEventListener('load', OnResizeOrLoad);
  window.removeEventListener('resize', OnResizeOrLoad);
});

export default Navbar;
