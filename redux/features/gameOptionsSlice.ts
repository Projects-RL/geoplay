import { createSlice } from "@reduxjs/toolkit";

export interface GameOptions {
    continent: string;
    gameMode: string;
    ready: boolean;
}

const initialState: GameOptions = {
    continent: "europe",
    gameMode: "countries",
    ready: false,
};

export const gameOptionsSlice = createSlice({
    name: "gameOptions",
    initialState,
    reducers: {
        continentPick: (state, action) => {
            state.continent = action.payload;
        },
        gameModePick: (state, action) => {
            state.gameMode = action.payload;
        },
        handleReady: (state, action) => {
            state.ready = action.payload;
        },
    },
});

export const { continentPick, gameModePick, handleReady } =
    gameOptionsSlice.actions;

export default gameOptionsSlice.reducer;
