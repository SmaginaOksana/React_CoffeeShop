import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    id: [],
  },
  reducers: {
    setBasket(state, action) {
      state.items = Object.values(action.payload);
      state.id = Object.keys(action.payload);
    },
  },
});

export default basketSlice.reducer;
export const { setBasket } = basketSlice.actions;
