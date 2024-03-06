import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://mobile-6deec-default-rtdb.firebaseio.com/"}),
    endpoints: (builder)=>({
        //Consulta por todo, no necesita paramentros
        getAllProd:builder.query({
            query:()=>"/products.json"
        }),
        getCategories: builder.query({
            query:()=>"/categories.json"
        })
    })
})

export const {useGetAllProdQuery, useGetCategoriesQuery} = shopApi
