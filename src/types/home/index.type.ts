export type TodoType = {
  id: number;
  activity: string;
  done: boolean;
};

export type TodoTableActionType = "edit" | "delete";
export type TodoTableIdType = "id" | "activity" | "done";

export type TodoTableData = {
  id: string;
  activity: string;
  done: boolean;
};
