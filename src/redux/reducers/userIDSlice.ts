import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserIDProps {
    userID: string;
}

const initialState: UserIDProps = {
    userID: "",
}

export const userIDSlice = createSlice({
    name: "userID",
    initialState,
    reducers: {
        storeUSERID: (state, action: PayloadAction<UserIDProps>) => {
            state.userID = action.payload.userID;
        }
    },
})

export const { storeUSERID } = userIDSlice.actions;
export default userIDSlice.reducer;
