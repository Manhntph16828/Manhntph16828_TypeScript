import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from './types/product'

type ProductManagerProps = {
   products: ProductType[],
   onRemove: (id: number) => void,
  
}
const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  return (
    <div>
      <button > <NavLink to="/admin/product/add">Thêm sản phẩm</NavLink></button>
    
      <table style={{width:'100%'}}>
        <thead style={{width:'100%'},{textAlign:'left'}}>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Xử lý</th>
          </tr>
        </thead>
        <tbody style={{textAlign:'left'}}>
          {products?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => onRemove(item.id)} style={{color:'balck'},{background:'red'}}>Remove</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
  )
}

export default ProductManager