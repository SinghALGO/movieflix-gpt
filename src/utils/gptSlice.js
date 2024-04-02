import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gpt: null,
  },
  reducers: {
    addGpt: (state, action) => {
      state.gpt = action.payload;
    },
  },
});
export default gptSlice.reducer;
export const{ addGpt } = gptSlice.actions;