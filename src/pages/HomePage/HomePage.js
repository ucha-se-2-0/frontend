import React, { useState } from "react"
import Navbar from './Navbar'
import Content from './Content'
import { Img, LegalityBar, Window } from '../../Components'


import "./Navbar.css";
import "./Content.css";
import "./HomePage.css";
import { GetCookie, SetCookie } from "../../Utilities";

function HomePage() {
    let [shouldAnimate, ShouldAnimate] = useState(!GetCookie("notFirstSiteVisit"));
    let [cookiesWindow, ShowCookiesWindow] = useState(true);

    function CloseWindow()
    {
        SetCookie("agreedCookies", true, 24 * 365);
        ShowCookiesWindow(false);
    }

    return (
        <div className={"page home-page" + (shouldAnimate ? "" : " no-animation")}>
            <div className="logo" onAnimationEnd={e => { shouldAnimate && ShouldAnimate(false) }}>
                <img alt="logo" src="Images/GradientLogo.png" className="dark" />
                <img alt="logo" src="Images/GradientLogoLight.png" className="light" />
            </div>

            <Img alt="background" src="Images/Waves-unsLight.png" className="background" />
            <Navbar />

            <Content />
            <LegalityBar />

            {cookiesWindow &&
                <Window noCloseIcon>
                    <h1>Ние ползваме cookies(бисквитки)</h1>
                    <button onClick = {CloseWindow}>Приемам</button>
                </Window>}
        </div>
    );
}

export default HomePage;
