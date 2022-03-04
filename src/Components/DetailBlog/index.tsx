import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IBlogs } from "../../pages/BlogApp";
import "./DetailBlog.scss";

type SingleBlogProps = {
  singleBlog: IBlogs;
};

function DetailBlog({ singleBlog }: SingleBlogProps) {
  // const [editBlog, setEditBlog] = useState<SingleBlogProps>({id:0, title:"", content:"", category:"", image:""})

  // const handleEditBlog = (e: React.FormEvent,id:number) => {
  //   e.preventDefault();
  //    setEditBlog(
  //     singleBlog.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
  //   );

  //   setEdit(false);
  }
  return (
    <div className="singleBlog">
      <div className="singleBlog__wrapper">
        <img src={singleBlog.image} alt="" className="singleBlog__img" />
        <h1 className="singleBlog__title">
          {singleBlog.title}
          <div className="singleBlogEdit">
            <AiOutlineEdit className="singleBlogIcon" onClick={()=>handleEditBlog(singleBlog.id)}/>
            <AiOutlineDelete className="singleBlogIcon" />
          </div>
        </h1>

        <p className="singleBlog__desc">{singleBlog.content}</p>
      </div>
    </div>
  );
}

export default DetailBlog;
