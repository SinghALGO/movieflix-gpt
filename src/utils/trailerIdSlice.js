import { createSlice } from "@reduxjs/toolkit";
const trailerIdSlice = createSlice({
  name: "trailerId",
  initialState: {
   trailerVideo: null,
  },
  reducers: {
     addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
  },
  },
});
export default trailerIdSlice.reducer;;
export const{ addTrailerVideo } = trailerIdSlice.actions;