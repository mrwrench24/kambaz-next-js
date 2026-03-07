import { Button, ListGroupItem } from "react-bootstrap";
import { useTodos } from "./todosContext";

export default function TodoItem({ todo }) {
  const { setTodo, deleteTodo } = useTodos();

  return (
    <ListGroupItem key={todo.id}>
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
