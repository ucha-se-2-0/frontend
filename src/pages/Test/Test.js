import React, { useEffect } from 'react'
import {Footer, LegalityBar, DefaultNavbar, DefaultMenu} from '../../Components'
import { GetLesson } from '../../Assets';

import {Content} from './Content' 

function Test()
{
    useEffect(()=>{
        import("./Content.css");
        import("./Test.css");
    }, [])
    
    return(
        <div className = "page test-page">
            <DefaultNavbar />
            <div className = "header">{"Тест по тема \"" + GetLesson(window.location.pathname).title + '"'}</div>
            <Content />
            <Footer/>
            <LegalityBar />
        </div>
    );
}

export default Test;