export const Todo = ({ todo, updateExistingTodo, deleteExistingTodo }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-2 bg-gray-100 rounded-md mb-2">
      <div className="flex items-center">
        <input
          checked={todo.done}
          type="checkbox"
          onChange={(e) => updateExistingTodo({ ...todo, done: e.target.checked })}
          className="mr-2 form-checkbox h-5 w-5 text-blue-600"
        />
        <span className={`flex-grow ${todo.done ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {todo.task}
        </span>
      </div>
      <button
        onClick={() => deleteExistingTodo(todo.id)}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};