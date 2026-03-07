import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useTodosStore } from "./useTodoStore";

export default function TodoForm() {
  const { addTodo, updateTodo, setTodo, todo } = useTodosStore();

  return (
    <ListGroupItem>
      <Button
        onClick={() => {
          addTodo(todo);
          setTodo({ id: `${Math.random()}`, title: "" });
        }}
        id="wd-add-todo-click"
      >
        {" "}
        Add{" "}
      </Button>
      <Button
        id="wd-update-todo-click"
        onClick={() => {
          updateTodo(todo);
          setTodo({ id: `${Math.random()}`, title: "" });
        }}
      >
        {" "}
        Update{" "}
      </Button>
      <FormControl
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
    </ListGroupItem>
  );
}
