import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listCateDetailById } from "../../../api/category";
import { getProductIdCate } from "../../../api/product";
import { login, register } from "../../../api/user";

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


const productSlice = createSlice({
    name:"product",
    initialState:{
        value:[],
        
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getListProductById.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        })
      
        
    }
})


export default productSlice