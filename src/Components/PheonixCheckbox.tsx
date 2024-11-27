import React from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@mui/material";
import themestyle from "../theme";

interface PheonixCheckboxProps extends CheckboxProps {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  sx?: SxProps<Theme>;
}

const PheonixCheckbox: React.FC<PheonixCheckboxProps> = ({
  onChange,
  sx,
  ...props
}) => {
  return (
    <Checkbox
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

export default PheonixCheckbox;
