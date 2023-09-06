import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice/authSlice";
import userReducer from "./features/userSlice/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
