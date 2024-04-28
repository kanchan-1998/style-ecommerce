import {createSlice} from '@reduxjs/toolkit'

const cartProductSlice=createSlice({
    name:"cartProduct",
    initialState:{},
    reducers:{
        addToCart:(state,action)=>{
            if(action.payload in state){
                state[action.payload]=state[action.payload]+1
            }else{
                state[action.payload]=1
            }
        },
        removeFromCart:(state,action)=>{
            if(action.payload in state){
                state[action.payload]=state[action.payload]-1
            }
        }
    }
})

export const cartProductAction=cartProductSlice.actions
export default cartProductSlice;