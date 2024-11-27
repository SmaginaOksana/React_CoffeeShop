import { createSlice } from "@reduxjs/toolkit";

const latteSlice = createSlice({
  name: "latte",
  initialState: {
    name: null,
    count: null,
    price: null,
    image: null,
  },
  reducers: {
    setLatte(state, action) {
      state.name = action.payload.name;
      state.count = action.payload.count;
      state.price = action.payload.price;
      state.image = action.payload.image;
    },
  },
});

export default latteSlice.reducer;
export const { setLatte } = latteSlice.actions;
