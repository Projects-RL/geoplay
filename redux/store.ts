import {
  configureStore,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import gameOptionsReducer from "./features/gameOptionsSlice";
import componentHandlingReducer from "./features/componentHandlingSlice";
import userSlice from "./features/userSlice";

const rootReducer = combineReducers({
  gameOptions: gameOptionsReducer,
  componentHandling: componentHandlingReducer,
  userSlice: userSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

/////////////////
// export const createStore = () => {
//   configureStore({
//     reducer: {
//       gameOptions: gameOptionsReducer,
//       componentHandling: componentHandlingReducer,
//       userSlice: userSlice,
//     },
//   });
// };

// export const store = createStore();
/////////////////////
// export const store = configureStore({
//   reducer: {
//     gameOptions: gameOptionsReducer,
//     componentHandling: componentHandlingReducer,
//     userSlice: userSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
