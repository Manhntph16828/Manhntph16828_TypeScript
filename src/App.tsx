import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
// import ShowInfo from './components/ShowInfo';
function App() {
  // const [count, setCount] = useState<number>(0);
  // const [myName, setMyname] = useState<string>("Nguyen Tien Manh");
  // const [status, setStatus] = useState<boolean>(false);
  // const [info, setInfo] = useState<{name: string, age:number}>({ name: "manh", age: 20});
  // const [products, setProducts] = useState<{id: number, name: string}[]>([
  //   {id: 1, name: "product 1"},
  //   {id: 2, name: "product 2"},
  //   {id: 3, name: "product 3"},
  // ]) 

  // const removeItem = (id :number) => {
  //   const newsProduct = products.filter(item => item.id !==id)
  // }
  return (
    <div className='conteniner'>
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path='product' element={<h1>Product page</h1>} />
        </Route>
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to={"dashbord"} />} />
          <Route path='dashbord' element={<h1>Dashbord page</h1>} />
        </Route>
      </Routes>
      {/* <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/product">Product page</NavLink></li>
          <li><NavLink to="/about">About page</NavLink></li>
          
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Homepage />}/>
        
        </Routes>
      </main> */}
    </div>
    // <div className="App">
    //   Count : {count} <button onClick={() => setCount(count +1)}>Click</button>
    //   <hr />
    //   Full name : {myName} <button onClick={() => setMyname("Bùi Thị Ngọc")}>Change Name</button>
    //   <hr />
    //   Info : {info.name} - {info.age}
    //   <hr />
    //   Product : {products.map(item => <div>{item.name} <button onClick={() => removeItem(item.id)}>Remove</button></div>)}
    //   <hr />
    //   Component: ShowInfo
    //   <ShowInfo name="Dat" age={20}/>
    // </div>
  )
}

export default App
