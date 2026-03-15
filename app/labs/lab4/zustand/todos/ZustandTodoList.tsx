"use client";
import { ListGroup } from "react-bootstrap";
import { useTodosStore } from "./useTodoStore";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Todo } from "../../react-context/todos/todosContext";

export default function ZustandTodoList() {
  const { todos } = useTodosStore((state) => state);

  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos &&
          todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ListGroup>
    </div>
  );
}
