import { configureStore } from "@reduxjs/toolkit";
import valueReducer from './createSlice'
export const store = configureStore({
    reducer: {
        name: valueReducer,
    }
})