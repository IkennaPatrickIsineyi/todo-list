import { Typography } from "@mui/material";

type Props = {
  label: string;
};

export default function FieldLabel({ label }: Props) {
  return <Typography variant="body12N">{label}</Typography>;
}
