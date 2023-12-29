import React from "react";

const TodoForm = ({
  inputRef,
  handleAddTodo,
  handleInputChange,
  input,
  handleKeyPress,
}) => {
  return (
    <div className="add_todo">
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter something"
      />
      <button className="add_btn" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
