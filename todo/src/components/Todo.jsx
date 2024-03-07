import React, { useState, useRef } from "react";
import { MdDeleteOutline, MdOutlineEditNote } from "react-icons/md";

const Todo = ({ todo, handleToggle, handleDelete, setTodos }) => {
  const editRef = useRef();

  const [editInput, setEditInput] = useState(todo.name);
  const [edit, setEdit] = useState(false);

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
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center bg-white/50 dark:bg-gray-600 rounded-md p-2">
        <div className="flex gap-2 items-center">
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
              className="p-1 outline-none border-b text-gray-600 dark:bg-gray-500 dark:text-white"
            />
          ) : (
            <label
              htmlFor={todo.id}
              className={` p-1 ${
                todo.completed ? " line-through text-gray-400 " : "todo_name"
              } `}
            >
              {todo.name}
            </label>
          )}
        </div>
        <div className="flex gap-1 items-center text-lg">
          <button
            className="text-red-500 hover:text-red-400"
            onClick={() => handleDelete(todo.id)}
          >
            <MdDeleteOutline />
          </button>
          <button
            className={`text-gray-800 hover:text-gray-600 dark:text-white ${
              todo.completed ? " cursor-not-allowed" : ""
            }`}
            disabled={todo.completed ? true : false}
            onClick={handleClickEdit}
          >
            <MdOutlineEditNote />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
