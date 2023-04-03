import axios from "axios";
import { getCookieValue } from "@helpers/cookies";
import appConfigs from "@configs/app";

const token = getCookieValue(null, appConfigs.authTokenKey);
const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
  authorization: `Bearer ${token}`,
};
const createApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  headers: headers,
});

export const apiCallPost = (url: string, data: object = {}) => {
  return createApi.post(url, data);
};

export const apiCallGet = (url: string) => {
  return createApi.get(url);
};

interface Params {
  [key: string]: string | number | boolean;
}

export const apiFetchPost = (
  url: string,
  data: object = {},
  withCache = true
) => {
  return fetch(process.env.NEXT_PUBLIC_API_END_POINT + url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
    cache: withCache ? "default" : "no-cache",
  });
};

export const apiFetchGet = (
  url: string,
  data: Params = {},
  withCache = true
) => {
  return fetch(
    process.env.NEXT_PUBLIC_API_END_POINT +
      url +
      convertObjectToQueryString(data),
    {
      method: "GET",
      headers: headers,
      cache: withCache ? "default" : "no-cache",
    }
  );
};

export const convertObjectToQueryString = (params: Params = {}) => {
  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
};
