import { createSlice } from "@reduxjs/toolkit";

const cappuccinoSlice = createSlice({
  name: "cappuccino",
  initialState: [],
  reducers: {
    addCappuccino(state, action) {
      state.push(action.payload);
    },
  },
});

export default cappuccinoSlice.reducer;
export const { addCappuccino } = cappuccinoSlice.actions;
