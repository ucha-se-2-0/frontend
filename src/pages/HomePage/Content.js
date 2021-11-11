import { Link } from '../../Components'
import React from "react"

function Content() {
    return (
        <div className="content">
            <Link hoverable bold link = "/universities" content = "Университети" secondary/>
            <Link hoverable bold link = "/lessons" content = "Уроци" primary/>
        </div>
    );
}

export default Content;