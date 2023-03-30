import { IPropBlog } from "@interfaces/article";
import { apiCallGet } from "@services/api";
import { AppBreadCrumbs } from "@components/layouts/breadcrumbs";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Layout } from "@components/layouts";
import * as React from "react";

export default function BlogContentPage({ blog }: IPropBlog) {
  return (
    <Layout>
      <AppBreadCrumbs />
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={8}>
            <Card>
              <CardHeader title={blog?.title} />
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <span dangerouslySetInnerHTML={{ __html: blog?.content }} />
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(ctx: { params: { slug: string[] } }) {
  const { params } = ctx;
  const { slug } = params;
  const id = slug[1] ?? null;
  const res = await apiCallGet(`/blog/${id}`);
  const blog = await res?.data;

  return {
    props: {
      blog: blog || null,
    },
  };
}
