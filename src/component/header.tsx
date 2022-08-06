import React from 'react'
import { Input, Layout, Menu } from 'antd';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { PhoneOutlined } from '@ant-design/icons';
import { FrownOutlined } from '@ant-design/icons';
import { RocketOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../asset/images/logo1.png'
import banner from '../asset/images/Rectangle.png'
import { LaptopOutlined, MobileOutlined, TabletOutlined, DashboardOutlined,EnvironmentOutlined, HomeOutlined, UsbOutlined, DesktopOutlined, VideoCameraOutlined, CrownOutlined, InsertRowLeftOutlined, InsertRowRightOutlined, LoadingOutlined } from "@ant-design/icons";
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
const { Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items = [
    getItem("Điện thoại", "sub1", <MobileOutlined />, []),
    getItem("Laptop", "sub2", <LaptopOutlined />, []),
    getItem("Máy tính bảng", "sub3", <TabletOutlined />, []),
    getItem("Âm thanh", "sub4", <PhoneOutlined />, []),
    getItem("Đồng hồ", "sub5", <DashboardOutlined />, []),
    getItem("Nhà thông minh", "sub6", <HomeOutlined />, []),
    getItem("Phụ kiện", "sub7", <UsbOutlined />, []),
];

const onClick: MenuProps['onClick'] = e => {
    console.log('click', e);
};

const Header = () => {
    return (
        <>
            <Row style={{ backgroundColor: "red" }}>
                <Col span={8}>
                    <div className='' style={{ margin: "10px", marginRight: "auto" }}>

                        <Logo width={"20px"} src={logo} />
                    </div>

                </Col>
                <Col span={8} style={{ margin: "auto" }}>
                    <Input style={{ borderRadius: "10px" }} placeholder="Search" prefix={<SearchOutlined />} />
                </Col>
                <Col span={8}>
                    <Row style={{ margin: "10px" }}>
                        <Col span={6} style={{ color: "white" }}>Gọi mua hàng <br />1800.2097</Col>
                        <Col span={6} style={{ color: "white" }}><EnvironmentOutlined />Cửa hàng <br /> gần bạn</Col>
                        <Col span={6} style={{ color: "white" }}><RocketOutlined />Tra cứu <br /> đơn hàng</Col>
                        <Link to={'/cart'}><Col span={4} style={{ color: "white" }}><ShoppingCartOutlined />Giỏ hàng</Col></Link>
                    
                    </Row>
                </Col>
            </Row>
            <Layout>
                <Layout style={{ backgroundColor: "white" }}>
                    <Sider style={{
                        marginTop: "30px", marginLeft: "150px",backgroundColor: "white"
                    }}>
                        <Menu 
                            onClick={onClick}
                            style={{
                                width: "250"
                            }}
                            items={items}
                        />
                    </Sider>
                    <Content style={{ marginTop: "30px" }}>
                        <Banner src={banner} />
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
const Logo = styled.img`
width: 65px;
height: 57px;
`
const Banner = styled.img`
margin-left: 100px;
width: 1000px;
height: 500px;
`
export default Header