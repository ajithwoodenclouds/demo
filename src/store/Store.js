import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    userdata: UserReducer,
  },
});

export default store;
