import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import Content from './Content'
import { Footer } from '../Components'
import { DefaultNavbar as Navbar, Header} from '../Components'

if (window.location.pathname.match("/topics/")) {
    import('./Content.css');
}

function Subjects() {
    return (
        <>
            <Router>
                <Route path="/topics/anatomy_and_physiology" exact component={() => <Header content="Анатомия и физиология" />} />
                <Route path="/topics/cytology" exact component={() => <Header content="Клетка" />} />
                <Route path="/topics/viruses" exact component={() => <Header content="Вируси" />} />
                <Route path="/topics/genetics" exact component={() => <Header content="Генетика" />} />
                <Route path="/topics/ecology" exact component={() => <Header content="Екология" />} />
                <Route path="/topics/chemistry" exact component={() => <Header content="Биохимия" />} />
            </Router>

            <Navbar />
            <Content />
            <Footer />
        </>
    );
}

export default Subjects;