import { configureStore } from '@reduxjs/toolkit';
import user from '@/stores/reducers/user';
import app from '@/stores/reducers/app';

const store = configureStore({
    reducer: {
        user,
        app,
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store
