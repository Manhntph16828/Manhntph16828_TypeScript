import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductType } from './types/product'

type ProductManagerProps = {
   products: ProductType[],
   onRemove: (id: number) => void,
  
}
const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
  return (
    <div className="table w-full p-2">
      <h1 className='text-2xl'>Quản lý sản phẩm</h1>
      <button type="submit" className="inline-flex items-center justify-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
          <div><NavLink to="add">Thêm sản phẩm</NavLink></div>
      </button>
      <table className="w-full border">
          <thead>
              <tr className="bg-gray-50 border-b">
                  <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div className="flex items-center justify-center">
                          ID 
                      </div>
                  </th>
                  <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div className="flex items-center justify-center">
                          Name   
                      </div>
                  </th>
                  <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div className="flex items-center justify-center">
                          Image   
                      </div>
                  </th>
                  <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div className="flex items-center justify-center">
                          Price 
                      </div>
                  </th>
                  <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div className="flex items-center justify-center">
                          Loại 
                      </div>
                  </th>
                  <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                      <div className="flex items-center justify-center">
                          Action
                      </div>
                  </th>
              </tr>
          </thead>
          <tbody>
            {products?.map((item,index) =>{
              return <tr className="bg-gray-100 text-center border-b text-sm text-gray-600" key={index}>
                <td className="p-2 border-r">{index +1}</td>
                <td className="p-2 border-r">{item.name}</td>
                <td className="p-2 border-r"><img src={item.img} alt=""/></td>
                <td className="p-2 border-r">{item.price}</td>
                <td className="p-2 border-r">{item.categoryPro}</td>
                <td>
                    <NavLink className='mr-4' to={`/admin/product/${item.id}/edit`}>Edit</NavLink>
                    <button className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin" onClick={() => onRemove(item.id)} >Remove</button>
                    
                </td>
              </tr>
            })}
              
          </tbody>
      </table>
    </div>
  )
}

export default ProductManager