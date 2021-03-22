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
            </div>
        );
    }
}

export default Navbar;