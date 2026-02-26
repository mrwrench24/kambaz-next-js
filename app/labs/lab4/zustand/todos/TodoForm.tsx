import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useTodosStore } from "./useTodoStore";

export default function TodoForm() {
  const { addTodo, updateTodo, todo } = useTodosStore();

  return (
    <ListGroupItem>
      <Button
        onClick={() => {
          addTodo(todo);
          updateTodo({ id: `${Math.random()}`, title: "" });
        }}
        id="wd-add-todo-click"
      >
        {" "}
        Add{" "}
      </Button>
      <Button id="wd-update-todo-click"> Update </Button>
      <FormControl
        value={todo.title}
        onChange={(e) => updateTodo({ id: todo.id, title: e.target.value })}
      />
    </ListGroupItem>
  );
}
