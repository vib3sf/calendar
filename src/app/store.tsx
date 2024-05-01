import { configureStore } from "@reduxjs/toolkit";
import { daterReducer } from "../features/dater/daterSlice";
import { holidayerReducer } from "../features/holidayer/holidayerSlice";

export const store = configureStore({
  reducer: {
    dater: daterReducer,
    holidayer: holidayerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
