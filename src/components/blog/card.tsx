import Link from "next/link";
import { FunctionComponent } from "react";
import { IPropBlog } from "@interfaces/article";
import { CardContent, CardMedia, Typography, Card } from "@mui/material";
import striptags from "striptags";

const BlogCard: FunctionComponent<IPropBlog> = ({ blog }) => {
  const slug = blog.title.replaceAll(" ", "-");
  const content = striptags(blog.content).substring(0, 150);
  return (
    <Link
      href={{
        pathname: "/blog/[...slug]",
        query: { slug: [blog.slug, blog._id] },
      }}
    >
      <Card sx={{ minWidth: 300, maxWidth: 300, mx: 0.5 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
