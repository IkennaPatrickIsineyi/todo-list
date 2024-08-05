import { Grid } from "@mui/material";
import TextField from "../Fields/TextField";
import { useFormik } from "formik";
import {
  createTodoSchema,
  initCreateTodoDetails,
} from "@/lib/schemas/home/index.schema";
import { CreateTodoRequestInput } from "@/types/request/todoType";
import FieldLabel from "../Fields/FieldLabel";
import Switch from "@/components/atoms/Switch";
import CenterModal from "@/components/atoms/modals/CenterModal";
import CTAButton from "@/components/atoms/Buttons/CTAButton";
import {
  addTodo,
  editTodo,
  getData,
  getSingleTodo,
} from "@/actions/todoActions";
import { useRefetchTodoList } from "@/lib/hooks/home/index.hook";
import { FormEvent, useEffect, useMemo, useState } from "react";

type Props = {
  handleClose: () => void;
  isEdit?: boolean;
  id?: string;
};

export default function CreateTodoForm({ handleClose, isEdit, id }: Props) {
  const { refetchTodoList } = useRefetchTodoList();

  const [data, setData] = useState<{ activity: string; done: boolean }>();

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await getSingleTodo(id);
        data && setData({ activity: data?.text || "", done: !!data?.done });
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (values: CreateTodoRequestInput) => {
    if (isEdit && id) {
      await editTodo(id, values.activity, !!values.done).then((i) =>
        refetchTodoList()
      );
    } else if (!isEdit) {
      await addTodo(values.activity, !!values.done).then((i) =>
        refetchTodoList()
      );
    }
  };

  const formik = useFormik({
    initialValues: { ...initCreateTodoDetails, ...(data || {}) },
    enableReinitialize: true,
    validateOnMount: false,
    validationSchema: createTodoSchema,
    onSubmit: handleSubmit,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    formik.submitForm();
    e.preventDefault(); //prevent reloading
    setTimeout(() => {
      !isEdit && formik.resetForm();
    }, 400);
  };

  return (
    <CenterModal open={true} handleClose={handleClose} variant="thin" noPadding>
      <form onSubmit={onSubmit}>
        <Grid container gap={3} px={2} py={1}>
          <Grid item xs={12}>
            <TextField
              placeholder="What is the activity?"
              value={formik.values.activity}
              handleChange={(value) => {
                formik.setFieldValue("activity", value);
              }}
              label="The activity"
              error={formik.errors.activity}
            />
          </Grid>

          <Grid item xs={12} display="flex" alignItems="center" gap={2}>
            <FieldLabel label="Is it done?" />
            <Switch
              value={formik.values.done}
              handleChange={(value) => {
                formik.setFieldValue("done", value);
              }}
            />
          </Grid>

          <Grid item xs={"auto"} display="flex" justifyContent={"center"}>
            <CTAButton
              label={isEdit ? "Save changes" : "Create Todo"}
              type="submit"
              handleClick={() => {}}
              laptopPx={2}
              laptopPy={1}
              mobilePx={1}
              mobilePy={0.5}
              isLoading={formik.isSubmitting}
              loaderColor="white"
              fontSize={12}
              disabled={formik.isSubmitting}
            />
          </Grid>
        </Grid>
      </form>
    </CenterModal>
  );
}
