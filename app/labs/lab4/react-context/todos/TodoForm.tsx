import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { setTodo } from "../../redux/todos/todosReducer";
import { useTodos } from "./todosContext";

export default function TodoForm({ todo }) {
  const { updateTodo, deleteTodo } = useTodos();

  return (
    <ListGroupItem>
      <Button onClick={() => deleteTodo(todo.id)} id="wd-delete-todo-click">
        {" "}
        Delete{" "}
      </Button>
      <Button onClick={() => setTodo(todo)} id="wd-set-todo-click">
        {" "}
        Edit{" "}
      </Button>
      {todo.title}
    </ListGroupItem>
  );
}
