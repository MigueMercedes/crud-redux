import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
			<div className="container">
				<Link 
          to={"/"} 
          className='text-light'
        >
          <h1>CRUD - React, Redux, REST API & Axios</h1>
        </Link>
			</div>

      <Link 
        to={"/products/new"}
        className='btn btn-danger nuevo-post d-block d-md-inline-block'
      >
        New Product &#43;
      </Link>
		</nav>
	)
}

export default Header
