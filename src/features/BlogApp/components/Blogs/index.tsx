import { Grid } from "@mui/material";
import React from "react";
import Blog from "../Blog";

type Blog = {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
};

type BlogsProps = {
  blogs: Blog[];
  onClick: (id: number) => Promise<void>;
};
function Blogs({ blogs, onClick }: BlogsProps) {

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {blogs.map((blog, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Blog blog={blog} onClick={onClick} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
