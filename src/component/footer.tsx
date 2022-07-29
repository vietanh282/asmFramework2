import React from 'react'
import styled from 'styled-components'
import f1 from '../asset/images/fo1.png';
import f2 from '../asset/images/fo2.png';
import f3 from '../asset/images/fo3.png';
import f4 from '../asset/images/fo4.png';
import f5 from '../asset/images/fo5.png';
import f6 from '../asset/images/fo6.png';
const Footer = () => {
    return (
        <div>
            <FooterTop >
                <div>
                    <div style={{ fontSize: "24px" }}>Tìm cửa hàng</div>
                    <div>Tìm cửa hàng gần nhất</div>
                    <div>Mua hàng từ xa</div>
                    <p style={{ color: "Red" }}>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
                    <p style={{ fontSize: "24px" }}>Phương thức thanh toán</p>
                    <Nav>
                        <a href=""><img src={f6} alt="" /></a>
                        <a href=""><img src={f5} alt="" /></a>
                        <a href=""><img src={f4} alt="" /></a>
                        <a href=""><img src={f3} alt="" /></a>
                        <a href=""><img src={f2} alt="" /></a>

                    </Nav>
                </div>
                <div>
                    <div>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</div>
                    <div>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</div>
                    <p>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
                    <div style={{ fontSize: "24px" }}>Đối tác dịch vụ bảo hành</div>
                    <p>Điện Thoại - Máy tính</p>
                    <div>Trung tâm bảo hành uỷ quyền Apple</div>
                    <div><a href=""><img src={f1} alt="" /></a></div>
                </div>
                <div>
                    <div>Mua hàng và thanh toán Online</div>
                    <div>Mua hàng trả góp Online</div>
                    <div>Tra thông tin đơn hàng</div>
                    <div>Tra điểm Smember</div>
                    <div>Tra thông tin bảo hành</div>
                    <div>Tra cứu hoá đơn VAT điện tử</div>
                    <div>Trung tâm bảo hành chính hãng</div>
                    <div>Quy định về việc sao lưu dữ liệu</div>
                    <div style={{ color: "Red" }}>Dịch vụ bảo hành điện thoại</div>
                </div>
                <div>
                    <p>Quy chế hoạt động</p>
                    <p>Chính sách Bảo hành</p>
                    <p>Liên hệ hợp tác kinh doanh</p>
                    <p>Khách hàng doanh nghiệp (B2B)</p>
                    <p style={{ color: "Red" }}>Ưu đãi thanh toán</p>
                    <p>Tuyển dụng</p>
                </div>
            </FooterTop>
            <FooterBottom className="footer-button">
                <Content>
                    <div>
                        <p>Điện thoại iPhone 13 - Điện thoại iPhone 12</p>
                        <p>Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max</p>
                        <p>iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ</p>

                    </div>
                    <div>
                        <p>Điện thoại iPhone 13 - Điện thoại Samsung A</p>
                        <p>Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max</p>
                        <p>Samsung Fold 3 - Samsung A73 - Samsung A53</p>

                    </div>
                    <div>
                        <p>Laptop - Laptop HP - Laptop Dell - Laptop Acer</p>
                        <p>Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max</p>
                        <p>Máy tính để bàn - Màn hình máy tính - Camera hành trình</p>

                    </div>

                </Content>
                <DiaChi>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</DiaChi>
            </FooterBottom>
        </div>
    )
}

const FooterTop = styled.div`
    width: 80%;
    margin-top: 100px ;
    margin:100px auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
`


const Nav = styled.div`
    display: flex ;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    gap: 20px;
`

const FooterBottom = styled.div`
    /* width: 80%; */
    margin-top: 50px;
    background:#F3F4F6;
`

const Content = styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    gap: 30px;
    padding-top: 50px;
`
const DiaChi = styled.p`
     width: 80%;
    margin: auto;
    font-size: 12px;
    padding-bottom: 50px;
    padding-top: 30px;
    text-align: center;
`
export default Footer 