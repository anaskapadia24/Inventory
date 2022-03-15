import React from 'react'
import { Redirect } from 'react-router-dom'
import {Route} from "react-router-dom"
import { useProfile } from '../context/Profile.context'

function PrivateRouter({children, ...routeProps}) {
    const profile = useProfile()
    if (!profile)
    {
        return <Redirect to="/signin"/>
    }
    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}
export default PrivateRouter
