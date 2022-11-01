import styles from '@/components/layout.module.css'
import React, {FC, PropsWithChildren, useEffect} from "react";
import Link from 'next/link'
import {AppHead} from "@/components/layouts/head";
import {ResponsiveAppBar} from "@/components/layouts/navbar";
import {Footer} from "@/components/layouts/Footer";
import {setIsAuthed} from "@/stores/slices/app";
import {apiCallPost} from "@/services/api";
import {setToken, setUserData} from "@/stores/slices/user";
import { useAppDispatch } from "@/hooks/index";

export const siteTitle = 'Next.js Sample Website'
export interface LayoutProp {
    children?: React.ReactNode;
    isHome?: boolean;
}
export const Layout:FC<LayoutProp> = (LayoutProp:PropsWithChildren<LayoutProp>, isHome: Boolean) =>{
    const dispatch = useAppDispatch();
    // fetch data
    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            dispatch(setIsAuthed(true))
            dispatch(setToken(token))
            dispatch(setUserData(JSON.parse(user)))
        }
    }, [dispatch])

    return (
        <div>
            <AppHead />
            <ResponsiveAppBar/>
            <main>{LayoutProp.children}</main>
            {!isHome && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <Footer />
        </div>
    )
}
