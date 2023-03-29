import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "@stores/app";
import { RootState } from "@stores/index";

const initialState: AppState = {
  isAuthed: false,
  accessToken: {
    accessToken: "",
  },
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setIsAuthed(state, action) {
      state.isAuthed = action.payload;
    },
  },
});

export const { setIsAuthed } = appSlice.actions;
export const getIsAuthed = (state: RootState) => state.appReducers.isAuthed;
export default appSlice.reducer;
