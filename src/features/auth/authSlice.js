import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
    idToken: "",
    localId: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { email, idToken, localId } = action.payload;
            state.email = email;
            state.idToken = idToken;
            state.localId = localId;
            console.log(state);
        },
        clearUser: (state) => {
            state.email = "";
            state.idToken = "";
            state.localId = "";
        }
    }
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     email:"",
//     idToken:"",
//     localId:""
// }

// export const authSlice = createSlice({
//     name:"auth",
//     initialState,
//     reducers:{
//         setUser:(state,action)=>{
//             state=action.payload
//             console.log(state)
//         },
//         clearUser:(state) => state = {email:"", idToken:"", localId:""}
//     }
// })

// export const {setUser,clearUser}= authSlice.actions

// export default authSlice.reducer