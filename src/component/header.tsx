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
import { LaptopOutlined, MobileOutlined, TabletOutlined, DashboardOutlined, HomeOutlined, UsbOutlined, DesktopOutlined, VideoCameraOutlined, CrownOutlined, InsertRowLeftOutlined, InsertRowRightOutlined, LoadingOutlined } from "@ant-design/icons";
import type { MenuProps } from 'antd';
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
    getItem("PC - Màn hình", "sub8", <DesktopOutlined />, []),
    getItem("Tivi", "sub9", <VideoCameraOutlined />, []),
    getItem("Thu cũ", "sub10", <CrownOutlined />, []),
    getItem("Hàng cũ", "sub11", <InsertRowLeftOutlined />, []),
    getItem("Khuyến mãi", "sub12", <InsertRowRightOutlined />, []),
    getItem("Tin công nghệ", "sub13", <LoadingOutlined />, []),
];

const onClick: MenuProps['onClick'] = e => {
    console.log('click', e);
};

const Header = () => {
    return (
        <>
            <Row style={{ backgroundColor: "red" }}>
                <Col span={8}>
                    <div className='' style={{ margin: "10px", marginRight: "auto", textAlign: "center" }}>
                        <Logo width={"20px"} src={logo} />
                    </div>
                </Col>
                <Col span={8} style={{ margin: "auto 0" }} >
                    <Input size="large" placeholder="input ở đây" style={{ borderRadius: "30px" }} prefix={<SearchOutlined />} />
                </Col>
                <Col span={8} style={{ margin: "auto 0", textAlign: "center" }} >
                    <Row>
                        <Col style={{ fontSize: "14px", color:"white" }} span={6}><PhoneOutlined />Gọi mua hàng
                        1800.2097</Col>
                        <Col style={{ fontSize: "14px",color:"white" }} span={6}><FrownOutlined />Cửa hàng</Col>
                        <Col style={{ fontSize: "14px",color:"white" }} span={6}> <RocketOutlined />Tra cứu đơn hàng</Col>
                        <Col style={{ fontSize: "14px",color:"white" }} span={6}><ShoppingCartOutlined />Giỏ Hàng</Col>
                    </Row>
                </Col>
            </Row>
            <Layout>
                <Layout style={{backgroundColor:"white"}}>
                    <Sider style={{
                        marginTop: "30px", marginLeft: "150px"
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