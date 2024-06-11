import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Harsh",

    initialState: {
        firstName: "Harsh",
        lastName: "Domadiya",
        email: 'harshdomadia19@gmail.com',
        phoneNumber: '+447532086890'
    },

    reducers: {
        change(state, Harsh) {
            state.firstName = Harsh.payload
        }
    }
})

export const kaju = slice.actions.change

export default slice.reducer