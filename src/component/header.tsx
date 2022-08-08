import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd';
import { MailOutlined, AppstoreOutlined, SearchOutlined } from '@ant-design/icons';
import logo from '../asset/images/logo1.png'
import Search from 'antd/lib/transfer/search';
import { Col, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import MenuHeader from './MenuHeader';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const Header = () => {
   
    return (

        <HeaderCo style={{padding:"10px 0"}} >
            <Menu>
                <div >
                    <Link to={'/'}><Logo src={logo} alt="" /></Link>
                </div>

                <div style={{ margin: "auto 0" }}>
                    <div>
                    <SearchBar  ></SearchBar>
                    </div>
                </div>

               <MenuHeader/>

            </Menu>
        </HeaderCo>


    )
}

const Logo = styled.img`
    widtd: 65px;
    height:57px;
    max-width:100%

`

const HeaderCo = styled.div`
    margin: auto;
    
    background-color: red;
    padding: 5px 10px
`
const Menu = styled.div`
    width:80%;
    display:grid ;
    grid-template-columns: 2fr 4fr 5fr;
    margin:auto;
    gap:30px;
`





export default Header