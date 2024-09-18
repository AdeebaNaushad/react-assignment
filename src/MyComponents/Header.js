import React from 'react'
import propTypes from 'prop-types'
export default function Header(props) {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand text-dark" href="#"> 
      {props.title}
    </a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#"> 
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#"> 
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

   
  )
}
Header.defaultProps = {
  title: " TODO App",
 
}
Header.propTypes = {
  title: propTypes.string,
  
}