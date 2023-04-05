import { PropsWithChildren, useEffect } from "react";
import appConfigs from "@configs/app";
import { getCookieValue } from "@helpers/cookies";
import { setIsAuthed, setToken, setUserData } from "@stores/slices/user";
import { useDispatch } from "react-redux";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadUserFromCookies() {
      const token = await getCookieValue(null, appConfigs.authTokenKey);
      const user = await getCookieValue(null, appConfigs.userDataKey, true);
      const isAuth = await getCookieValue(null, appConfigs.isAuthKey);
      if (isAuth) {
        dispatch(setIsAuthed(isAuth));
        dispatch(setToken(token));
        dispatch(setUserData(user));
      }
    }
    loadUserFromCookies();
  }, []);
  return <>{children}</>;
};
