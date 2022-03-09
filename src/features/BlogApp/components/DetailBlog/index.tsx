import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { TextareaAutosize } from "@mui/base";
import "./DetailBlog.scss";
import { IBlogs } from "../../pages/Main";

type SingleBlogProps = {
  singleBlog: IBlogs;
};

function DetailBlog({ singleBlog }: SingleBlogProps) {
  const [blog, setBlog] = useState({});
  const [editBlog, setEditBlog] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const updateBlog = async () => {
      const res = await fetch(`http://localhost:5000/blogs/${path}`);
      const data = await res.json();
      console.log(data);

      setBlog(data);
      setTitle(data.title);
      setContent(data.content);
    };
    updateBlog();
  }, [path]);

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE",
    });
    const pathBlog = `/blogapp`;
    history(pathBlog);
  };

  //update blog
  const handleUpdateBlog = async () => {
    const updBlog = { ...blog, title, content };
    await fetch(`http://localhost:5000/blogs/${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updBlog),
    });

    setEditBlog(!editBlog);
    const pathBlog = `/blogapp/` + path;
    history(pathBlog);
  };

  return (
    <div className="singleBlog">
      <div className="singleBlog__wrapper">
        <img src={singleBlog.image} alt="" className="singleBlog__img" />
        {editBlog ? (
          <input
            type="text"
            value={title}
            className="singleBlog__title--input"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singleBlog__title">
            {title}
            <div className="singleBlogEdit">
              <AiOutlineEdit
                className="singleBlogIcon"
                onClick={() => setEditBlog(true)}
              />
              <AiOutlineDelete
                className="singleBlogIcon"
                onClick={() => handleDelete(singleBlog.id)}
              />
            </div>
          </h1>
        )}

        {editBlog ? (
          <TextareaAutosize
            className="singleBlog__desc--input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <p className="singleBlog__desc">{content}</p>
        )}

        {editBlog && (
          <Button
            className="singleBlog__button"
            variant="contained"
            startIcon={<UpdateOutlinedIcon />}
            sx={{
              width: "fit-content",
              alignSelf: "flex-end",
            }}
            onClick={handleUpdateBlog}
          >
            Update
          </Button>
        )}
      </div>
    </div>
  );
}

export default DetailBlog;
