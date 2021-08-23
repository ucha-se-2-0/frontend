import React, { useEffect } from "react"
import Navbar from './Navbar'
import Content from './Content'
import { Dropdown, DropdownElement, LegalityBar } from '../../Components'



function HomePage() {

    useEffect(() => {
        import("./Navbar.css");
        import("./Header.css");
        import("./Content.css");
        import("./HomePage.css");
    }, [])

    return (
        <div className = "page">
            <img src="Images/Waves-unsLight.png" className="background" />
            <Navbar />
            
            <Content />
            <LegalityBar />
            {/*<Footer /> */}
        </div>
    );
}

export default HomePage;
