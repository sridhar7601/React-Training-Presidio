import { TodoApp } from './TodoApp';
import { useGetTodos } from '../api/react-query';

export const ReactQueryApp = () => {
  const { data, isFetching, error } = useGetTodos();

  return (
    <TodoApp todos={data} isLoading={isFetching} error={error?.message} />
  );
};