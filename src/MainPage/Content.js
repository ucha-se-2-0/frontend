import { Button } from '../Components'
import React from "react"

function Content() {
    return (
        <div className="content">
            <div className="content-title">За Julemy</div>
            <video>
                <source src="AboutUs.{$format}" type="video/{$format}"></source>
            </video>

            <div className="content-title">Предмети</div>

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