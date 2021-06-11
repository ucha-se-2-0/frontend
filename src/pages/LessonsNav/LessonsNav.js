import { GetSectionByUrl } from "../../assets";
import { DefaultNavbar as Navbar, Header } from "../../Components";
import Content from './Content'

var section = GetSectionByUrl(window.location.pathname.slice("/lessons/sections/".length))


function LessonsNav() {
    return (
        <>
            <Navbar />
            <Header content = {section.sectionName} />
            <Content />
        </>
    )
}

export default LessonsNav