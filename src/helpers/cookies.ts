import nookies from "nookies";
import * as next from "next";

export const setCookieValue = (
  ctx: Pick<next.NextPageContext, "res"> | null,
  key: string,
  value: string,
  json: boolean = false
) => {
  const convertedValue = json ? JSON.stringify(value) : value;
  return nookies.set(ctx, key, convertedValue, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
    sameSite: "none",
    secure: process.env.NODE_ENV === "production", // Only set this to false if you're developing locally over HTTP
  });
};

export const getCookieValue = (
  ctx: Pick<next.NextPageContext, "req"> | null,
  key: string,
  json: boolean = false
) => {
  const cookies = nookies.get(ctx);
  const result = cookies[key];
  return json && result ? JSON.parse(result) : result;
};

export const deleteCookieValue = (
  ctx: Pick<next.NextPageContext, "res"> | null,
  key: string
) => {
  return nookies.destroy(ctx, key);
};
