import { createSlice } from '@reduxjs/toolkit'
import {UserState} from '@/stores/user';

const initialState = {
    user: undefined
} as UserState

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserData(state, action) {
            state.user = action.payload
        },
        resetState(state) {
            state.user = undefined
        }
    },
})

export const { setUserData, resetState } = userSlice.actions

export default userSlice.reducer;
