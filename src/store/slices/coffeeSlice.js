import { createSlice } from "@reduxjs/toolkit";

const coffeeSlice = createSlice({
  name: "coffee",
  initialState: [],
  reducers: {
    setCoffee(state, action) {
      return action.payload;
    },
  },
});

export default coffeeSlice.reducer;
export const { setCoffee } = coffeeSlice.actions;
