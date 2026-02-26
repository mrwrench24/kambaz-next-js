"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface Todo {
  id: string;
  title: string;
}

interface TodoContextState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

const TodoContext = createContext<TodoContextState | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => setTodos([...todos, todo]);

  const deleteTodo = (targetId: string) => {
    const newTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(newTodos);
  };

  const updateTodo = (newTodo: Todo) => {
    const newTodos = todos.filter((todo) =>
      todo.id === newTodo.id ? newTodo : todo,
    );
    setTodos(newTodos);
  };

  const value: TodoContextState = {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  return context;
};
