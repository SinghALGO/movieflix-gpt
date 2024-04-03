import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    movieResults: null, 
    movieNames: null
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearch = !state.gptSearch;
    },
    addGptMovie: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  
  },
});
export default gptSlice.reducer;
export const{ toggleGptSearch, addGptMovie } = gptSlice.actions;