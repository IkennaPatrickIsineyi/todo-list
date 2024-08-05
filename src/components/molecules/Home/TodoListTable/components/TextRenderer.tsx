import { Typography } from "@mui/material";

type Props = {
  value: string;
};

export default function TextRenderer({ value }: Props) {
  return <Typography variant="body12N">{value}</Typography>;
}
