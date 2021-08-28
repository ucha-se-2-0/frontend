import { Switch, Route } from "react-router"

export default (
    <Switch>
        <Route path="/" exact/>
        <Route path="/universities"/>
        {/* <Route path="/lessons/sections/*" exact/>
              <Route path="/lessons/sections" exact /> */}
        <Route path="/lessons" exact />
        {/* <Route path="/lessons/*" exact /> */}
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/tests/*" />
    </Switch>
)