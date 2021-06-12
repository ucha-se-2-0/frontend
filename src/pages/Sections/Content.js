import { Button, Subtitle, Title } from '../../Components'
import React from 'react'
import { GetLessonUrl, lessons } from '../../Assets'

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Title name="Биология" />
                <Subtitle name="8-ми клас" />
                {this.LinksBio(8)}
                <Subtitle name="9-ти клас" />
                {this.LinksBio(9)}
                <Subtitle name="10-ти клас" />
                {this.LinksBio(10)}
                <Title name="Химия" />
                {this.LinksChem()}
            </div>);
    }

    LinksBio(grade)
    {
        let links = []
        let i = 0
        for(let section of lessons.biology["grade_" + grade])
        {
            i++
            links.push(<Button key = {i} name = {section.sectionName} link = {"/lessons/sections/" + section.url}/>)
        }

        return <div className = "sections-links">{links}</div>
    }

    LinksChem()
    {
        //To do
    }
}

export default Content;