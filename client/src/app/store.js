import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import favoriteReducer from "../features/favorite/favoriteSlice";
import loginReducer from "../features/login/loginSlice";
import signupReducer from "../features/signup/signupSlice";
import tokenReducer from "../features/token/tokenSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  favoriteReducer,
  loginReducer,
  signupReducer,
  tokenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: { favoriteReducer },
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
