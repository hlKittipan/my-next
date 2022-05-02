import styles from '@/components/layout.module.css'
import React, {FC, PropsWithChildren} from "react";
import Link from 'next/link'
import {AppHead} from "@/components/layouts/head";
import {ResponsiveAppBar} from "@/components/layouts/navbar";
import {Footer} from "@/components/layouts/Footer";

export const siteTitle = 'Next.js Sample Website'
export interface LayoutProp {
    children?: React.ReactNode;
    isHome?: boolean;
}
export const Layout:FC<LayoutProp> = (LayoutProp:PropsWithChildren<LayoutProp>, isHome: Boolean) =>{
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