import Item from 'antd/lib/list/Item';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { listCate } from '../api/category';
import { list } from '../api/product';
import { CategoriesType } from './types/category';
import { ProductType } from './types/product'

type ProductPageProps = {
  products:ProductType[]
}

const ProductPage = (props: ProductPageProps) => {
  const [status, setStatus] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setcategories] = useState<CategoriesType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    }
    getProducts();


    const getCategories = async () => {
      const { data } = await listCate();
      setcategories(data);
    }
    getCategories();
  }, [])
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
                  {products?.map((item,index)=>{
                    return <li>
                    <div className="products">
                        <NavLink to={`${item.id}`}>
                          <img src="images/product-image-8.jpg" alt=""/>
                        </NavLink>
                        <NavLink to="#">
                          <h4>{item.name}</h4>
                        </NavLink>
                        <p className="price">{item.price}$</p>
                        <div >
                          <NavLink className="view-link shutter" to="#">
                          <i className="fa fa-plus-circle"></i>Add To Cart</NavLink>
                        </div>
                    </div>	
                  </li>
                  })}
                   
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
                {categories?.map((item,index)=>{
                  return <div className="list-group">
                  <a href="#" className="list-group-item">
                    <i className="fa  fa-dot-circle-o"></i>
                    {item.name}
                  </a>
                  
                </div>
                })}
                
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