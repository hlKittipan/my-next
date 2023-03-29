import { configureStore } from '@reduxjs/toolkit';
import userReducers from '@stores/slices/user';
import appReducers from '@stores/slices/app';

const store = configureStore({
    reducer: {
        userReducers,
        appReducers,
    },
    devTools: process.env.NODE_ENV === "development"
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

