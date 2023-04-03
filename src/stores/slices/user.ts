import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "@stores/states/user";
import { RootState } from "@stores/index";
import { deleteCookieValue, setCookieValue } from "@helpers/cookies";
import appConfigs from "@configs/app";

const initialState: UserState = {
  isAuthed: false,
  users: {
    id: 0,
    email: "",
    username: "",
    name: "",
    lastName: "",
  },
  token: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setIsAuthed(state, action) {
      state.isAuthed = action.payload;
      setCookieValue(null, appConfigs.isAuth, action.payload);
    },
    setUserData(state: UserState, action) {
      state.users = action.payload;
      setCookieValue(null, appConfigs.userDataKey, action.payload, true);
    },
    setToken(state: UserState, action) {
      const token = action.payload;
      state.token = token;
      setCookieValue(null, appConfigs.authTokenKey, token);
    },
    resetUser(state: UserState) {
      state.isAuthed = false;
      state.users = { email: "", id: 0, lastName: "", name: "", username: "" };
      deleteCookieValue(null, appConfigs.userDataKey);
      deleteCookieValue(null, appConfigs.authTokenKey);
      deleteCookieValue(null, appConfigs.isAuth);
    },
  },
});

export const { setUserData, resetUser, setToken, setIsAuthed } =
  userSlice.actions;

export default userSlice.reducer;

export const getToken = (state: RootState) => state.user.token;
export const getUser = (state: RootState) => state.user.users;
export const getIsAuthed = (state: RootState) => state.user.isAuthed;
