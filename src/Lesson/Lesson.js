import React from 'react'

import Header from'./Header'
import {Footer, DefaultNavbar as Navbar, Button} from '../Components'

function Lesson()
{
    return(
        <>
            <Header />
            <Navbar content = {<Button name = "Тест" link = {window.location.pathname.replace("lessons", "tests")} />} />
            <Footer />
        </>
    );
}

export default Lesson;