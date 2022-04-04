import React from 'react'
import { NavLink } from 'react-router-dom'

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
							<NavLink data-toggle="modal" data-target="#myModal" to="#">
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
					<div className="search-box">
						<div className="input-group">
					    	<input placeholder="Search Here" type="text" className="form-control"/>
					      	<span className="input-group-btn">
					        	<button className="btn btn-default" type="button"></button>
					      	</span>
					    </div>
					</div>
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

						{/* <form action="#" method="post" id="create-account_form" className="std">
							<fieldset>
								<h3>Create your account</h3>
								<div className="form_content clearfix">
									<h4>Enter your e-mail address to create an account.</h4>
									<p className="text">
										<label for="email_create">E-mail address</label>
										<span>
											<input placeholder="E-mail address"  type="text" id="email_create" name="email_create" value="" className="account_input">
					                    </span>
									</p>
									<p className="submit">
										<button className="btn btn-primary">Create Your Account</button>
									</p>
								</div>
							</fieldset>
						</form> */}
			      		{/* <form action="" method="post" id="login_form" className="std">
							<fieldset>
								<h3>Already registered?</h3>
								<div className="form_content clearfix">
									<p className="text">
									<label for="email">E-mail address</label>
										<span><input placeholder="E-mail address" type="text" id="email" name="email" value="" className="account_input"></span>
									</p>
									<p className="text">
									<label for="passwd">Password</label>
										<span><input placeholder="Password" type="password" id="passwd" name="passwd" value="" className="account_input"></span>
									</p>
									<p className="lost_password">
										<a href="#popab-password-reset" className="popab-password-link">Forgot your password?</a>
									</p>
									<p className="submit">
										<button className="btn btn-success">Log in</button>
									</p>
								</div>
							</fieldset>
						</form> */}
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
			<div className="row">
				<div className="col-md-12">
					<NavLink to="#">
						<img src="images/logo.png" alt="logo"/>
					</NavLink>
				</div>	
			</div>
		</div>	
	</header> 
		  </div>
  )
}

export default Header