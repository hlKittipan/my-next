export interface ArticleMeta {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
}

export interface ArticleInfo {
  meta: ArticleMeta;
  content: string;
}

export interface IPropBlogs {
  blogs: Blog[];
}

export interface IPropBlog {
  blog: Blog;
}

export interface Blog {
  _id: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
}
