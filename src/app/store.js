import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from "../features/cart/cartSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopAPI } from './servicies/shop'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart:cartReducer,
        [shopAPI.reducerPath]: shopAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopAPI.middleware),
})

setupListeners(store.dispatch)