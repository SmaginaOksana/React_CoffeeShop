import { createSlice } from "@reduxjs/toolkit";

const rafSlice = createSlice({
  name: "raf",
  initialState: [],
  reducers: {
    addRaf(state, action) {
      state.push(action.payload);
    },
  },
});

export default rafSlice.reducer;
export const { addRaf } = rafSlice.actions;
