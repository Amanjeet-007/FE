import { createSlice } from "@reduxjs/toolkit";
import { Vault } from "lucide-react";

const counterSlice = createSlice(
    {   
        name:"counter",
        initialState :{value:0},
        reducers:{
            increment: (el)=>{el++},
            decrement:(el)=>{el--}
        }
    }
)

export const {increment,decrement} = counterSlice.actions
export default counterSlice