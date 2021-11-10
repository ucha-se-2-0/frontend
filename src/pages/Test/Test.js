import {Footer, LegalityBar, DefaultNavbar, Page} from '../../Components'
import { GetLesson } from '../../Assets';

import {Content} from './Content' 

import "./Content.css";

function Test()
{    
    return(
        <Page className = "test-page">
            <DefaultNavbar />
            <div className = "header">{"Тест по тема \"" + GetLesson(window.location.pathname).title + '"'}</div>
            <Content />
            <Footer/>
            <LegalityBar />
        </Page>
    );
}

export default Test;