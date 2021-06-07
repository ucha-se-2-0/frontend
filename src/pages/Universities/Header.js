import { Route, Router } from "react-router";
import {Header} from "../../Components"

function Header()
{
    return(
        <Router>
            <Route path = "/universities/Med_uni_Sofia" exact component = {<Header content = ""/>}/>
        </Router>
    )
}