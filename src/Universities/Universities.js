import React    from "react"
import Content  from './Content'
import {DefaultNavbar as Navbar, Footer, Header}   from '../Components'

if(window.location.pathname === "/universities")
{
    import('./Navbar.css');
    import('./Content.css');
}

function Universities() {
    return (
        <React.StrictMode>
            <Header content = "Julemy ще Ви помогне да изберете най-подходящ университет (или нещо такова)"/>
            <Navbar />
            <Content />
            <Footer />
        </React.StrictMode>
    );
}

export default Universities;