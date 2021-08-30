import { GetSection } from "../../Assets";
import { DefaultNavbar, Footer, LegalityBar } from "../../Components";
import Content from './Content'
import { useEffect } from "react";

// var section = GetSection(window.location.pathname.slice("/lessons/sections/".length))


function LessonsNav() {
    useEffect(()=>{
        import("./LessonsNav.css");
        import("./Content.css");
    }, [])

    return (
        <div className = "page lessons-page">
            <DefaultNavbar search = {{placeholder: "Потърсете урок", width: "calc(100% - 150px)"}}/>
            <div className = "header">Уроци</div>
            <Content />
            <Footer />
            <LegalityBar />
        </div>
    )
}

export default LessonsNav