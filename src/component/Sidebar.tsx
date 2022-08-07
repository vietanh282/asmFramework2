import React, { useEffect } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { listCate } from '../api/category';
import { getCateNameById, getListCategory } from '../features/Slide/category';
import { getAllDetailCate, getListCateDetailById } from '../features/Slide/categoryPhone/catePhone';
import { listProductIdCateDetail } from '../api/product';
import { getProductIdCateDetail } from '../features/Slide/product/product';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



const Sidebar = () => {
  const category = useSelector((item: any) => item.category.value)
  const detailCate = useSelector((item: any) => item.categoryPhone.value)
  console.log(detailCate);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getListCategory());

    dispatch(getAllDetailCate())
  }, [])

  const onClick: MenuProps['onClick'] = async (e) => {
    console.log('click ', e);
    console.log(e.keyPath[0]);
    const { payload } = await dispatch(getProductIdCateDetail(Number(e.keyPath[0])))
    console.log(payload);

  };
  const items: MenuProps['items'] = category?.map((item: any, index: any) =>


    getItem(item.name, item.name, <AppstoreOutlined />,

      detailCate?.filter((item2: any, index2: any) => item2.categories == item.id).map((item3: any, index3: any) =>
        getItem(item3.name, item3.id),
      )
    )


  );

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};


export default Sidebar