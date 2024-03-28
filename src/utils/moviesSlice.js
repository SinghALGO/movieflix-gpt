import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export default moviesSlice.reducer;
export const {addNowPlayingMovies} = moviesSlice.actions;