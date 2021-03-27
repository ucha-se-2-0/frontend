import React from 'react'
import {Footer, DefaultNavbar as Navbar, Header} from '../Components'
import { GetHeader } from '../LessonsRelUrl';

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
            <Header content = {"Тест по тема \"" + GetHeader(window.location.pathname) + '"'}/>
            <Content />
            <Footer/>
        </>
    );
}

export default Test;