import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export default moviesSlice.reducer;
export const{ getMovies } = moviesSlice.actions;