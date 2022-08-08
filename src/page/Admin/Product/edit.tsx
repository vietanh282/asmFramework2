import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { useNavigate, useParams } from "react-router-dom";
import { add, editProduct, getProductId, listProduct } from '../../../api/product';
import UploadImage from '../../../component/Product/UploadImage';
import { useQuery } from '@tanstack/react-query';
import { listCate } from '../../../api/category';
import { useDispatch } from 'react-redux';
import { getAllDetailCate, getListCateDetailById } from '../../../features/Slide/categoryPhone/catePhone';
import { getCateNameById } from '../../../features/Slide/category';



const { TextArea } = Input
const { Option } = Select;

const EditProduct = () => {
	const [image, setUploadedImage] = React.useState('')
	const [category, setCategory] = useState([])
	const [imgPreview, setImgPreivew] = useState("")
	const navigate = useNavigate()
	const [listCateDetail, setListCateDetail] = useState([])
	const { id } = useParams();
	const [form] = Form.useForm();
	const dispatch = useDispatch();

	const onHandleAdd = (image: any) => {
		// console.log(image);
		setUploadedImage(image.img)

	}

	const handlerChangeCate = async (e: any) => {
		console.log(e);
		const { payload } = await dispatch(getListCateDetailById(Number(e)))
		setListCateDetail(payload)
	}

	

	useEffect((() => {
		if (id) {
			const getCate = async (id: any) => {
				const { data } = await getProductId(id);
				// console.log(data.image);
				setImgPreivew(data.image);
				form.setFieldsValue(data)
				// onreset(payload)

			}
			getCate(id);
		}

		const listcategory = async () => {
			const { data } = await listCate();
			
			const { payload } = await dispatch(getAllDetailCate())
			// console.log(payload);
			setListCateDetail(payload);
			setCategory(data)
		}
		listcategory();
	}), [])

	const onFinish = async (values: any) => {
		console.log('Success:', values);
		console.log(image);

		try {


			if (Number(values.saleOffPrice) > Number(values.originalPrice)) {
				// values.saleOffPrice = "Mã giảm giá quá lớn"
				message.error("Giá giảm không được > giá cũ")

			}else {
				const data = await editProduct({ ...values, image: image || imgPreview, id })
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
					Sửa sản phẩm 
				</Typography.Title>
			</Breadcrumb>
			<Form
				form={form}
				// name="product"
				initialValues={{}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="on"
				labelCol={{ span: 24 }}
			>
				<Row gutter={16}>

					<Col span={10}>	
						<Form.Item
							name="image"
							// labelCol={{ span: 24 }}
							label="Ảnh sản phẩm"
							// rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
						>
							{/* <Input size="large" /> */}
							<UploadImage img={imgPreview} onAdd={onHandleAdd} />
							
						</Form.Item>
					
					</Col>
					<Col span={14}>
						<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>

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
									<Select style={{ width: '100%' }} size="large" onChange={(e) => handlerChangeCate(e)}>
										{category.map((item: any, index: any) => (
											<Option value={item.id} key={index + 1}>{item.name}</Option>
										))}
									</Select>
								</Form.Item>

							</Col>

							<Col span={12}>
								<Form.Item
									label="Dòng sản phẩm"
									name="detailCate"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										{listCateDetail.map((item: any, index: any) => (
											<Option value={item.id} key={index + 1}>{item.name}</Option>
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

					</Col>

				</Row>
			</Form>
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