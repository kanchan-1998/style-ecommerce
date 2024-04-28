import {createSlice} from '@reduxjs/toolkit'
import allProduct from '../components/Assets/all_product'

const allProductSlice=createSlice({
    name:"allProduct",
    initialState:allProduct,
})

export default allProductSlice;