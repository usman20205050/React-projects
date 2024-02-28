import {configureStore}from "@reduxjs/toolkit"
import userSlice from "../reduxSlices/userSlice"
import todoslice from "../reduxSlices/todoslice";
const store = configureStore({
    reducer:{
    users: userSlice,
    todo: todoslice,
    }
})
export  default store ;