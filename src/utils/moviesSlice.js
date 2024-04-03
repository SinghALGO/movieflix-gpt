import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    popularMovies:[],
    topRatedMovies:[],
    upcomingMovies:[],
    
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.movies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
   
}});
export default moviesSlice.reducer;
export const {addNowPlayingMovies,addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;
