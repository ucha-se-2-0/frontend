import React, { useEffect, useState } from "react"
import Navbar from './Navbar'
import Content from './Content'
import { Page, Img, LegalityBar, Window } from '../../Components'


import "./Navbar.css";
import "./Content.css";
import "./HomePage.css";
import { GetCookie, SetCookie } from "../../Utilities";

function HomePage() {
    let [shouldAnimate, ShouldAnimate] = useState(!GetCookie("notFirstSiteVisit"));

    //document.cookie = "agreedCookies=;";
    //console.log(document.cookie);

    useEffect(() => {
        SetCookie("notFirstSiteVisit", true, 24 * 30)
    }, [])

    return (
        <Page className={"home-page" + (shouldAnimate ? "" : " no-animation")}>
            <div className="logo" onAnimationEnd={e => { shouldAnimate && ShouldAnimate(false) }}>
                <img alt="logo" src="Images/GradientLogo.png" className="dark" />
                <img alt="logo" src="Images/GradientLogoLight.png" className="light" />
            </div>

            <Img alt="background" src="Images/Waves-unsLight.png" className="background" />
            <Navbar />

            <Content />
            <LegalityBar />

            
        </Page>
    );
}

export default HomePage;
