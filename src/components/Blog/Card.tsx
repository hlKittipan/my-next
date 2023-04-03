import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IPropBlog } from "@interfaces/article";
import striptags from "striptags";

const BlogCard = ({ blog }: IPropBlog) => {
  const title = striptags(blog.title).substring(0, 20);
  const content = striptags(blog.content).substring(0, 100);
  return (
    <Link
      href={{
        pathname: "/blog/[...slug]",
        query: { slug: [blog.slug, blog._id] },
      }}
    >
      <div className="flex min-h-full w-full flex-col rounded-lg bg-gray-300 text-black shadow-lg">
        <Image
          alt="Placeholder"
          className="block h-auto w-full"
          src="https://picsum.photos/600/400/?random"
          width={600}
          height={400}
        />
        <div className="w-full p-1 md:p-2">
          <h1 className="text-md font-bold">{title}</h1>
          <p className="h-14 text-sm">{content}</p>
        </div>
        <div className="flex w-full items-center justify-between p-1 md:p-2">
          <Image
            alt="Placeholder"
            className="block rounded-full"
            src="https://picsum.photos/32/32/?random"
            width={32}
            height={32}
          />
          <div className="inline">
            <p className="ml-2 text-sm">{blog.author.username}</p>
            <p className="text-grey-darker ml-2 text-right text-xs">11/1/19</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
