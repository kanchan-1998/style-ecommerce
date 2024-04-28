import {configureStore} from '@reduxjs/toolkit'
import menuSlice from './menuSlice';
import allProductSlice from './allProductSlice';
import cartProductSlice from './cartProductSlice';


const Store=configureStore({
    reducer:{
        menu:menuSlice.reducer,
        allProduct:allProductSlice.reducer,
        cartProduct:cartProductSlice.reducer
        
    }
})

export default Store;