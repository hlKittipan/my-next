import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IPropBlog } from "@interfaces/article";
import { ArticleJsonLd } from "next-seo";

const BlogCard = ({ blog }: IPropBlog) => {
  const blogLink = {
    pathname: "/blog/[...slug]",
    query: { slug: [blog.slug, blog._id] },
  };
  return (
    <Link href={blogLink}>
      <ArticleJsonLd
        useAppDir={true}
        url={`${blogLink}`}
        title={blog.title}
        images={["https://picsum.photos/600/400/?random"]}
        datePublished={blog.createdAt}
        dateModified={blog.updatedAt}
        authorName={[
          {
            name: blog.author.username,
            url: "https://picsum.photos/32/32/?random",
          },
        ]}
        publisherName={blog.author.username}
        publisherLogo="https://picsum.photos/32/32/?random"
        description={blog.content}
        isAccessibleForFree={true}
      />
      <div className="flex min-h-full w-full flex-col rounded-lg bg-gray-300 text-black shadow-lg">
        <Image
          alt="Placeholder"
          className="block h-auto w-full"
          src="https://picsum.photos/600/400/?random"
          width={600}
          height={400}
        />
        <div className="w-full p-1 md:p-2">
          <h1 className="text-md font-bold">{blog.title}</h1>
          <p className="h-14 text-sm">{blog.content}</p>
        </div>
        <div className="flex w-full items-center justify-between p-1 md:p-2">
          <Image
            alt="Placeholder"
            className="block rounded-full"
            src="https://picsum.photos/32/32/?random"
            width={32}
            height={32}
          />
          <div className="text-end">
            <p className="ml-2 text-sm">{blog.author.username}</p>
            <p className="text-grey-darker ml-2 text-right text-xs">
              {blog.createdAt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
