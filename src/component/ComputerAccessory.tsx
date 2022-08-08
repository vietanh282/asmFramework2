import { List } from 'antd'
import React from 'react'
import styled from 'styled-components';
import lk1 from '../asset/images/lk1.png';
import lk2 from '../asset/images/lk2.png';
import lk3 from '../asset/images/lk3.png';
import lk4 from '../asset/images/lk4.png';
import lk5 from '../asset/images/lk5.png';
import lk6 from '../asset/images/lk6.png';
import lk7 from '../asset/images/lk7.png';
import lk8 from '../asset/images/lk8.png';
import lk9 from '../asset/images/lk9.png';
type Props = {}

const ComputerAccessory = (props: Props) => {
      const data = [
        {
            title: 'Title 1',
            image:lk1
        },
        {
            title: 'Title 2',
            image:lk2
        },
        {
            title: 'Title 3',
            image:lk3
        },
        {
            title: 'Title 4',
            image:lk4
        },
        {
            title: 'Title 4',
            image:lk5
        },
        {
            title: 'Title 4',
            image:lk6
        },
        {
            title: 'Title 4',
            image:lk7
        },
        {
            title: 'Title 4',
            image:lk8
        },
        {
            title: 'Title 4',
            image:lk9
        }
    ];
  return (

    <div >
    <Title>LINH KIỆN MÁY TÍNH</Title>
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
                        <PhuKien href="" ><img  src={item.image} alt="" width={100} style={{width:"100%"}} /> </PhuKien>
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
export default ComputerAccessory