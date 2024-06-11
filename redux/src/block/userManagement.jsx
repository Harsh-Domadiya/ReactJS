import { createSlice } from "@reduxjs/toolkit";

const userManage = createSlice({
    name:"user",
    initialState:{
        name:"",
        age:"",
        collage:"",
        address:"",
        mobile:""
    },
    reducers:{

    }
})

export default userManage.reducer