import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
type Props = {}

const ProductDetail = (props: Props) => {
    
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
      
    </div>
  )
}

export default ProductDetail