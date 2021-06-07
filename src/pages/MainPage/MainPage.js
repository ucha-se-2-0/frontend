import React    from "react"
import Navbar   from './Navbar'
import Content  from './Content'
import {Footer}   from '../../Components'
import Header   from './Header'

if(window.location.pathname === "/")
{
    import('./Navbar.css');
    import('./Header.css');
    import('./Content.css');
}

function MainPage() {
    return (
        <>
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </>
    );
}

export default MainPage;