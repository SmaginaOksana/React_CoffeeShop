import { createSlice } from "@reduxjs/toolkit";

const espressoSlice = createSlice({
  name: "espresso",
  initialState: {
    name: null,
    count: null,
    price: null,
    image: null,
  },
  reducers: {
    setEspresso(state, action) {
      state.name = action.payload.name;
      state.count = action.payload.count;
      state.price = action.payload.price;
      state.image = action.payload.image;
    },
  },
});

export default espressoSlice.reducer;
export const { setEspresso } = espressoSlice.actions;
