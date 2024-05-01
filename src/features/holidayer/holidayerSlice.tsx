import { createSlice } from "@reduxjs/toolkit";

interface HolidayerState {
  load: boolean;
  reselect: boolean;
}

const initialState = { reselect: false, load: false } satisfies HolidayerState as HolidayerState;

export const holidayerSlice = createSlice({
  name: "dater",
  initialState,
  reducers: {
    reselect: (state) => {
      if(!state.load)
        state.reselect = true;
    },
    update: (state) => {
      state.load = false;
    },
    finish: (state) => {
      if(!state.reselect)
        state.load = true;
      state.reselect = false;
    },
  },
});

export const { update, finish, reselect } = holidayerSlice.actions;

export const holidayerReducer = holidayerSlice.reducer;
