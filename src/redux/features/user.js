import { createSlice } from "@reduxjs/toolkit";

const userInfo = (()=>{
    try{
        const Info = JSON.parse(localStorage.getItem('session'))
        if(!Info){ return null}
        const now = Date.now();

        if (now > Info.expiryTime) {
            return null;
        }
        return Info.user
    }catch(err){
        return null
    }
})()

const userSlice = createSlice({
    name: "user",

    // initialState: {data : null} // direct mutation
    // reducers:{
    //     setUser :(state,action)=>{state.data = action.payload}
    // }

    initialState: userInfo,
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

