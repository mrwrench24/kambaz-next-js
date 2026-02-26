import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { setTodo } from "../../redux/todos/todosReducer";
import { useTodos } from "./todosContext";
import { useState } from "react";

export default function TodoForm() {
  const { addTodo } = useTodos();
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <ListGroupItem>
      <Button
        onClick={() => {
          addTodo({ id: `${Math.random()}`, title: todoTitle });
          setTodoTitle("");
        }}
        id="wd-add-todo-click"
      >
        {" "}
        Add{" "}
      </Button>
      <Button id="wd-update-todo-click"> Update </Button>
      <FormControl
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
    </ListGroupItem>
  );
}
