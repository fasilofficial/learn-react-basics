import React, { useState, useRef } from "react";
import { MdDeleteOutline, MdOutlineEditNote } from "react-icons/md";

const Todo = ({ todo, handleToggle, handleDelete, setTodos }) => {
  // useRef
  const editRef = useRef();

  // useState
  const [editInput, setEditInput] = useState(todo.name);
  const [edit, setEdit] = useState(false);

  // handlers
  const handleClickEdit = () => {
    setEdit((prevState) => !prevState);
    editRef.current.focus();
  };
  const handleChangeEditInput = () => {
    setEditInput(editRef.current.value);
  };
  const handleEditKeyDown = (e) => {
    if (e.code != "Enter") return;
    handleEdit(todo.id);
  };
  const handleEdit = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        todo.id == prevTodo.id ? { ...prevTodo, name: editInput } : prevTodo
      )
    );
    setEdit(false);
  };

  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
        />
        {edit ? (
          <input
            value={editInput}
            ref={editRef}
            onKeyDown={handleEditKeyDown}
            onChange={handleChangeEditInput}
            className="edit_input"
          />
        ) : (
          <label
            htmlFor={todo.id}
            className={todo.completed ? "todo_name completed" : "todo_name"}
          >
            {todo.name}
          </label>
        )}
      </div>
      <div>
        <button
          className="todo_btn delete"
          onClick={() => handleDelete(todo.id)}
        >
          <MdDeleteOutline />
        </button>
        <button className="todo_btn" onClick={handleClickEdit}>
          <MdOutlineEditNote />
        </button>
      </div>
    </div>
  );
};

export default Todo;
