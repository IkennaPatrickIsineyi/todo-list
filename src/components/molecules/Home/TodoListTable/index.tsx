import Table, { Column } from "@/components/atoms/Table";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import ActionButton from "./components/ActionButton";
import { TodoTableActionType, TodoTableData } from "@/types/home/index.type";
import TableSkeleton2 from "@/components/atoms/Skeletons/TableSkeleton2";
import { deleteTodo } from "@/actions/todoActions";
import CreateTodoForm from "../CreateTodoForm";
import { useRefetchTodoList } from "@/lib/hooks/home/index.hook";
import TextRenderer from "./components/TextRenderer";

type Props = {
  data?: TodoTableData[];
  isFetching?: boolean;
  total?: number;
  page: number;
  setPage: (page: number) => void;
  rowsPerPage: number;
};

export default function TodoListTable({
  data,
  isFetching,
  total,
  page,
  setPage,
  rowsPerPage,
}: Props) {
  //const [page, setPage] = useState<number>(1);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editId, setEditId] = useState("");

  const { refetchTodoList } = useRefetchTodoList();

  const handleCloseForm = () => {
    setShowEditForm(false);
    setEditId("");
  };

  console.log("total 2", total);

  const handleDelete = async (id: string) => {
    deleteTodo(id).then((i) => refetchTodoList());
  };

  const handleEdit = async (id: string) => {
    setEditId(id);
    setShowEditForm(true);
  };

  const columns: Column[] = [
    /*  {
      id: "id",
      label: "ID",
      minWidth: 170,
      align: "left",
      format: (value) => value?.id || "",
    }, */
    {
      id: "activity",
      label: "Activity",
      minWidth: 200,
      align: "left",
      component: ({ activity }) => <TextRenderer value={activity} />,
    },
    {
      id: "done",
      label: "Done",
      minWidth: 100,
      align: "left",
      component: ({ done }) => <TextRenderer value={(!!done).toString()} />,
    },
    {
      id: "id",
      label: "",
      minWidth: 10,
      component: ({ id }) => (
        <ActionButton type="edit" action={handleEdit} id={id} />
      ),
    },
    {
      id: "id",
      label: "",
      minWidth: 10,
      component: ({ id }) => (
        <ActionButton type="delete" action={handleDelete} id={id} />
      ),
    },
  ];

  const handlePaginate = (page: number) => {
    setPage(page);
  };

  return (
    <Grid container>
      <Grid item xs={12} display="flex" justifyContent={"center"}>
        {!isFetching && !data?.length ? (
          <Typography variant="body12M" textAlign={"center"} py={2}>
            No todo
          </Typography>
        ) : (
          <Table
            paginate
            perPage={rowsPerPage}
            // maxHeight={''}
            bgcolor="white"
            maxHeight="calc(100vh - 170px)"
            columns={columns}
            headLabelColor="primary.800"
            headTextTransform="uppercase"
            headVariant="body5"
            rows={data || []}
            isLoading={isFetching}
            Loader={<TableSkeleton2 rows={3} />}
            totalRows={total || 0}
            handlePaginate={handlePaginate}
          />
        )}
      </Grid>

      {showEditForm && !!editId && (
        <CreateTodoForm id={editId} isEdit handleClose={handleCloseForm} />
      )}
    </Grid>
  );
}
