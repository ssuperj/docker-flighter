import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tokenReducer, userReducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
