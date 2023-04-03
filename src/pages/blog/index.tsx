import Layout from "@components/Layout";
import BlogCard from "@components/Blog/Card";
import { apiCallGet } from "@services/api";
import { Blog, IPropBlogs } from "@interfaces/article";

export default function BlogIndex({ blogs }: IPropBlogs) {
  return (
    <Layout>
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
    const blogs = await res?.data;
    return { props: { blogs } };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}
