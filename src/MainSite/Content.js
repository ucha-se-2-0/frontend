import React from "react"
import "./Content.css"

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="about-header">За Julemy</div>
                <video>
                    <source src="AboutUs.format" type="video/format"></source>
                </video>
            </div>
        );
    }
}

export default Content;