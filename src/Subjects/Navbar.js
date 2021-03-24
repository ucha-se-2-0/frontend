import React from 'react'
import { Button } from '../Components'

function Navbar() {
    return (
        <div className="navbar">
            <Button name="Вход" />

            <a href="/">
                <img src="/Images/logo.png" alt="HOME" className="home"></img>
            </a>
        </div>
    );
}

export default Navbar;