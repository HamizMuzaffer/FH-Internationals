import { configureStore } from "@reduxjs/toolkit";
import  orderReducer   from "../features/order/orderSlice";
import { useDispatch } from "react-redux";
import { ReduxApi } from "./api/ApiRoutes";

export const store = configureStore({
  reducer: {
    [ReduxApi.reducerPath]: ReduxApi.reducer,
    order: orderReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ReduxApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();