import { Request, Response } from "express";
import { categories, addCategory, removeCategory } from "../config/db";
import { v4 as uuidv4 } from "uuid";

// Get all categories
export const getCategories = (req: Request, res: Response): void => {
  res.json(categories);
};

// Create a new category
export const createCategory = (req: Request, res: Response): void => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: "Category name is required" });
    return;
  }

  const newCategory = { id: uuidv4(), name };
  addCategory(newCategory);
  res.status(201).json(newCategory);
};

// Delete a category
export const deleteCategory = (req: Request, res: Response): void => {
  removeCategory(req.params.id);
  res.json({ message: "Category deleted" });
};
