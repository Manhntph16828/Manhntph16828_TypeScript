import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from './types/product'

type ProductManagerProps = {
   products: ProductType[],
   onRemove: (id: number) => void
}
const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  return (
    <div>
     <NavLink to="/admin/product/add">add</NavLink>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
  )
}

export default ProductManager