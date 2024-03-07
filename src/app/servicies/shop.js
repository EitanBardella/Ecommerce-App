import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
    reducerPath:"shopApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://mobile-6deec-default-rtdb.firebaseio.com/"}),
    endpoints: (builder)=>({
        //Consulta por todo, no necesita paramentros 
        getAllProd:builder.query({
            query:()=>"/products.json"
        }),
        //Consulta para traer prod por id
        getProdById:builder.query({
            query:(id)=>`/products.json?orderBy="id"&equalTo="${id}"`,
            transformResponse:(response)=>{
                const data = Object.values(response)
            }
        }),
        //Consulta para traer todas las categorias
        getCategories: builder.query({
            query:()=>"/categories.json"
        }),
        //Consulta para traer los prod por categoria NO FUNCIONA
        getProdByCategory:builder.query({
            query:(category)=>`/products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse:(response)=>{  
                const data = Object.values(response)
            }
        })
    })
})

export const {useGetAllProdQuery,useGetProdByIdQuery, useGetCategoriesQuery, useGetProdByCategoryQuery} = shopApi
