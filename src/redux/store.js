import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter.js'
import authSlice from './features/auth.js'
import userReducer from './features/user.js'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        auth:authSlice,
        user:userReducer
    }
})