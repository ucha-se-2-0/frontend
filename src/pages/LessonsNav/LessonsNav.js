import { DefaultNavbar, Footer, LegalityBar } from "../../Components";
import Content from './Content'

import "./Content.css";

function LessonsNav() {
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