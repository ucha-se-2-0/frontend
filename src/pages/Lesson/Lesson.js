import React from 'react'

import { Header, Footer, Navbar as Navbar, Button } from '../../Components'
import Content from './Content'
import { theme } from '../../Style/Colors'
import { GetLesson } from '../../Assets';

import "./Content.css"

let lesson = GetLesson(window.location.pathname)

class Lesson extends React.Component {
    render() {
        return (
            <>
                <Header content = {lesson.title}/>
                <Navbar content={lesson.test ? <Button class="important" name="Тест" link={window.location.pathname.replace("lessons", "tests")} /> : ""} />
                <Content />
                <Footer />
            </>
        );
    }

    componentDidMount()
    {
        if(theme === "dark")
        {
            document.getElementsByClassName("header")[0].style.boxShadow = "none";
        }
        else
        {
            document.getElementsByClassName("header")[0].style.boxShadow = "0px 0px 50px 10px rgb(20, 20, 55)";
        }
    }
}

export default Lesson;