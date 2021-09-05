import React, {useState} from "react"
import Navbar from './Navbar'
import Content from './Content'
import { Img, LegalityBar } from '../../Components'


import "./Navbar.css";
import "./Content.css";
import "./HomePage.css";
import { GetCookie } from "../../Utilities";

function HomePage() {
    let [shouldAnimate, ShouldAnimate] = useState(!GetCookie("notFirstSiteVisit"));

    return (
        <div className={"page home-page" + (shouldAnimate ? "" : " no-animation")}>
            <div className="logo" onAnimationEnd = {e => {shouldAnimate && ShouldAnimate(false)}}>
                <img alt="logo" src="Images/GradientLogo.png" className="dark" />
                <img alt="logo" src="Images/GradientLogoLight.png" className="light" />
            </div>

            <Img alt="background" src="Images/Waves-unsLight.png" className="background" />
            <Navbar />

            <Content />
            <LegalityBar />
        </div>
    );
}

export default HomePage;
