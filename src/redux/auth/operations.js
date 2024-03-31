import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (value, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", value);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (value, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", value);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.vessage);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refrish",
  async (_, thunkAPI) => {
    const persisteToken = thunkAPI.getState();
    setAuthHeader(persisteToken.auth.token);
    const response = await axios.get("/users/current");
    return response.data;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const savedToken = state.auth.token;
      return savedToken !== null;
    },
  }
);
