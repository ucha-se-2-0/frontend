import {Footer, LegalityBar, DefaultNavbar} from '../../Components'
import { GetLesson } from '../../Assets';

import {Content} from './Content' 

import "./Content.css";

function Test()
{    
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