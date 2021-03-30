import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Content from './Content'
import { Footer } from '../Components'
import { DefaultNavbar as Navbar, Header, SearchField } from '../Components'

if (window.location.pathname.match("/topics/")) {
    import('./Content.css');
    import('./Navbar.css');
}

function Subjects() {
    return (
        <>
            <Router>
                <Route path="/topics/anatomy_and_physiology" exact component={() => {
                    sessionStorage.setItem("topic", JSON.stringify(["Анатомия и физиология", "anatomy_and_physiology"]));
                    return <Header content="Анатомия и физиология" />
                }} />
                <Route path="/topics/cytology" exact component={() => {
                    sessionStorage.setItem("topic", "Клетка");
                    return <Header content="Клетка" />
                }} />
                <Route path="/topics/viruses" exact component={() => {
                    sessionStorage.setItem("topic", "Вируси");
                    return <Header content="Вируси" />
                }} />
                <Route path="/topics/genetics" exact component={() => {
                    sessionStorage.setItem("topic", "Генетика");
                    return <Header content="Генетика" />
                }} />
                <Route path="/topics/ecology" exact component={() => {
                    sessionStorage.setItem("topic", "Екология");
                    return <Header content="Екология" />
                }} />
                <Route path="/topics/chemistry" exact component={() => {
                    sessionStorage.setItem("topic", "Биохимия");
                    return <Header content="Биохимия" />
                }} />
            </Router>

            <Navbar content = { <SearchField search = {()=>{}} class = "important" />}/>
            <Content />
            <Footer />
        </>
    );
}

export default Subjects;