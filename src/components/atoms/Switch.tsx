import { Switch as MuiSwitch, SwitchProps, styled } from "@mui/material";
import { useState } from "react";

type Props = {
  value: boolean;
  handleChange: (value: boolean) => void;
};

const SwitchComponent = styled((props: SwitchProps) => (
  <MuiSwitch
    focusVisibleClassName=".Mui-focusVisible"
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  zIndex: 234,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "white",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "white",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    backgroundColor: "white",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    background: "#E2E4E8",
    opacity: 1,
  },
}));

export default function Switch({ value, handleChange }: Props) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.checked);
  };

  return (
    <SwitchComponent
      // defaultChecked={!!value}
      checked={!!value}
      onChange={onChange}
    />
  );
}
