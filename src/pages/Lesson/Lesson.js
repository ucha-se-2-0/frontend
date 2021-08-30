import React, { useEffect, useState } from 'react'

import { Footer, LegalityBar, DefaultNavbar } from '../../Components'
import { GetLesson } from '../../Assets';
import Content from './Content'

import "./Content.css"


function Lesson() {
    let [lessonSt, SetLesson] = useState();
    let lesson = lessonSt;

    if(lesson === undefined)
    {
        lesson = GetLesson(window.location.pathname)
        SetLesson(lesson);
    }

    useEffect(() => {
        import('./Lesson.css');
    }, [])

    return (
        <div className="page lesson-page">
            <DefaultNavbar/>
            <div className = "header">{lesson.title}</div>
            <Content lesson = {lesson} />
            <Footer />
            <LegalityBar />
        </div>
    );
}

export default Lesson;