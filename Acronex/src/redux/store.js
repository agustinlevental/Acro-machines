import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import machinesSlicer from "../redux/slices/fetchMachine";

const store = configureStore({
  reducer: combineReducers({
    machinesSlicer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
