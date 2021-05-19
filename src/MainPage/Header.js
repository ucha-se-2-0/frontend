import React from "react"
import {theme, changeTheme, colors} from '../Colors'

function Header() {
    return (
        <div className="header" style = {{backgroundColor: theme === "dark" ? colors.header.dark : colors.header.light}}>
            <img src = {theme === "dark" ? "Images/LogoDark.jpg" : "Images/LogoLight.jpg"} id = "logo"></img>
            <img className = "change-theme" id = "dark-theme" style = {{display: theme === "dark" ? "none" : "block"}} onClick={changeTheme}></img>
            <img className = "change-theme" id = "light-theme" style = {{display: theme === "light" ? "none" : "block"}}  onClick={changeTheme}></img>
            
            {/* <img src="Images/logoWithoutOrbits.png" id="logo" alt="JULEMY" />

            <img src="Images/orbits1.png" id="logoOrbits" alt="JULEMY" style={{ position: "absolute", left: "31.5%", top: "11.5%", zIndex: "-1" }} />

            <div className="electrons">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
        </div>

    );
}

export default Header;