import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IBlogs } from "../../pages/Main";

type BlogProps = {
  blog: IBlogs;
  onClick: (id: number) => Promise<void>;
};
function Blog({ blog, onClick }: BlogProps) {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => onClick(blog.id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={blog.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            align="center"
            sx={{
              color: "#be9656",
              fontSize: 13,
            }}
          >
            {blog.category}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
            sx={{
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: 700,
            }}
          >
            {blog.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "varela Round, sans-serif",
              whiteSpace: "nowrap",
              width: 315,
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Blog;
