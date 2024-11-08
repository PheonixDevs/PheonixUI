import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { SxProps } from "@mui/material/styles";
import { Theme } from "@mui/material";
import themestyle from "../theme";

interface PheonixButtonProps extends MuiButtonProps {
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  sx?: SxProps<Theme>;
}

const PheonixButton: React.FC<PheonixButtonProps> = ({
  label,
  onClick,
  sx,
  ...props
}) => {
  return (
    <MuiButton
      onClick={onClick}
      variant={props.variant || "outlined"}
      sx={{
        backgroundColor: themestyle.button.color,
        color: themestyle.colors.white,
        padding: themestyle.button.padding,
        width: themestyle.button.width,
        height: themestyle.button.height,
        borderRadius: themestyle.button.borderRadius,
        border: themestyle.button.border,
        ...sx,
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default PheonixButton;
