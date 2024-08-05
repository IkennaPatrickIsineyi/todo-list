"use client";

import { typography } from "@/lib/theme/typography";
import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = () =>
  createTheme({
    typography: typography(),
  });

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <ThemeProvider theme={theme()}>{children}</ThemeProvider>;
}
