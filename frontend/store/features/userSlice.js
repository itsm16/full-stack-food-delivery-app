import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        loginUser: (state, action) => {
            const { user, token} = action.payload;
            console.log(user, token)

            state.user = user;
            state.token = token;
        },

        logOutUser: (state) => {
            state.user = null;
            state.token = null; 
        }
    }

})

export const { loginUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;

