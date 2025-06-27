import mongoose from "mongoose";

const todo = new mongoose.Schema({
  id: Number,
  title: String,
  body: String
});

export const Todo = mongoose.model("Todo", todo);
