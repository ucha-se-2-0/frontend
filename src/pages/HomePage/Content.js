import { Button, Title, Video } from '../../Components'
import React from "react"

function Content() {
    return (
        <div className="content">
            <Button bold secondary name = "Университети"/>
            <Button bold primary name = "Уроци"/>
        </div>
    );
}

export default Content;