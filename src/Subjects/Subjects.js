import React, { StrictMode } from 'react'

import Header from './Header'
import Content from './Content'
import {Footer} from '../Components'
import {DefaultNavbar as Navbar} from '../Components'

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