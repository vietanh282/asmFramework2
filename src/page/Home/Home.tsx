import React from 'react'
import Accessory from '../../component/Accessory'
import ComputerAccessory from '../../component/ComputerAccessory'
import ListProduct from '../ListProduct'

const Home = () => {
    return (
        <div>
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