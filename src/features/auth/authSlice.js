import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email:"",
    idToken:"",
    localId:""
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state=action.payload
        }
    }
})

export const {setUser}= authSlice.actions

export default authSlice.reducer