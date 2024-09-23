import { ApiState } from './ApiState';
import { Todo } from './Todo';
import { useCreateTodos, useDeleteTodo, useUpdateTodo } from '../api/react-query';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const _TodoApp = ({ todos }) => {
  const [task, setTask] = useState('');
  const { mutate: createMutate, isPending: isCreatePending } = useCreateTodos();
  const { mutate: deleteMutate, isPending: isDeletePending } = useDeleteTodo();
  const { mutate: updateMutate, isPending: isUpdatePending } = useUpdateTodo();

  const handleCreateTodo = () => {
    if (task.trim()) {
      const newTodo = { id: uuid(), task: task.trim(), done: false };
      createMutate(newTodo);
      setTask('');
    }
  };

  console.log('Todos in _TodoApp:', todos); // Add this line for debugging

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          className="border p-2 flex-grow"
          placeholder="Enter a new task"
        />
        <button
          disabled={isCreatePending}
          onClick={handleCreateTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isCreatePending ? 'Adding...' : 'Add Todo'}
        </button>
      </div>
      {Array.isArray(todos) && todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateExistingTodo={(updatedTodo) => updateMutate(updatedTodo)}
            deleteExistingTodo={() => deleteMutate(todo.id)}
          />
        ))
      ) : (
        <p>No todos yet. Add one above!</p>
      )}
    </div>
  );
};

export const TodoApp = ApiState(_TodoApp);