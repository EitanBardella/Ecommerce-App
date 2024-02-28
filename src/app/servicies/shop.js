
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shopAPI = createApi({
    reducerPath: 'ShopAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mobile-6deec-default-rtdb.firebaseio.com/'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products.json'
        }),
        getProductsId: builder.query({
            query: (id) => `/products/${id}.json`
        }),
        getProductsByCategory: builder.query({
            query: (category) => `/products.json?orderBy="category"&equalTo=${category}`,
            transformResponse:(rta)=>{
                const data = Object.values(rta);
                return data;
            }
        }),
        getCategories: builder.query({
            query: () => '/categories.json'
        })
    })
});

export const {useGetProductsIdQuery, useGetProductsQuery, useGetProductsByCategoryQuery, useGetCategoriesQuery } = shopAPI;
