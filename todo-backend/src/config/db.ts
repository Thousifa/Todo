import { Todo } from "../models/Todo";
import { Category } from "../models/Category"; // Import the Category model

export let todos: Todo[] = [];
export let categories: Category[] = [];

export const addTodo = (todo: Todo) => {
  todos.push(todo);
};

export const updateTodo = (id: string, updatedTodo: Partial<Todo>) => {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo));
};

export const removeTodo = (id: string) => {
  todos = todos.filter((todo) => todo.id !== id);
};

export const addCategory = (category: Category) => {
  categories.push(category);
};

export const removeCategory = (id: string) => {
  categories = categories.filter((category) => category.id !== id);
};
