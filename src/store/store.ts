import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice/authSlice";
import userReducer from "./features/userSlice/userSlice";
import companyReducer from "./features/companySlice/companySlice";
import categoryReducer from "./features/categorySlice/categorySlice";
import jobReducer from "./features/jobSlice/jobSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    user: userReducer,
    company: companyReducer,
    category: categoryReducer,
    job: jobReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
