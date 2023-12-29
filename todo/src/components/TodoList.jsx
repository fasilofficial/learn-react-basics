import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleToggle, handleDelete, setTodos }) => {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        setTodos={setTodos}
      />
    );
  });
};

export default TodoList;
