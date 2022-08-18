import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table, Space, Popconfirm, Modal, message, Input, Tag } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import type { InputRef } from 'antd';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { deleteOrder, getListOrder } from '../../../features/Slide/order';
// import { useQuery } from 'react-query'
const { Paragraph } = Typography


interface DataType {
    name: string;
    phone: string;
    address: string;
    confirmAddress: string;
    listProduct: any;
    status: string;
}

type ProductManagerProps = {

    // onRemoveProduct: (id:number) => void
}


const orderlist = () => {

    // const [dataTable, setDataTable] = useState([])
    const listOrder = useSelector((item: any) => item.order.value)
    const category = useSelector((item: any) => item.categoryPhone.value)
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: any,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: any) => ({

        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
            <div style={{ padding: 8 }}>

                <Input
                    ref={searchInput}
                    placeholder={`Tìm Kiếm ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />

                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Tìm
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Xóa
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Lọc
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value: any, record: any) => {
            return record[dataIndex].toString().toLowerCase().includes((value as string).toLowerCase())
        }

    });
    useEffect(() => {

        // dispatch(getAllDetailCate())
        dispatch(getListOrder())
    }, [])

    console.log(listOrder);

    const dataTable = listOrder.map((item: any, index: number) => {
        return {
            key: index + 1,
            id: item.id,
            name: item.name,
            phone: item.phone,
            address: item.address,
            confirmAddress: item.confirmAddress,
            status: item.status
        }
    })

    const onRemoveProduct = (id: any) => {
        setConfirmLoading(true);
        message.loading({ content: 'Loading...' });

        setTimeout(async () => {

            dispatch(deleteOrder(id))
            setConfirmLoading(false);

            message.success({ content: 'Xóa Thành Công!', duration: 1 });
            await dispatch(getListOrder())
            // navigate("/admin/order")
        }, 1000)

       
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: "key",
            sorter: (a: any, b: any) => a.key - b.key,
            // sorter: (record1, record2) => { return record1.key > record2.key },
            sortDirections: ['descend'],
        },
        {
            title: 'Mã đơn',
            dataIndex: 'id',
            key: "id",
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
            render: text => <p>{text}</p>,
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            render: text => <p>{text}</p>,
        },

        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (_, { status }) => (
                <>
                    {status == "0"
                        ? <Tag color="volcano">Chưa duyệt</Tag>
                        : status == "1"
                            ? <Tag color="geekblue">Đã duyệt</Tag>
                            : status == "2"
                                ? <Tag color="yellow">Đang giao</Tag>
                                : status == "3"
                                ? <Tag color="green">Đã giao</Tag>
                                : status == "4"
                                ? <Tag color="red">Đã hủy</Tag>
                                : ""
                    }


                </>
            ),
        },
        {
            title: "Hành Động", key: "action", render: (text, record: any) => (
                <Space align="center" size="middle">
                    <Button style={{ background: "#198754", color: "#fff" }} >
                        <Link to={`/admin/order/detail/${record.id}`} >
                            <span className="text-white">Chi tiết đơn hàng</span>
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
                <Typography.Title level={2} style={{ margin: "10 0" }}>
                    Danh sách đơn hàng
                </Typography.Title>
               
            </Breadcrumb>
            <Table columns={columns} dataSource={dataTable} />

        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export default orderlist