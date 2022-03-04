import React from "react";
import { useState } from "react";

type AddBlogProps = {
  onAdd: (task: {}) => Promise<void>;
};
const AddBlog = ({ onAdd }: AddBlogProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add task");
      return;
    }

    onAdd({ category, title, content, image });
    setTitle("");
    setContent("");
    setImage("");
    setCategory("");
  };

  return (
    <form className="mui-form" onSubmit={onSubmit}>
      <legend>Creat new blog</legend>
       <div className="mui-textfield mui-textfield--float-label">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label>Category</label>
      </div>
      <div className="mui-textfield mui-textfield--float-label">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Title</label>
      </div>
      <div className="mui-textfield mui-textfield--float-label">
        <textarea value={content} onChange={(e) => setContent(e.target.value)}>
          Value on load
        </textarea>
        <label>Content</label>
      </div>
      <div className="mui-textfield mui-textfield--float-label">
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>image url</label>
      </div>
      <button
        type="submit"
        value="Add"
        className="mui-btn mui-btn--raised mui-btn--primary mui--pull-right"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBlog;
