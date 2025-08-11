import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { formToJSON } from "axios";
import { Axis3D, Trophy } from "lucide-react";
import { act } from "react";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",

  async (formData) => {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      formData,
      { withCredentials: true }
    );
    console.log(response.data);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "/auth/login",

  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData,
        { withCredentials: true }
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log("API Login Error", e);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "/auth/checkauth",

  async () => {
    const response = await axios.get(
      "http://localhost:3000/api/auth/check-auth",
      {
        withCredentials: true,
        headers: {
          "Cache-Control": "no-store,no-cache,must-revalidate,proxy-revalidate",
          Expires: "0",
        },
      }
    );
    return response.data;
  }
);

export const logoutUser=createAsyncThunk(
  "/auth/logout",

  async()=>{
    const response=await axios.post("http://localhost:3000/api/auth/logout",{},{withCredentials:true})
    return response.data
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        console.log("Pending", action.payload);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = action?.payload?.success ? true : false;
        state.user = action?.payload?.success ? action.payload.user : null;
        console.log("Fulfilled", action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        console.log("Rejected", action.payload);
      })
      .addCase(checkAuth.pending,(state)=>{
        state.isLoading=true;
      })
      .addCase(checkAuth.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isAuthenticated=action?.payload?.success ? true:false,
        state.user=action?.payload?.user ? action.payload.user : null
      })
      .addCase(checkAuth.rejected,(state,action)=>{
        state.isLoading=false;
        state.isAuthenticated=false;
        state.user=null
      })
      .addCase(logoutUser.fulfilled,(state,action)=>{
        state.user=null;
        state.isAuthenticated=false;
        state.isLoading=false
      })
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
