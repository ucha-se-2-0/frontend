import { Button } from '../../Components'
import React from "react"

function Content() {
    return (
        <div className="content">
            <Button bold link = "/universities" content = "Университети" secondary/>
            <Button bold link = "/lessons" content = "Уроци" primary/>
        </div>
    );
}

export default Content;