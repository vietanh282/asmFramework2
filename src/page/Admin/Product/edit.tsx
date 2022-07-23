import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { useNavigate, useParams } from "react-router-dom";
import { add, editProduct, getProductId, listProduct } from '../../../api/product';
import UploadImage from '../../../component/Product/UploadImage';
import { useQuery } from '@tanstack/react-query';
import { listCate } from '../../../api/category';



const { TextArea } = Input
const { Option } = Select;

const EditProduct = () => {
	const [image, setUploadedImage] = React.useState('')
	const [category, setCategory] = useState([])
	const navigate = useNavigate()

	const { id } = useParams();
	const [form] = Form.useForm();

	const onHandleAdd = (image: any) => {
		// console.log(image);
		setUploadedImage(image.img)

	}

	useEffect((() => {
		const imgPreview = document.getElementById("imgPreview");
		const imgPost = document.getElementById("file-upload");

		if (id) {
			const getCate = async (id: any) => {
				const { data } = await getProductId(id);
				console.log(data.image);
				form.setFieldsValue(data)
				// onreset(payload)

			}
			getCate(id);
		}
	}), [])
	useEffect(() => {
		const listcategory = async () => {
			const { data } = await listCate();
			console.log(data);

			setCategory(data)
		}
		listcategory();
	}, [])
	const onFinish = async (values: any) => {
		console.log('Success:', values);
		console.log(image);

		try {


			if (Number(values.saleOffPrice) > Number(values.originalPrice)) {
				// values.saleOffPrice = "Mã giảm giá quá lớn"
				message.error("Giá giảm không được > giá cũ")



			} else if (!image) {
				message.error("Bạn chưa chọn ảnh")
			} else {
				const data = await editProduct({ ...values, image, id })
				// console.log(data);
				message.success("Cập nhật thành công");
				navigate("/admin")
			}

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
			<Row gutter={16}>
				<Col span={10}>

					<UploadImage onAdd={onHandleAdd} />

					{/* <UploadTest/> */}
				</Col>
				<Col span={14}>
					<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
					<Form
						form={form}
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
							label="Tên sản phẩm"
							rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="originalPrice"
									label="Giá gốc"
									labelCol={{ span: 24 }}

									rules={[{ required: true, message: 'Không được để trống' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá giảm"
									labelCol={{ span: 24 }}

									rules={[{ required: true, message: 'Không được để trống' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />

								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Phân loại"
									name="categories"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										{category.map((item: any) => (
											<Option value={item.name}>{item.name}</Option>
										))}
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							name="feature"
							labelCol={{ span: 24 }}
							label="Đặc điểm nổi bật"
							rules={[{ required: true, message: 'Đặc điểm sản phẩm' }]}
						>
							<TextArea name="feature" />
						</Form.Item>
						<Form.Item
							name="description"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
						>
							<TextArea name="description" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Cập nhật sản phẩm
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

export default EditProduct