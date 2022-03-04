import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Blogs from "../../Components/Blogs";
import AddBlog from "../../Components/AddBlog";
import HeaderBlogs from "../../Components/HeaderBlogs";
import { Outlet, useNavigate } from "react-router-dom";

export type IBlogs = {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
};
function BlogApp() {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [showSingle, setShowSingle] = useState(false);
  const [blogs, setBlogs] = useState<IBlogs[]>([]);
  const history = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      const BlogsFromServer = await fetchBlogs();
      setBlogs(BlogsFromServer);
    };

    getBlogs();
  }, []);

  // Fetch Blogs
  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();

    return data;
  };

  //Add blog
  const addBlog = async (blog: {}) => {
    const res = await fetch(`http://localhost:5000/blogs`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    const data = await res.json();
    console.log(data);

    setBlogs([...blogs, data]);
  };

  //Detail blogs

  //=> always promise
  const detailBlog = async (id: number) => {
    setShowSingle(!showSingle);
    const showSingleBlog = `/blogapp/${id}`;
    history(showSingleBlog);
  };
  return (
    <div>
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={10}>
            <HeaderBlogs
              title="Blog App"
              onAdd={() => setShowAddBlog(!showAddBlog)}
              showAdd={showAddBlog}
            />
            {showAddBlog && <AddBlog onAdd={addBlog} />}

            <Blogs blogs={blogs} onClick={detailBlog} />
            {/* <Outlet/> */}
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogApp;
