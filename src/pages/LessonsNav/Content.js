import React from "react";
import { GetSectionByUrl } from "../../assets";
import {Button} from '../../Components'

var section = GetSectionByUrl(window.location.pathname.slice("/lessons/sections/".length))

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                {this.GenLessonsLinks()}
            </div>
        )
    }

    GenLessonsLinks() {
        let links = []

        if (section.lessons) {
            let i = 0
            for (let l of section.lessons) {
                i++
                links.push(<Button key = {i} name = {l.title} link = {l.url} />)
            }
        }

        return links
    }
}

export default Content