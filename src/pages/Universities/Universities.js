import React    from "react"
import Content  from './Content'
import {DefaultNavbar as Navbar, Footer, Header}   from '../../Components'
import {GetUniName} from "../../urls"

if(window.location.pathname === "/universities")
{
    import('./Navbar.css');
    import('./Content.css');
}

function Universities() {
    let headerText = GetUniName(window.location.pathname.slice("/universities/".length, window.location.pathname.length))
    if(!headerText)
        headerText = "Julemy ще Ви помогне да изберете най-подходящ университет (или нещо такова)"
    
    return (
        <React.StrictMode>
            <Header content = {headerText}/>
            <Navbar />
            <Content />
            <Footer />
        </React.StrictMode>
    );
}

export default Universities;