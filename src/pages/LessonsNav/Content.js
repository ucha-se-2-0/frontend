import React from "react";
import { GetSection } from "../../Assets";
import { Button, Subtitle } from '../../Components'

var section = GetSection(window.location.pathname.slice("/lessons/sections/".length))

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                {this.GenLessonsLinks()}
            </div>
        )
    }

    GenLessonsLinks() {
        let res = []

        if (section.lessons) {
            let links = []
            let key = 0

            for (let l of section.lessons) {
                key++
                links.push(<Button key={key} name={l.title} link={"/lessons/" + l.url} />)
            }

            res.push(<div className = "lessons-links" key = {0}>{links}</div>)
        }
        else if (section.subsections) {
            let key = 0

            for (let ss of section.subsections) {
                let links = []

                res.push(<Subtitle name = {ss.title} key = {key}/>)

                for (let l of ss.lessons) {
                    key++
                    links.push(<Button key={key} name={l.title} link={"/lessons/" + l.url} />)
                }

                res.push(<div className = "lessons-links" key = {key + 1}>{links}</div>)
            }
        }

        return res
    }
}

export default Content
