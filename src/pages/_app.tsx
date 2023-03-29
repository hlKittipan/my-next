import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from "@plugins/createEmotionCache";
import {AppHead} from "@components/layouts/head";
import {ColorModeContext} from "@components/layouts/navbar";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import store from '@stores/index';
import {Provider} from "react-redux";
import {useMediaQuery} from "@mui/material";
import {useEffect} from "react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps: {session, JWT, ...pageProps}} = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    localStorage.setItem("mode", prevMode === 'light' ? 'dark' : 'light');
                    return prevMode === 'light' ? 'dark' : 'light'
                });
            },
        }),
        [],
    );
    useEffect(() => {
        const mode = localStorage.getItem("mode");
        if (mode === 'light' || mode === 'dark') {
            setMode(mode);
        }
    }, []);

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
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <AppHead/>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </CacheProvider>
        </Provider>
    )
}

export default App;
