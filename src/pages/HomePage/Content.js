import { Button } from '../../Components'
import React from "react"

function Content() {
    return (
        <div className="content">
            <Button bold link = "/universities" name = "Университети" secondary/>
            <Button bold link = "/lessons" name = "Уроци" primary/>
        </div>
    );
}

export default Content;