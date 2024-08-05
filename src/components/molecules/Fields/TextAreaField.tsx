import { TextField } from "@/components/atoms/TextField";
import { Box } from "@mui/material";
import FieldLabel from "./FieldLabel";
import { FormErrorText } from "@/components/atoms/FormErrorText";

type Props = {
  placeholder?: string;
  handleChange: (value: string) => void;
  value?: string;
  rows?: number;
  fontSize?: number | string;
  disabled?: boolean;
  error?: string;
  label?: string;
};

export default function TextAreaField({
  placeholder,
  handleChange,
  value = "",
  rows = 5,
  fontSize = "14px",
  error,
  disabled,
  label,
}: Props) {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      {!!label && <FieldLabel label={label} />}

      <TextField
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.currentTarget.value)}
        multiline
        rows={rows}
        disabled={disabled}
        fullWidth
        inputProps={{
          maxLength: 200,
          style: {
            fontWeight: 400,
            fontSize,
          },
        }}
        style={{
          width: "100%",
          background: "white",
          border: "1px solid #8B84AE",
          borderRadius: "10px",
          lineHeight: "24px",
        }}
        sx={{
          minHeight: { xs: "150px", md: "initial" },
        }}
      />

      {!!error && <FormErrorText text={error} />}
    </Box>
  );
}
