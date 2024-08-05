"use client";

import Heading from "@/components/molecules/Home/Heading";
import TodoListTable from "@/components/molecules/Home/TodoListTable";
import { useFetchTodoList } from "@/lib/hooks/home/index.hook";
import { TodoTableData } from "@/types/home/index.type";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<TodoTableData[]>();
  const [total, setTotal] = useState(0);

  const {
    data: result,
    isFetching,
    isRefetching,
    status,
    refetch,
  } = useFetchTodoList(page);

  const rowsPerPage = 10;

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  useEffect(() => {
    if (result?.data) {
      //  setIsFetching(false);
      setData(
        result.data.map((i) => {
          return {
            activity: i.text,
            done: i.done,
            id: i.id,
          };
        })
      );
    }

    if (result?.total !== undefined) {
      setTotal(result.total);
    }
  }, [result]);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"flex-start"}
      sx={{
        pt: { xs: 2 },
        height: "calc(100vh - 16px)",
        overflowY: "auto",
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        display="flex"
        flexDirection={"column"}
        gap={2}
        justifyContent={"flex-start"}
      >
        <Heading />

        <TodoListTable
          data={data}
          isFetching={(!data ? isRefetching : false) || status === "pending"}
          page={page}
          total={total}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
        />
      </Grid>
    </Grid>
  );
}
