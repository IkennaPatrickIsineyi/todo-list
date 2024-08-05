import { Button } from "@mui/material";

type Props = {
  handleViewAll: () => void;
  viewAllBtnLabel: string;
};

export default function ViewAllButton({
  handleViewAll,
  viewAllBtnLabel,
}: Props) {
  return (
    <Button
      variant="contained"
      onClick={handleViewAll}
      sx={{
        px: { xs: 0 },
        py: { xs: 1 },
        borderRadius: "8px",
        width: "90%",
        display: "flex",
        alignSelf: "stretch",
        mx: "auto",
        my: 2,
        bgcolor: "white",
        color: "#6F649F",
        border: "0.27px solid #8B84AE",
        fontSize: { xs: 14 },
      }}
    >
      {viewAllBtnLabel}
    </Button>
  );
}
