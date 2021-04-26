import React from 'react'
import {Footer, DefaultNavbar as Navbar, Header} from '../Components'
import { GetSubject } from '../urls';

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
            <Header content = {"Тест по тема \"" + GetSubject(window.location.pathname)[0] + '"'}/>
            <Content />
            <Footer/>
        </>
    );
}

export default Test;