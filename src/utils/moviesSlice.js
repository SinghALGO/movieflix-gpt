import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    popularMovies:[],
    topRatedMovies:[],
    upcomingMovies:[],
    movieInfo:[],
    castInfo:[]
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
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    addCastInfo: (state, action) => {
      state.castInfo = action.payload;
    },
   
}});
export default moviesSlice.reducer;
export const {addNowPlayingMovies,addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieInfo, addCastInfo} = moviesSlice.actions;
