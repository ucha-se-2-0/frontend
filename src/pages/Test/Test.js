import React, { useEffect } from 'react'
import {Footer, Navbar as Navbar, Header} from '../../Components'
import { GetLesson } from '../../Assets';

import {Content} from './Content' 

function Test()
{
    useEffect(()=>{
        import("./Content.css")
    }, [])
    
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