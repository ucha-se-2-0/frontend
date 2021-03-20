import React from "react"
import Button from "../Components"
import "./Content.css"

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="about-header">За Julemy</div>
                <video>
                    <source src="AboutUs.format" type="video/format"></source>
                </video>
                <Button name = "button" width = "100px" height = "30px" link = "#"/>
            </div>
        );
    }
}

export default Content;