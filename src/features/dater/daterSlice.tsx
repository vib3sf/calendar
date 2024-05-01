import { createSlice } from "@reduxjs/toolkit";

interface DaterState {
  value: string;
}

const initialState = { value: new Date().toDateString() } satisfies DaterState as DaterState;

export const daterSlice = createSlice({
  name: "dater",
  initialState,
  reducers: {
    select: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { select } = daterSlice.actions;

export const daterReducer = daterSlice.reducer;
