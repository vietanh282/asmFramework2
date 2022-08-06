import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "../../../api/user";

export const signUp:any = createAsyncThunk(
    "user/signup",
    async (user:any, { rejectWithValue } ) => {
        try {   
            const {data} = await register(user);
            return data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    }
) 

export const signIn:any = createAsyncThunk(
    "user/signin",
    async (user:any, { rejectWithValue } ) => {
        try {   
            const {data} = await login(user);
            return data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    }
) 

const userSlide = createSlice({
    name:"user",
    initialState:{
        value:[],
        
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state:any, action:any) => {
            state.value.push(action.payload)
        }),
        builder.addCase(signIn.fulfilled, (state:any, action:any) => {
            state.value = action.payload
        })
    }
})


export default userSlide