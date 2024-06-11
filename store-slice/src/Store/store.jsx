import { configureStore } from "@reduxjs/toolkit";
import slice from '../slice/slice'

export const data = configureStore({
    reducer: {
        slice
    }
})