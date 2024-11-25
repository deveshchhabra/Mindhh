import {cartSlice} from "@reduxjs/toolkit"

const cartSlice1=createSlice({
    name:'Feature',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action)
        }
    }
});