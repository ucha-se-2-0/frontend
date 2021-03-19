import React from "react"
import "./Content.css"

class Topic extends React.Component
{
    render()
    {
        return(
        <div className = "subject">
            <a href = {this.props.link}> {this.props.name} </a>
            <img src = {this.props.image} alt = {this.props.name}></img>
        </div>
        );
    }
}

class Content extends React.Component
{
    render()
    {
        return(
            <div className = "content">
                <Topic name = "Ботаника" />
                <Topic name = "Зоология" />
                <Topic name = "Анатомия" image = "Images/Anatomy.png"/>
                <Topic name = "Физиология" />
                <Topic name = "Математика" image = "Images/Pi.gif"/>
                <Topic name = "Химия" image = "Images/Chem.png"/>
                <Topic name = "Още не знам си какво" />
            </div>
        );
    }
}

export default Content;