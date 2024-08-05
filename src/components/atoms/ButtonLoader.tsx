import { CircularProgress } from "@mui/material";

type Props = {
  inProgress: boolean;
  label: string;
  loaderColor: string;
};

export default function ButtonLoader({
  inProgress,
  label,
  loaderColor,
}: Props) {
  return inProgress ? (
    <CircularProgress size={"1rem"} sx={{ color: loaderColor }} />
  ) : (
    label
  );
}
