import axios from "axios";
import { getCookieValue } from "@helpers/cookies";
import appConfigs from "@configs/app";

const token = getCookieValue(null, appConfigs.authTokenKey);

const createApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    authorization: `Bearer ${token}`,
  },
});

// createApi.interceptors.request.use(
//   (config) => {
//     const token = getCookieValue(null, appConfigs.authTokenKey);
//     if (token) {
//       config.headers = {
//         ...config.headers,
//         authorization: `Bearer ${token}`,
//       };
//     }
//
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const apiCallPost = (url: string, data: object = {}) => {
  return createApi
    .post(url, data)
    .catch((error) => console.log(error.response));
};

export const apiCallGet = (url: string) => {
  return createApi.get(url);
};
