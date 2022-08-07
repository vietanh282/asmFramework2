import React from 'react'
import { Col, Row } from 'antd'
import { HomeOutlined, CarOutlined, ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const MenuHeader = () => {
    const { totalItems } = useCart();
    const user = JSON.parse(localStorage.getItem("user") as string).user;
    
    return (
        <div style={{ color: "white", margin: "auto",backgroundColor:"red" }}>
            <Row >
                <Col span={6}>
                    <Row style={{ lineHeight: "1.5" }}>
                        <Col span={8} style={{ margin: "auto 0", fontSize: "30px" }}><HomeOutlined /></Col>
                        <Col span={14}>Cửa hàng <br /> gần bạn</Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row style={{ lineHeight: "1.5" }}>
                        <Col span={8} style={{ margin: "auto 0", fontSize: "30px" }}><CarOutlined /> </Col>
                        <Col span={14}>Tra cứu <br /> đơn hàng</Col>
                    </Row>
                </Col>
                <Col span={6} style={{margin:"auto"}}>
                    <Link to={'/cart'} style={{ color: "#fff" }}>
                        <Row style={{ lineHeight: "1.5" }}>
                            <Col span={8} style={{ margin: "auto 0", fontSize: "30px", display: "flex" }}><ShoppingCartOutlined /> <span style={{ fontSize: "13px", marginTop: "auto" }}>{totalItems} </span></Col>
                            <Col span={14} style={{ margin: "auto" }}>Giỏ  hàng</Col>
                        </Row>
                    </Link>
                </Col>
                <Col span={6} style={{margin:"auto"}}>
                    <Link to={'/signin'} style={{ color: "#fff" }}>
                        <Row style={{ lineHeight: "1.5" }}>
                            <Col span={8} style={{ margin: "auto 0", fontSize: "30px"}}><UserOutlined /> </Col>
                            <Col span={14} style={{ margin: "auto" }}>{user?.email}</Col>
                        </Row>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default MenuHeader