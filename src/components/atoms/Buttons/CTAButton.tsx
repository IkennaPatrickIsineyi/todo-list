import { Button, SxProps } from "@mui/material";
import { ReactNode } from "react";
import ButtonLoader from "../ButtonLoader";

type Props = {
  handleClick: () => void;
  label?: string;
  icon?: ReactNode;
  endIcon?: ReactNode;
  bgcolor?: string;
  textColor?: string;
  isLoading?: boolean;
  loaderColor?: string;
  borderRadius?: string;
  variant?: "text" | "outlined" | "contained";
  border?: string;
  mobilePx?: number;
  mobilePy?: number;
  laptopPx?: number;
  laptopPy?: number;
  fontSize?: number;
  fontWeight?: number;
  disabled?: boolean;
  sx?: SxProps;
  type?: "submit";
};

export default function CTAButton({
  handleClick,
  label,
  icon,
  endIcon,
  bgcolor,
  textColor,
  isLoading,
  loaderColor,
  borderRadius,
  variant = "contained",
  border,
  mobilePx,
  mobilePy,
  laptopPx,
  laptopPy,
  fontSize = 12,
  fontWeight = 500,
  disabled,
  type,
  sx = {},
}: Props) {
  return (
    <Button
      onClick={handleClick}
      variant={variant}
      disabled={!!disabled}
      type={type}
      sx={{
        bgcolor,
        color: textColor,
        borderRadius: { xs: borderRadius || "4px" },
        display: "flex",
        alignItems: "center",
        px: { xs: mobilePx || 1, md: laptopPx || 2 },
        py: { xs: mobilePy || 0.5, md: laptopPy || 1 },
        gap: 1,
        border,
        fontSize: { xs: fontSize },
        fontWeight: { xs: fontWeight },
        ...sx,
      }}
    >
      {icon}
      <ButtonLoader
        inProgress={!!isLoading}
        label={label || ""}
        loaderColor={loaderColor || "white"}
      />
      {endIcon}
    </Button>
  );
}
