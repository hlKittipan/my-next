import router from "next/router";

export const redirect = (url: string) => {
  return router.push(url);
};

export const redirectHomePage = async () => {
  await redirect("/");
};

export const reload = () => {
  return router.reload();
};
