import React from 'react'
import { Col, message, Modal, Row } from 'antd'
import { HomeOutlined, CarOutlined, ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const MenuHeader = () => {
    const { totalItems } = useCart();
    const user = JSON.parse(localStorage.getItem("user") as string)?.user;
    const navigate = useNavigate();
    const onLogout = () => {
     
        Modal.confirm({
            title:"Bạn có chắc muốn đăng xuất không ?",
            onOk(){
                localStorage.removeItem("user");
                message.success("Đăng xuất thành công !")
                navigate("/")
            }
        })
    }
    return (
        <div style={{ color: "white", margin: "auto 0" }}>
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
                   
                        <Row style={{ lineHeight: "1.5" }}>
                            <Link to={'/signin'} style={{ color: "#fff" }}> <Col span={8} style={{ margin: "auto 0", fontSize: "30px"}}><UserOutlined /> </Col></Link>
                            <Col span={14} style={{ margin: "auto" }}>
                                {user?.email}
                               {
                                user ? 
                               <div> 
                                 <span style={{cursor:"pointer"}} onClick={() => onLogout()}>Logout</span>
                               </div>
                                :
                                <div>
                                     <Link to={'/signin'} style={{ color: "#fff" }}><span>Login</span></Link>
                                </div>
                            
                                
                                
                               }
                             </Col>
                           
                        </Row>
                    
                </Col>
            </Row>
        </div>
    )
}

export default MenuHeader