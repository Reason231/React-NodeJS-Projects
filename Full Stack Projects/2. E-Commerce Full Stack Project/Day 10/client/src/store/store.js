// This will create the global state that means it will hold the all the application state.
// Why to use Redux ? 
// In larger apps, you often need to share data (like user login info) between multiple components without prop drilling.

// Redux Toolkit helps by:
// Providing a central state for your app (e.g., authentication, cart, theme, etc.)

import { configureStore } from "@reduxjs/toolkit";"@reduxjs/toolkit";
import authReducer from "./auth-slice"
import adminProductsSlice from "./admin/Product-slice"
import shopProductSlice from "./products-slice/index"

const store=configureStore({
    reducer: {
        auth: authReducer,   // naming the slice reducer
        adminProducts:adminProductsSlice,
        shopProducts:shopProductSlice
    }
})

export default store