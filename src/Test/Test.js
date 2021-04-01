import React from 'react'
import {Footer, DefaultNavbar as Navbar, Header} from '../Components'
import { GetTitle } from '../LessonsRelUrl';

import {Content} from './Content'

if(window.location.pathname.match("/tests/"))
{
    import('./Content.css');
}

function Test()
{
    return(
        <>
            <Navbar/>
            <Header content = {"Тест по тема \"" + GetTitle(window.location.pathname) + '"'}/>
            <Content />
            <Footer/>
        </>
    );
}

export default Test;