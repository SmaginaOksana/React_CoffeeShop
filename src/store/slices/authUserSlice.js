import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "authUser",
  initialState: {
    name: null,
    email: null,
  },
  reducers: {
    setAuthUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export default authUserSlice.reducer;
export const { setAuthUser } = authUserSlice.actions;
