import { configureStore } from "@reduxjs/toolkit";
import gameOptionsReducer from "./features/gameOptionsSlice";
import componentHandlingReducer from "./features/componentHandlingSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    gameOptions: gameOptionsReducer,
    componentHandling: componentHandlingReducer,
    userSlice: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
