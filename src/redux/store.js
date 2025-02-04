// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer"; // Import your root reducer
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: rootReducer, // Your combined reducers
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Explicitly include redux-thunk
});

export default store;
