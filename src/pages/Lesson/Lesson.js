import React, { useEffect, useState } from 'react'

import { Footer, LegalityBar, DefaultNavbar, Typing } from '../../Components'
import { GetLesson } from '../../Assets';
import Content from './Content'

import "./Content.css"


function Lesson() {
    let [lessonSt, SetLesson] = useState();
    let lesson = lessonSt;

    if (lesson === undefined) {
        lesson = GetLesson(window.location.pathname)
        SetLesson(lesson);
    }

    return (
        <div className="page lesson-page">
            <DefaultNavbar />
            <header className="header">
                <Typing text={lesson.title} speed={5}>{lesson.title}</Typing>
            </header>
            <Content lesson={lesson} />
            <Footer />
            <LegalityBar />
        </div>
    );
}

export default Lesson;