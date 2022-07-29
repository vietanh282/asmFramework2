import React from 'react'
import { Outlet } from 'react-router-dom'
import Accessory from '../component/Accessory'
import ComputerAccessory from '../component/ComputerAccessory'
import Footer from '../component/footer'
import Header from '../component/header'
import ListProduct from './home'

const WebsiteLayout = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <section style={{ width: "90%", margin: "30px auto" }}>
          <ListProduct />
        </section>
        <section style={{width:"80%", margin:"30px auto"}}>
                <Accessory/>
            </section>
            <section style={{width:"80%", margin:"30px auto"}}>
                <ComputerAccessory/>
            </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default WebsiteLayout