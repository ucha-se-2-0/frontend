import React from "react"
import {theme, changeTheme, colors} from '../Colors'

function Header() {
    return (
        <div className="header" style = {{backgroundColor: theme === "dark" ? colors.header.dark : colors.header.light}}>
            <div style = {{padding: "13vh"}}>тук ще е логото</div>
            <img style = {{display: "none"}} alt = "тук ще е логото" src = {theme === "dark" ? "Images/LogoDark.jpg" : "Images/LogoLight.jpg"} id = "logo"></img>
            {/* <img alt = "dark" className = "change-theme" id = "dark-theme" style = {{display: theme === "dark" ? "none" : "block"}} onClick={changeTheme}></img>
            <img alt = "light" className = "change-theme" id = "light-theme" style = {{display: theme === "light" ? "none" : "block"}}  onClick={changeTheme}></img> */}
        </div>

    );
}

export default Header;