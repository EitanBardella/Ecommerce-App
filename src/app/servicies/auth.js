import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath:"auth",
    baseQuery: fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/"}),
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(user)=>({
                url: "accounts:signUp?key=AIzaSyC_f_yeEL8CSubBvhyw62MqZicUozhsQ_Y",
                method:"POST",
                body:user
            })
        })
    })
})

export const {useRegisterMutation} = authApi