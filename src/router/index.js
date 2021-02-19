import React from "react"
import RouterList from "./routerConst"
import {BrowserRouter as Router,Switch} from "react-router-dom"
import ApplicationRoute from "../components/ApplicationRoute"

const Routers=()=>{
    <Router>
        <Switch>
            {RouterList.map((routerItem,index)=>{
                return (

                )
            })}
        </Switch>
    </Router>
}
export default Routers;