import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table, Space, Popconfirm, message, Badge, Dropdown, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import { listProduct, removeProduct } from '../../../api/product';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { listCate, removeCate } from '../../../api/category';
import type { TableColumnsType } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListCatePhone, getListCatePhuKien } from '../../../features/Slide/categoryPhone/catePhone';
import { getListProductById } from '../../../features/Slide/product/product';
// import { useQuery } from 'react-query'
const { Paragraph } = Typography


interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}
interface ExpandedDataType {
    key: React.Key;
    date: string;
    name: string;
    upgradeNum: string;
}



const ListLinhKien = () => {
    const [dataTable, setDataTable] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    const queryClient = new QueryClient();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const listCatePhuKien = useSelector((item: any) => item.categoryPhone.value);

    const category = useSelector((item:any) => item.category.value)
    const product = useSelector((item: any) => item.product.value);
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
        dispatch(getListCatePhuKien(3))
        dispatch(getListProductById(3))
    }, [])

    console.log(product);

    const onRemoveProduct = (id: any) => {
        setConfirmLoading(true);
        message.loading({ content: 'Loading...' });

        setTimeout(() => {
            
            removeProduct(id);
            setConfirmLoading(false);

            message.success({ content: 'Xóa Thành Công!', duration: 2 });

            navigate("/admin/categories")
        }, 1000)
    }


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

    const expandedRowRender = (row: any) => {
        const columns: TableColumnsType<ExpandedDataType> = [
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
        console.log("expandedRow", row);

        var childrenTable = product?.filter((item: any) => item.detailCate === row.id).map((item2: any, index: any) => {
            return {
                key: item2.id,
                id: item2.id,
                name: item2.name,
                image:item2.image,
                description: item2.description,
                saleOffPrice: item2.saleOffPrice,
                categories: item2.categories,
                feature: item2.feature
            }
        })

        return <Table columns={columns} dataSource={childrenTable} pagination={false} />;

    };

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
            <Table
                expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
                columns={columns}
                dataSource={listCatePhuKien} />

        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export default ListLinhKien