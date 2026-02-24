import React from "react";
import TodoForm from "../../redux/todos/TodoForm";
import TodoItem from "../../redux/todos/TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ListGroup } from "react-bootstrap";
import { useTodos } from "./todosContext";
export default function TodoList() {
  const { todos } = useTodos();
  
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
