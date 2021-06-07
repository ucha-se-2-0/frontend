import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import { Button } from '../../Components'
import { unis, GetUniByUrl } from "../../urls"

function UnisNavContent() 
{
    let links = []
    for(let i in unis)
    {
        links.push(<Button key = {i} width="200px" height="200px" name = {unis[i].name} link = {"/universities/" + unis[i].url} class = "uni"/>)
    }

    return (
        <div className="content">
            {links}
        </div>
    );
}

function UniContent()
{
    let uni = GetUniByUrl(window.location.pathname)

    let spec = []
    for(let s in uni.data.spec)
    {
        spec.push(<li key = {s} style = {{textAlign: "left"}}>{uni.data.spec[s]}</li>)
    }

    return(
        <div className = "content" style = {{textAlign: "center"}}>
            {uni.data.info}
            <span style = {{backgroundColor: "#222222", height: "0.5px", width: "100%", margin: "50px 0"}}></span>

            <div style = {{fontWeight: "bold"}}>В {uni.name} можете да кандидатствате за следните специалности:</div>
            <ul>
                {spec}
            </ul>

            <a href = {uni.data.application} style = {{fontWeight: "bold", width: "100%"}}>Кандидатстване в {uni.name}</a>
            <a href = {uni.data.link} style = {{fontWeight: "bold", width: "100%"}}>Посетете {uni.name}</a>
        </div>
    )
}

function Content()
{
    return(
        <Router>
            <Route path = "/universities" exact component = {UnisNavContent}/>
            <Route path = "/universities/*" exact component = {UniContent} />
        </Router>
    )
}

export default Content;