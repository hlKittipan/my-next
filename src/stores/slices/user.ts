import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "@stores/states/user";
import { RootState } from "@stores/index";
import { setCookieValue } from "@helpers/cookies";

const initialState: UserState = {
  isAuthed: false,
  users: {
    id: 0,
    email: "",
  },
  token: "",
  isShowSignInModalForm: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setIsAuthed(state, action) {
      state.isAuthed = action.payload;
    },
    setUserData(state: UserState, action) {
      state.users = action.payload;
      setCookieValue(null, "user", action.payload, true);
    },
    setToken(state: UserState, action) {
      const token = action.payload;
      state.token = token;
      setCookieValue(null, "token", token);
    },
    resetUser(state: UserState) {
      state.isAuthed = false;
      state.users = {
        id: 0,
        email: "",
      };
    },
    toggleShowSignInFormModal(state: UserState) {
      state.isShowSignInModalForm = !state.isShowSignInModalForm;
    },
  },
});

export const {
  setUserData,
  resetUser,
  setToken,
  setIsAuthed,
  toggleShowSignInFormModal,
} = userSlice.actions;

export default userSlice.reducer;

export const getToken = (state: RootState) => state.user.token;
export const getUser = (state: RootState) => state.user.users;
export const getIsAuthed = (state: RootState) => state.user.isAuthed;
export const getIsShowSignInFormModal = (state: RootState) =>
  state.user.isShowSignInModalForm;
