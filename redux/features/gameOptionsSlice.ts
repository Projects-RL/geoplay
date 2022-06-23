import { createSlice } from "@reduxjs/toolkit";
import { GameOptions } from "../../interfaces";

const initialState: GameOptions = {
    continent: "europe",
    gameMode: "countries",
    ready: false,
    coordinates: {
        lat: 54.46903342326635,
        lng: 17.900952188637117,
    },
    zoom: 3.5,
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
        handleCoords: (state, action) => {
            state.coordinates = action.payload;
        },
        handleZoom: (state, action) => {
            state.zoom = action.payload;
        },
    },
});

export const {
    continentPick,
    gameModePick,
    handleReady,
    handleCoords,
    handleZoom,
} = gameOptionsSlice.actions;

export default gameOptionsSlice.reducer;
