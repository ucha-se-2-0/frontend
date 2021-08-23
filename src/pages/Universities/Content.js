import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import { Button } from '../../Components'
import { unis, GetUni } from "../../Assets"

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
    let uni = GetUni(window.location.pathname)

    let spec = []
    for(let s in uni.spec)
    {
        spec.push(<li key = {s} style = {{textAlign: "left"}}>{uni.spec[s]}</li>)
    }

    return(
        <div className = "content" style = {{textAlign: "center", width: "70%", margin: "30px auto"}}>
            {uni.info}
            <span style = {{backgroundColor: "#222222", height: "0.5px", width: "100%", margin: "50px 0"}}></span>

            <div style = {{fontWeight: "bold"}}>В {uni.name} можете да кандидатствате за следните специалности:</div>
            <ul style = {{width: "80%", margin: "20px auto"}}>
                {spec}
            </ul>

            <a href = {uni.application} style = {{fontWeight: "bold", width: "100%"}}>Кандидатстване в {uni.name}</a>
            <a href = {uni.link} style = {{fontWeight: "bold", width: "100%"}}>Посетете официалния сайт на {uni.name}</a>
        </div>
    )
}

function Content()
{
    return(
        <>
            <Route path = "/universities" exact component = {UnisNavContent}/>
            <Route path = "/universities/*" exact component = {UniContent} />
        </>
    )
}

export default Content;