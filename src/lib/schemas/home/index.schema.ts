import { CreateTodoRequestInput } from "@/types/request/todoType";
import * as yup from "yup";

export const createTodoSchema: yup.ObjectSchema<CreateTodoRequestInput> = yup
  .object()
  .shape({
    activity: yup.string().required("Please specify activity"),
    done: yup.boolean().required("This field is required"),
  });

export const initCreateTodoDetails: CreateTodoRequestInput = {
  activity: "",
  done: false,
};
