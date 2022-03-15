import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useProfile } from '../context/Profile.context'

function PublicRouter({children, ...routeProps}) {
    const profile = useProfile()
    if (profile)
    {
        return <Redirect to="/home"/>
    }
    return (
        <Route {...routeProps}>
        {children}
    </Route>
    )
}
export default PublicRouter
