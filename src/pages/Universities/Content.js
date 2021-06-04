import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import { Button } from '../../Components'
import { unis } from "../../urls"

function UnisNavContent() 
{
    let links = []
    for(let i in unis)
    {
        links.push(<Button width="200px" height="200px" name = {unis[i][0]} link = {"/universities/" + unis[i][1]} class = "uni"/>)
    }

    return (
        <div className="content">
            {links}
        </div>
    );
}

function UniContent()
{
    return(
        <div className = "content">
            
        </div>
    )
}

function Content()
{
    return(
        <Router>
            <Route path = "/universities" exact component = {UnisNavContent}/>
            <Route path = "/universities/Med_uni_Sofia" exact component = {UniContent} />
        </Router>
    )
}

export default Content;