import React from 'react'
import {Button} from '../Components'

switch(window.location.pathname)
{
  case "/universities": import('./Navbar.css'); break;
}

class Navbar extends React.Component
{
    render()
    {
        return(
            <div className = "navbar">
                <Button name = "Вход"/>
                
                <a href = "/">
                    <img src = "Images/logo.png" alt = "HOME" className = "home"></img>
                </a>
            </div>
        );
    }
}

export default Navbar;