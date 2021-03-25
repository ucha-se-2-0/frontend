import React    from "react"
import Content  from './Content'
import Header   from './Header'
import {DefaultNavbar as Navbar, Footer}   from '../Components'

if(window.location.pathname == "/universities")
{
    import('./Navbar.css');
    import('./Content.css');
}

function Universities() {
    return (
        <React.StrictMode>
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </React.StrictMode>
    );
}

export default Universities;