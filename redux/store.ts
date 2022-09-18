import { configureStore } from "@reduxjs/toolkit";
import gameOptionsReducer from "./features/gameOptionsSlice";
import componentHandlingReducer from "./features/componentHandlingSlice";

export const store = configureStore({
  reducer: {
    gameOptions: gameOptionsReducer,
    componentHandling: componentHandlingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
