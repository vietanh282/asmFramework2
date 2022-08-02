import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { useNavigate } from "react-router-dom";
import { add } from '../../../api/product';
import UploadImage from '../../../component/Product/UploadImage';
import { addCate, listCate } from '../../../api/category';
const { TextArea } = Input
const { Option } = Select;
const AddCategory = () => {
  const [category, setCategory] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    const listcategory = async () => {
      const { data } = await listCate();
      console.log(data);

      setCategory(data)
    }
    listcategory();
  }, [])
  const onFinish = async (values:any) => {
    console.log('Success:', values);

    try {

      const data = await addCate({ ...values })
      // console.log(data);

      message.success("Tạo mới thành công");
      navigate("/admin/categories")


      // navigate(-1)
    } catch (err) {
      message.error("Có lỗi xảy ra")
    }
  };
  // console.log(uploadedImage);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Thêm mới
        </Typography.Title>
      </Breadcrumb>
      <Row gutter={24}>

        <Col span={24}>
          <Typography.Title level={5}>Thông tin loại hàng</Typography.Title>
          <Form
            // name="product"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            labelCol={{ span: 24 }}
          >
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên loại hàng"
              rules={[{ required: true, message: 'Tên loại hàng không được trống' }]}
            >
              <Input size="large" />
            </Form.Item>


            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới sản phẩm
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.div`
	font-size: 13px;
`

export default AddCategory