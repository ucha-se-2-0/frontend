import { createRef, useEffect, useState } from "react";
import { lessons } from "../../Assets";
import { Button, Subtitle } from '../../Components'

function Section(props) {
    let [expanded, Expanded] = useState(false);
    let [height, SetHeight] = useState(0);
    let [autoHeight, AutoHeight] = useState(false);
    let [shouldCollapse, ShouldCollapse] = useState(false);

    let content = createRef();

    useEffect(() => {
        if(expanded && shouldCollapse)
        {
            ShouldCollapse(false);
            Expanded(false);
        }
    })

    function OnClick(e) {
        
        if(!expanded)
        {
            Expanded(true);
            SetHeight(parseInt(getComputedStyle(content.current).height) + 20 + "px");
        }
        else
        {
            AutoHeight(false);
            ShouldCollapse(true);
        }
    }

    return (
        <div className={"section" + (expanded ? " expanded" : "")}>
            <div className="section-button" onClick={OnClick}>
                <i className={"far fa-circle circle" + (expanded ? " up" : "")}>
                    <div className="arrow">
                        <i className="fa fa-angle-down" />
                    </div>
                </i>

                {props.title}
            </div>

            <div className="content-wrapper" onClick = {()=>{AutoHeight(true)}} style={{ height: (expanded ? (autoHeight ? "auto" : height) : "0px") }}>
                <div ref={content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

function Content() {
    return (
        <div className="content">
            <div className="background">

            </div>
            <div className="lessons-navigation">
                <Subtitle title="Биология" />
                {Links(lessons.biology)}
                <Subtitle title="Химия" />
                {Links(lessons.chemistry)}
            </div>
        </div>
    )


    function Links(subject) {
        function Extract(section) {

            let children = section[Object.keys(section)[1]]

            if (Array.isArray(children)) {
                return {
                    title: section.title, sections: children.map(subsection => {
                        return Extract(subsection);
                    })
                }
            }

            return section;
        }


        let grades = []

        for (let grade in subject) {
            grades.push(Extract(subject[grade]))
        }

        function CreateNode(props) {
            let section = props.section;
            let content;
            if (section.sections === undefined) {
                return null;
            }

            if (section.sections[0].url) {
                content = section.sections.map((lesson, i) => {
                    return <Button key={i} name={lesson.title} link={"/lessons/" + lesson.url} primary/>
                })
            }
            else {
                content = section.sections.map((section, i) => {
                    return <CreateNode key={i} section={section} />;
                })
            }

            return (
                <Section title={section.title}>
                    {content}
                </Section>
            )
        }

        grades = grades.map((grade, i) => <CreateNode key={i} section={grade} />)

        return grades
    }

    // function GenLessonsLinks() {
    //     let res = []

    //     if (section.lessons) {
    //         let links = []
    //         let key = 0

    //         for (let l of section.lessons) {
    //             key++
    //             links.push(<Button key={key} name={l.title} link={"/lessons/" + l.url} />)
    //         }

    //         res.push(<div className="lessons-links" key={0}>{links}</div>)
    //     }
    //     else if (section.subsections) {
    //         let key = 0

    //         for (let ss of section.subsections) {
    //             let links = []

    //             res.push(<Subtitle name={ss.title} key={key} />)

    //             for (let l of ss.lessons) {
    //                 key++
    //                 links.push(<Button key={key} name={l.title} link={"/lessons/" + l.url} />)
    //             }

    //             res.push(<div className="lessons-links" key={key + 1}>{links}</div>)
    //         }
    //     }

    //     return res
    // }
}

export default Content
