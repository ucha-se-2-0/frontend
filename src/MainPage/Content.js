import React from "react"
import {Button} from "../Components"

switch(window.location.pathname)
{
  case "/": import('./Content.css'); break;
}

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="content-header">За Julemy</div>
                <video>
                    <source src="AboutUs.format" type="video/format"></source>
                </video>
            </div>
        );
    }
}

export default Content;