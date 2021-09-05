import { Link } from '../../Components'
import React from "react"

function Content() {
    return (
        <div className="content">
            <Link bold link = "/universities" content = "Университети" secondary/>
            <Link bold link = "/lessons" content = "Уроци" primary/>
        </div>
    );
}

export default Content;