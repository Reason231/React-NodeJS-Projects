import express from "express";
import todoRoutes from "./routes/Todo.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todo", todoRoutes);

app.listen(3000, () => {
  console.log("Server is running successfully");
});
