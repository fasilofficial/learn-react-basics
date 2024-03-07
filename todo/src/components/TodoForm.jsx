import AddIcon from "@mui/icons-material/Add";

const TodoForm = ({
  inputRef,
  handleAddTodo,
  handleInputChange,
  input,
  handleKeyPress,
}) => {
  return (
    <div className="flex justify-between gap-3 items-center mb-3">
      <input
        className="border outline-none border-gray-200 dark:border-gray-500 focus:border-gray-400 transition-colors flex-1 p-1 rounded dark:bg-gray-600"
        type="text"
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter something"
      />
      <button
        className="p-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-500 transition-all ease-out active:scale-95"
        onClick={handleAddTodo}
      >
        <AddIcon />
      </button>
    </div>
  );
};

export default TodoForm;
