import { createSlice } from "@reduxjs/toolkit";

interface UserHandling {
  isLoggedIn: boolean;
}

const initialState: UserHandling = {
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    handleIsLoggedIn: (state, action: { payload: boolean }) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { handleIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
