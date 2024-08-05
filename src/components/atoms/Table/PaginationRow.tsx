import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Pagination, PaginationItem } from "@mui/material";

type Props = {
  numberOfRows: number;
  page: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  rowsPerPage: number;
};

export default function PaginationRow({
  numberOfRows,
  page,
  handleChangePage,
  rowsPerPage = 10,
}: Props) {
  return (
    <Pagination
      count={Math.ceil(numberOfRows / rowsPerPage)}
      page={page + 1}
      onChange={handleChangePage}
      variant="outlined"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          style={{
            borderColor: "#EAECF0",
            borderRadius: "7px",
          }}
          slots={{
            first: KeyboardDoubleArrowLeft,
            last: KeyboardDoubleArrowRight,
          }}
          sx={{
            "&.Mui-selected": {
              borderColor: "#38B58A !important",
              bgcolor: "white !important",
            },
          }}
          {...item}
        />
      )}
      showFirstButton
      showLastButton
      sx={{
        py: 2,
        pr: 2,
        bgcolor: "white",
        display: "flex",
        justifyContent: "flex-end",
      }}
    />
  );
}
