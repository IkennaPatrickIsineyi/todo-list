import { FormErrorText } from "@/components/atoms/FormErrorText";
import { TextField as TextFieldAtom } from "@/components/atoms/TextField";
import { Box } from "@mui/material";
import FieldLabel from "./FieldLabel";

type Props = {
  placeholder?: string;
  handleChange: (value: string) => void;
  value?: string;
  fontSize?: number | string;
  type?: "text" | "number";
  error?: string;
  label?: string;
  disabled?: boolean;
  height?: string;
  bgcolor?: string;
  border?: string;
  borderRadius?: string;
};

export default function TextField({
  placeholder,
  handleChange,
  value = "",
  fontSize = "13px",
  border,
  type = "text",
  error,
  label,
  disabled,
  height,
  bgcolor,
  borderRadius,
}: Props) {
  const notNegative = (value: string) => {
    return;
  };

  const handleValue = (value: string) => {
    if (type !== "number") return handleChange(value);
    if (Number(value) >= 0 || !value) return handleChange(value);
  };

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      {!!label && <FieldLabel label={label} />}

      <TextFieldAtom
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => handleValue(e.currentTarget.value)}
        fullWidth
        disabled={disabled}
        inputProps={{
          maxLength: 200,
          style: {
            fontWeight: 500,
            fontSize,
          },
        }}
        style={{
          width: "100%",
          background: bgcolor || "white",
          border: border || "1px solid #8B84AE",
          borderRadius: borderRadius || "10px",
          lineHeight: "20px",
          height: height || "40px",
          boxShadow: "0px 3.83px 3.83px 0px #5D86C212",
        }}
      />

      {!!error && <FormErrorText text={error} />}
    </Box>
  );
}
