import { message, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getOrderById } from '../../../api/order';
import { getListOrder, orderById, updateOrder } from '../../../features/Slide/order';
import { currency } from '../../../helper/helper';
type FormInputs = {

  status: any,

}
const DetailOrder = () => {

  const [listProductOrder, setListProductOrder] = useState([]);
  const [orderId, setOrderId] = useState<any>({});
  const orders = useSelector((item: any) => item.order.value);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  console.log(orderId);

  useEffect(() => {
    if (id) {
      const listOrder = async () => {
        const { data } = await getOrderById(Number(id));
        // dispatch(getListOrder())
        // console.log(payload);
        setListProductOrder(data.listProduct)
        setOrderId(data)
        reset(data)
      }
      listOrder();
    }
    dispatch(getListOrder())
  }, [])

  const onSubmit: SubmitHandler<FormInputs> = async (item: any) => {
    console.log(item);
    // await onUpdateOrder(data);
    await dispatch(updateOrder({
      id: orderId.id,
      name: orderId.name,
      phone: orderId.phone,
      address: orderId.address,
      confirmAddress: orderId.confirmAddress,
      status: item.status,
      createdAt: orderId.createdAt,
      cartTotal: orderId.cartTotal
    }))

    message.success("Cập nhật đơn hàng thành công !")
    navigate("/admin/order")

  }

  return (
    <div>

      <Detailll className="home-admin">
        <div className="dashboard py-4 px-4 pb-8" >
          <Typography.Title level={2} style={{ margin: "15px 0" }}>
            Chi tiết đơn hàng
          </Typography.Title>

          {/* thong tin  order */}
          <h2 style={{ margin: "auto", textAlign: "center", paddingBottom: "10px" }}>Đơn hàng: {orderId?.id}, Trạng thái: 
            {orderId?.status == "0"
              ? " Chưa duyệt"
              : orderId?.status == "1"
                ? " Đã duyệt"
                : orderId?.status == "2"
                  ? " Đang giao"
                  : orderId?.status == "3"
                    ? " Đã giao"
                    : orderId?.status == "4"
                      ? " Đã hủy"
                      : ""

            }
          </h2>
          <form style={{ background: "#fff", margin: "16px" }} onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-8 " style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: "30px", }}>
              <div className="col-span-7 p-8 don_hang2" style={{ padding: "32px" }}>
                <p className="text-3xl font-bold" style={{ fontSize: "18px", fontWeight: "600" }}>Thông tin giao hàng</p>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", marginTop: "16px", borderBottom: '1px solid #ddd' }}>
                    <p>Họ tên người mua hàng: </p>
                    <p>{orderId?.name}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px", borderBottom: '1px solid #ddd' }}>
                    <p>Số điện thoại: </p>
                    <p>{orderId?.phone}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px", borderBottom: '1px solid #ddd' }}>
                    <p>Địa chỉ: </p>
                    <p>{orderId?.address}</p>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px", borderBottom: '1px solid #ddd' }}>
                    <p>Địa chỉ cụ thể: </p>
                    <p dangerouslySetInnerHTML={{ __html: `${orderId?.confirmAddress}` }}></p>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "16px", borderBottom: '1px solid #ddd' }}>
                    <p>Ngày mua: </p>
                    <p>{orderId?.createdAt}</p>
                  </div>

                  <div>
                    {/* {...register("status", {required:true})} */}
                    <div className="float-right py-4 " style={{ float: "right", padding: "16px 0" }}>
                      <select {...register("status", { required: true })} id="confirmOrder" className="mr-4 h-9 my-auto" style={{ border: '1px solid #000', height: "32px", marginRight: "16px" }}>
                        <option value={1}>Duyệt</option>
                        <option value={2}>Giao hàng</option>
                        <option value={3}>Giao hàng thành công</option>
                        <option value={4}>Hủy đơn</option>
                      </select>
                      <button type="submit" className="btn_thanh_toan2" name="cap_nhat">Cập nhật</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-5 p-8 don_hang2" style={{ padding: "32px" }}>
                <p className="text-3xl font-bold" style={{ fontSize: "18px", fontWeight: "600" }}>Đơn Hàng</p>
                <div>
                  <div className="flex justify-between py-2 mt-4" style={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
                    <p>Sản phẩm </p>
                    <p>Số lượng</p>
                  </div>
                  {listProductOrder?.map((item: any, index: any) => {
                    return (
                      <div className="dl_don_hang" key={index + 1} style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <p><img src={item.image} alt="" width={70} /></p>
                            <div>
                              <p>{item.name} <span className="text-sm font-semibold pl-4"></span></p>
                              <p>{currency(item.price)} đ</p>
                            </div>
                          </div>

                        </div>
                        <p>x<span> {item.quantity}</span></p>

                      </div>
                    )
                  })

                  }


                  <div className="flex justify-between py-2" style={{ display: "flex", justifyContent: "space-between", borderBottom: '1px solid #ddd' }}>
                    <p>Phí vận chuyển</p>
                    <p>30.000 đ</p>
                  </div>
                  <div className="flex justify-between py-2 font-bold" style={{ display: "flex", padding: "8px 0", justifyContent: "space-between", borderBottom: '1px solid #ddd', color: "Red" }}>
                    <p>Tổng</p>
                    <p >{currency(Number(orderId?.cartTotal))} đ</p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p className="font-bold" style={{ fontWeight: "600" }}>Trả tiền mặt khi nhận hàng</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Detailll>

    </div>
  )
}

const Detailll = styled.div`
   
 

 

.don_hang2{
  /* border: 2px solid #3f3f3f; */
   box-shadow: 3px 3px 4px 4px #b8b4b4;
}

.btn_thanh_toan2{
  padding: 5px 10px;
  background-color:#00B0D7 ;
  color: #fff;
  transition: all ease-in-out 0.2s;
  float: right;
  outline: none;
  border: 1px solid #00B0D7;
}
.btn_thanh_toan2:hover{
  /* box-shadow: 1px 1px 2px 2px #b8b4b4; */
  transform: scale(1.1);
  transition: all ease-in-out 0.2s;
}
`
export default DetailOrder