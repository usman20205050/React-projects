import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        adduser(state, action){
            state.push(action.payload);
        },
        removealluser(state, action){
            return [];
        },
        deleteuser(state, action){
            const id = state.indexOf(action.payload)
            state.splice(id,1)
        }
    }
})
export default userSlice.reducer;
export const {adduser, removealluser , deleteuser} = userSlice.actions;

