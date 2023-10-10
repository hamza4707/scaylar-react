import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/favorite/favoriteSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import thunk from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: { favoriteReducer },
  // reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

// export const persistor = persistStore(store);
