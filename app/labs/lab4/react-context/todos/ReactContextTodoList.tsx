import { ListGroup } from "react-bootstrap";
import { useTodos } from "./todosContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function ReactContextTodoList() {
  const { todos } = useTodos();

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
