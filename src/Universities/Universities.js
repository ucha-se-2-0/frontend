import React    from "react"
import Content  from './Content'
import Navbar   from './Navbar'
import Header   from './Header'

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
        </React.StrictMode>
    );
}

export default Universities;