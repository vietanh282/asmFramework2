import { List } from 'antd'
import React from 'react'
import styled from 'styled-components';
import imageProduct from '../asset/images/pk3.png';
import imageproduct from '../asset/images/pk2.png';
type Props = {}

const Accessory = (props: Props) => {
      const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 4',
        }
    ];
  return (

    <div >
    <Title>PHỤ KIỆN</Title>
    <List 
        grid={{
            gutter: 10,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 10,
            xxl: 10,
        }}
        
        dataSource={data} 
        renderItem={(item:any) => (
            <List.Item >
                
                <div>
                    <div style={{textAlign:"center"}}>
                        <PhuKien href="" ><img  src={imageProduct} alt="" width={100} style={{width:"100%"}} /> </PhuKien>
                        <NamePhuKien className='title'>Nổi bật</NamePhuKien>
                    </div>
                </div>
            </List.Item>
        )}
    />
</div>
  )
}
const Title = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
`
const PhuKien = styled.a`
    position: relative;
`
const NamePhuKien = styled.div`
    position: absolute;
    color: #fff;
    margin: auto;
    top: 3%;
    left: 12%;
   /* left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto; */
`  
export default Accessory