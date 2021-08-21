import React, { useEffect } from "react"
import Navbar from './Navbar'
import Content from './Content'
import { Dropdown, DropdownElement } from '../../Components'



function HomePage() {

    useEffect(() => {
        import("./Navbar.css");
        import("./Header.css");
        import("./Content.css");
        import("./HomePage.css");
    }, [])

    return (
        <>
            <img src="Images/vawes-unsLight.png" className="background" />
            <Navbar />

            {/*<Content />
            <Footer /> */}
        </>
    );
}

export default HomePage;
