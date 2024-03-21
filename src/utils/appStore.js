import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const appStore = configureStore({
  redcuer:{
    user:userReducer
  }
});
export default appStore;