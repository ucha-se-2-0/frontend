import React from 'react'
import { colors, theme } from '../Colors';
import { GetLesson } from '../urls';


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                {GetLesson(window.location.pathname)}
            </div>
        );
    }
    
    componentDidMount()
    {
        if(theme === "dark")
        {
            document.getElementsByClassName("header")[0].style.boxShadow = "none";
            document.getElementsByClassName("header")[0].style.backgroundColor = colors.dark;
        }
        else
        {
            document.getElementsByClassName("header")[0].style.boxShadow = "0px 0px 50px 10px rgb(20, 20, 55)";
            document.getElementsByClassName("header")[0].style.backgroundColor = colors.light;
        }
    }
}

export default Header;