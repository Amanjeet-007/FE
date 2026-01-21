import { createSlice } from "@reduxjs/toolkit";

const authSlice  = createSlice({
    name:"auth",
    initialState:{value:false},
    reducers:{
        authenticated :(state)=>{ state.value = true},
        logout:(state)=>{state.value = false}
    }
})

export const {authenticated} = authSlice.actions;
export default authSlice.reducer;