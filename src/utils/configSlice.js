import { createSlice } from "@reduxjs/toolkit";
const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
    supportedLanguages: supportedLanguages,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    changeSupportedLanguages: (state, action) => {
      state.supportedLanguages = action.payload;
    },
  },
});
export default configSlice.reducer;
export const{ changeLanguage, changeSupportedLanguages } = configSlice.actions;