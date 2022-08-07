import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  listAllDetail, listCateDetailById } from "../../../api/category";
import { getProductIdCate } from "../../../api/product";
import { login, register } from "../../../api/user";

export const getListCatePhone:any = createAsyncThunk(
    "categoryPhone/getListCatePhone",
    async (user:any ) => {
        try {   
            const {data} = await listCateDetailById(user);
            return data
        } catch (error:any) {
            return error
        }
    }
) 
export const getListCatePhuKien:any = createAsyncThunk(
    "categoryPhone/getListCatePhuKien",
    async (id:any ) => {
        try {   
            const {data} = await listCateDetailById(id);
            return data
        } catch (error:any) {
            return error
        }
    }
)

export const getListCateLinhKien:any = createAsyncThunk(
    "categoryPhone/getListCateLinhKien",
    async (id:any ) => {
        try {   
            const {data} = await listCateDetailById(id);
            return data
        } catch (error:any) {
            return error
        }
    }
)
export const getListCateDetailById:any = createAsyncThunk(
    "categoryPhone/getListCateDetailById",
    async (id:number) => {
        try {   
            const {data} = await listCateDetailById(id);
            return data
        } catch (error:any) {
            return error
        }
    }
) 

export const getAllDetailCate:any = createAsyncThunk(
    "category/getAllDetailCate",
    async (user:any ) => {
        try {   
            const {data} = await listAllDetail(user);
            return data
        } catch (error:any) {
            return error
        }
    }
) 



const categoryPhoneSlice = createSlice({
    name:"categoryPhone",
    initialState:{
        value:[],
        
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getListCatePhone.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(getListCateDetailById.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(getListCatePhuKien.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(getListCateLinhKien.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(getAllDetailCate.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        })
        
        
        
    }
})


export default categoryPhoneSlice