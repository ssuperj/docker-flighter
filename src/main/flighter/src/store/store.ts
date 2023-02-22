import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: persistedReducer,
});

export const persister = persistStore(store);
export default store;
