import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/system";

export const TextField = styled(OutlinedInput)(({ theme }) => {
  return {
    "& .MuiOutlinedInput-input": {
      fontSize: "1rem",
      color: "text.primary",
      fontWeight: 600,
      borderColor: "primary.main",
      "&::placeholder": {
        color: "black.50",
        fontWeight: 400,
        opacity: "50%",
        whiteSpace: "pre-wrap",
        fontSize: "inherit",
        fontFamily: "'barlow', sans-serif",
      },
    },
    "& .MuiInputBase-input::placeholder": {
      whiteSpace: "pre-wrap",
    },
    "& fieldset": { border: "none" },
    borderRadius: "12px",
    borderColor: "primary.main",
    zIndex: 234,
    [theme.breakpoints.down("md")]: {
      height: "50px",
    },
  };
});
