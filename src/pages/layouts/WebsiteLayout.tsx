import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
            <Header />
            <Navbar />
        </header>
        <main>
          {/* <Banner/> */}
            <Outlet />
        </main>
        <footer>
          <Footer/>
          
	      </footer>
    </div>
  )
}

export default WebsiteLayout;