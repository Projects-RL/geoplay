import { createSlice } from "@reduxjs/toolkit";

interface ComponentHandling {
  showSignIn: boolean;
}

const initialState: ComponentHandling = {
  showSignIn: false,
};

export const componentHandlingSlice = createSlice({
  name: "componentHandling",
  initialState,
  reducers: {
    handleShowSignIn: (state, action) => {
      state.showSignIn = action.payload;
    },
  },
});

export const { handleShowSignIn } = componentHandlingSlice.actions;

export default componentHandlingSlice.reducer;
