import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/index"
import adminProductSlice from "./admin/Product-slice";

export const store=configureStore({
    reducer: {
        auth:authReducer,
        adminProducts:adminProductSlice
    }
})

export default store