import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_verifiyed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdate: (state, action) => {
      return (state = { ...state, ...action.payload });
    },
  },
});

export const { userUpdate } = userSlice.actions;
export default userSlice.reducer;
