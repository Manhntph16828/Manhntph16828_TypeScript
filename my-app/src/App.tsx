import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductManager from './pages/ProductManager'
import { ProductType } from './pages/Types/product'
import axios from 'axios'


const [products,setProduct] = useState<ProductType[]>([]);


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/product' element={<ProductManager product={products} onRemove={removeItem}/>} />
      </Routes>
    </div>
  )
}

export default App
