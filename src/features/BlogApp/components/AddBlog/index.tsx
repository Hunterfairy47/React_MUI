import React from "react";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Typography } from "@mui/material";

type AddBlogProps = {
  onAdd: (task: {}) => Promise<void>;
};

type BlogSubmitForm = {
  category: string;
  title: string;
  content: string;
  image: string;
};

const AddBlog = ({ onAdd }: AddBlogProps) => {
  console.log(onAdd);

  const schema = yup.object().shape({
    category: yup.string().required("Category is required"),
    title: yup.string().required("title is required"),
    content: yup
      .string()
      .required()
      .min(10, "Content must be at least 6 characters"),
    image: yup.string().required(),
  });

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogSubmitForm>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<BlogSubmitForm> = (
    data: BlogSubmitForm
  ) => {
    onAdd(data);
  };

  return (
    <form className="mui-form" onSubmit={handleSubmit(formSubmitHandler)}>
      <legend>Creat new blog</legend>
      <div className="mui-textfield mui-textfield--float-label">
        <Controller
          name="category"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Category"
              variant="standard"
              fullWidth
              {...register("category")}
              error={!!errors.category}
              helperText={errors.category ? errors.category?.message : ""}
            />
          )}
        />
      </div>
      <div className="mui-textfield mui-textfield--float-label">
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              variant="standard"
              fullWidth
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title ? errors.title?.message : ""}
            />
          )}
        />
      </div>
      <div className="mui-textfield mui-textfield--float-label">
        <Controller
          name="content"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Content"
              variant="standard"
              fullWidth
              {...register("content")}
              multiline
              error={!!errors.content}
              helperText={errors.content ? errors.content?.message : ""}
            />
          )}
        />
      </div>
      <div className="mui-textfield mui-textfield--float-label">
        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="image"
              variant="standard"
              fullWidth
              {...register("image")}
              error={!!errors.image}
              helperText={errors.image ? errors.image?.message : ""}
            />
          )}
        />
      </div>
      <button
        type="submit"
        value="Add"
        className="mui-btn mui-btn--raised mui-btn--primary mui--pull-right"
        onClick={() => {
          reset({
            content: "",
            title: "",
            category: "",
            image: "",
          });
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AddBlog;
