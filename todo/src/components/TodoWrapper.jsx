import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoWrapper = () => {
  // useRef
  const inputRef = useRef();

  // useState
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [input, setInput] = useState("");

  // useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // handlers
  const handleInputChange = () => {
    setInput(inputRef.current.value);
  };
  const handleAddTodo = () => {
    const name = inputRef.current.value;
    if (name == "") return;
    setTodos([...todos, { id: uuidv4(), name, completed: false }]);
    setInput("");
  };
  const handleKeyPress = (e) => {
    if (e.code != "Enter") return;
    handleAddTodo();
  };
  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed == false));
  };

  return (
    <div>
      <h1>Things TO-DO.</h1>
      <TodoForm
        inputRef={inputRef}
        handleInputChange={handleInputChange}
        handleAddTodo={handleAddTodo}
        input={input}
        handleKeyPress={handleKeyPress}
      />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        setTodos={setTodos}
      />
      {todos.length > 0 ? (
        <button className="clear_btn" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TodoWrapper;
