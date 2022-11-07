import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <nav> 
      <h1>React Router Dom Starter Template</h1>
      <ul>
        <NavLink className={({isActive}) =>(isActive ? "link nav-link-active": "link")} to="/" end>Page One</NavLink>
        <NavLink className={({isActive}) =>(isActive ? "link nav-link-active": "link")} to="pagetwo">Page Two</NavLink>
        <NavLink className={({isActive}) =>(isActive ? "link nav-link-active": "link")} to="pagethree">Page Three</NavLink>
      </ul>
    </nav>
  )
}

export default NavBar