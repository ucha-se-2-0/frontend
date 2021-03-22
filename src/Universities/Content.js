import React from "react"
import {Button} from '../Components'

switch(window.location.pathname)
{
  case "/universities": import('./Content.css'); break;
}

class Content extends React.Component
{
    render()
    {
        return(
            <div className = "content">
                <Button width = "200px" height = "200px" name = "Uni1" class = "uni"/>
                <Button width = "200px" height = "200px" name = "Uni2" class = "uni"/>
                <Button width = "200px" height = "200px" name = "Uni3" class = "uni"/>
                <Button width = "200px" height = "200px" name = "Uni4" class = "uni"/>
            </div>
        );
    }
}

export default Content;