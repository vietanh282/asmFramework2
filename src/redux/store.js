import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/Slide/cart/Cart'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})