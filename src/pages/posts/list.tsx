import Link from 'next/link'
import {Layout} from '@components/layouts'
import {AppBreadCrumbs} from "@components/layouts/breadcrumbs";
import styles from "@styles/Home.module.css";
import * as React from "react";
import {Box} from '@mui/material';
import {ArticleMeta} from "@interfaces/article";
import Card from '@components/card'

interface IProps {
    articles: ArticleMeta[];
}

export const getStaticProps = () => {
    const articles = [
        {
            title: "In Eu Sapien Tellus Id Ullamcorper Elit Semper Ultricies Morbi",
            content: 'sit at blandit cras id eu congue et platea massa lectus netus vulputate suspendisse sed, risus habitasse at purus nibh viverra elementum viverra arcu id vulputate vel. ipsum tincidunt lorem habitant dis nulla consectetur tincidunt iaculis adipiscing erat enim, ultrices etiam mollis volutpat est vestibulum aliquam lorem elit natoque metus dui est elit. mollis sit tincidunt mauris porttitor pellentesque at nisl pulvinar tortor egestas habitant hac, metus blandit scelerisque in aliquet tellus enim viverra sed eu neque placerat lobortis a. laoreet tempus posuere magna amet nec eget vitae pretium enim magnis, cras sem eget amet id risus pellentesque auctor quis nunc tincidunt tortor massa nisl velit tortor. a volutpat malesuada nisi habitasse id volutpat nibh volutpat suspendisse nunc justo elementum ac nec, elementum pulvinar enim sociis nunc eleifend malesuada platea nunc posuere aliquet ipsum.',
            thumbnail: 'https://blogthing-strapi.cleggacus.com/uploads/0_d65573c0b9.jpg'
        },
        {
            title: 'Eget Duis Sem Tincidunt Ac Ullamcorper Et Turpis Magna Viverra',
            content: 'risus eu lectus a consectetur aliquam nullam enim tellus urna nunc sagittis aenean aliquam ullamcorper consectetur dictumst sit, placerat eget lobortis eget elit nibh blandit scelerisque consectetur condimentum diam tempor. nisl erat semper gravida tempor aliquam suscipit a viverra molestie sit porta cras ultricies, fermentum habitasse sit semper cum eu eget lacus purus viverra cursus porttitor nisi nisl.',
            thumbnail: 'https://blogthing-strapi.cleggacus.com/uploads/0_d65573c0b9.jpg'
        }
    ];

    return {
        props: {
            articles: articles
        }
    };
}

export default function ListPost({ articles }:IProps) {
    return (
        <Layout>
            <AppBreadCrumbs />
            <Box>
                <div className={styles.card}>
                    <Link href="/posts/first-post">
                        <h2>First post &rarr;</h2>
                    </Link>
                </div>
                <div className={styles.container}>
                    {
                        articles.map((article, i) => (
                            <Card key={i} article={article} />
                        ))
                    }
                </div>
            </Box>
        </Layout>
    )
}
