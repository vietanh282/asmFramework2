import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import styled from 'styled-components'
import { getProductId } from '../api/product'
import { currency } from '../helper/helper'
function DetailProduct() {
  const [productId, setProductId] = useState<any>({})
  const { id } = useParams()
  const dispatch = useDispatch()

  const { addItem } = useCart()

  // console.log(abc);
  useEffect(() => {
    const getProductById = async (id: any) => {
      const { data } = await getProductId(id)
      setProductId(data)
    }
    getProductById(id)
  }, [])

  const addToCart = (product: any) => {
    console.log(product)
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

  }
  return (
    <div>
      <div style={{ borderBottom: "1px solid #ddd", boxShadow: "0px 0px 5px gray " }}>
        <div style={{ width: "80%", margin: " auto" }}>
          <nav>
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
        <Title>{productId?.name}</Title>
        <div>
          <Product>
            <div>
              <a href=""><img src={productId.image} alt="" style={{width:"400px",height:"320px"}} /></a>
              <Smallpicture>
          
            </Smallpicture>
            </div>
            
            
            <div>
              <p><span style={{ color: "red", fontSize: "24px", fontWeight: "600" }}>{currency(Number(productId?.saleOffPrice))} đ </span><span style={{ color: "gray", paddingLeft: "10px" }}>{currency(Number(productId?.originalPrice))} đ</span></p>
              <p> Mô tả ngắn: {productId?.feature}</p>
              <p> Mô tả dài: {productId?.description}</p>
              {/* <form action=""> */}
              {/* <input type="number" min={0} defaultValue={"1"} placeholder='Số sản phẩm' /> */}
              <p style={{ margin: "30px 0" }}>
                <Btn onClick={() => addToCart(productId)}>Thêm vào giỏ hàng</Btn>
              </p>
              {/* </form> */}
            </div>
          </Product>
        </div>
      </div>

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
    padding: 10px 30px;
    border: 0;
    :hover{
        /* border: 1px solid green; */
        background-color: orange;
        cursor: pointer;
        transition:all .1s linear;
    }
`
const Smallpicture = styled.div`
display: flex;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`

export default DetailProduct