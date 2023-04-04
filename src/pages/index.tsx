import Image from "next/image";
import styles from "@styles/Home.module.css";
import Layout from "@components/Layout";
import { GetServerSideProps } from "next";
import { getCookieValue } from "@helpers/cookies";
import appConfigs from "@configs/app";
import { setIsAuthed, setToken, setUserData } from "@stores/slices/user";
import { useDispatch } from "react-redux";
import { User } from "@interfaces/user";

export default function Home({ token, user, isAuth }: IndexProps) {
  const dispatch = useDispatch();
  dispatch(setIsAuthed(isAuth));
  dispatch(setToken(token));
  dispatch(setUserData(user));
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}

interface IndexProps {
  token: string;
  user: User;
  isAuth: boolean;
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  ctx
) => {
  const token = getCookieValue(ctx, appConfigs.authTokenKey);
  const user = getCookieValue(ctx, appConfigs.userDataKey);
  const isAuth = getCookieValue(ctx, appConfigs.isAuth);
  return {
    props: {
      token,
      user,
      isAuth,
    },
  };
};
