import React from 'react';
import { Button, SearchField, Dropdown, DropdownElement } from '../../Components'
import { theme, colors } from '../../Style/Colors'



class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar main-page-navbar" style={{ backgroundColor: theme === "dark" ? colors.navbar.dark : colors.navbar.light }}>

        <Button name = "Уроци" class = "important" link = "/lessons"/>

        <Button id="unis" name="Университети" link="/universities" class="important" />

        <SearchField height="50%" search={(request)=>{}} class="important" />

        <Button name="Вход" class="important" link="/Login" />
      </div>
    );
  }
}

export default Navbar;
