import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
       	<div className="container">
			<div className="row">
				<div className="col-md-4">
					<div className="block clearfix">
						<a href="#">
							<img src="images/footer-logo.png" alt=""/>
						</a>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
						</p>
						<h4 className="connect-heading">CONNECT WITH US</h4>
						<ul className="social-icon">
							<li>
								<a className="facebook-icon" href="#">
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a className="plus-icon" href="#">
									<i className="fa fa-google-plus"></i>
								</a>
							</li>
							<li>
								<a className="twitter-icon" href="#">
									<i className="fa fa-twitter"></i>
								</a>
							</li>
							<li>
								<a className="pinterest-icon" href="#">
									<i className="fa fa-pinterest"></i>
								</a>
							</li>
							<li>
								<a className="linkedin-icon" href="#">
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
						</ul>	
					</div>	
				</div> 
				<div className="col-md-4">
					<div className="block">
						<h4>GET IN TOUCH</h4>
						<p ><i className="fa  fa-map-marker"></i> <span>Food Code d.o.o.,</span>1000 Ljubljana Celovska cesta 135, Slovenia</p>
						<p> <i className="fa  fa-phone"></i> <span>Phone:</span> (+386) 40 123 456 </p>

						<p> <i className="fa  fa-mobile"></i> <span>Mobile:</span> (+386) 40 654 123 651</p>
 
						<p className="mail"><i className="fa  fa-envelope"></i>Eamil: <span>info@sitename.com</span></p>
					</div>	
				</div> 
				<div className="col-md-4">
					<div className="block">
						<h4>UPCOMING ITEMS</h4>
						<div className="media">
						  	<a className="pull-left" href="#">
						    	<img className="media-object" src="images/product-item.jpg" alt="..."/>
						  	</a>
						  	<a className="pull-left" href="#">
						    	<img className="media-object" src="images/product-item.jpg" alt="..."/>
						  	</a>
						  	<a className="pull-left" href="#">
						    	<img className="media-object" src="images/product-item.jpg" alt="..."/>
						  	</a>
						  	<a className="pull-left" href="#">
						    	<img className="media-object" src="images/product-item.jpg" alt="..."/>
						  	</a>
						  	<a className="pull-left" href="#">
						    	<img className="media-object" src="images/product-item.jpg" alt="..."/>
						  	</a>
						  	<a className="pull-left" href="#">
						    	<img className="media-object" src="images/product-item.jpg" alt="..."/>
						  	</a>
						</div>	
					</div>	
				</div> 
			</div> 
		</div> 
		


	

		<div className="footer-bottom">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="cash-out pull-left">
							<li>
								<a href="#">
									<img src="images/American-Express.png" alt=""/>	
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/PayPal.png" alt=""/>	
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/Maestro.png" alt=""/>	
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/Visa.png" alt=""/>	
								</a>
							</li>
							<li>
								<a href="#">
									<img src="images/Visa-Electron.png" alt=""/>	
								</a>
							</li>
						</ul>
						<p className="copyright-text pull-right">Food Code @2013 Designed by <a href="http://www.themexpert.com">Themexpert</a> All Rights Reserved</p>
					</div>	
				</div>
			</div>	
		</div>
    </div>
  )
}

export default Footer;