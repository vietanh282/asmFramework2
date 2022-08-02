import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart: [],
        total: 0
    },
    reducers:{
        addCart:(state:any, action:any ) => {
            // state.cart.push(action.payload)
            console.log(action.payload);
            
            localStorage.setItem('cart', JSON.stringify(action.payload) )
        }
    }
})

export const {addCart} = cartSlice.actions
export default cartSlice;