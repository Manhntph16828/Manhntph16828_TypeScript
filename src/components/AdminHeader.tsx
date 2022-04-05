import React from 'react'

type Props = {}

const AdminHeader = (props: Props) => {
  return (
      <div>

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



      </div>
    
  
  )
}

export default AdminHeader