import { SxProps } from "@mui/material";

type PropKeys = {
  container: SxProps;
  modal: SxProps;
};

export const modalStyle = ({
  variant,
  zIndex = 3400,
  fullHeight,
}: {
  variant: "small" | "medium" | "large" | "thin" | "xLarge";
  zIndex?: number;
  fullHeight?: boolean;
}): PropKeys => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    bgcolor: "white",
    my: "auto",
    width:
      variant === "xLarge"
        ? { xs: "calc(100vw - 1px)", sm: "80vw", lg: "90vw" }
        : variant === "large"
        ? { xs: "99vw", sm: "80vw", lg: "800px" }
        : variant === "medium"
        ? { xs: "99vw", sm: "80vw", lg: "600px" }
        : variant === "thin"
        ? { xs: "99vw", sm: "300px", lg: "350px" }
        : { xs: "99vw", sm: "80vw", lg: "500px" },
    borderRadius: "12px",
    [fullHeight ? "height" : "maxHeight"]: "94vh",
    overflowY: "hidden",
    pt: { xs: 1, md: 1 },
    pb: { xs: 4, md: 1 },
    mx: { xs: 2 },
    position: "relative",
  },
  modal: {
    display: "flex",
    alignitems: "center",
    justifyContent: "center",
    zIndex, //3400,
  },
});
