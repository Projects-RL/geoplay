import { configureStore } from "@reduxjs/toolkit";
import gameOptionsReducer from "./features/gameOptionsSlice";

export const store = configureStore({
    reducer: {
        gameOptions: gameOptionsReducer,
    },
});
