import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useTodos } from "./todosContext";

export default function TodoForm() {
  const { todo, addTodo, setTodo, updateTodo } = useTodos();

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
      <Button id="wd-update-todo-click" onClick={() => updateTodo(todo)}>
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
