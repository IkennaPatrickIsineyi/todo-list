import { useMemo, useState, ChangeEvent, ReactNode } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PaginationRow from "./PaginationRow";
import ViewAllButton from "./ViewAllButton";
import { TodoTableData, TodoTableIdType } from "@/types/home/index.type";
import { Box, Typography } from "@mui/material";

export interface Column {
  id: TodoTableIdType; //union the id types for every new table
  label: string;
  minWidth?: number;
  maxWidth?: number;
  align?: "left" | "right" | "center";
  component?: (props: any) => ReactNode;
  headComponent?: () => ReactNode;
  format?: (value: any) => any;
}

type Props = {
  columns: Column[];
  rows: TodoTableData[];
  paginate?: boolean;
  viewAllBtnLabel?: string;
  handleViewAll?: () => void;
  maxHeight?: string;
  bgcolor?: string;
  headLabelColor?: string;
  headTextTransform?: "uppercase" | "capitalize" | "lowercase";
  headVariant?: string;
  handleClick?: (id: string) => void;
  Loader?: ReactNode;
  isLoading?: boolean;
  handlePaginate?: (page: number) => void;
  totalRows?: number;
  perPage?: number;
  noContent?: boolean;
  placeholder?: ReactNode;
};

export default function UiTable({
  columns,
  rows,
  paginate,
  maxHeight = "calc(100vh - 185px)",
  bgcolor = "background.paper",
  headLabelColor = "text.primary",
  headTextTransform,
  headVariant = "caption",
  handleClick,
  viewAllBtnLabel,
  handleViewAll,
  isLoading,
  Loader,
  handlePaginate,
  totalRows,
  perPage,
  placeholder,
  noContent,
}: Props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(perPage || 10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
    handlePaginate && handlePaginate(newPage);
  };

  console.log("total", totalRows, rowsPerPage);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", bgcolor: "white" }}>
      <TableContainer
        sx={{
          ...(noContent ? { maxHeight } : { height: maxHeight }),
          scrollbarWidth: "none",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                const X = column?.headComponent && column.headComponent();
                return (
                  <TableCell
                    key={column.id + index}
                    align={column.align}
                    sx={{ bgcolor }}
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                    }}
                  >
                    {X || (
                      <Typography
                        variant={headVariant as "caption"}
                        textTransform={headTextTransform}
                        color={headLabelColor}
                      >
                        {column.label}
                      </Typography>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          {isLoading ? (
            Loader
          ) : noContent ? null : (
            <TableBody>
              {rows
                //.slice(paginateNumbers.start, paginateNumbers.end)
                .map((row, index) => {
                  return (
                    <TableRow
                      onClick={
                        handleClick
                          ? () => {
                              handleClick(row?.id || "");
                            }
                          : undefined
                      }
                      hover
                      role="checkbox"
                      sx={{
                        bgcolor: "white",
                        cursor: handleClick ? "pointer" : "unset",
                        ":hover": {
                          bgcolor: "background.paper",
                        },
                      }}
                      tabIndex={-1}
                      key={"row-" + index}
                    >
                      {columns.map((column, index) => {
                        let value = row[column.id as "id"] as string;
                        column?.format && (value = column.format(row));
                        const X = column?.component && column.component(row);

                        return (
                          <TableCell
                            key={column.id + "-" + index}
                            align={column.align}
                            sx={{
                              bgcolor: "inherit",
                            }}
                          >
                            {X || (
                              <Typography variant="body12L">{value}</Typography>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          )}
        </Table>
      </TableContainer>

      {noContent && <Box height={maxHeight}>{placeholder}</Box>}

      {!isLoading && !!viewAllBtnLabel && !noContent && !!handleViewAll && (
        <ViewAllButton
          handleViewAll={handleViewAll}
          viewAllBtnLabel={viewAllBtnLabel}
        />
      )}

      {!isLoading && !!paginate && !noContent && (
        <PaginationRow
          numberOfRows={totalRows || rows.length}
          page={page}
          handleChangePage={handleChangePage}
          rowsPerPage={rowsPerPage}
        />
      )}
    </Paper>
  );
}
