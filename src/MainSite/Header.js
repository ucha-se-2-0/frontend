import React from "react"
import "./Header.css"

class Header extends React.Component
{
    render()
    {
        return(
        <header >
            <p className = "header">
                Julemy
            </p>
            <p className = "motto">
                Together in meds
            </p>
        </header>
        );
    }
}

export default Header;