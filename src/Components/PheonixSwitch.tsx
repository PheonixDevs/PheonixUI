import React from "react";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@mui/material";
import themestyle from "../theme";

interface PheonixSwitchProps extends SwitchProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  sx?: SxProps<Theme>;
}

const PheonixSwitch: React.FC<PheonixSwitchProps> = ({ onChange, sx, ...props }) => {
  return (
    <Switch
      onChange={onChange}
      sx={{
        "&.Mui-checked": {
          color: themestyle.colors.primary,
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default PheonixSwitch;