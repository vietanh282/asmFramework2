import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table, Space, Popconfirm, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import { listProduct } from '../../../api/product';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { listCate, removeCate } from '../../../api/category';
// import { useQuery } from 'react-query'
const { Paragraph } = Typography


interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}




const ListCategory = () => {
    const [dataTable, setDataTable] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    const queryClient = new QueryClient();
    const navigate = useNavigate();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const fetchData =  async () => {
        const data = await listProduct()
        console.log(data)
        setDataTable(data.data)
    }

    const onRemoveCate = async (id: any) => {
        setConfirmLoading(true);
        message.loading({ content: 'Loading...' });

        setTimeout(() => {
            
            removeCate(id);
            setConfirmLoading(false);

            message.success({ content: 'Xóa Thành Công!', duration: 2 });

            // navigate("/admin/categories")
        }, 1000)
       
    }

    // fetchData()
    useEffect(() => {        
    
    }, [])

    const {isLoading, data, error} = useQuery<any>(['Product'], listCate)
    console.log(data);
    

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <p>{text}</p>,
        },
       
        {
            title: "Hành Động", key: "action", render: (text, record: any) => (
                <Space align="center" size="middle">
                    <Button style={{ background: "#198754", color: "#fff" }} >
                        <Link to={`/admin/categories/edit/${record.id}`} >
                            <span className="text-white">Sửa</span>
                        </Link>
    
                    </Button>
    
                    <Popconfirm
                        placement="topRight"
                        title="Bạn Có Muốn Xóa?"
                        okText="Có"
                        cancelText="Không"
                        onConfirm={() => { onRemoveCate(record.id) }}
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
                <Link to="/admin/categories/add">
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
export default ListCategory