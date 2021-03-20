import React from "react"
import "./Header.css"

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src="Images/logo.png" id="logo" alt="JULEMY">

                </img>
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