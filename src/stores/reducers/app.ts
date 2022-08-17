import { createSlice } from '@reduxjs/toolkit'
import {AppState} from '@/stores/app';
import {RootState} from "@/stores/index";

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

export const getIsAuthed = (state: RootState) => state.app.isAuthed
