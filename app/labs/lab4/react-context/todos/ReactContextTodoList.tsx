import { ListGroup } from "react-bootstrap";
import { Todo, useTodos } from "./todosContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function ReactContextTodoList() {
  const { todos } = useTodos();

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
