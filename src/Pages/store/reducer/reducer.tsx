import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
    fetchUserData: (state) => {
    },
  },
});

export const fetchUserDataAsync = () => async (dispatch) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(setUserData(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const { setUserData, fetchUserData } = dataSlice.actions;

export default dataSlice.reducer;
