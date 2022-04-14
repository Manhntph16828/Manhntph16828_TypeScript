import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'

type Props = {}

const Header = (props: Props) => {
  return (
    // <nav classNameNameNameName="navbar navbar-expand-lg navbar-light bg-light">
    //         <div classNameNameNameName="container-fluid">
    //             <a classNameNameNameName="navbar-brand" href="#">Navbar</a>
    //             <button classNameNameNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span classNameNameNameName="navbar-toggler-icon" />
    //             </button>
    //             <div classNameNameNameName="collapse navbar-collapse" id="navbarSupportedContent">
            //     </div>
            // </div>
            // </nav>
  // header

  		<div>
			  <section id="top">
		<div className="container">
			<div className="row">
				<div className="col-md-7">
					<p className="contact-action"><i className="fa fa-phone-square"></i>IN CASE OF ANY QUESTIONS, CALL THIS NUMBER: <strong>+565 975 658</strong></p>
				</div>
				<div className="col-md-3 clearfix">
					<ul className="login-cart">
						<li>
							<NavLink data-toggle="modal" data-target="#myModal" to="/signin">
							<i className="fa fa-user"></i>
								Login
							</NavLink>
						</li>
						<li>
							<div className="cart dropdown">
						  		<NavLink data-toggle="dropdown" to="#"><i className="fa fa-shopping-cart"></i>Cart(1)</NavLink>
					  			<div className="dropdown-menu dropup">
					  				<span className="caret"></span>
						  			<ul className="media-list">
								  		<li className="media">
										    <img className="pull-left" src="images/product-item.jpg" alt=""/>
										    <div className="media-body">
										      	<h6>Italian Sauce
								    				<span>$250</span>
								    			</h6>
								    		</div>
								  		</li>
									</ul>
									<button className="btn btn-primary btn-sm">Checkout</button>
							    </div>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-md-2">
					<Search></Search>
				</div>
			</div> 
		</div>	

	
		<div className="modal fade" id="myModal"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div className="modal-dialog">
		    	<div className="modal-content">
		    		<div className="modal-header">
		        		<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		        		<h4 className="modal-title" id="myModalLabel">Introduce Yourself</h4>
		      		</div>
			      	<div className="modal-body clearfix">

					
			      	</div>
			      	<div className="modal-footer">
			        	<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			      	</div>
		    	</div>
		  	</div>
		</div>	
	</section>  
	<header>
		<div className="container">
			<div className="row ">
				<div className="col-md-12 ">
					<NavLink to="#">
						<img className='text-center' src="images/logo.png" alt="logo" />
					</NavLink>
				</div>	
			</div>
		</div>	
	</header> 
		  </div>
  )
}

export default Header