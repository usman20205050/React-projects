import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"users",
    initialState:{
        value:"i am baba",
    },
    reducers:{
        adduser(state ,actions){
          
        },
        removeuser(state, actions){},
        deleteuser(state, actions){},
    }
})
export default userSlice.reducer;
export const  { adduser, removeuser, deleteuser} = userSlice.actions
