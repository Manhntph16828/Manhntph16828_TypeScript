import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
import { ProductType } from './types/product';

type ProductDetailProps = {
  products:ProductType[]
}

const ProductDetail = (props: ProductDetailProps) => {
  return (
    <div>
      <section id="topic-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1>Products Details</h1>
              <p></p>
            </div>	
            <div className="col-md-8 hidden-xs">
              <ol className="breadcrumb pull-right">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Products</a></li>
                  <li className="active">Single Products</li>
              </ol>
            </div>
          </div>	
        </div>	
	    </section>
      <section id="single-product">
		<div className="container">
			<div className="row">
				<div className="col-md-5">
					<div className="single-product-img">
						<img src="../images/single-product.png" alt=""/>
					</div>

				</div> 
				<div className="col-md-4">
					<div className="block">
						<div className="product-des">
							<h4>Claritas est etiam</h4>
							<p className="price">$380</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, culpa, esse, magni omnis blanditiis unde vitae in nobis fuga optio numquam at ipsum impedit perspiciatis quia rem consequatur recusandae repudiandae provident nemo voluptatibus corporis ab id iste pariatur ipsam vero porro eos eaque rerum nam dolorum mollitia adipisci. Quaerat, ullam!</p>
							<a className="view-link" href="#"><i className="fa fa-plus-circle"></i>Add To Cart</a>
						</div>	
					</div> 
				</div>	
				<div className="col-md-3">
					<div className="blog-sidebar">
						<div className="block">
							<h4 className="top-catagori-heading">Latest Food Items</h4>
							<ul className="media-list">
							 	<li className="media">
							    	<a className="pull-left" href="#">
							      		<img className="media-object" src="../images/post-img.png" alt="..."/>
							    	</a>
							    	<div className="media-body">
							      		<a href="" className="media-heading">Lamb leg roast
							      		<p>Lorem ipsum dolor sit amet.</p></a>
							    	</div>
							  	</li>	
							  	<li className="media">
							    	<a className="pull-left" href="#">
							      		<img className="media-object" src="../images/post-img-2.png" alt="..."/>
							    	</a>
							    	<div className="media-body">
							      		<a href="" className="media-heading"> Lamingtons
							      		<p>Lorem ipsum dolor.</p></a>
							    	</div>
							  	</li>	
							  	<li className="media">
							    	<a className="pull-left" href="#">
							      		<img className="media-object" src="../images/post-img-3.png" alt="..."/>
							    	</a>
							    	<div className="media-body">
							      		<a href="" className="media-heading">
							      		Anzac Salad
							      		<p>Lorem ipsum dolor sit.</p>

							      		</a>
							    	</div>
							  	</li>	
							  	<li className="media">
							    	<a className="pull-left" href="#">
							      		<img className="media-object" src="../images/post-img-3.png" alt="..."/>
							    	</a>
							    	<div className="media-body">
							      		<a href="" className="media-heading">
							      		Anzac Salad
							      		<p>Lorem ipsum dolor sit.</p>

							      		</a>
							    	</div>
							  	</li>	
							</ul>	
						</div>	
						
					</div>	
						
				</div>	
			</div>	
				
		</div>
	</section> 
    </div>
  )
}

export default ProductDetail