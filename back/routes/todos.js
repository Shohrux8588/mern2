import express from "express";
import { getTodos, createTodo, updateTodo, deleteTodo, completeTodo } from "../controllers/todos.js";
const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/complete", completeTodo);
export default router;