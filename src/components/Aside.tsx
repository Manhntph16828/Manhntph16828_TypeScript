import React from 'react'

type Props = {}

const Aside = (props: Props) => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="../index.html" className="brand-link">
      <img src="../assets/img/admin.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
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
                <a href="/admin/product" className="nav-link">Quản trị Sản phẩm</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Quản trị Tài khoản</a>
              </li>
        </ul>
      </nav>
    </div>
  </aside>
  )
}

export default Aside