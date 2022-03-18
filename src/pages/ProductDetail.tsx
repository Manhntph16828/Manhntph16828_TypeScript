import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
type Props = {}
type ProductType ={
    _id : number,
    name: string,
    price: number
}
const ProductDetail = (props: Props) => {
    const [product, setProduct]= useState<ProductType>();
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail