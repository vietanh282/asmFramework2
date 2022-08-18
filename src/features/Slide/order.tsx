import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCatebyId, listAllDetail, listCate } from "../../api/category";
import { addOrder, editOrder, getOrderById, listOrder, removeOrder } from "../../api/order";


export const addOrder22:any = createAsyncThunk(
    "order/addOrder",
    async (user:any ) => {
        try {   
            const {data} = await addOrder(user);
            return data
        } catch (error:any) {
            return error
        }
    }
) 
export const getListOrder:any = createAsyncThunk(
    "order/getListOrder",
    async (id:any ) => {
        try {   
            const {data} = await listOrder(id);
            return data
        } catch (error:any) {
            return error
        }
    }
) 
export const orderById:any = createAsyncThunk(
    "order/orderById",
    async (id:any ) => {
        try {   
            const {data} = await getOrderById(id);
            return data
        } catch (error:any) {
            return error
        }
    }
)

export const updateOrder:any = createAsyncThunk(
    "order/updateOrder",
    async (id:any ) => {
        try {   
            const {data} = await editOrder(id);
            return data
        } catch (error:any) {
            return error
        }
    }
)

export const deleteOrder:any = createAsyncThunk(
    "order/deleteOrder",
    async (id:any ) => {
        try {   
            const {data} = await removeOrder(id);
            return data
        } catch (error:any) {
            return error
        }
    }
)
const order = createSlice({
    name:"order",
    initialState:{
        value:[],
        
    },
    reducers:{

    },
    extraReducers: (builder) => {
       
        builder.addCase(getListOrder.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(orderById.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        }),
        builder.addCase(addOrder22.fulfilled, (state:any, action:any) => {
            state.value = [...state.value, action.payload]
        }),
        builder.addCase(updateOrder.fulfilled, (state:any, action:any) => {
            state.value = state.value.map((item:any) => item.id === action.payload.id ? action.payload : item)
        }),
        builder.addCase(deleteOrder.fulfilled,  (state:any, action:any) => {
            state.value = state.value.filter((arrow:any) => arrow.id !== action.payload.id);   
        })
        // state.value = state.value.filter((arrow:any) => arrow._id !== action.payload._id);   
        
        
    }
})


export default order