import { Request, Response } from "express";
import { todos, addTodo, updateTodo, removeTodo } from "../config/db";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

// Define the schema for todo validation
const todoSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(), // Ensure it's optional
  dueDate: z.string(),
  category: z.string(),
  completed: z.boolean(),
});

// Get all todos
export const getTodos = (req: Request, res: Response): void => {
  const { status, sortBy } = req.query;
  let filteredTodos = [...todos];

  if (status === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  } else if (status === "active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);
  }

  if (sortBy === "dueDate") {
    filteredTodos.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  } else if (sortBy === "createdAt") {
    filteredTodos.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }

  res.json(filteredTodos);
};

// Create a new todo
export const createTodo = (req: Request, res: Response): void => {
  const parsed = todoSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.errors });
    return;
  }

  const newTodo = {
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    ...parsed.data,
    description: parsed.data.description || "", // Ensure description is never undefined
  };

  addTodo(newTodo);
  res.status(201).json(newTodo);
};

// Update a todo
export const updateTodoController = (req: Request, res: Response): void => {
  const { id } = req.params;
  const parsed = todoSchema.partial().safeParse(req.body); // Allow partial updates
  
  if (!parsed.success) {
    res.status(400).json({ errors: parsed.error.errors });
    return;
  }

  const updatedTodo = updateTodo(id, parsed.data);
  res.json({ message: "Todo updated successfully", updatedTodo });
};

// Delete a todo
export const deleteTodo = (req: Request, res: Response): void => {
  removeTodo(req.params.id);
  res.json({ message: "Todo deleted successfully" });
};
