import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tokenReducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  token: tokenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
