import { configureStore } from "@reduxjs/toolkit";
import gameOptionsReducer from "./features/gameOptionsSlice";

export const store = configureStore({
    reducer: {
        gameOptions: gameOptionsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
