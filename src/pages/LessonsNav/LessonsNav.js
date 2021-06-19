import { GetSection } from "../../Assets";
import { Navbar as Navbar, Header, Footer } from "../../Components";
import Content from './Content'

var section = GetSection(window.location.pathname.slice("/lessons/sections/".length))


function LessonsNav() {
    return (
        <>
            <Navbar />
            <Header content = {section.sectionName} />
            <Content />
            <Footer />
        </>
    )
}

export default LessonsNav