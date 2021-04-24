import { Button, Title } from '../Components'
import {theme, colors } from '../Colors'
import React from "react"

function Content() {
    return (
        <div className="content" style = {{backgroundColor: theme === "dark" ? colors.content.dark : colors.content.light}}>
            <Title name = "За Julemy"/>
            <video>
                <source src="AboutUs.{$format}" type="video/{$format}"></source>
            </video>

            <Title name = "Предмети"/>

            <div className="subjects">
                <Button name="Анатомия и физиология" link="/topics/anatomy_and_physiology" />
                <Button name="Клетка" link="/topics/viruses" />
                <Button name="Вируси" link="/topics/viruses" />
                <Button name="Генетика" link="/topics/genetics" />
                <Button name="Екология" link="/topics/ecology" />
                <Button name="Химия" link="/topics/chemistry" />
            </div>
        </div>
    );
}

export default Content;