import { configureStore, Action, PreloadedState } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: {
      user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(),
    preloadedState,
  });
}
export type AppStore = ReturnType<typeof setupStore>;

export default store;
