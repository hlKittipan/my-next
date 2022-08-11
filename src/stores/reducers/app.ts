import { createSlice } from '@reduxjs/toolkit'
import {AppState} from '@/stores/app';

const initialState = {
    isAuthed: false
} as AppState

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setIsAuthed(state, action) {
            state.isAuthed = action.payload
        }
    },
})

export const { setIsAuthed } = appSlice.actions

export default appSlice.reducer;
