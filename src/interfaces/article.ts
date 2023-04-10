import { User } from "@interfaces/user";

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
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface UserProgressProps {
  backgroundColor: string;
  createdAt: string;
  position: string;
  userProgressStatus: string;
  progressPercent: string;
  progressColor: string;
  progressColorText: string;
  expireTime: string;
}
