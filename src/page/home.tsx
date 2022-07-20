import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import anh from '../asset/images/anh.png'
type HomeProps = {
}
const Home = (props: HomeProps) => {
    return (
        <>
            <h1 className='my-1.5 ml-10'>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
            <div className='my-1.5 text-center grid grid-cols-7'>
                <div>
                    <Anh style={{ textAlign: 'center' , marginLeft:"40px"}} src={anh} />
                </div>
                <div><Anh style={{ textAlign: 'center' , marginLeft:"40px"}} src={anh} /></div>
                <div><Anh style={{ textAlign: 'center' , marginLeft:"40px"}} src={anh} /></div>
                <div><Anh style={{ textAlign: 'center' , marginLeft:"40px"}} src={anh} /></div>
                <div><Anh style={{ textAlign: 'center' , marginLeft:"40px"}} src={anh} /></div>
                <div><Anh style={{ textAlign: 'center' , marginLeft:"40px"}} src={anh} /></div>
                <div><Anh style={{ textAlign: 'center' , marginLeft:"40px"}} src={anh} /></div>
            </div>
        </>

    )
}
const Anh = styled.img`
width: 130px;
height: 122px;
`

export default Home