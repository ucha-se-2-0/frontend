import { DefaultNavbar, Footer, LegalityBar, Page } from "../../Components";
import Content from './Content'

import "./Content.css";

function LessonsNav() {
    return (
        <Page className = "lessons-page">
            <DefaultNavbar search = {{placeholder: "Потърсете урок", width: "calc(100% - 150px)"}}/>
            <div className = "header">Уроци</div>
            <Content />
            <Footer />
            <LegalityBar />
        </Page>
    )
}

export default LessonsNav