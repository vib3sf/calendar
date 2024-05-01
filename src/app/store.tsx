import { configureStore } from "@reduxjs/toolkit";
import { daterReducer } from "../features/dater/daterSlice";

export const store = configureStore({
  reducer: {
    dater: daterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
