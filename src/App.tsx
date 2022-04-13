import { useEffect, useState } from 'react'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductPage from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import ProductManager from './pages/ProductManager'
import { ProductType } from './pages/types/product'
import { add, list, remove ,update} from './api/product'
import ShowInfo from './components/ShowInfo'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import PrivateRouter from './components/PrivateRouter'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CategoriesManager from './pages/CategoryManager'
import { CategoriesType } from './pages/types/category'
import CategoriesAdd from './pages/CategoriesAdd'
import { addCate, listCate, removeCate } from './api/category'

function App() {
  const [status, setStatus] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategory] = useState<CategoriesType[]>([]);
  useEffect(() => {
      const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
      }
      getProducts();
  }, [])
  useEffect(()=>{
    const getCategories = async () =>{
      const { data } = await listCate();
      setCategory(data);
    }
    getCategories();
  },[])
  const removeItem = (id:number) => {
    remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
    // setProduct()
  }
  const removeCateItem = (id:number) => {
    removeCate(id);
    // reRender
    setCategory(categories.filter(item => item.id !== id));
    // setProduct()
  }
  const onHanldeAdd = (data :ProductType) => {
      add(data);
      setProducts([...products, data])
  }
  const onHanldeCateAdd = (data :CategoriesType) => {
    addCate(data);
    setCategory([...categories, data])
}

  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    // reRender
    setProducts(products.map(item => item.id === data.id ? data : item ));
}
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Homepage products={products}/>} />
              <Route path="product">
                <Route index element={<ProductPage products={products}/>} />
                <Route path=":id" element={<ProductDetail products={[]} />} />
              </Route>
          </Route>
          {/* <Route path="admin" element={<AdminLayout></AdminLayout>}> */}
          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
              <Route path="product" > 
                <Route index element={<ProductManager products={products} onRemove={removeItem}/>} />
                <Route path="add" element={<ProductAdd onAdd={onHanldeAdd}/>} />
                <Route path=':id/edit' element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
              </Route>
              <Route path='category'>
                <Route index element={<CategoriesManager categories={categories} onRemove={removeCateItem}/>}/>
                <Route path="add" element={<CategoriesAdd onCateAdd={onHanldeCateAdd}/>} />
              </Route>
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
    </div>
  )
}

export default App

