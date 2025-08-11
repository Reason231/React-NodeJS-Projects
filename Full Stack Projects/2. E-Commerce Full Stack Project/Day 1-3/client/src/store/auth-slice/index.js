// A slice is a piece of your application state and the logic to handle.
// You can have authSlice for login/logout.
// Each slice contains:
// 1. initialState: the default values
// 2. reducers: functions to update the state
// 3. actions: auto-generated functions you can use in components
// 4. reducer: the logic that updates the Redux store


import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    isAuthenticated:false,
    isLoading:false,
    user:null
}

const authSlice=createSlice({
    name:"auth",  // this name will be used in the store.js
    initialState,
    reducers:{    // reducer => functions that change the state
        // setUser will be a function that can update User and isAuthenticated based on data
        setUser:(state,action) => {

        }
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer  // authSlice.reducer: will be added to the Redux store