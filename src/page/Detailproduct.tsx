import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import styled from 'styled-components'
import { getProductId } from '../api/product'
import iconCart from '../assets/images/icon.png'
import { addCart } from '../features/Slide/cart/Cart';
import { currency, findString } from '../helper/helper';
import { ShoppingCartOutlined } from '@ant-design/icons';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getAllProduct, getProductIdCateDetail } from '../features/Slide/product/product'
const DetailProduct = () => {
    const [productId, setProductId] = useState<any>({})
    const { id } = useParams();
    const dispatch = useDispatch();
    const productCate = useSelector((item: any) => item.product.value)
    const { addItem } = useCart();
    console.log(productCate);

    console.log(productId);

    useEffect(() => {
        const getProductById = async (id: any) => {
            const { data } = await getProductId(id);
            setProductId(data)

            dispatch(getProductIdCateDetail(Number(data.detailCate)))
           
        }
        getProductById(id);


    }, [id])

    const addToCart = (product: any) => {
        console.log(product);
        const add = addItem(
            {
                id: productId.id,
                name: productId.name,
                price: productId.saleOffPrice,
                image: productId.image,
                originalPrice: productId.originalPrice,
                feature: productId.feature,
                description: productId.description,
                categories: productId.categories
            }
        )

        message.success("Đã thêm 1 sản phẩm vào giỏ hàng")
        // dispatch(addCart(product))

        // dispatch({
        //     type: "cart/addCart",
        //     payload: product
        //   })

    }
    return (
        <div>
            <div style={{ borderBottom: "1px solid #ddd", boxShadow: "0px 0px 5px gray " }}>
                <div style={{ width: "80%", margin: " auto" }}>
                    <nav >
                        <ul style={{ padding: "10px 0", margin: "auto" }}>
                            <Li><Link2 to={""}>Trang chủ</Link2></Li>
                            <Li><Link2 to={""}>Điện thoại</Link2></Li>
                            <Li><Link2 to={""}>Samsung</Link2></Li>
                            <Li><Link2 to={""}>Samsung Galaxy A73 (5G) 256GB</Link2></Li>
                        </ul>
                    </nav>
                </div>

            </div>
            <div style={{ width: "80%", margin: " auto" }}>
                <Title >{productId?.name}</Title>
                <div >
                    <Product>
                        <a href=""><img src={productId.image} alt="" width={350} /></a>
                        <div style={{ position: "relative" }}>
                            <div>
                                <p ><span style={{ color: "red", fontSize: "24px", fontWeight: "600" }}>{currency(Number(productId?.saleOffPrice))} đ </span><span style={{ color: "gray", paddingLeft: "10px" }}>{currency(Number(productId?.originalPrice))} đ</span></p>
                                <p> Mô tả ngắn: {productId?.feature}</p>
                            </div>

                            <div style={{ position: "absolute", bottom: "0", display: "flex", gap: 20 }}>
                                <Btn onClick={() => addToCart(productId)}>Mua ngay</Btn>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <Cart onClick={() => addToCart(productId)}><ShoppingCartOutlined /></Cart>
                                    <span >Thêm vào <br /> giỏ hàng</span>
                                </div>
                            </div>

                        </div>
                    </Product>
                </div>
            </div>
            <section style={{ width: "80%", margin: " auto" }}>
                <h2>Sản phẩm cùng loại</h2>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {productCate?.filter((item:any) => item.id != productId.id).map((item: any, index: number) =>
                        <SwiperSlide key={index + 1}>
                            
                            <Col>
                                <div style={{ margin: "auto", textAlign: "center", marginBottom: "10px" }}>
                                   <Link to={'/detail/'+ item.id}><img src={item.image} alt="" width={160} style={{maxWidth:"100%"}}/></Link>
                                </div>
                                <Link to={'/detail/'+ item.id} style={{ color: "black" }}><p>{item.name}</p></Link>
                                <div style={{ display: "flex", }}>
                                    <p style={{ color: "red", fontWeight: "600" }}>{currency(item.saleOffPrice)} ₫ </p><span style={{ color: "gray", fontSize: "12px", marginLeft: "10px" }}>{currency(item.originalPrice)} ₫</span>
                                </div>
                            </Col>
                        </SwiperSlide>
                    )}



                </Swiper>
            </section>

            <section style={{ width: "80%", margin: " auto" }}>
                <DacDiemNoiBat>
                    <h3 style={{ color: "red", textAlign:"center" }}>ĐẶC ĐIỂM  NỔI BẬT</h3>
                    <p>{productId.feature }</p>
                </DacDiemNoiBat>
                <div dangerouslySetInnerHTML={{__html:`${productId.description}`}}></div>
            </section>
        </div>
    )
}

const Li = styled.li`
    display: inline-block;
    margin: auto ;
    margin-right: 20px; 
    color: gray;
`
const Link2 = styled(Link)`
    color: gray;
    font-size: 12px;
`
const Title = styled.h2`
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
`
const Product = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr ;
    gap: 30px;
    margin: 30px 0;
`
const Btn = styled.button`
    background-color: red;
    transition:all .2s linear;
    color: #fff;
    padding: 10px 50px;
    border: 0;
    border-radius: 5px;
    :hover{
        /* border: 1px solid green; */
        /* background-color: orange; */
        cursor: pointer;
        transition:all .1s linear;

    }
`
const Cart = styled.button`
    border: 1px solid #ff0000;
    transition:all .2s linear;
    color: red;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 25px;
    background-color: #fff;
    :hover{
        /* border: 1px solid green; */
        background-color: #ff0000;
        color:#fff;
        cursor: pointer;
        transition:all .1s linear;

    }
`
const Col = styled.div`
    height: 300px;
    padding:  20px;
    border: 1px solid #ddd;
    border-radius: 5px;
`
const DacDiemNoiBat = styled.div`
    margin: 30px 0;
    padding:10px 20px;
    background-color: #F2F2F2;
    border: 1px solid #F2F2F2;
    border-radius: 6px;
`
export default DetailProduct