import React    from "react"
import Content  from './Content'
import Navbar   from './Navbar'
import Header   from './Header'

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