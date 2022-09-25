import { createSlice } from "@reduxjs/toolkit";
import { Coords, GameOptions } from "../../interfaces";

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
    continentPick: (state, action: { payload: string }) => {
      state.continent = action.payload;
    },
    // gameModePick: (state, action: { payload: string }) => {
    //   state.gameMode = action.payload;
    // },
    handleReady: (state, action: { payload: boolean }) => {
      state.ready = action.payload;
    },
    handleCoords: (state, action: { payload: Coords }) => {
      state.coordinates = action.payload;
    },
    handleZoom: (state, action: { payload: number }) => {
      state.zoom = action.payload;
    },
  },
});

export const {
  continentPick,
  //   gameModePick,
  handleReady,
  handleCoords,
  handleZoom,
} = gameOptionsSlice.actions;

export default gameOptionsSlice.reducer;
