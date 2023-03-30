import * as React from "react";
import type { NextPage } from "next";
import styles from "@styles/Home.module.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Layout, siteTitle } from "@components/layouts";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === `dark` ? `#1A2027` : `#fff`,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: `center`,
  color: theme.palette.text.secondary,
}));

const Home: NextPage = () => {
  return (
    <Layout isHome>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </Layout>
  );
};

export default Home;
