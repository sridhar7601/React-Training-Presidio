import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, getTodos, deleteTodo, editTodo } from "./axios";

export const useGetTodos = () => {
  return useQuery({
    queryFn: async () => {
      const response = await getTodos();
      return response; // This should be the array of todos
    },
    queryKey: ["todos"],
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useCreateTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};