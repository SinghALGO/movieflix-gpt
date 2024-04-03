import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import trailerIdReducer from "./trailerIdSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
  reducer:{
    user:userReducer,
    movie:movieReducer,
    gpt:gptReducer,
    trailerId:trailerIdReducer,
  }
});
export default appStore;