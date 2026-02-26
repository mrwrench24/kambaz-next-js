import { create } from "zustand";

interface Todo {
  title: string;
  id: string;
}

interface TodosState {
  todo: Todo;
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

export const useTodosStore = create<TodosState>((set) => ({
  todo: { id: "", title: "" },
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),

  deleteTodo: (targetId) =>
    set((state) => ({
      todos: state.todos.filter((storedTodo) => storedTodo.id !== targetId),
    })),

  updateTodo: (todo) =>
    set({
      todo,
    }),
}));
