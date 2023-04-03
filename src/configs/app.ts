interface AppConfig {
  apiUrl: string;
  authTokenKey: string;
  userDataKey: string;
  isAuth: string;
  authTokenNearlyExpire: number;
  userProfilesUrl: string;
}

const appConfigs = {
  apiUrl: process.env.NEXT_PUBLIC_API_END_POINT,
  authTokenKey: "accessToken",
  userDataKey: "userData",
  isAuth: "isAuth",
  authTokenNearlyExpire: 86400,
  userProfilesUrl: process.env.NEXT_PUBLIC_USER_PROFILES_LINK,
} as AppConfig;

export default appConfigs;
