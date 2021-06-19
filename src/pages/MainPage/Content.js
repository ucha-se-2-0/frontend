import { Button, Title, Video } from '../../Components'
import { theme, colors } from '../../Style/Colors'
import React from "react"

function Content() {
    return (
        <div className="content" style = {{backgroundColor: theme === "dark" ? colors.content.dark : colors.content.light}}>
            <Title name = "За Julemy"/>

            <Video src = "/julemy.mp4"/>

            <Title name = "Предмети"/>

            <div className="subjects">
                <Button name="Анатомия и физиология" link="/subjects/anatomy_and_physiology" />
                <Button name="Клетка" link="/subjects/viruses" />
                <Button name="Вируси" link="/subjects/viruses" />
                <Button name="Генетика" link="/subjects/genetics" />
                <Button name="Екология" link="/subjects/ecology" />
                <Button name="Химия" link="/subjects/chemistry" />
            </div>
        </div>
    );
}

export default Content;