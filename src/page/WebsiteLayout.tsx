import React from 'react'
import { Outlet } from 'react-router-dom'
import Accessory from '../component/Accessory'
import ComputerAccessory from '../component/ComputerAccessory'
import Footer from '../component/footer'
import Header from '../component/header'
import ListProduct from './ListProduct'

const WebsiteLayout = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
            
      </main>
      <Footer></Footer>
    </div>
  )
}

export default WebsiteLayout