import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducer/reducer";

export const store = configureStore({
  reducer: {
    user: dataReducer,
  },
});
