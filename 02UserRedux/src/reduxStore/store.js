import {configureStore}from "@reduxjs/toolkit"
import userSlice from "../reduxSlices/userSlice"
const store = configureStore({
    reducer:{
    users: userSlice,
    }
})
export  default store ;