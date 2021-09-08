import React from "react"
import { unis } from "../../Assets"

function Content() {
    let unis_el = unis.map((uni, i) => {
        return (
            <div id={i + 1} key={i} className="uni">
                <div className="title">
                    {uni.name}
                </div>

                <div className="uni-general">
                    <img alt="university logo" src={uni.img} />
                    <div className="description">
                        {uni.description}
                    </div>
                </div>
                <div className="separator" />
                <ul className="spec">
                    В {uni.name} можете да кандидатствате за следните специалности:
                    {uni.spec.map((spec, i) => {
                        return <li key={i}>{spec}</li>
                    })}
                </ul>

                <section className="links">
                    <a href={uni.application} style={{ fontWeight: "bold", width: "100%" }}>Кандидатстване в {uni.name}</a>
                    <a href={uni.link} style={{ fontWeight: "bold", width: "100%" }}>Посетете официалния сайт на {uni.name}</a>
                </section>
            </div>
        )
    });
    return (
        <div className="content">
            {unis_el}
        </div>
    )
}

export default Content;