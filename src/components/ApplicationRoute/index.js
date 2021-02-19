import React,{lazy,Suspene, Suspense} from "react"

import {lazy, Route} from "react-router-dom"
import Home from "../../views/Home"

const ApplicationRoute=({component:Component,...rest})=>{
    const lazyComponent=(path)=>{
        return lazy(()=>import(`../../views/${path}`))
    }
    return (
        <Route {...rest} exact render={(props)=>{
            return (
                <div>
                    <Suspense fallback={<div>Yükleniyor</div>}> </Suspense>
                </div>
            )
        }}>

        </Route>
    )
}