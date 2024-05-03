import { createSlice } from "@reduxjs/toolkit";
import { HolidayDTO } from "../../models/holiday.dto";

interface HolidayerState {
  holidays: Array<HolidayDTO>;
  load: boolean;
  reselect: boolean;
}

const initialState = { reselect: false, load: false, holidays: [] } satisfies HolidayerState as HolidayerState;

export const holidayerSlice = createSlice({
  name: "holidayer",
  initialState,
  reducers: {
    reselect: (state) => {
      if(!state.load)
        state.reselect = true;
      state.load = false;
    },
    finish: (state, action) => {
      if(!state.reselect) {
        state.load = true;
        state.holidays = action.payload;
      }
      state.reselect = false;
    },
  },
});

export const { finish, reselect } = holidayerSlice.actions;

export const holidayerReducer = holidayerSlice.reducer;
