import { createSlice } from "@reduxjs/toolkit";

const rafSlice = createSlice({
  name: "raf",
  initialState: {
    name: null,
    count: null,
    price: null,
    image: null,
  },
  reducers: {
    setRaf(state, action) {
      state.name = action.payload.name;
      state.count = action.payload.count;
      state.price = action.payload.price;
      state.image = action.payload.image;
    },
  },
});

export default rafSlice.reducer;
export const { setRaf } = rafSlice.actions;
