import { Box, Skeleton, TableBody, TableCell, TableRow } from "@mui/material";

type Props = {
  rows: number;
};

export default function TableSkeleton2({ rows }: Props) {
  return (
    <TableBody>
      {Array.from({ length: rows }).map((i, index) => {
        return (
          <TableRow key={"row-" + index}>
            <TableCell
              align={"center"}
              sx={{
                bgcolor: "inherit",
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Skeleton variant="circular" width={40} height={40} />
                <Box display="flex" flexDirection={"column"} flex={1}>
                  <Skeleton variant="text" sx={{ fontSize: 12, flex: 1 }} />
                  <Skeleton variant="text" sx={{ fontSize: 12, flex: 1 }} />
                </Box>
              </Box>
            </TableCell>

            <TableCell
              align={"center"}
              sx={{
                bgcolor: "inherit",
              }}
            >
              <Skeleton
                variant="text"
                sx={{
                  my: "auto",
                  fontSize: 12,
                  flex: 1,
                }}
              />
            </TableCell>

            <TableCell
              align={"center"}
              sx={{
                bgcolor: "inherit",
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" sx={{ fontSize: 12, flex: 1 }} />
              </Box>
            </TableCell>

            <TableCell
              align={"center"}
              sx={{
                bgcolor: "inherit",
              }}
            >
              <Skeleton
                variant="text"
                sx={{ my: "auto", fontSize: 12, flex: 1 }}
              />
            </TableCell>

            <TableCell
              align={"center"}
              sx={{
                bgcolor: "inherit",
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Skeleton variant="circular" width={15} height={15} />
                <Skeleton variant="text" sx={{ fontSize: 12, flex: 1 }} />
              </Box>
            </TableCell>

            <TableCell
              align={"center"}
              sx={{
                bgcolor: "inherit",
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={1}>
                {Array.from({ length: 5 }).map((i, index) => {
                  return (
                    <Skeleton
                      key={"rating-" + index}
                      variant="circular"
                      width={15}
                      height={15}
                    />
                  );
                })}
              </Box>
            </TableCell>

            <TableCell
              align={"center"}
              sx={{
                bgcolor: "inherit",
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                gap={1}
              >
                <Skeleton
                  variant="text"
                  width={3}
                  sx={{ fontSize: 18, mr: 2 }}
                />
              </Box>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
