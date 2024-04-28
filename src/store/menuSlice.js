import { createSlice } from "@reduxjs/toolkit";

const menuSlice=createSlice({
    name:"menu",
    initialState:"Shop",
    reducers:{
        toggle:(state,action)=>{
            return action.payload
        }
    }
})

export const menuAction=menuSlice.actions;
export default menuSlice;