import { createSlice } from "@reduxjs/toolkit";

const latteSlice = createSlice({
  name: "latte",
  initialState: [],
  reducers: {
    addLatte(state, action) {
      state.push(action.payload);
    },
  },
});

export default latteSlice.reducer;
export const { addLatte } = latteSlice.actions;
