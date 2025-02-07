import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        userId: null,
        token: null
    },
    reducers: {
        loginUser: (state, action) => {
            const { user, userId, token} = action.payload;
            console.log(user, userId, token)

            state.user = user;
            state.userId = userId;
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

