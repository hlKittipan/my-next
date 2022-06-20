import * as React from 'react';
import type {NextPage} from 'next'
import styles from '@/styles/Home.module.css'
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import {Layout, siteTitle} from "@/components/layouts";
import Box from '@mui/material/Box';
import { getSession } from "next-auth/react";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home: NextPage = () => {
    return (
        <Layout isHome>
            <main className={styles.main}>

                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <Box>
                    <p className={styles.description}>
                            Get started by editing{' '}

                        <code>pages/index.tsx</code>
                    </p>
                </Box>

                <div className={styles.grid}>

                    <div className={styles.card}>
                        <Link href="/posts/list">
                            <h2>Post &rarr;</h2>
                        </Link>
                    </div>

                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h2>Examples &rarr;</h2>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h2>Deploy &rarr;</h2>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>
        </Layout>
    )
}

export default Home

export async function getServerSideProps(ctx: any) {
    return {
        props: {
            session: await getSession(ctx)
        }
    }
}
