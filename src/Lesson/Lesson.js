import React from 'react'

import Header from'./Header'
import {Footer, DefaultNavbar as Navbar, Button} from '../Components'
import Content from './Content'

if(window.location.pathname.indexOf("/lessons/") !== -1)
{
    import('./Content.css');
}

function Lesson()
{
    return(
        <>
            <Header />
            <Navbar content = {<Button class = "important" name = "Тест" link = {window.location.pathname.replace("lessons", "tests")} />} />
            <Content />
            <Footer />
        </>
    );
}

export default Lesson;