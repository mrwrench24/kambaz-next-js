import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ListGroup } from "react-bootstrap";
import { Todo } from "../../react-context/todos/todosContext";
export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        {todos &&
          todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
        <TodoForm />
      </ListGroup>
      <hr />
    </div>
  );
}
