import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { list } from '../api/product'
import Banner from '../components/Banner'
import { ProductType } from './types/product'


type HomepageProps = {
	products: ProductType[],
}

const Homepage = (product: HomepageProps) => {
	const [products, setProducts] = useState<ProductType[]>([]);
	useEffect(() => {
		const getProducts = async () => {
			const { data } = await list();
			setProducts(data);
		}
		getProducts();
	}, [])
  return (
    <div>
		<section id="slider-area">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="slider" className="nivoSlider">
							<img src="images/slider.jpg" alt="" />
							<img src="images/slider1.jpg" alt=""/>
							<img src="images/slider2.jpg" alt="" />
						</div>	
					</div>	
				</div>	
			</div>	
		
		</section>

	{/*  */}
		<section id="features">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="block">
							<div className="media">
								<div className="pull-left" >
									<i className="fa fa-ambulance"></i>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Free Shipping</h4>
									<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="block">
							<div className="media">
								<div className="pull-left">
									<i className=" fa fa-foursquare"></i>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Media heading</h4>
									<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="block">
							<div className="media">
								<div className="pull-left">
									<i className=" fa fa-phone"></i>
								</div>
								<div className="media-body">
									<h4 className="media-heading">Call Us</h4>
									<p>Lorem ipsum dolor sit amet, consectetur.</p>
							</div>	
							</div>	
						</div>	
					</div> 
				</div>	
			</div>	
		</section>	
		<section id="catagorie">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="block">
							<div className="block-heading">
								<h2>OUR FOOD CATEGORIES</h2>
							</div>	
							<div className="row">
								<div className="col-sm-6 col-md-4">
									<div className="thumbnail">
										<a className="catagotie-head" href="blog-single.html">
											<img src="images/category-image-1.jpg" alt="..."/>
											<h3>Beef Steak</h3>
										</a>
										<div className="caption">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aut, esse, laborum placeat id illo a expedita aperiam...</p>
											<p>
												<a href="blog-single.html" className="btn btn-default btn-transparent" role="button">
													<span>Check Items</span>
												</a>
											</p>
										</div>	
									</div>	
								</div>	
								<div className="col-sm-6 col-md-4">
									<div className="thumbnail">
										<a className="catagotie-head" href="blog-single.html">
											<img src="images/category-image-2.jpg" alt="..."/>
											<h3>Miscellaneous</h3>
										</a>
										<div className="caption">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aut, esse, laborum placeat id illo a expedita aperiam...</p>
											<p>
												<a href="blog-single.html" className="btn btn-default btn-transparent" role="button">
													<span>Check Items</span>
												</a>
											</p>
										</div>
									</div>	
								</div>	
								<div className="col-sm-6 col-md-4">
									<div className="thumbnail">
										<a className="catagotie-head" href="blog-single.html">
											<img src="images/category-image-3.jpg" alt="..."/>
											<h3>Elegant Apparel</h3>
										</a>
										<div className="caption">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aut, esse, laborum placeat id illo a expedita aperiam...</p>
											<p>
												<a href="blog-single.html" className="btn btn-default btn-transparent" role="button">
													<span>Check Items</span>
												</a>
											</p>
										</div>
									</div>	
								</div>	
							</div>
						</div>	
					</div>	
				</div>
			</div>	
		</section>		
	
		<section id="products">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="products-heading">
							<h2>NEW PRODUCTS</h2>
						</div>
					</div>
				</div>
				
				<div className="row">
				{products.map((item,index)=>{
					<div className="col-md-3">
					<div className="products">
						<a href="single-product.html">
							<img src="images/product-image.jpg" alt=""/>
						</a>
						<a href="single-product.html">
							<h4>{item.name}</h4>
						</a>
						<p className="price">{item.price}</p>
						<a className="view-link shutter" href="#">
							<i className="fa fa-plus-circle"></i>Add To Cart</a>
					</div>
				</div>	
				})}
					
				</div>	
			</div>	
		</section>	
		<section id="call-to-area">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block">
								<div className="block-heading">
									<h2>Our Partners</h2>
								</div>
							</div>	
							<div id="owl-example" className="owl-carousel">
								<div> <img src="images/company-1.png" alt=""/></div>
								<div> <img src="images/company-2.png" alt=""/></div>
								<div> <img src="images/company-3.png" alt=""/></div>
								<div> <img src="images/company-4.png" alt=""/></div>
								<div> <img src="images/company-5.png" alt=""/></div>
								<div> <img src="images/company-6.png" alt=""/></div>
								<div> <img src="images/company-8.png" alt=""/></div>
								<div> <img src="images/company-9.png" alt=""/></div>
							</div>	
						</div>	
					</div> 
				</div> 
		</section>
    </div>
  )
}

export default Homepage;