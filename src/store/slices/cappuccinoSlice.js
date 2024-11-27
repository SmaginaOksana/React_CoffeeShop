import { createSlice } from "@reduxjs/toolkit";

const cappuccinoSlice = createSlice({
  name: "cappuccino",
  initialState: {
    name: null,
    count: null,
    price: null,
    image: null,
  },
  reducers: {
    setCappuccino(state, action) {
      state.name = action.payload.name;
      state.count = action.payload.count;
      state.price = action.payload.price;
      state.image = action.payload.image;
    },
  },
});

export default cappuccinoSlice.reducer;
export const { setCappuccino } = cappuccinoSlice.actions;
