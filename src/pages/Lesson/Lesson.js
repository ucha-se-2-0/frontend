import React from 'react'

import { Header, Footer, Navbar as Navbar, Button } from '../../Components'
import Content from './Content'
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
}

export default Lesson;