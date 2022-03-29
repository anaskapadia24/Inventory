import React from 'react'
import { NavLink } from 'react-router-dom'
import '../ERROR/ErrorPage.css'

const Errorpage = () => {
  return (
    <div id= "notfound">
        <div className="notfound">
        <div className="notfound-404">
            <h1>404</h1>
            </div>
            <h2>We are Sorry, page not found!</h2>
            <p >

            </p>
            <NavLink to="/">Back To HomePage</NavLink>
        </div>
    </div>
  )
}

export default Errorpage