import { configureStore } from "@reduxjs/toolkit";
import moboMenuReducer from "../features/moboMenu/moboMenuSlice";

export const store = configureStore({
  reducer: {
    moboMenu: moboMenuReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
});
