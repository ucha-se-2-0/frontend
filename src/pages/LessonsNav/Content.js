import { GetFormattedLessons, lessons } from "../../Assets";
import { Link, Title } from '../../Components'
import {Section} from "../../Components"

function Content() {
    return (
        <div className="content">
            <div className="background">

            </div>
            <div className="lessons-navigation">
                <Title title="Биология" />
                {Links(lessons.biology)}
                <Title title="Химия" />
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
