import React, { useEffect } from "react"
import Navbar from './Navbar'
import Content from './Content'
import { LegalityBar } from '../../Components'


import "./Navbar.css";
import "./Content.css";
import "./HomePage.css";

function HomePage() {

    useEffect(() => {
    }, [])

    return (
        <div className = "page home-page">
            <img src="Images/Waves-unsLight.png" className="background" />
            <Navbar />
            
            <Content />
            <LegalityBar />
            {/*<Footer /> */}
        </div>
    );
}

export default HomePage;
