import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'

type Props = {}

const Navbar = (props: Props) => {
  return (

  //   <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
  //   <li classNameName="nav-item">
  //       <NavLink classNameName="nav-link active" aria-current="page" to="/">Home</NavLink>
  //   </li>
  //   <li classNameName="nav-item">
  //       <NavLink classNameName="nav-link" to="/product">Product </NavLink>
  //   </li>
  //   <li classNameName="nav-item">
  //       <NavLink classNameName="nav-link" to="/about">About </NavLink>
  //   </li>
  // </ul>

    // 
   <div>

<nav className="navbar navbar-default">
		<div className="container">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		        <span className="sr-only">Toggle navigation</span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		      </button>
		    </div> 

		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      	<ul className="nav navbar-nav nav-main">
		        	<li className="active"><NavLink to="/">HOME</NavLink></li>
					<li><NavLink to="/product">SHOP</NavLink></li>
					<li><NavLink to="#">BLOG</NavLink></li>
					<li><NavLink to="#">ARTICLE</NavLink></li>
		        </ul> 
		    </div>	
		</div>	
	</nav>	
  </div>


  )
}

export default Navbar

