import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productApi";
import cartReducer from "../redux/slices/cartSlice";
import favoriteReducer from "../redux/slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    favorites: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
