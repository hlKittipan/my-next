import '../styles/globals.css'
import {SessionProvider} from "next-auth/react"
import type {AppProps} from 'next/app'
import {CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from "@/plugins/createEmotionCache";
import {AppHead} from "@/components/layouts/head";
import {ColorModeContext} from "@/components/layouts/navbar";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps }} = props;
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );
    return (
        <SessionProvider session={pageProps.session} refetchInterval={0}>
            <CacheProvider value={emotionCache}>
                <AppHead/>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </CacheProvider>
        </SessionProvider>
    )
}

export default App;
