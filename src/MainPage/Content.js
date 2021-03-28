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