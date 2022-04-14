import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from './types/product';

type ProductDetailProps = {
  products:ProductType[]
}

const ProductDetail = (props: ProductDetailProps) => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const {id} = useParams()
	useEffect(() => {
        const getProduct = async () => {
            const { data: dataProduct } = await read(id);
            setProducts(dataProduct)
        }
        getProduct();
    }, [])

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
							<h4>{products.name}</h4>
							<p className="price">{products.price}</p>
							<p>{products.desc}</p>
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