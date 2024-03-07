import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoContainer = () => {
  const inputRef = useRef();
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <div className="p-5 shadow-md rounded-md mx-auto mt-10 max-w-lg dark:bg-gray-700 dark:text-gray-100">
      <h1 className="font-bold text-blue-500 text-3xl mb-4">Do it.</h1>
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
        <button
          className="py-1 px-2 rounded-md bg-blue-500 text-white"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TodoContainer;
