import { createSlice } from "@reduxjs/toolkit";

const flatWhiteSlice = createSlice({
  name: "FlatWhite",
  initialState: {
    name: null,
    count: null,
    price: null,
    image: null,
  },
  reducers: {
    setFlatWhite(state, action) {
      state.name = action.payload.name;
      state.count = action.payload.count;
      state.price = action.payload.price;
      state.image = action.payload.image;
    },
  },
});

export default flatWhiteSlice.reducer;
export const { setFlatWhite } = flatWhiteSlice.actions;
