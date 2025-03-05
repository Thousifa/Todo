import { Router } from "express";
import { getTodos, createTodo, updateTodoController, deleteTodo } from "../controllers/todoController";

const router = Router();
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodoController);
router.delete("/:id", deleteTodo);

export default router;
