import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'
import Header from '../component/Header'

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