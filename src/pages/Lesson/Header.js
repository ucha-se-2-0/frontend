import React from 'react'
import { colors, theme } from '../../Colors';
import { GetLesson } from '../../urls';


class Header extends React.Component {
    render() {
        return (
            <div className="header" style = {theme === "dark" ? 
            {backgroundColor: colors.header.dark, boxShadow: "none"} : 
            {backgroundColor: colors.header.light, boxShadow: "0px 0px 50px 10px rgb(20, 20, 55)"}}>
                {GetLesson(window.location.pathname)}
            </div>
        );
    }
}

export default Header;