import { Card, List } from 'antd';
import React, { useEffect } from 'react'
import styled from 'styled-components';

import {StarOutlined, StarTwoTone} from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { listProduct } from '../api/product';
import { Link } from 'react-router-dom';
import { currency } from '../helper/helper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../features/Slide/product/product';
type Props = {}

const ListProduct = (props: Props) => {
    const listProduct = useSelector((item:any) => item.product.value)
    const {isLoading, data, error} = useQuery<any>(['Product'], listProduct)
    const loadData = data?.data
    console.log(listProduct);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct())
    },[])
    
    return (
        <div >
            <Title>ĐIỆN THOẠI NỔI BẬT NHẤT</Title>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 7,
                    xxl: 3,
                }}
                
                dataSource={listProduct}
                renderItem={(item:any) => (
                    <List.Item>
                        
                        <div>
                            <div style={{textAlign:"center"}}>
                                <Link to={`/detail/${item.id}`} ><img  src={item.image} alt="" width={140} /></Link>
                            </div>
                            <Link to={`/detail/${item.id}`} className="name" style={{marginTop:"10px", color:"black"}}>{item.name}</Link>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p style={{color:"red"}}>{currency(item.saleOffPrice)} ₫</p>
                                <p style={{color:"gray", fontSize:"13px"}}>{currency(item.originalPrice)} ₫</p>
                            </div>
                            <Desc >
                                <p>{item.feature}</p>
                            </Desc>
                            <div style={{display:"flex", gap:"10px"}}>
                                <div className="star">
                                    <StarTwoTone twoToneColor="black" />
                                    <StarTwoTone twoToneColor="black" />
                                    <StarOutlined />
                                    <StarOutlined />
                                    <StarOutlined />
                                </div>
                                <div>
                                    <p>72 đánh giá</p>
                                </div>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}

const Title = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
`
const Desc = styled.div`
    border: 1px solid #F3F4F6;
    border-radius:5px;
     background:#F3F4F6;
     padding:5px ;
`
export default ListProduct