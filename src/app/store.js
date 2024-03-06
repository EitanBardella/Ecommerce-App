import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from "../features/cart/cartSlice"

//Api
import { shopApi } from './servicies/shop'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart:cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)