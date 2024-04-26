import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
console.log('URL base:', "https://identitytoolkit.googleapis.com/v1/");

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/"}),
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(user)=>({
                url: "accounts:signUp?key=AIzaSyCk0hcmgCxqYT1uv8g9kmOf_uGbCIS4fnM",
                method:"POST",
                body:user
            })
        }),
        login:builder.mutation({
            query:(user) =>({
                url:"accounts:signInWithPassword?key=AIzaSyCk0hcmgCxqYT1uv8g9kmOf_uGbCIS4fnM",
                method:"POST",
                body:user
            })
        })
    })
})

export const {useRegisterMutation, useLoginMutation} = authApi