import React from 'react';
import { Button, SearchField, Dropdown, DropdownElement } from '../../Components'
import { theme, colors } from '../../Style/Colors'



class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar main-page-navbar" style={{ backgroundColor: theme === "dark" ? colors.navbar.dark : colors.navbar.light }}>

        <Button name = "Уроци" class = "important" link = "/lessons"/>

        <Button id="unis" name="Университети" link="/universities" class="important" />

        <SearchField height="50%" search={Search} class="important" />

        <Button name="Вход" class="important" link="/Login" />
      </div>
    );
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

export default Navbar;
