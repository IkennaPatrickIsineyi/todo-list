import { Box, Modal as MuiModal } from "@mui/material";
import React from "react";
import { modalStyle } from "./style";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  variant?: "small" | "medium" | "large" | "thin" | "xLarge";
  zIndex?: number;
  noPadding?: boolean;
  fullHeight?: boolean;
}

export default function CenterModal({
  open,
  handleClose,
  children,
  variant = "small",
  zIndex,
  noPadding,
  fullHeight,
}: Props) {
  const getModalStyle = modalStyle({ variant, zIndex, fullHeight });

  return (
    <MuiModal open={open} onClose={handleClose} sx={getModalStyle.modal}>
      <Box
        sx={{
          ...getModalStyle.container,
          ...(noPadding ? { px: 0 } : {}),
        }}
      >
        {children}
      </Box>
    </MuiModal>
  );
}
