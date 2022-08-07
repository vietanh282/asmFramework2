import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listCateDetailById } from "../../../api/category";
import { getProductIdCate, listProduct, listProductIdCateDetail } from "../../../api/product";
import { login, register } from "../../../api/user";


export const getAllProduct:any = createAsyncThunk(
    "product/getAllProduct",
    async (user:any ) => {
        try {   
            const {data} = await listProduct(user);
            return data
        } catch (error:any) {
            return error
        }
    }
) 

export const getListProduct:any = createAsyncThunk(
    "product/getListProduct",
    async (user:any ) => {
        try {   
            const {data} = await listCateDetailById(user);
            return data
        } catch (error:any) {
            return error
        }
    }
) 
export const getListProductById:any = createAsyncThunk(
    "product/getListProductById",
    async (id:any ) => {
        try {   
            const {data} = await getProductIdCate(id);
            return data
        } catch (error:any) {
            return error
        }
    }
) 
export const getProductIdCateDetail:any = createAsyncThunk(
    "product/getProductIdCateDetail",
    async (id:any ) => {
        try {   
            const {data} = await listProductIdCateDetail(id);
            return data
        } catch (error:any) {
            return error
        }
    }
) 


const productSlice = createSlice({
    name:"product",
    initialState:{
        value:[],
        
    },
    reducers:{

    },
    extraReducers: (builder) => {
        
        builder.addCase(getAllProduct.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(getListProductById.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(getProductIdCateDetail.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        })
      
        
    }
})


export default productSlice