import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import gameOptionsReducer from './features/gameOptionsSlice';
import componentHandlingReducer from './features/componentHandlingSlice';

export const rootReducer = combineReducers({
  gameOptions: gameOptionsReducer,
  componentHandling: componentHandlingReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
