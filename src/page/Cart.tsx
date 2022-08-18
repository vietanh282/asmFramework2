import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCart } from 'react-use-cart'
import styled from 'styled-components';
// import store from '../redux/store';
import { CloseOutlined, CloseSquareFilled, PlusSquareFilled, MinusSquareFilled } from '@ant-design/icons';
import { Button, Form, Input, message, Modal } from 'antd';
import { currency } from '../helper/helper';
import ReactQuill from 'react-quill';
import { addOrder22 } from '../features/Slide/order';
const CartPage = () => {
  const { items, cartTotal, updateItemQuantity, removeItem } = useCart();
  const dispatch = useDispatch();
  // console.log(items);

  const deleteToCart = (item: any) => {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa sản phẩm này không ?",
      onOk: () => {
        updateItemQuantity(item.id, Number(item.quantity - item.quantity))
      },


    })
  }
  const minus = (item: any) => {
    if (item.quantity == 1) {
      Modal.confirm({
        title: "Bạn có chắc muốn xóa sản phẩm này không ?",
        onOk: () => {
          updateItemQuantity(item.id, Number(item.quantity) - 1)
        },


      })
    } else {
      updateItemQuantity(item.id, Number(item.quantity) - 1)

    }
  }

  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    console.log(values);
    console.log(items);

    try {
      {
        // const data = await add({ ...values })
        // console.log(data);
        var curDate = new Date();
        console.log(curDate);
        
        const order = dispatch(addOrder22({
          address: values.address,
          confirmAddress: values.confirmAddress,
          name: values.name,
          phone: values.phone,
          listProduct:items,
          cartTotal:cartTotal,
          status: 0,
          createdAt: curDate
        }))

        message.success("Đặt hàng thành công");
        // navigate("/admin")
      }

      // navigate(-1)
    } catch (err) {
      message.error("Có lỗi xảy ra")
    }
  };

  return (
    <div>
      <Cart >
        <h2>Giỏ hàng</h2>

        {items?.map((item: any, index: any) => (
          <Row className="row" key={index + 1}>
            <div className="col" style={{ margin: "auto" }}>
              <a href=""><Image src={item.image} alt="" /></a>

            </div>
            <div className="col" style={{ position: "relative" }}>
              <NameProduct>{item.name}</NameProduct>
              <p><span style={{ color: "red", fontSize: "18px" }}>{currency(item.price)} ₫</span> <span style={{ color: "gray", paddingLeft: "10px" }}>{currency(item.originalPrice)} ₫</span></p>
              <SoLuong>
                <p style={{ margin: "auto 0" }}>Chọn số lượng:</p>
                <div style={{ margin: "auto 0", display: "flex" }}>

                  <div style={{ margin: "auto" }}>
                    <PlusSquareFilled onClick={() => updateItemQuantity(item.id, Number(item.quantity) + 1)} style={{ color: "red", fontSize: "26px", cursor: "pointer" }} />
                  </div>

                  <div>
                    <input type="text" value={item.quantity} style={{ width: "40px", textAlign: "center", borderRadius: "5px", margin: "0 5px" }} />
                  </div>

                  <div style={{ margin: "auto" }}>
                    <MinusSquareFilled onClick={() => minus(item)} style={{ color: "red", fontSize: "26px", cursor: "pointer" }} />
                  </div>
                </div>
              </SoLuong>
              <KhuyenMai>
                <p>- Chương trình khuyến mại: </p>
                <p>{item.description}</p>
                {/* <p>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</p> */}
              </KhuyenMai>
              <Delete ><CloseSquareFilled onClick={() => deleteToCart(item)} /></Delete>
            </div>
          </Row>
        ))}
        <div>
          <TongTien>
            <p>Tổng tiền tạm tính:</p>
            <p style={{ color: "red" }}>{currency(cartTotal)} ₫</p>
          </TongTien>
          <div>
            <DatHang onClick={() => showModal()}>Tiến hành đặt hàng</DatHang>
          </div>
          <div>
            <ThemSanPhamKhac>Chọn thêm sản phẩm khác</ThemSanPhamKhac>
          </div>
        </div>

        <Modal23 title="Đặt hàng" visible={isModalVisible} onCancel={handleCancel}>
          <Form
            // name="product"
            initialValues={{}}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="on"
            labelCol={{ span: 24 }}
          >
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Họ tên"
              rules={[{ required: true, message: 'Họ tên không được trống' }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="phone"
              labelCol={{ span: 24 }}
              label="Số điện thoại"
              rules={[{ required: true, message: 'Số điện thoại không được trống' }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="address"
              labelCol={{ span: 24 }}
              label="Địa chỉ"
              rules={[{ required: true, message: 'Địa chỉ không được trống' }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="confirmAddress"
              labelCol={{ span: 24 }}
              label="Địa chỉ cụ thể"
              rules={[{ required: true, message: 'Không được để trống' }]}
            >
              <ReactQuill theme="snow" style={{ background: "#fff" }} />
              {/* <TextArea name="description" /> */}
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ float: "right", background: "red", border: "red" }}>
                Đặt hàng
              </Button>
            </Form.Item>
          </Form>
        </Modal23>


      </Cart>
    </div>
  )
}

const Cart = styled.div`
  width: 50%;
  margin: auto;
  
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px 0;
  
`
const Delete = styled.span`
  position: absolute;
  top: 0;
  right: 5px;
  margin: auto;
  font-size: 22px;
  font-weight: 600;
  transition: all ease-in-out 0.2s;
  color: red;
  :hover{
    cursor: pointer;
    transform: rotate(180deg);
    transition: all ease-in-out 0.2s;
  }

`
const Image = styled.img`
  width: 200px;
  margin: auto;
  text-align: center;
  max-width: 100%;

`
const KhuyenMai = styled.div`
  background-color: #F6F6F6;
  padding: 8px;
  border: 1px solid #F6F6F6;
  border-radius: 5px;
`
const NameProduct = styled.p`
  font-size: 20px;
  font-weight: 600;
  /* line-height: 10px; */
  padding: 0;
  margin: 0;

`
const SoLuong = styled.div`
   display: flex;
  gap: 30px;
  font-weight: 600;
  margin:10px auto;
`


const TongTien = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`
const DatHang = styled.button`
  width: 100%;
  background-color: red;
  color:#fff;
  padding: 10px 5px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
`
const ThemSanPhamKhac = styled.button`
  width: 100%;
  color:red;
  padding: 10px 5px;
  border: 1px solid red;
  border-radius: 4px;
  transition: all ease-in-out 0.2s;
  text-transform: uppercase;
  cursor: pointer;
  /* :hover{
    transition: all ease-in-out 0.2s;
    background-color: red;
    color:#fff;
  } */
`
const Modal23 = styled(Modal)`
  .ant-modal-footer{
  display: none;
  
}

`

export default CartPage