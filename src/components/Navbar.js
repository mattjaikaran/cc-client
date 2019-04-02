import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={'/'} className="navbar-brand">CC</Link>
      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link to={'/dashboard'} className="nav-link">Dashboard</Link>
          </li> */}
          <li className="nav-item">
            <Link to={'/invoice'} className="nav-link">Invoices</Link>
          </li>
          <li className="nav-item">
            <Link to={'/invoice/new'} className="nav-link">New Invoice</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
