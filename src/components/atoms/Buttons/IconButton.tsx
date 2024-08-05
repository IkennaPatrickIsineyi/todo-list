import { IconButton as MuiIconButton, SxProps } from "@mui/material";
import { ReactNode } from "react";
import ButtonLoader from "../ButtonLoader";

type Props = {
  handleClick: () => void;
  icon?: ReactNode;
  bgcolor?: string;
  color?: string;
  isLoading?: boolean;
  loaderColor?: string;
  borderRadius?: string;
  border?: string;
  mobilePadding?: number;
  laptopPadding?: number;
  sx?: SxProps;
  type?: "submit";
};

export default function IconButton({
  handleClick,
  icon,
  bgcolor,
  isLoading,
  color,
  loaderColor,
  borderRadius,
  border,
  mobilePadding,
  laptopPadding,
  type,
  sx = {},
}: Props) {
  return (
    <MuiIconButton
      type={type}
      onClick={handleClick}
      sx={{
        bgcolor,
        color,
        borderRadius: { xs: borderRadius || "100%" },
        border,
        p: { xs: mobilePadding, md: laptopPadding },
        ...sx,
      }}
    >
      {!isLoading && icon}
      {isLoading && (
        <ButtonLoader
          inProgress={!!isLoading}
          label={""}
          loaderColor={loaderColor || "white"}
        />
      )}
    </MuiIconButton>
  );
}
