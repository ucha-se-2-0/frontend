import React from "react"
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src="Images/logoWithoutOrbits.png" id="logo" alt="JULEMY" />

                <img src="Images/orbits1.png" id="logoOrbits" alt="JULEMY" style = {{position: "absolute", left: "31.5%", top: "11.5%", zIndex: "-1"}}/>

                <div className="electrons">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        );
    }
}

export default Header;