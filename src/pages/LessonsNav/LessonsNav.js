import { GetSection } from "../../Assets";
import { Footer } from "../../Components";
import Navbar from "./Navbar";
import Content from './Content'
import { useEffect } from "react";

// var section = GetSection(window.location.pathname.slice("/lessons/sections/".length))


function LessonsNav() {
    useEffect(()=>{
        import("./Navbar.css");
        import("./LessonsNav.css");
        import("./Content.css");
    }, [])

    return (
        <div className = "page lessons-page">
            <Navbar />
            <div className = "header">Уроци</div>
            <Content />
            {/* <Footer /> */}
        </div>
    )
}

export default LessonsNav