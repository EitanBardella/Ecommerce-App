import { createSlice } from '@reduxjs/toolkit'


//Inicial Counter
const initialState = {
    items:[],
    total:0
}

export const carteSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItem:(state, action)=>{
            const index = state.items.findIndex((item)=>item.id === action.payload)
            if (index === -1){
                state.items=[...state.items, {...action.payload,quantity:1}]
            }else{
                state.items = state.items.map((item)=>{
                    if (item.id === action.payload.id){
                        return { ...item, quantity: item.quantity + 1}
                    }
                })
            }
            state.items=[...state.items, action.payload];
            state.total=state.items.reduce((acc, item) => acc + item.price, 0);
            console.log(state)
        },
        deleteCartItem:(state,action)=>{
            state.items= state.items.filter((item)=> item.id !== action.payload);
            state.total=state.items.reduce((acc, item) => acc + item.price, 0);
        }
    }
})


export const {addCartItem, deleteCartItem} = carteSlice.actions

export default carteSlice.reducer