import React from "react"
import Content from './Content'
import { Navbar as Navbar, Footer, Header } from '../../Components'
import { GetUni } from "../../Assets"

import "./Content.css"

function Universities() {
    let uni = GetUni(window.location.pathname)

    let headerContent = <div>Julemy ще Ви помогне да изберете най-подходящ университет (или нещо такова)</div>
    if (uni) {
        headerContent = <a
        style = {{color: "white"}}
            href = {uni.link}
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