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
  setTodo: (todo: Todo) => void;
}

export const useTodosStore = create<TodosState>((set) => ({
  todo: { id: "123456", title: "" },
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),

  deleteTodo: (targetId) =>
    set((state) => ({
      todos: state.todos.filter((storedTodo) => storedTodo.id !== targetId),
    })),

  updateTodo: (newTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === newTodo.id ? newTodo : todo,
      ),
    })),

  setTodo: (todo) =>
    set({
      todo: todo,
    }),
}));
