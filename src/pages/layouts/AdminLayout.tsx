import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'
// import AdminFooter from '../../components/AdminFooter'
// import AdminHeader from '../../components/AdminHeader'
// import Aside from '../../components/Aside'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
type Props = {}


const AdminLayout = (props: Props) => {
  return (
    <Layout >
      <Sider  breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}>
        <div className='logo'>
          <img src="../../images/logo.png" alt="" style={{width:'200px'}}/>
        </div>
        
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" >
          <NavLink to="/admin/product">Quản lý sản phẩm</NavLink>
          
        </Menu.Item>
        <Menu.Item key="2">
        <NavLink to="/admin/product/add">Quản lý danh mục</NavLink>
        </Menu.Item>
        
      </Menu>
      </Sider>

      <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    </Layout>
    
    
  )
  
}

export default AdminLayout