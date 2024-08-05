import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body12L: CSSProperties;
    body12N: CSSProperties;
    body12M: CSSProperties;
    body12B: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body12L?: CSSProperties;
    body12N?: CSSProperties;
    body12M?: CSSProperties;
    body12B?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body12L: true;
    body12N: true;
    body12M: true;
    body12B: true;
  }

  interface TypographyPropsVariantOverrides {
    body12L: true;
    body12N: true;
    body12M: true;
    body12B: true;
  }
}

export const typography = (): TypographyOptions => ({
  body12L: {
    fontSize: 12,
    fontWeight: 400,
  },
  body12N: {
    fontSize: 12,
    fontWeight: 500,
  },
  body12M: {
    fontSize: 12,
    fontWeight: 600,
  },
  body12B: {
    fontSize: 12,
    fontWeight: 700,
  },
  fontFamily: "barlow",
});
