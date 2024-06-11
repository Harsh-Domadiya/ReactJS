import { configureStore } from "@reduxjs/toolkit";
import User from '../block/userManagement'

export const collection = configureStore({ // export and config the store
    reducer:{
        User
    }
})