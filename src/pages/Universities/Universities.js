import React from "react"
import Content from './Content'
import { DefaultNavbar as Navbar, Footer, Header } from '../../Components'
import { GetUniByUrl } from "../../Assets"

if (window.location.pathname === "/universities") {
    import('./Navbar.css');
    import('./Content.css');
}

function Universities() {
    let uni = GetUniByUrl(window.location.pathname)

    let headerContent = <div>Julemy ще Ви помогне да изберете най-подходящ университет (или нещо такова)</div>
    if (uni) {
        headerContent = <a
        style = {{color: "white"}}
            href = {uni.data.link}
            data-toggle="tooltip"
            data-placement="bottom"
            title="Посетете официалния сайт"> {uni.name} </a>
    }

    return (
        <React.StrictMode>
            <Header content={headerContent} />
            <Navbar />
            <Content />
            <Footer />
        </React.StrictMode>
    );
}

export default Universities;