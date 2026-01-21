import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",

    // initialState: {data : null} // direct mutation
    // reducers:{
    //     setUser :(state,action)=>{state.data = action.payload}
    // }

    initialState: null,
    reducers: { // return
        setUser: (state, action) => {
            return action.payload;
        },
        clearUser: () => {
            return null;
        }
    }
})

export const  {setUser ,clearUser} = userSlice.actions;
export default userSlice.reducer;

