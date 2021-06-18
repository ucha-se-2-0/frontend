import React from 'react'
import {Footer, DefaultNavbar as Navbar, Header} from '../../Components'
import { GetLesson } from '../../Assets';

import {Content} from './Content'

import "./Content.css"

function Test()
{
    return(
        <>
            <Navbar/>
            <Header content = {"Тест по тема \"" + GetLesson(window.location.pathname).title + '"'}/>
            <Content />
            <Footer/>
        </>
    );
}

export default Test;