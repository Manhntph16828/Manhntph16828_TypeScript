import React from 'react'
import { ProductType } from './types/product'

type ProductPageProps = {
  products:ProductType[]
}

const ProductPage = (products: ProductPageProps) => {
  return (
    <div>
  <section id="topic-header">
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<h1>Shop</h1>
					<p>A Bunch Of Products</p>
				</div>
				<div className="col-md-8 hidden-xs">
					<ol className="breadcrumb pull-right">
					  	<li><a href="#">Home</a></li>
					  	<li className="active">Shop</li>
					</ol>
				</div>
			</div>	
		</div>	
	</section>
    <section id="shop">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="products-heading">
              <h2>NEW PRODUCTS</h2>
            </div>
            <div className="product-grid">
               
                <ul>

                    <li>
                      <div className="products">
                          <a href="#">
                            <img src="images/product-image-8.jpg" alt=""/>
                          </a>
                          <a href="#">
                            <h4>Amazing Italian Sauces</h4>
                          </a>
                          <p className="price">From: £69.99</p>
                          <div >
                            <a className="view-link shutter" href="#">
                            <i className="fa fa-plus-circle"></i>Add To Cart</a>
                          </div>
                      </div>	
                    </li>
                    <li>
                        <div className="products">
                    <a href="#">
                      <img src="images/product-image-8.jpg" alt=""/>
                    </a>
                    <a href="#">
                      <h4>Amazing Italian Sauces</h4>
                    </a>
                    <p className="price">From: £69.99</p>
                    <div >
                      <a className="view-link shutter" href="#">
                      <i className="fa fa-plus-circle"></i>Add To Cart</a>
                    </div>
                  </div>
                    </li>
                    <li>
                        <div className="products">
                    <a href="#">
                      <img src="images/product-image-8.jpg" alt=""/>
                    </a>
                    <a href="#">
                      <h4>Amazing Italian Sauces</h4>
                    </a>
                    <p className="price">From: £69.99</p>
                    <div >
                      <a className="view-link shutter" href="#">
                      <i className="fa fa-plus-circle"></i>Add To Cart</a>
                    </div>
                  </div>	
                    </li>
                    <li>
                        <div className="products">
                    <a href="#">
                      <img src="images/product-image-8.jpg" alt=""/>
                    </a>
                    <a href="#">
                      <h4>Amazing Italian Sauces</h4>
                    </a>
                    <p className="price">From: £69.99</p>
                    <div >
                      <a className="view-link shutter" href="#">
                      <i className="fa fa-plus-circle"></i>Add To Cart</a>
                    </div>
                  </div>	
                    </li>
                    <li>
                        <div className="products">
                    <a href="#">
                      <img src="images/product-image-8.jpg" alt=""/>
                    </a>
                    <a href="#">
                      <h4>Amazing Italian Sauces</h4>
                    </a>
                    <p className="price">From: £69.99</p>
                    <div >
                      <a className="view-link shutter" href="#">
                      <i className="fa fa-plus-circle"></i>Add To Cart</a>
                    </div>
                  </div>	
                    </li>
                    <li>
                      <div className="products">
                    <a href="#">
                      <img src="images/product-image-8.jpg" alt=""/>
                    </a>
                    <a href="#">
                      <h4>Amazing Italian Sauces</h4>
                    </a>
                    <p className="price">From: £69.99</p>
                    <div >
                      <a className="view-link shutter" href="#">
                      <i className="fa fa-plus-circle"></i>Add To Cart</a>
                    </div>
                  </div>	
                    </li>
                    
                </ul>
            </div>
            <div className="pagination-bottom">
              <ul className="pagination">
                  <li className="disabled"><a href="#">&laquo;</a></li>
                  <li className="active"><a href="#">1 <span className="sr-only"></span></a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">»</a></li>
              </ul>	
            </div>
          </div>	
          <div className="col-md-3">
            <div className="blog-sidebar">
              <div className="block">
                <h4>Catagories</h4>
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <i className="fa  fa-dot-circle-o"></i>
                    Italian Foods
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa  fa-dot-circle-o"></i>
                    Traditional Food
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa  fa-dot-circle-o"></i>
                    Indian Food
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa  fa-dot-circle-o"></i>
                    Spanish Food
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa  fa-dot-circle-o"></i>
                    Thai FoodN
                  </a>
                </div>
              </div>
              <div className="block">
                <img src="images/food-ad.png" alt=""/>
              </div>
              <div className="block">
                <h4>Latest Food Items</h4>
                <ul className="media-list">
                  <li className="media">
                      <a className="pull-left" href="#">
                          <img className="media-object" src="images/post-img.png" alt="..."/>
                      </a>
                      <div className="media-body">
                          <a href="" className="media-heading">Lamb leg roast
                          <p>Lorem ipsum dolor sit amet.</p></a>
                      </div>
                    </li>
                    <li className="media">
                      <a className="pull-left" href="#">
                          <img className="media-object" src="images/post-img-2.png" alt="..."/>
                      </a>
                      <div className="media-body">
                          <a href="" className="media-heading"> Lamingtons
                          <p>Lorem ipsum dolor.</p></a>
                      </div>
                    </li>
                    <li className="media">
                      <a className="pull-left" href="#">
                          <img className="media-object" src="images/post-img-3.png" alt="..."/>
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

export default ProductPage