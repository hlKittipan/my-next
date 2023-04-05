import Layout from "@components/Layout";
import BlogCard from "@components/Blog/Card";
import { apiCallGet } from "@services/api";
import { Blog, IPropBlogs } from "@interfaces/article";
import striptags from "striptags";
import { convertDatetimeStringToLocalString } from "@helpers/datetime";
import { NextSeo } from "next-seo";

export default function BlogIndex({ blogs }: IPropBlogs) {
  return (
    <Layout>
      <NextSeo
        title="Manage SEO in NextJS with Next SEO"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        canonical="www.example.com/next-seo-blog"
      />
      <div className="container mx-auto">
        <div>
          <h1>Blog</h1>
          <h2>sub</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:auto-cols-min md:grid-flow-row md:auto-rows-min md:grid-cols-2 lg:grid-cols-4">
          {blogs?.map((blog: Blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await apiCallGet("/blog");
    const data = await res?.data;
    // Prepare the data
    const blogs = data?.map((blog: Blog) => {
      return {
        _id: blog._id,
        slug: blog.slug,
        title: striptags(blog.title).substring(0, 20),
        content: striptags(blog.content).substring(0, 100),
        createdAt: convertDatetimeStringToLocalString(blog.createdAt),
        updatedAt: convertDatetimeStringToLocalString(blog.updatedAt),
        author: blog.author,
      };
    });
    return { props: { blogs } };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}
