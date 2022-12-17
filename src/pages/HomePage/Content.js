import { Link } from '../../Components'
import React from "react"

function Content() {
    return (
        <div className="content">
            {/* <Link hoverable bold link = "/about" content = "Кои сме ние" secondary/> */}
            <Link hoverable bold link = "/timetable" content = "График" secondary/>
            <Link hoverable bold link = "/lessons" content = "Уроци" primary/>
        </div>
    );
}

export default Content;