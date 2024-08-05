import { getData } from "@/actions/todoActions";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useRefetchTodoList = () => {
  const queryClient = useQueryClient();

  const refetchTodoList = () => {
    queryClient.invalidateQueries({ queryKey: ["fetch-todo-list"] });
  };
  return { refetchTodoList };
};

export const useFetchTodoList = (page: number) => {
  return useQuery({
    queryKey: ["fetch-todo-list"],
    queryFn: () => getData(page),
    // enabled: false,
  });
};
