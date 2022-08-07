import React from 'react'
import Accessory from '../../component/Accessory'
import Banner from '../../component/banner'
import ComputerAccessory from '../../component/ComputerAccessory'
import Sidebar from '../../component/Sidebar'
import ListProduct from '../ListProduct'

const Home = () => {
    return (
        <div>
            <section style={{ width: "80%", margin: "10px auto", display: "flex", }}>
                <Sidebar></Sidebar>
                <Banner/>
            </section>
            <section style={{ width: "90%", margin: "30px auto" }}>
                <ListProduct />
            </section>
            <section style={{ width: "80%", margin: "30px auto" }}>
                <Accessory />
            </section>
            <section style={{ width: "80%", margin: "30px auto" }}>
                <ComputerAccessory />
            </section>
        </div>
    )
}

export default Home