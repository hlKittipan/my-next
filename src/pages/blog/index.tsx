import { Layout } from "@components/layouts";
import { AppBreadCrumbs } from "@components/layouts/breadcrumbs";
import { Container, Grid } from "@mui/material";
import BlogCard from "@components/blog/card";
import * as React from "react";
import { apiCallGet } from "@services/api";
import { Blog, IPropBlogs } from "@interfaces/article";

export default function BlogsPage({ blogs }: IPropBlogs) {
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
          <Grid item xs={12}>
            <div>
              <h1>H1 Blogs</h1>
              <h2>H2 Blogs</h2>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid container justifyContent="center" spacing={2}>
              {blogs?.map((blog: Blog, i) => (
                <Grid key={i} item>
                  <BlogCard key={i} blog={blog} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await apiCallGet("/blog");
  const blogs = await res?.data;
  return { props: { blogs } };
}
