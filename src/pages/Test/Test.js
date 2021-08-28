import React, { useEffect } from 'react'
import {Footer, Header} from '../../Components'
import { GetLesson } from '../../Assets';

import {Content} from './Content' 

function Test()
{
    useEffect(()=>{
        import("./Content.css")
    }, [])
    
    return(
        <>
            <Header content = {"Тест по тема \"" + GetLesson(window.location.pathname).title + '"'}/>
            <Content />
            <Footer/>
        </>
    );
}

export default Test;