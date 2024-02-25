import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        user:{
            username:"usman",
            password:"4321",
            email:"email.com"
        }
    },
      reducers:{
        addnum: (state, action)=>{
            state.user.username;
        },
        subnum: (state, action)=>{
            state.user.password;
        }
    }
    
})
export  const {addnum, subnum} = counterSlice.actions;
export default counterSlice.reducer;