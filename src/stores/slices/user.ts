import {createSlice} from '@reduxjs/toolkit'
import {UserState} from '@/stores/user';
import {RootState} from "@/stores/index";

const initialState: UserState = {
    users: {
        id: 0,
        email:''
    },
    token: '',
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserData(state: UserState, action) {
            state.users = action.payload
        },
        setToken(state: UserState, action) {
            const token = action.payload
            state.token = token
            localStorage.setItem('token', token);
        },
        resetUser(state: UserState) {
            state.users = {
                id: 0,
                email:''
            }
        },
    },
})

export const {setUserData, resetUser, setToken} = userSlice.actions

export default userSlice.reducer;

export const getToken = (state: RootState) => state.userReducers.token
export const getUser = (state: RootState) => state.userReducers.users
