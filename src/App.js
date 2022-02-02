import "./styles.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodo = (toRemove) => {
    const itemToRemove = todos.filter((item, index) => index !== toRemove);
    setTodos(itemToRemove);
  };

  return (
    <div className="App">
      <h1 className="title">TO-DO LIST</h1>
      <Form addTodo={addTodo} />
      <TodoList handleTodo={handleTodo} todos={todos} />
    </div>
  );
}
