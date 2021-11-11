import React, { useEffect, useState } from "react"
import Navbar from './Navbar'
import Content from './Content'
import { Page, Img, LegalityBar } from '../../Components'


import "./Navbar.css";
import "./Content.css";
import "./HomePage.css";

function HomePage() {
    return (
        <Page className="home-page">
            <div className="logo">
                <img alt="logo" src="Images/GradientLogo.png" className="dark" />
                <img alt="logo" src="Images/GradientLogoLight.png" className="light" />
            </div>

            <Img alt="background" src="Images/Waves-unsLight1.png" className="background" />
            <Navbar />

            <Content />
            <LegalityBar />

            
        </Page>
    );
}

export default HomePage;
