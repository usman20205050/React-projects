import { createSlice } from "@reduxjs/toolkit";
const todoslice = createSlice({
    name: "todo",
    initialState:[],
    reducers:{
        addtodo(state , action){
            state.push(action.payload);
          
        },
        removetodo(){},
    }
})
export default todoslice.reducer; 
export const {addtodo, removetodo} = todoslice.actions;