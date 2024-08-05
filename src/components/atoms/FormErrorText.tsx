import { Box, Typography } from "@mui/material";

export const FormErrorText = ({ text }: { text: string }) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: "12px", md: "12px" },
        fontWeight: "500",
        wordBreak: "break-all",
        fontFamily: "barlow",
        lineHeight: "20px",
      }}
      color={"red"}
    >
      {text}
    </Typography>
  );
};
