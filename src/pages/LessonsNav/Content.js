import { createRef, useEffect, useState } from "react";
import { GetFormattedLessons, lessons } from "../../Assets";
import { Link, Subtitle } from '../../Components'

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
    }, [expanded, shouldCollapse])

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
        let grades = GetFormattedLessons(subject);

        function CreateNode(props) {
            let section = props.section;
            let content;
            if (section.sections === undefined) {
                return null;
            }

            if (section.sections[0].url) {
                content = section.sections.map((lesson, i) => {
                    return <Link key={i} content={lesson.title} link={"/lessons/" + lesson.url} primary/>
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
}

export default Content
