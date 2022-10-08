import { createSlice } from '@reduxjs/toolkit';

interface ComponentHandling {
  showSignIn: boolean;
  showSideMenu: boolean;
}

const initialState: ComponentHandling = {
  showSignIn: false,
  showSideMenu: false,
};

export const componentHandlingSlice = createSlice({
  name: 'componentHandling',
  initialState,
  reducers: {
    handleShowSignIn: (state, action: { payload: boolean }) => {
      state.showSignIn = action.payload;
    },
    handleShowSideMenu: (state, action: { payload: boolean }) => {
      state.showSideMenu = action.payload;
    },
  },
});

export const { handleShowSignIn, handleShowSideMenu } =
  componentHandlingSlice.actions;

export default componentHandlingSlice.reducer;
