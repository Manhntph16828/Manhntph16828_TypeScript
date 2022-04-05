import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import AdminFooter from '../../components/AdminFooter'
import AdminHeader from '../../components/AdminHeader'
import Aside from '../../components/Aside'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    
  <div className="wrapper">
    <header>
      <AdminHeader/>
    </header>
        <aside>
          <Aside/>
        </aside>
        <main>
            <Outlet />
        </main>
        <footer>
          <AdminFooter/>
        </footer>
  </div>
  )
}

export default AdminLayout