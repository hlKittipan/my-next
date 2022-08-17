import { configureStore } from '@reduxjs/toolkit';
import user from '@/stores/reducers/user';
import app from '@/stores/reducers/app';

const store = configureStore({
    reducer: {
        user,
        app,
    },
});

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

