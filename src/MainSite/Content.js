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
                <Topic name = "Topic1" />
                <Topic name = "Topic2" />
                <Topic name = "Topic3" />
                <Topic name = "Topic4" />
                <Topic name = "Topic5" />
                <Topic name = "Topic6" />
            </div>
        );
    }
}

export default Content;