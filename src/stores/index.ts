import { configureStore } from "@reduxjs/toolkit";
import user from "@stores/slices/user";

const store = configureStore({
  reducer: {
    user,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
