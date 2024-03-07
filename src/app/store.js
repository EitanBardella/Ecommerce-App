import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from "../features/cart/cartSlice"
import authReducer from '../features/auth/authSlice'
//Api
import { shopApi } from './servicies/shop'
import { authApi } from './servicies/auth'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart:cartReducer,
        auth:authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)