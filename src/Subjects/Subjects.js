import React, { StrictMode } from 'react'
// import { Route, BrowserRouter as Router } from "react-router-dom"

import Header from './Header'
import Navbar from './Navbar'
import Content from './Content'
import {Footer} from '../Components'

// if (window.location.pathname.match(/(\\|\/)subjects(\\|\/)(.+(\\|\/)$|[^\/\\]+)/).length) {
//     console.log(window.location.pathname.match(/(\\|\/)subjects(\\|\/)(.+(\\|\/)$|[^\/\\]+)/));
//     import('Header.css');
// }

function Subjects() {
    return (
        <StrictMode>
            <Header />
            <Navbar />
            <Content />
            <Footer />
        </StrictMode>
    );
}

export default Subjects;