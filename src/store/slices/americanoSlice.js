import { createSlice } from "@reduxjs/toolkit";

const americanoSlice = createSlice({
  name: "americano",
  initialState: {
    name: null,
    count: null,
    price: null,
    image: null,
  },
  reducers: {
    setAmericano(state, action) {
      state.name = action.payload.name;
      state.count = action.payload.count;
      state.price = action.payload.price;
      state.image = action.payload.image;
    },
  },
});

export default americanoSlice.reducer;
export const { setAmericano } = americanoSlice.actions;
