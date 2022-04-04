import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    // <div>
    //     <header>Header Admin</header>
    //     <aside>Aside</aside>
    //     <main>
    //         <Outlet />
    //     </main>
    // </div>
    <div className="wrapper">

    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="../index.html" className="nav-link">Home</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="../contact.html" className="nav-link">Contact</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" data-widget="navbar-search" href="#" role="button">
            <i className="fas fa-search"></i>
          </a>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
      </ul>
  
      
      <ul className="navbar-nav ml-auto">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <a href="#"><i className="fas fa-user" ></i></a>
          </div>
        </div>
      </ul>
    </nav>
    
  
    
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      
      <a href="../index.html" className="brand-link">
        <img src="../assets/img/admin.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
        <span className="brand-text font-weight-light">ADMIN</span>
      </a>
  
      
      <div className="sidebar">
        
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
  
        
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
           
                <li className="nav-item">
                  <a href="" className="nav-link">Quản trị Danh mục</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Quản trị Sản phẩm</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Quản trị Tài khoản</a>
                </li>
                
          </ul>
        </nav>
        
      </div>
    
    </aside>
  
    
    <div className="content-wrapper">
      
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark"></h1>
            </div> 
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active"><a href="">Home</a></li>
                <li className="breadcrumb-item active"><a href="">Home</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <section className="content">
      </section>
    </div>
    
   
    <footer className="main-footer">
      <strong>Copyright &copy; 2021</strong>
    </footer>
  
   
    <aside className="control-sidebar control-sidebar-dark">
      
    </aside>
    
  </div>
  )
}

export default AdminLayout