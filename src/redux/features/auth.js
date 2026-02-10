import { createSlice } from "@reduxjs/toolkit";

const userStatus = () => {
    try {
        const sessionStr = localStorage.getItem("session");
        if (!sessionStr) return false;

        const data = JSON.parse(sessionStr);
        const now = Date.now();

        // Check if expired
        if (now > data.expiryTime) {
            localStorage.removeItem("session");
            return false;
        }
        return true; // Return only the user object
    } catch (error) {
        return false;
    }
};

const value = userStatus()

const authSlice  = createSlice({
    name:"auth",
    initialState:{value},
    reducers:{
        authenticated :(state)=>{ state.value = true},
        logout:(state)=>{state.value = false}
    }
})

export const {authenticated , logout} = authSlice.actions;
export default authSlice.reducer;