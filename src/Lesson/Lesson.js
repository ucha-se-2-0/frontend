import React, { StrictMode } from 'react'

import Header from'./Header'
import {Footer, DefaultNavbar as Navbar} from '../Components'

function Lesson()
{
    return(
        <StrictMode>
            <Header />
            <Navbar />
            <Footer />
        </StrictMode>
    );
}

export default Lesson;