import Layout from "@components/Layout";
import { IPropBlog } from "@interfaces/article";
import { apiCallGet } from "@services/api";
import { convertDatetimeStringToLocalString } from "@helpers/datetime";

export default function BlogContentPage({ blog }: IPropBlog) {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <article className=" col-span-2 mx-auto min-h-full w-full overflow-hidden rounded-xl bg-white p-2 shadow-md dark:bg-gray-900">
            <header className="not-format mb-4 lg:mb-6">
              <address className="mb-6 flex items-center not-italic">
                <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      {blog.author.username}
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {convertDatetimeStringToLocalString(blog?.createdAt)}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
                {blog?.title}
              </h1>
            </header>
            <p dangerouslySetInnerHTML={{ __html: blog?.content }} />
          </article>
          <div className="overflow-hidden rounded-xl">
            <div className=" bg-white dark:bg-gray-900">04</div>
          </div>
        </div>
      </div>
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
