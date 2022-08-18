import React, { useEffect, useState } from 'react'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { currency } from '../helper/helper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../features/Slide/product/product';
import { getAllProductSeach } from '../features/Slide/searchslice';


const SearchBar = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const listProductSearch2 = useSelector((item:any) => item.searchProduct.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductSeach())
    },[])

    const handleFilter = (event: any) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        
        const newFilter = listProductSearch2.filter((item: any) => {
            // console.log(item.name);
            return item.name.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === "") {
            setFilteredData([])
        } else {
             setFilteredData(newFilter);
          
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    console.log(filteredData);
    
    return (
        <div className="search">
            <div className="searchInputs">
                {/* <input
                    type="text"
                    value={wordEntered}
                    onChange={handleFilter}
                /> */}
                <Input
                    size="large"
                    placeholder=" Search here..."
                    style={{ borderRadius: "10px" }}
                    value={wordEntered}
                    onChange={handleFilter}
                    prefix={filteredData.length === 0 ? (
                        <SearchOutlined />
                    ) : (
                        <CloseOutlined id="clearBtn" onClick={clearInput} />
                    )}
                />

                {/* <div className="searchIcon">
                    {}
                </div> */}

            </div>
            {filteredData.length != 0 && (
                <DataResult onClick={clearInput}>
                    {filteredData.slice(0, 15).map((value: any, key) => {
                        return (
                            <Link to={'../detail/'+ value.id} key={key + 1} style={{ color: "black" }} className="dataItem" >
                                <Product >

                                    <div className='image'>
                                        <img src={value.image} width="70" alt="" style={{ maxWidth: "100%" }} />
                                    </div>

                                    <div className="title">
                                        <p>{value.name} </p>
                                        <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px" }}>
                                            <p style={{ color: "red" }}>{currency(value.saleOffPrice)} ₫</p>
                                            <p style={{ color: "gray", fontSize: "13px" }}>{currency(value.originalPrice)} ₫</p>
                                        </div>
                                    </div>

                                </Product>
                            </Link>
                        );
                    })}
                </DataResult>
            )}
        </div>
    )
}

const DataResult = styled.div`
    width: 420px;
    position: absolute;
    margin-top: 5px;
    background-color: #fff;
   
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    z-index: 1;
`
const Product = styled.div`
    display: flex;
    justify-content: flex-start;
    /* grid-template-columns: 1fr 3fr; */
    gap: 10px;
    padding: 10px;
    border-bottom: 1px solid #F2F2F2;
    :hover{
        background-color: #F2F2F2;
        border-radius: 5px;
    }
`
export default SearchBar