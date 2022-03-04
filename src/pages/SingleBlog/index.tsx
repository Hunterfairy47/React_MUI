import React, { useEffect, useState } from "react";
import "./SingleBlog.scss";
import DetailBlog from "../../Components/DetailBlog";
import { useParams } from "react-router-dom";
import { IBlogs } from "../BlogApp";

function SingleBlog() {
  const { blogid } = useParams();
  const [detailBlog, setDetailBlog] = useState<IBlogs>({
    id: 0,
    title: "",
    content: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    const getBlogs = async () => {
      const res = await fetch(`http://localhost:5000/blogs/${blogid}`);
      const data = await res.json();
      setDetailBlog(data);
      console.log(detailBlog);

      return data;
    };
    getBlogs();
  }, [blogid]);

  return <div>{<DetailBlog singleBlog={detailBlog} />}</div>;
}

export default SingleBlog;
