import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleToggle, handleDelete, setTodos }) => {
  return todos.map((todo) => {
    return (
      <div className="flex flex-col mb-3 gap-2">
        <Todo
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          setTodos={setTodos}
        />
      </div>
    );
  });
};

export default TodoList;
