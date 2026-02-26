"use client";
import { ListGroup } from "react-bootstrap";
import { useTodosStore } from "./useTodoStore";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function ZustandTodoList() {
  const { todos } = useTodosStore((state) => state);

  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        {todos &&
          todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
        <TodoForm />
      </ListGroup>
    </div>
  );
}
