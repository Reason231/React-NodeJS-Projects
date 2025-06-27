import express from "express";
import mongoose from "mongoose";
import { Todo } from "../models/Todo.js";
import cors from "cors";
import multer from "multer";

const router = express.Router();
const upload=multer()   // For your postman to be able to read form-data
await mongoose.connect("mongodb://localhost:27017/Todo");

// Enable CORS (if not already)
router.use(cors());
router.use(express.json());  // For your react to be able to read it in JSON data
router.use(express.urlencoded({ extended: true })); // For your postman to be able to read form-urlencoded data.
router.use(upload.none());   // For your postman to be able to read form-data 

// GET - all data
router.get("/", async (req, res) => {
  const readData = await Todo.find().sort({ id: 1 });  // always sorted by id
  res.json(readData);
});

// POST - add new todo with incremented id
router.post("/", async (req, res) => {
  // Get highest current id value
  const lastTodo = await Todo.findOne().sort({ id: -1 });
  const newId = lastTodo ? lastTodo.id + 1 : 1;  // If no LastTodo found it means, this is the first data.

  const createData = new Todo({
    id: newId,
    title: req.body.title,
    body: req.body.body
  });

  await createData.save();
  res.json({ message: "Task added", data: createData });
});

// PUT - update by custom id
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  const updated = await Todo.findOneAndUpdate(
    { id: id },
    {
      title: req.body.title,
      body: req.body.body
    },
    { new: true }  // Immediately reflect the new data in response
  );

  if (updated) {
    res.json({ message: "Task updated", data: updated });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});


// DELETE - delete by custom id
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid id" });
  }

  const deleted = await Todo.deleteOne({ id: id });
  if (deleted.deletedCount > 0) {
    res.json({ message: `Task with id ${id} deleted` });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});


export default router;
