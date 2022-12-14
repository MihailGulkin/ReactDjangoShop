import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import cart from "./cart/slice";
import productProperties from "./productProperties/slice";
import product from "./productItems/slice";
import filter from "./filters/slice";
import favorite from "./favoriteItem/slice";

import authUser from "./auth/slice";

export const store = configureStore({
  reducer: {
    cart,
    productProperties,
    product,
    filter,
    authUser,
    favorite,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
