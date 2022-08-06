import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table, Space, Popconfirm, Modal, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import { listProduct, removeProduct } from '../../../api/product';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { listCate } from '../../../api/category';

const { Paragraph } = Typography


interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}

type ProductManagerProps = {
    
    // onRemoveProduct: (id:number) => void
}


const ListProduct = () => {

    const [dataTable, setDataTable] = useState([])
    const [category, setCategory] = useState([])
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();




    useEffect(() => {
        const listcategory = async () => {
            const { data } = await listCate();
            console.log(data);

            setCategory(data)
        }
        listcategory();
    }, [])

    const { isLoading, data, error } = useQuery<any>(['Product'], listProduct)
    
    // setProduct(data)

    const onRemoveProduct = (id: any) => {
        setConfirmLoading(true);
        message.loading({ content: 'Loading...' });

        setTimeout(() => {
            
            removeProduct(id);
            setConfirmLoading(false);

            message.success({ content: 'Xóa Thành Công!', duration: 2 });

            navigate("/admin")
        }, 1000)
    }

    const handAn = (id:any) => {
        
    }
    
    const columns: ColumnsType<DataType> = [
       
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: text => <img src={text} alt=""  width={100}/>,


        },
        {
            title: 'Đặc điểm',
            dataIndex: 'feature',
            key: 'feature',
            render: text => <p>{text}</p>,


        },
        {
            title: 'Loại hàng',
            dataIndex: 'categories',
            key: 'categories',
            filters: category.map((item: any) => { return { text: item.name, value: item.id } }),
            onFilter: (value, record: any) => {
                console.log(record.categories);
                console.log(value);
 
                return record.categories == value
            }
        },
        {
            title: 'Giá khuyến mãi',
            dataIndex: 'saleOffPrice',
            key: 'saleOffPrice',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: "Hành Động", key: "action", render: (text, record: any) => (
                <Space align="center" size="middle">
                    <Button style={{ background: "#198754", color: "#fff" }} >
                        <Link to={`/admin/product/edit/${record.id}`} >
                            <span className="text-white">Sửa</span>
                        </Link>

                    </Button>
                   
                    <Popconfirm
                        placement="topRight"
                        title="Bạn Có Muốn Xóa?"
                        okText="Có"
                        cancelText="Không"
                        onConfirm={() => { onRemoveProduct(record.id) }}
                        okButtonProps={{ loading: confirmLoading }}
                    //   onCancel={handleCancel}
                    >
                        <Button type="primary" danger >
                            Xóa
                        </Button>
                    </Popconfirm>

                </Space>
            ),
        }
    ];


    return (
        <>

            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                <Link to="/admin/product/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table loading={isLoading} columns={columns} dataSource={data?.data} />

        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export default ListProduct